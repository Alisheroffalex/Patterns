const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const audi2 = factory.create('Audi');

console.log(factory.getAll());