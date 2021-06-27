class Dealer {
    constructor() {
        this.customers = [];
    }

    makeOrder(customer, auto, info) {
        console.log(`Order name: ${ customer.getName() }. Order auto is ${ auto }`);
        console.log(`Additional info: ${ info }`);
        this.addCustomerList(customer.getName());
    }

    addCustomerList(name) {
        this.customers.push(name);
    }
    
}