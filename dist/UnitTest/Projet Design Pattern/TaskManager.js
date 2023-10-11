"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Tasks {
    constructor() {
        this.tasks = [];
    }
    //Permet l'ajout de(s) tache(s) dans la liste "Task"
    addTask(task) {
        this.tasks.push(task);
    }
}
exports.Task = new Tasks();
//# sourceMappingURL=TaskManager.js.map