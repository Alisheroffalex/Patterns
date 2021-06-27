const mediator = new Dealer();

const alex = new Customer('Alex', mediator);

alex.makeOrder('Tesla', "With autopilot");

console.log(mediator.customers)