class Student {
  constructor(name, grade, address, isMale) {
    this.name = name;
    this.grade = grade;
    this.address = address;
    this.isMale = isMale;
  }

  getName() {
    return this.name;
  }

  getGrade() {
    return this.grade;
  }

  getAddress() {
    return this.address;
  }

  setName(name) {
    this.name = name;
  }

  setGrade(grade) {
    this.grade = grade;
  }

  setAddress(address) {
    this.address = address;
  }

  getIsMale() {
    return this.isMale;
  }
}

module.exports = Student;