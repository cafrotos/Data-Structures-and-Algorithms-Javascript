let NodeLinklist = require('./NodeLinklist');
let Student = require('./Student');
let lodash = require('lodash');

class StudentLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Hàm này chạy như sau:
   *  -Kiểm tra đã có linklist đã có head hay chưa(tức là đã có phần tử nào hay chưa)?
   *    -Nếu chưa có sẽ tạo 1 node mới và gắn vùng nhớ vào biến head;
   *    -Nếu đã có head thì kiểm tra tiếp đã có tail hay chưa?
   *      -Nếu chưa có tail(tức là list bây giờ mới chỉ có 1 phần tử là head) thì tạo 1 node mới và gắn biến tail vào vùng nhớ này
   *        đồng thời gắn kết tail và head lại(nối 2 node lại) bằng cách head.setNextNode(this.tail);
   *      -Nếu đã có tail(tức là linklist bây giờ có 2 phần tử trở lên, head là phần tử đầu, tail là phần tử cuối) thì ta tạo 1 node mới 
   *        sau đó cho tail trỏ tới vùng nhớ của biến này(tail.setNextNode(newNode)) và gắn tail = vùng nhớ của biến này(tail = newNode).
   * @param {Student} data 
   */
  pushBack(data) {
    if (this.head == null) {
      let newNode = new NodeLinklist(data);
      this.head = newNode;
    }
    else {
      if (this.tail == null) {
        let newNode = new NodeLinklist(data);
        this.tail = newNode;
        this.head.setNextNode(this.tail);
      }
      else {
        let newNode = new NodeLinklist(data);
        this.tail.setNextNode(newNode);
        this.tail = newNode;
      }
    }
  }

  /**
   * Hàm này chạy như sau:
   *  -Tạo 1 node mới
   *  -Set node tiếp theo là head
   *  -Kiểm tra tail ?
   *    -Nếu chưa có tail(tức là list trước khi addFirst() chỉ có 1 phần tử) ta tiến hành gán tail = head 
   *      (do addFrist() nên hiện tại node đầu phải là node vừa tạo, các node có sẵn bị đẩy về sau)
   *    -Nếu đã có tail rồi thì k phải làm gì nữa.
   * @param {Student} data 
   */
  addFirst(data) {
    let newNode = new NodeLinklist(data);
    newNode.setNextNode(this.head);

    if (this.tail == null) {
      this.tail = this.head;
    }

    this.head = newNode;
  }

  remove(data) {
    if (this.head == null) {
      console.log("List rỗng");
      return false;
    }

    //lodash là 1 công cụ về kiểu dữ liệu trong javascript, hàm trong if có nhiệm vụ kiểm tra 2 object có giống nhau về mặt giá trị hay không.
    if (lodash.isEqual(data, this.head.getData())) {
      this.head = this.head.getNextNode();
      return true;
    }

    let headList = this.head;
    let nextNode = headList.getNextNode();

    // Điều kiện như sau: Khi nào mà headList chưa phải là null thì tiếp tục chạy.
    while (nextNode) {
      let nodeData = nextNode.getData();

      if (lodash.isEqual(data, nodeData)) {
        headList.setNextNode(nextNode.getNextNode());
        return true;
      }
      else {
        headList = nextNode;
        nextNode = nextNode.getNextNode();
      }
    }

    return false;
  }

  removeGirlStudent() {
    if (this.head == null) {
      console.log("List rỗng");
      return;
    }

    if (!this.head.getData().getIsMale()) {
      console.log("=====>", this.head.getData())
      this.head = this.head.getNextNode();

      console.log("=====>", this.head.getData())
    }

    let headList = this.head;
    let nextNode = headList.getNextNode();

    while (nextNode) {
      let nodeData = nextNode.getData();

      if (!nodeData.getIsMale()) {
        headList.setNextNode(nextNode.getNextNode());
      }
      headList = nextNode;
      nextNode = nextNode.getNextNode();
    }

    return false;
  }

  findOne(data) {
    let headList = this.head;
    while (headList) {
      let nodeData = headList.getData();
      if (lodash.isEqual(data, nodeData)) {
        return true;
      }
    }
    return false;
  }

  print() {
    let headList = this.head
    let id = 0;
    while (headList) {
      console.log("Student " + id++ + ": ");
      console.log(headList.getData());
      console.log()
      headList = headList.getNextNode();
    }
  }
}

let std1 = new Student("Phuong", 20, "B5 Nguyen Co Thach", true);
let std4 = new Student("Phuong", 17, "Kien Xuong - Thai Binh", true);
let std2 = new Student("Hanh", 20, "199 Tran Quoc Hoan", false);
let std3 = new Student("Hanh", 17, "Xuan Truong - Nam Dinh", false);

let listStudent = new StudentLinklist();

listStudent.pushBack(std1);
listStudent.addFirst(std2);
listStudent.pushBack(std3);
listStudent.pushBack(std4);

listStudent.remove(std1);

listStudent.pushBack(std1);

listStudent.removeGirlStudent()

listStudent.print()