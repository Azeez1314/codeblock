/** Task:
For a given tree, return the width of each level.

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
  }
  
  function treeWidths(root) {
    const queue = [root, "reset"];
    const counters = [0];
  
    while (queue.length > 1) {
      const node = queue.shift();
  
      if (node === "reset") {
        counters.push(0);
        queue.push("reset");
      } else {
        queue.push(...node.children);
        counters[counters.length - 1]++;
      }
    }
  
    return counters;
  }
  
  // Example usage
  const root = new Node(1);
  root.add(2);
  root.add(3);
  root.children[1].add(4);
  
  console.log(treeWidths(root)); // Output: [1, 2, 1]