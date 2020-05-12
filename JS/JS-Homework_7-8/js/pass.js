class PassCar extends Car {
    constructor(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission, trunk, armchair) {
        super(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission);
        this.type = 'pass';
        this.trunk = trunk;
        this.armchair = armchair;
    }
    get trunk() {
        return this._trunk;
    }
    get armchair() {
        return this._armchair;
    }
    set trunk(trunk) {
        this._trunk = trunk;
    }
    set armchair(armchair) {
        this._armchair = armchair;
    }
}