const engine = new Engine();

console.log(engine)


const engineStarter = new StartEngineCommand(engine)
const driver = new Driver(engineStarter);
driver.execute();

console.log(engine)
