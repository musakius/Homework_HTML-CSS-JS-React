class SportCar extends Car {
    constructor(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission, nitrogen, bodyKit) {
        super(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission);
        this.type = 'sport';
        this.nitrogen = nitrogen;
        this.bodyKit = bodyKit;
    }

    get nitrogen() {
        return this._nitrogen;
    }
    get bodyKit() {
        return this._bodyKit;
    }
    set nitrogen(nitrogen) {
        this._nitrogen = nitrogen;
    }
    set bodyKit(bodyKit) {
        this._bodyKit = bodyKit;
    }
}