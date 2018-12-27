class CafrotosNode {
  constructor() {
    this.data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  getNextNode() {
    return this.next;
  }

  setNextNode(nextNode) {
    this.next = nextNode;
  }

  setData(data) {
    this.data = data;
  }
}

class CafrotosLinkList {
  constructor() {
    this.head = null;
  }

  pushBack(data) {
    if (this.head == null) {
      let newNode = new CafrotosNode();
      newNode.setData(data);
      this.head = newNode;
    }
    else {
      let oldNode = this.head;
      while (this.head.getNextNode() !== null) {
        this.head = this.head.getNextNode();
      }
      let newNode = new CafrotosNode();
      newNode.setData(data);
      this.head.setNextNode(newNode);
      this.head = oldNode;
    }
  }

  insertFirst(data) {
    let newNode = new CafrotosNode();
    newNode.setData(data);
    newNode.setNextNode(this.head);
    this.head = newNode;
  }

  search(data) {
    let headLink = this.head;
    let index = 0;
    while (headLink) {
      if (headLink.getData() === data) {
        console.log("Tìm thấy rồi: ", index);
        return
      }
      index++;
      headLink = headLink.getNextNode();
    }
    console.log("Không tìm thấy!");
    return
  }

  delete(data) {
    let oldHead = this.head;
    if(this.head == null) {
      console.log("List rỗng");
      return;
    }
    if(this.head.getData() === data) {
      this.head = this.head.getNextNode();
      return;
    }
    let next = this.head.getNextNode();
    while(next) {
      if(next.getData() === data) {
        this.head.setNextNode(next.getNextNode());
        next = null;
        this.head = oldHead;
        return;
      }
      next = next.getNextNode();
    }
    return;
  }

  print() {
    let headLink = this.head;
    while (headLink) {
      console.log(headLink.getData());
      headLink = headLink.getNextNode();
    }
    console.log();
  }
}

class CafrotosStack {
  constructor() {
    this.stack = null;
  }

  addOn() {
    this.blurOn();
  }

  blurOn() {
    this.blabla()
  }

  blabla() {

  }
}

let test = new CafrotosStack();

test.addOn()







