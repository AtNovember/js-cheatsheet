const Singleton = {
    foo: 123,
    getInstance() { return this; }
}

let obj1 = Singleton.getInstance();
let obj2 = Singleton.getInstance();

obj1.foo = 456; 
// да потому что свойство foo - это свойство самого синглтона, меняется свойство "родителя"

console.log(obj1 === obj2); // true - почему?!
console.log(obj1);
console.log(obj2);