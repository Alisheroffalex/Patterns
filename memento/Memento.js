class Memento {
    constructor(value) {
        this.value = value
    }
}

const creater = {
    save: value => new Memento(value),
    restore: memento => memento.value
}