'use strict';

class ListNode {
  constructor(value, next) {
      this.value = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.root = null;
  }

  static fromArray(items) {
   
 
    let n6 = new ListNode(6);
    let n9 = new ListNode(9);
    let n10 = new ListNode(10);
    let n12 = new ListNode(12);
    
    let first = n6;
    let n6 = n9;
    let n9 = n10;
    let n10 = n12;
    let n12 = last;
    let last = null;

    let previousNode = null
    for (var i = items.length - 1; i >= 0; i--) {
    }
    let node = ListNode(vale);
    let last = this.root;
    this.root = node; 

    // set the root to point to the last node added at the front of the chain.
  }

  // you get this method for free.
  toString() {
    let result = 'root';
    let current = this.root;
    while(current) {
      result += ' -> ' + current.value;
      current = current.next;
    }
    return result + ' -> null';
  }
  // returns if list is empty
  isEmpty() {
    return this.root === null;
  }

  size() {
    let count = 0;
    let current = this.root;
    while(current !== null){
      count ++;
      current = current.next;
    }
  }

  append(value) {
  }

  prepend(value) {
  node.next = this.root;
  this.root = node;
  }

  remove(value) {
    // rewrite the root node if the value is at the front.

    // start at the front
    // look for a node that points to the node we want to remove.

    // save the result
    // make the current node point to the node after the node we're removing
  }

  find(value) {
  }

  hasCycle() {
  }

  reverse() {
  }

  getMiddle(list) {
  }

  getNthFromLast(n) {
    // make two pointers and start them at the front.

    // move the offset pointer N nodes forward

    // now move both nodes forward simultaneously.
    // When the offset node hits the end of the list
    // the nBehind node will be N nodes from the end of the list.
  }

  getLast() {
    return this.getNthFromLast(0);
  }
  getSecondFromLast() {
    return this.getNthFromLast(1);
  }
  getThirdFromLast() {
    return this.getNthFromLast(2);
  }

  getNth(n) {
    // step forward N times.
  }

  getFirst() {
  }

  getSecond() {
  }

  getThird() {
  }

  forEach(cb) {
  }

  map(cb) {
  }

  filter(cb) {
  }

  reduce(cb, initial) {
  }
}

module.exports = {LinkedList, ListNode}