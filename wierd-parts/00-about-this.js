const a = {
    a: 'a'
  };

  const obj = {
    getThis: () => this,
    getThis2 () {
      return this;
    }
  };

  obj.getThis3 = obj.getThis.bind(obj);
  obj.getThis4 = obj.getThis2.bind(obj);
  
  const answers = [
    obj.getThis(),        // {}
    obj.getThis.call(a),  // {}
    obj.getThis2(),       // { getThis: () => {}, getThis2: () => {} ... }
    obj.getThis2.call(a), // { a: 'a'}
    obj.getThis3(),       // {}
    obj.getThis3.call(a), // {}
    obj.getThis4(),       // { getThis: () => {}, getThis2: () => {} ... }
    obj.getThis4.call(a)  // { getThis: () => {}, getThis2: () => {} ... }
  ];

answers.forEach((item, i) => {
    console.log('answer', i + 1, item);
})