class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  push(node) {
    if(!this.head) { 
      this.head = node;
      return;
    }

    let currentNode = this.head;

    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  pop() {

  }

  size() {

  }

  clear() {
    
  }
}


const billy = new Node(1);
console.log('BILLY', billy);

const ed = new Node(2);
console.log('ED', ed);

// billy.next = ed;

const classroom = new LinkedList();
classroom.push(billy);
classroom.push(ed);
console.log('CLASSROOM', classroom);