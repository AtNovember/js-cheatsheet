function makeBuffer() { 
  var text = '';
  return function (data) {
    if (arguments.length == 0) { // вызов без аргументов //имитация перегрузки ? =)
      return text;
    }
    text += data;
  }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!