"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factory_1 = require("./Factory");
const tasks = [
    new Factory_1.personalFactory(),
    new Factory_1.projectFactory(),
    new Factory_1.urgentFactory()
];
tasks.forEach((task) => {
    console.log(task);
});
//# sourceMappingURL=index.js.map