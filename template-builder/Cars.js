class BwmBuilder extends Builder {
    addEngine() {
        console.log('BMW engine added');
    }

    installChassis() {
        console.log('BMW chassis installed');
    }

    addElectronic() {
        console.log('BMW electro added');
    }

    collectAccessories() {
        console.log('BMW accessories collected');
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('Tesla engine added');
    }

    installChassis() {
        console.log('Tesla chassis installed');
    }

    addElectronic() {
        console.log('Tesla electro added');
    }

    collectAccessories() {
        console.log('Tesla accessories collected');
    }
}