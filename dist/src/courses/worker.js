"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrateur = exports.Workers = void 0;
class Workers {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    ;
    login() {
        console.log("I'm doing User login stuff");
    }
    ;
    notify(news) {
        console.log(news);
    }
}
exports.Workers = Workers;
class Administrateur {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    ;
    login() {
        console.log("I'm doing Admin login stuff");
    }
    ;
    changeUsername(user, nextUsername) {
        user.username = nextUsername;
    }
    notify(news) {
        console.log(news);
    }
}
exports.Administrateur = Administrateur;
//# sourceMappingURL=worker.js.map