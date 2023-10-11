"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullname() {
        return this.firstname + " " + this.lastname;
    }
    doStudentStuffs() {
        console.log("I'm a student");
    }
}
exports.Student = Student;
//# sourceMappingURL=students.js.map