class Cart {
    constructor() {
        if (!Cart.instance) {
            Cart.instance = this
        }
        this.products = [];
        return Cart.instance;
    }

    add(item) {
        this.products.push(item);
    }

    items() {
        return this.products;
    }
}