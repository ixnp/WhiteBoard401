// Merge Two Sorted Linked Lists
// Write a function called merge that accepts two sorted Linked Lists and zips them together into one sorted Linked List.

// Be sure to draw pictures on the whiteboard to represent example input. Use psuedo code to engineer any particularly tricky pieces of code.

// Given:

// 8 -> 12 -> 14
// 9 -> 13
// Return:

// 8 -> 9 -> 12 -> 13 -> 14

class LinkedNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  merge(L1, L2) {
    let L3 = new Node(null, null);
    let prev = L3;

    while (L1 != null && L2 != null) {
      if (L1.val > L2.val) {
        prev.next = L1;
        L1 = L1.next
      } else {
        preve.next = L2;
        L2 = L2.next;
      };

      if (L1 === null) {
        prev.next = L2;
      }
      if (L2 === null) {
        prev.next = L2;
      }
      return L3.next;
    }
  }
}