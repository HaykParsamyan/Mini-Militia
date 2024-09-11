

function Shyame(ctx, startPosition, canvas, camera, collisionHandler, resources){

    this._init = function () {
        this.actor = new Actor(ctx, startPosition, canvas, camera, collisionHandler, resources);
    };

    this._init();
}