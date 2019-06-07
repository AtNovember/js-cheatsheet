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


function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  var node = new Node(data);
  this._root = node;
}

Tree.prototype.traverseDF = function(callback) {
  // это рекурсивная и мгновенно вызываемая функция
  (function recurse(currentNode) {
    // шаг 2
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      // шаг 3
      recurse(currentNode.children[i]);
    }
    // шаг 4
    callback(currentNode);
    // шаг 1
  })(this._root);

};