class Car {
    constructor(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission) {
        this.firstName = firstName;
        this.typeCar = typeCar;
        this.typeBody = typeBody;
        this.typeWheel = typeWheel;
        this.typeEngine = typeEngine;
        this.typeSuspension = typeSuspension;
        this.transmission = transmission;
    }

    get firstName() {
        return this._firstName;
    }
    get typeBody() {
        return this._typeBody;
    }
    get typeWheel() {
        return this._typeWheel;
    }
    get typeEngine() {
        return this._typeEngine;
    }
    get typeSuspension() {
        return this._typeSuspension;
    }
    get transmission() {
        return this._transmission;
    }
    get typeCar() {
        return this._typeCar;
    }
    set typeCar(typeCar) {
        this._typeCar = typeCar;
    }
    set transmission(transmission) {
        this._transmission = transmission;
    }
    set typeSuspension(typeSuspension) {
        this._typeSuspension = typeSuspension;
    }
    set typeEngine(typeEngine) {
        this._typeEngine = typeEngine;
    }
    set typeWheel(typeWheel) {
        this._typeWheel = typeWheel;
    }
    set typeBody(typeBody) {
        this._typeBody = typeBody;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
}