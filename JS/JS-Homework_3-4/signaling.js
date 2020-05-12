function Signaling(model, currentPassword) {
    Service.call(this, model);
    this._currentPassword = currentPassword;
}

Signaling.prototype = Object.create(Service.prototype);
Signaling.prototype.constructor = Signaling;

Signaling.prototype.plusPass = function () {
        this._currentPassword += 1;
};

Signaling.prototype.getCurrentPassword = function () {
    return this._currentPassword;
};