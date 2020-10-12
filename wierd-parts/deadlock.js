// https://stackoverflow.com/questions/16530177/javascript-deadlock#

function makeFuture() {
    let resolve;
    let reject;
    let promise = new Promise((d, e) => {
      resolve = d;
      reject = e;
    });
    return [promise, resolve, reject];
  }
  
  class Lock {
    constructor() {
      this.q = [];
      this.running = false;
    }
    async runQueue() {
      if (this.running) return;
      this.running = true;
      while (this.q.length > 0) {
        const { asyncFunction, resolve, reject } = this.q.shift();
        try {
          let result = await asyncFunction();
          resolve(await asyncFunction());
        } catch (error) {
          reject(error);
        }
      }
      this.running = false;
    }
    runTask(asyncFunction) {
      const [promise, resolve, reject] = makeFuture();
      this.q.push({ asyncFunction, resolve, reject });
      this.runQueue();
      return promise;
    }
  }
  
  const dbLock = new Lock();
  
  let taskResultPromise = dbLock.runTask(async () => {
    console.log('about to deadlock');
    let value = await dbLock.runTask(async () => { return 'value'; });
    value //?
    console.log('did not deadlock');
    return value;
  });