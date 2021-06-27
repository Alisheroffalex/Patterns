class CarAccess {
    open() {
        console.log('The door was opened');
    }

    close() {
        console.log('The door was closed');
    }
}

class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if(this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied');
        }
    }

    authenticate(password) {
        return password === 'ilon'
    }

    close() {
        this.door.close();
    }
}