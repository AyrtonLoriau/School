"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urgentTasks = exports.personalTasks = exports.projectTasks = exports.urgentFactory = exports.personalFactory = exports.projectFactory = void 0;
class projectFactory {
    create() {
        return new projectTasks();
    }
}
exports.projectFactory = projectFactory;
class personalFactory {
    create() {
        return new personalTasks();
    }
}
exports.personalFactory = personalFactory;
class urgentFactory {
    create() {
        return new urgentTasks();
    }
}
exports.urgentFactory = urgentFactory;
class projectTasks {
    run() {
        return '{result of the projectTasks}';
    }
}
exports.projectTasks = projectTasks;
class personalTasks {
    run() {
        return '{result of the personalTasks}';
    }
}
exports.personalTasks = personalTasks;
class urgentTasks {
    run() {
        return '{result of the urgentTasks}';
    }
}
exports.urgentTasks = urgentTasks;
//# sourceMappingURL=Factory.js.map