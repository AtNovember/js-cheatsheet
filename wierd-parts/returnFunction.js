// function makeCounter() {
//     var currentCount = 1; 
  
//     return function() { // (**)
//       // почему это значение сохраняется при следующем вызове?
//       return currentCount++; 
//     };
//   }
  
//   var counter = makeCounter(); 

//   console.log(counter()); // 1
//   console.log(counter()); // 2
//   console.log(counter()); // 3