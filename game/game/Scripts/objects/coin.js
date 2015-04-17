/// <reference path="../managers/asset.js" />
var objects, createjs, managers, game;
(function (objects) {
    'use strict';
    // Coin Class
    var Coin = (function () {
        function Coin(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.coin, "spin");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.image.scaleX = 1.5;
            this.image.scaleY = 1.5;
            this.dx = 5;
            this.dy = 2;
            game.addChild(this.image);
        }

        Coin.prototype.update = function () {
            this.image.x -= this.dx;
            this.image.y += this.dy;
            if (this.image.x < -60) {
                this.reset();
            }
            if (this.image.y <= 32) {
                this.dy *= -1;
            }
            if (this.image.y >= this.stage.canvas.height - 32) {
                this.dy *= -1;
            }
        };

        Coin.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = 800;
        };

        Coin.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Coin;
    }());
    objects.Coin = Coin;
}(objects || (objects = {})));

