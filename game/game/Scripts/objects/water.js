/// <reference path="../managers/asset.js" />
var objects, createjs, managers, stage, game;
(function (objects) {
    'use strict';
    // Water Class
    var Water = (function () {
        function Water(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level2_bg"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width;
            this.reset();
            this.dx = 5;
            game.addChild(this.image);
        }

        Water.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= stage.canvas.width) {
                this.reset();
            }
        };

        Water.prototype.reset = function () {
            this.image.x = this.width;
        };

        Water.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Water;
    }());
    objects.Water = Water;
}(objects || (objects = {})));