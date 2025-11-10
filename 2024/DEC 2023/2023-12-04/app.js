/** 
Single linked lists usually have the following functionalities:

*/

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertHead(data) {
      this.head = new Node(data, this.head);
    }
  
    // ... other methods ...
  
    forEach(fn) {
      let node = this.head;
      let index = 0;
      while (node) {
        fn(node, index);
        node = node.next;
        index++;
      }
    }
  
    *[Symbol.iterator]() {
      let node = this.head;
      while (node) {
        yield node;
        node = node.next;
      }
    }
  }
  
  // Example usage
  const chain = new LinkedList();
  chain.insertHead(1);
  chain.insertHead(2);
  chain.forEach((node, index) => (node.data = node.data + index));
  
  for (let node of chain) {
    console.log(node.data);
  }
  