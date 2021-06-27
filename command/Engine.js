class Engine {
    constructor() {
        this.state = false
    }

    on() {
        this.state = true
    }

    off() {
        this.state = false
    }
}

class StartEngineCommand {
    constructor(engine) {
        this.engine = engine
    }

    execute() {
        this.engine.on()
    }
}

class StopEngineCommand {
    constructor(engine) {
        this.engine = engine
    }

    execute() {
        this.engine.off()
    }
}
