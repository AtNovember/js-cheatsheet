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
  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // удаление из головы списка
  removeFromHead() {
    if (this.length === 0) return undefined;

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  // поиск значения
  find(value) {
    let findNode = this.head;

    while(thisNode) {
      if (thisNode.value === value) {
        return thisNode;
      }
      thisMode = thisNode.next;
    }
    return thisNode;
  }

  // удаление значения
  remove(value) {
    if (this.length === 0) return undefined;
    if (this.head.value === value) {
      this.removeFromHead();
      return this;
    }

    let previousNode = this.head;
    let thisMode = previousNode.next;

    while(thisNode) {
      if (thisNode.value === value) break;
      previousNode = this.thisNode;
      thisNode = thisNode.next;
    }

    if (thisNode === null) return undefined;

    previousNode.next = thisNode.next;
    this.length--;
    return this;
  }
}

const l = new LinkedList(3);

console.log('new list', l.head, l.length);