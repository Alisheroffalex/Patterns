class Acer {
    constructor(name, color, type, memory) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.memory = memory;
    }

    produce() {
        return new Acer(this.name, this.color, this.type, this.memory);
    }
}