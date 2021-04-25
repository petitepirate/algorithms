class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root) {
      this.root = new Node(val)
      return (this)
    }
      let currNode = this.root
    
      while(currNode){
        if(currNode.val === val) throw Error(`value already exists`)
        if(val > currNode.val && currNode.right){
          currNode = currNode.right
        } else if(val > currNode.val && !currNode.right){
          currNode.right = new Node(val)
          return (this)
        } else if(val < currNode.val && currNode.left){
          currNode = currNode.left
        } else {
          currNode.left = new Node(val)
          return (this)
        }
      }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(!this.root){
      this.root = new Node(val)
      return this
    }
    function traverse(val,node=null){
      if(node){
        if(val > node.val) {
          if(node.right) {
            return traverse(val,node.right)
          } else {
            node.right = new Node(val)
          }
        }
        if(val < node.val){
          if(node.left) {
            return traverse(val,node.left)
          } else {
            node.left = new Node(val)
          }
        }
      }
    }
    traverse(val,this.root)
    return (this)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return undefined
    let currNode = this.root
    while(currNode){
      if(val === currNode.val) return currNode
      currNode = (val > currNode.val) ? currNode.right : currNode.left
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function traverse(val,node=null){
      if(node){
        if(val > node.val) return traverse(val,node.right)
        if(val < node.val) return traverse(val,node.left)
        if(val === node.val) return node
      }
      return undefined
    }
    let currNode = traverse(val,this.root)
    return currNode
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    function traverse(node,arr = []){
      arr.push(node.val)
      if(node.left) traverse(node.left,arr)
      if(node.right) traverse(node.right,arr)
      return arr
    }
    return traverse(this.root)
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    function traverse(node,arr = []){
      if(node.left) traverse(node.left,arr)
      arr.push(node.val)
      if(node.right) traverse(node.right,arr)
      return arr
    }
    return traverse(this.root)
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    function traverse(node,arr = []){
      if(node.left) traverse(node.left,arr)
      if(node.right) traverse(node.right,arr)
      arr.push(node.val)
      return arr
    }
    return traverse(this.root)
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = [this.root];
    let returnData = [];

    while (arr.length) {
      let currNode = arr.shift();
      returnData.push(currNode.val);
      if (currNode.left) {
        arr.push(currNode.left);
      }
      if (currNode.right) {
        arr.push(currNode.right);
      }
    }
    return returnData;
  }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
