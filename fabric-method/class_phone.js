class Phone {
    constructor(model, OS, year, camera, screen, CPU) {
        this.model = model
        this.OS = OS
        this.year = year
        this.camera = camera
        this.screen = screen
        this.CPU = CPU
    }
}


class PhoneFactory {
    constructor() {
    }

    create(model) {
        if(model === 'Galaxy S20')
            return new Phone('Samsung Galaxy S20', 'Android', 2020, 128, 'LED', 8)
        else if(model === 'Iphone 12')
            return new Phone('Iphone 12 PRO MAX', 'IOS', 2019, 256, 'LED', 32)
    }
}