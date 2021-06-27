class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments
            .map(item => item.getPrice())
            .reduce((a,b) => a + b);
    }
}