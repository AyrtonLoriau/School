"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionPublisher = void 0;
class Publisher {
    constructor() {
        this.subscriber = [];
    }
    addSubscriber(subscriber) {
        this.subscriber.push(subscriber);
    }
    notify(news) {
        this.subscriber.forEach((subscriber) => subscriber.notify(news));
    }
}
exports.UnionPublisher = new Publisher();
// class UnionSubscriber implements Subscriber {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     notify(news: string): void {
//         console.log(`${this.name} receive ${news}`);
//     }
// }
// const publisher = new Publisher();
// publisher.addSubscriber(new UnionSubscriber("Ben"));
// publisher.addSubscriber(new UnionSubscriber("Paul"));
// publisher.notify('zeub');
//# sourceMappingURL=observeur.js.map