// my realisation json tree data;


class Node {
  constructor(data = {}) {
    this.id = data.id || '000'; // todo: по хорошему, если нет id надо юзать uid библиотеку для генерации
    this.parent = data.parent || null;
    this.title = data.title || '';
    this.text = data.text || '';
    this.children = [];
  }
}

class Tree {
  constructor(data = {}) {
    this.root = [new Node(data)];
  }

  add(nodeData, parent) {
    console.log('add nodeData, parent', {nodeData, parent});
  }

  deepSearch(nodeId, node = this.root) {
    console.log('deepSearch');
    // if(nodeId) {
      node.forEach(node => {
        if (node.id === nodeId) {
          console.log('we get it', node);
          return node;
        } else {
          console.log('search in children', node.children);
          if (node.children.length !== 0) { 
            this.deepSearch(nodeId, node.children);
          }
        }
      });
    // }
  }

}

const tree = new Tree();
tree.deepSearch("000");
