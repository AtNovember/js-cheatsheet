const arr = [12, 99, 37];

// создаем сущность списка:
const list = {
  head: {
    value: 12,
    next: {
      value: 99,
      next: {
        value: 37,
        next: null
      }
    }
  },
};

// создаем класс, который создает и модифицирует списки
class LinkedList {
  // создание связного списка с 1 элементом
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.length = 1;
  }

  // добавление в голову списка:
  // addToHead(value)
}

const l = new LinkedList(3);

console.log('new list', l.head, l.length);