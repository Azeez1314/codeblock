/** Task:
Implement a binary search tree (BST) node class with methods to insert data and search for data. Demonstrate how you would insert values into the tree and then search for a specific value.

Answer:
*/

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      if (data < this.data && this.left) this.left.insert(data);
      else if (data < this.data) this.left = new Node(data);
      else if (data > this.data && this.right) this.right.insert(data);
      else if (data > this.data) this.right = new Node(data);
    }
  
    search(data) {
      if (this.data === data) return this;
      if (this.data < data && this.right) return this.right.search(data);
      else if (this.data > data && this.left) return this.left.search(data);
      return null;
    }
  }
  
  
  // Create a root node with data value 5
  const root = new Node(5);
  
  // Insert some values into the tree
  root.insert(3);
  root.insert(7);
  root.insert(2);
  root.insert(4);
  root.insert(6);
  root.insert(8);
  
  // Search for a value in the tree
  const result = root.search(4);
  
  // Print the data of the found node or null if not found
  console.log(result ? result.data : "Value not found");