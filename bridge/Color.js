class Color {
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}


class BlackColor extends Color {
    constructor() {
        super("dark-color");
    }
}