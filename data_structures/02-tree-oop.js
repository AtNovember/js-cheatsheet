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
  constructor();
}