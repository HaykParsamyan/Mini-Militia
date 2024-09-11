

function Camera(ctx, shyame) {

    var _this;
    this._init = function () {

        _this = this;
        this.ctx = ctx;
        this.shyame = shyame;
        this.canvasMarginLeft = 0;
        this.cameraSpeed = _this.shyame.actor.speed;
    };

    this.move = function () {

        
        var diffCurrPos = _this.shyame.actor.position.x - Math.abs(_this.canvasMarginLeft);
        if(diffCurrPos != 600) {
            if (diffCurrPos > 600) {

                _this.moveRight();
            } else {
                _this.moveLeft();
            }
        }
    };

    this.moveRight = function () {


        if (_this.canvasMarginLeft <= 0 && _this.canvasMarginLeft >= -2635.0001)
            _this.canvasMarginLeft -= _this.cameraSpeed;
        _this.ctx.canvas.style.marginLeft = _this.canvasMarginLeft + 'px';
    };

    this.moveLeft = function () {


        if (_this.canvasMarginLeft < -_this.cameraSpeed && _this.canvasMarginLeft >= (-2635 - _this.cameraSpeed))
            _this.canvasMarginLeft += _this.cameraSpeed;
        _this.ctx.canvas.style.marginLeft = _this.canvasMarginLeft + 'px';
    };

    this._init();
};