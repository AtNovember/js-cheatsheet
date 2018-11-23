var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}, {
  name: "Сергей",
  surname: 'Медведев',
  age: 50
}];

// // по полю name (Вася, Маша, Петя)
// var res = users.sort(function (a, b) { // что за магиятут происходит?
//   return a.age > b.age ? 1 : -1;
// });

var res = users.sort(byField('age'));

function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}



console.log('result', res);