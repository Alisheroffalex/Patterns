class User {
    constructor(name) {
        this.name = name
    }

    inform(message) {
        console.log(`${ this.name } has been informed about: ${ message.news }`);
    }
}