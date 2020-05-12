class OperationalCar extends Car {
    constructor(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission, flashers, loudspeaker) {
        super(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission);
        this.type = 'oper';
        console.log(this.typeBody);
        this.flashers = flashers;
        this.loudspeaker = loudspeaker;
    }

    get flashers() {
        return this._flashers;
    }
    get loudspeaker() {
        return this._loudspeaker;
    }
    set flashers(flashers) {
        this._flashers = flashers;
    }
    set loudspeaker(loudspeaker) {
        this._loudspeaker = loudspeaker;
    }
}