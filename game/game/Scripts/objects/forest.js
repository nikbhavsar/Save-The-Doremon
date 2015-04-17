/// <reference path="../managers/asset.js" />
var objects, createjs, managers, stage, game;
(function (objects) {
    'use strict';
    // Forest Class
    var Forest = (function () {
        function Forest(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level3_bg"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width;
            this.reset();
            this.dx = 5;
            game.addChild(this.image);
        }

        Forest.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= stage.canvas.width) {
                this.reset();
            }
        };

        Forest.prototype.reset = function () {
            this.image.x = this.width;
        };

        Forest.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Forest;
    }());
    objects.Forest = Forest;
}(objects || (objects = {})));