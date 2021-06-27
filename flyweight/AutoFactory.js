class AutoFactory {
    constructor(name) {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if (model) return model;
        this.models[name] = new Car(model);
        return this.models[name];
    }

    getAll() {
        console.table(this.models);
    }
}