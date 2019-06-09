// https://www.internet-technologies.ru/articles/strukturirovanie-dannyh-s-pomoschyu-javascript-derevo.html

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

// поиск в глубину:
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

// поиск в ширину:
Tree.prototype.traverseBF = function (callback) {
  var queue = new Queue();

  queue.enqueue(this._root);

  currentTree = queue.dequeue();

  while (currentTree) {
    for (var i = 0, length = currentTree.children.length; i < length; i++) {
      queue.enqueue(currentTree.children[i]);
    }

    callback(currentTree);
    currentTree = queue.dequeue();
  }
};

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback);
};

// добавление узла в деево:
Tree.prototype.add = function (data, toData, traversal) {
  var child = new Node(data),
    parent = null,
    callback = function (node) {
      if (node.data === toData) {
        parent = node;
      }
    };

  this.contains(callback, traversal);

  if (parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('Cannot add node to a non-existent parent.');
  }
};



Tree.prototype.remove = function (data, fromData, traversal) {
  var tree = this,
    parent = null,
    childToRemove = null,
    index;

  var callback = function (node) {
    if (node.data === fromData) {
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if (parent) {
    index = findIndex(parent.children, data);

    if (index === undefined) {
      throw new Error('Node to remove does not exist.');
    } else {
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
    throw new Error('Parent does not exist.');
  }

  return childToRemove;
};

function findIndex(arr, data) {
  var index;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].data === data) {
      index = i;
    }
  }

  return index;
}



// заполняем дерево без спец. метода
var tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];


// заполняем делево со спец. методом add
var tree = new Tree('CEO');

tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
tree.add('VP of Sadness', 'CEO', tree.traverseBF);

tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);


tree.traverseDF(function (node) {
  console.log(node.data)
});