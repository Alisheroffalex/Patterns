const myOrder = new Order()

console.log(myOrder.state.nextState);

myOrder.nextState()
console.log(myOrder.state.name);

myOrder.nextState()
console.log(myOrder.state.name);