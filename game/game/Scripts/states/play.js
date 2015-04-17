/// <reference path="../objects/button.js" />
/// <reference path="../objects/laser.js" />
/// <reference path="../objects/coin.js" />
/// <reference path="../objects/enemy.js" />
/// <reference path="../objects/label.js" />
/// <reference path="../objects/space.js" />
/// <reference path="../objects/water.js" />
/// <reference path="../objects/forest.js" />
/// <reference path="../objects/plane.js" />
/// <reference path="../objects/bullet.js" />
/// <reference path="../objects/scoreboard.js" />
/// <reference path="../managers/collision.js" />
var states, space, plane, count, bullets, coin, constants, lasers, collision, scoreboard,
    stage, game, currentState, currentStateFunction, changeState, createjs, objects, enemy,
    enemies, managers, stageLabel;
(function (states) {
    'use strict';
    function playState() {
        space.update();
        plane.update();
        for (count = 0; count < plane.bullets.length; count += 1) {
            bullets[count].update();
        }

        setTimeout(function () {
            game.removeChild(stageLabel);
            coin.update();
            for (count = 0; count < constants.CLOUD_NUM; count += 1) {
                lasers[count].update();
            }
            collision.update();
            scoreboard.update();
            
        }, 1000);
        
        if (scoreboard.coinsCollected >= constants.COINSCOLLECTED) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }
        
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
   
    // play state Function
    function play() {
    
        // Declare new Game Container
        game = new createjs.Container();
        window.addEventListener("mousedown", plane.pressKey);
        window.addEventListener("mouseup", plane.releaseKey);
        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        coin = new objects.Coin(stage, game);
        enemy = new objects.Enemy(stage, game);
        plane = new objects.Plane(stage, game);
       
        stageLabel = new objects.Label(stage.canvas.width / 1.4, stage.canvas.height / 2, "Collect " + constants.COINSCOLLECTED.toString() + " Doracakes!");
        stageLabel.font = "bold 40px Wallpoet";
        stageLabel.textAlign = "center";
        stageLabel.shadow = new createjs.Shadow("#000000", 5, 5, 5);
        game.addChild(stageLabel);
        // Show Cursor
        stage.cursor = "none";

        for (count = 0; count < constants.CLOUD_NUM; count += 1) {
            lasers[count] = new objects.Laser(stage, game);
        }
        
        for (count = 0; count < constants.ENEMY_NUM; count += 1) {
            enemies.push(new objects.Enemy(stage, game));
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        //Instantiate Collision Manager
        collision = new managers.Collision(plane, coin, lasers, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
}(states || (states = {})));