
class Node {
  constructor(ssn, age, name) {
    this.ssn  = ssn;   
    this.age  = age;
    this.name = name;
    this.next = null; 
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }
  append(ssn, age, name) {
    const newNode = new Node(ssn, age, name);

    if (this.head === null) {
      this.head = newNode;
      return;
    }


    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  toArray() {
    const result = [];
    let current  = this.head;
    while (current !== null) {
      result.push({ ssn: current.ssn, name: current.name });
      current = current.next;
    }
    return result;
  }
}

// Merge Function

function mergeSortedLists(l1, l2) {
  const dummy = new Node(0, 0, "dummy");
  let current  = dummy; 

  let p1 = l1.head; 
  let p2 = l2.head; 

  while (p1 !== null && p2 !== null) {
    if (p1.ssn <= p2.ssn) {
      current.next = p1;   
      p1 = p1.next;      
    } else {
      current.next = p2;  
      p2 = p2.next;      
    }
    current = current.next; 
  }

  current.next = p1 !== null ? p1 : p2;

  const merged = new LinkedList();
  merged.head  = dummy.next;
  return merged;
}

module.exports = { Node, LinkedList, mergeSortedLists };