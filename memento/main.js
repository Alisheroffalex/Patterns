const careTaker = new CareTaker();

careTaker.addMemento(creater.save('Hello'))
careTaker.addMemento(creater.save('Hello ww'))
careTaker.addMemento(creater.save('Hello world'))

console.log(careTaker.getMemento(1));