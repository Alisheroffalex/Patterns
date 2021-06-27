class simpleEngine {
    simpleInterface() {
        console.log('Simple Engine. Pr-pr-pr');
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log('EngineV8. Whom-Whom-Whom');
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
}