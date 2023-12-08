/** Task:
Trees usually have the following functionalities:

Answer:
*/

class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    add(data) {
      this.children.push(new Node(data));
    }
  
  remove(data) {
  this.children = this.children.filter(node => {
  return node.data !== data;
  });
  }
  }
  
  class Tree {
  constructor() {
  this.root = null;
  }
  
  traverseBF(fn) {
  const queue = [this.root];
  while (queue.length) {
  const node = queue.shift();
  queue.push(...node.children);
  fn(node);
  }
  }
  
  traverseDF(fn) {
  const stack = [this.root];
  while (stack.length) {
  const node = stack.shift();
  stack.unshift(...node.children);
  fn(node);
  }
  }
  }
  
  // Example usage
  const root = new Node(1);
  root.add(2);
  console.log(root.data);
  console.log(root.children[0].data);
  root.remove(2);
  console.log(root.children.length);
  
  const tree = new Tree();
  tree.root = new Node(1);
  tree.root.add(2);
  tree.root.add(3);
  tree.root.children[0].add(4);
  
  const numbersBF = [];
  tree.traverseBF(node => numbersBF.push(node.data));
  console.log(numbersBF);
  
  const numbersDF = [];
  tree.traverseDF(node => numbersDF.push(node.data));
  console.log(numbersDF);
  
  