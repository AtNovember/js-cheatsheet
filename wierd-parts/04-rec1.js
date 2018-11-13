// recursion ex1;
// https://learn.javascript.ru/recursion

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
  
  console.log( factorial(5) ); // 120