class NodeLinklist {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  getNextNode() {
    return this.next;
  }

  setData(data) {
    this.data = data;
  }

  setNextNode(nextNode) {
    this.next = nextNode;
  }
}

module.exports = NodeLinklist