// Node
//  data — здесь хранятся значения;
//  parent — указывает на родительский элемент узла;
//  children — указывает на следующий узел в списке.
//
// Tree
//  _root — указывает на корневой узел дерева;
//  traverseDF(callback) — проходит узлы дерева с помощью метода DFS;
//  traverseBF(callback) — проходит узлы дерева с помощью метода BFS;
//  contains(data, traversal) — ищет узел дерева;
//  add(data, toData, traverse) — добавляет узел к дереву;
//  remove(child, parent) — удаляет узел дерева.


class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

class Tree {
  constructor(data) {
    const node = new Node(data);
    this._root = node;
  } 

  contains(callback, traversal) {
    traversal.call(this, callback);
  }

  add(data, toData, traversal) {
    const child = new Node(data);
    const parent = null;
    const callback = (node) => {
      if(node.data === toData) {
        parent = node;
      }
    }

    this.contains(callback, traversal);

    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }
}


var tree = new Tree('CEO');

tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
tree.add('VP of Sadness', 'CEO', tree.traverseBF);

tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);

console.log('tree', tree);