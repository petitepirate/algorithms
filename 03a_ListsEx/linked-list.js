/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)

    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    if(this.length === 0){
      this.tail = newNode
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let returnVal;
    while(currNode.next){
      if(currNode.next.next){
        currNode = currNode.next
      } else {
        returnVal = currNode.next.val
        currNode.next = null
        this.tail = currNode
      }
    }
    if(this.length === 1){
      returnVal = currNode.val
      this.head = null
      this.tail = null
    }
    this.length--;
    return returnVal
  }

  /** shift(): return & remove first item. */

  shift() {
    let returnVal = this.head.val
    
    if(!this.head.next){
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
    }
    this.length--;
    return returnVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let currNode = this.head
    while(count !== idx){
      currNode = currNode.next
      if(!currNode) throw Error('invalid idx')
      count++
    }
    
    return currNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    let currNode = this.head
    while(count !== idx){
      currNode = currNode.next
      if(!currNode) throw Error('invalid idx')
      count++
    }

    currNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let count = 1;
    let currNode = this.head
    if(idx !== 0){
      while(count !== idx){
        currNode = currNode.next
        if(!currNode) throw Error('invalid idx')
        count++
      }
    } else if(this.length === 0) {
      this.push(val)
      console.log(this.head,this.tail)
      return
    }
    const newNode = new Node(val)
    newNode.next = currNode.next
    if(!currNode.next){
      this.tail = newNode
    }
    currNode.next = newNode
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
