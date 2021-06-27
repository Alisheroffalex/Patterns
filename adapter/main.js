let myCar = new Auto();
const oldEngine = new simpleEngine();

myCar.startEngine(oldEngine);

myCar = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

myCar.startEngine(engineAdapter);