class CareTaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento)
    }

    getMemento(index) {
        return this.values[index];
    }
}