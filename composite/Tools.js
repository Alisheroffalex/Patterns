class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(222);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName("Body");
        this.setPrice(500);
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Tools');
        this.setPrice(500);
    }
}