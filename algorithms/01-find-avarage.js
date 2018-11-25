// допустим дан массив
let grades = [1,2,3,4,5,6,7, 100];

// способ 1, c помощью reduce:
function getAverage1(grades) {
  return grades.reduce((a, b) => { a + b }) / grades.length;
}

// способ 2, с помощью eval:
function getAverage2(grades) {
  return eval(grades.join('+')) / grades.length;
}

// способ 3, с помощью прототипа: 
Array.prototype.sum = function () {
  // тут вопрос - а разве нам в функциб не надо передавать массив, который хотим посчитать?
  return this.reduce((a, b) => a + b);
}

grades.sum() / grades.length;

// способ 4, 
// по сути отличается от 1 способа только формой записи, 
// что мы записываем не функцию, а переменную с функцией
const average = arr => arr.reduce((sum, el) => sum + el, 0);
average(grades);