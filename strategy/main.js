const basicCustomer = new AutoCart(basicStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const proCustomer = new AutoCart(proStrategy);

basicCustomer.setAmount(50000);
console.log(basicCustomer.checkout());

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout());

proCustomer.setAmount(50000);
console.log(proCustomer.checkout());