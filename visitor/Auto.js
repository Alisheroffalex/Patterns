class Auto {
    accept(visitor) {
        visitor(this)
    }
}

class Bmw extends Auto {
    info() {
        console.log('This car is BMW')
    }
}

class Tesla extends Auto {
    info() {
        console.log('This car is Tesla')
    }
}

class Lada extends Auto {
    info() {
        console.log('This car is Lada')
    }
}