'use strict';

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class List {
  constructor() {
    this.root = null;
  }


  contains(list, val) {
    let current = root;
    while (current.next != null) {
      if (current.val === val) {
        return;
      }
    }
    return false;
  }
}