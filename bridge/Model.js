class Model {
    constructor(color) {
        this.color = color;
    }   

    paint() {
        return `${ this.color }`
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `AUDI has been painted to ${ this.color.get() }`;
    }
}