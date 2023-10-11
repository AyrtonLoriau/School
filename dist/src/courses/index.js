"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./students");
const worker_1 = require("./worker");
const observeur_1 = require("./observeur");
class StudentAdapter {
    constructor(student) {
        this.student = student;
    }
    getUsername() {
        return this.student.getFullname();
    }
    login() {
        console.log("Im an adapted student");
    }
    notify(news) {
        console.log(news);
    }
}
const jhon = new students_1.Student("Mohamed", "U");
const users = [new worker_1.Workers("abc123"),
    new worker_1.Workers("fromage"),
    new worker_1.Workers("test"),
    new worker_1.Administrateur("abc123"),
    new StudentAdapter(jhon)];
users.forEach((user) => {
    user.login();
    observeur_1.UnionPublisher.addSubscriber(user);
});
observeur_1.UnionPublisher.notify("Je suis un article");
//# sourceMappingURL=index.js.map