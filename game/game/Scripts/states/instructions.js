/// <reference path="../constants.js" />
/// <reference path="../objects/scoreboard.js" />
/// <reference path="../objects/plane.js" />
/// <reference path="../objects/space.js" />
/// <reference path="../objects/coin.js" />
/// <reference path="../objects/laser.js" />
/// <reference path="../objects/button.js" />
/// <reference path="../objects/label.js" />
var states, interval, createjs, stage, game, constants, currentState, currentStateFunction, changeState, plane, space,
    powerup, objects, instructionText, playButton, mainMenuButton;
(function (states) {
    'use strict';
    function playButtonClicked(event) {
        createjs.Sound.play("startBtnSound");
        
        interval = window.setInterval(function () {
            stage.removeChild(game);
            window.clearInterval(interval);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        }, 1000);
    }
    states.playButtonClicked = playButtonClicked;
    
    function mainMenuButtonClicked(event) {
        createjs.Sound.play("startBtnSound");
        
        interval = window.setInterval(function () {
            stage.removeChild(game);
            window.clearInterval(interval);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        }, 750);
        
    }
    states.mainMenuButtonClicked = mainMenuButtonClicked;
    
    function instructionState() {
        space.update();
        plane.image.y = stage.canvas.height / 2;
        plane.image.x += 5;
        
        if (plane.image.x > stage.canvas.width) {
            plane.image.x = 0 - plane.width;
        }
        
        powerup.image.y = stage.canvas.height / 1.5 + 15;
        powerup.image.x = stage.canvas.width/2 - 205;
    }
    states.instructionState = instructionState;

    function instructions() {
        var gameNameLabel;
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        plane = new objects.Plane(stage, game);
        powerup = new objects.Coin(stage, game);
        
        // Show Cursor
        stage.cursor = "default";

        // Display Game Names label
        gameNameLabel = new objects.Label(stage.canvas.width / 2 + 80, 100, "Mario Striker");
        gameNameLabel.font = "bold 60px Wallpoet";
        gameNameLabel.textAlign = "center";
        gameNameLabel.shadow = new createjs.Shadow("#ffffff", 5, 5, 5);
        game.addChild(gameNameLabel);
        
        // Display Game Instruction text
        instructionText = new objects.Label(40, stage.canvas.height / 2,
							"Level 1 : Stay away of Swords by moving your mouse and Collect the Doracakess to Score more. " +
							"\n\nLevel 2 and up : Left click to shoot enemies after level 1." +
							"\n                        You have to be aware of your own kind of big Devils and you need to escape. " +
							"\n\nLevel 3: You have to face both enemies swords and devils of your own type " +
							"\n\nCollect Doracakes               for extra score."+
							"\n\nEach Doracake will give you 100 points.");
        instructionText.regX = 0;
        instructionText.regY = 0;
        instructionText.font = "15px Audiowide";
        instructionText.textAlign = "left";
        game.addChild(instructionText);
                
        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width - 60, stage.canvas.height - 30, "playButton", 0.6, 0.5);
        playButton.scaleX = 0.5;
        playButton.scaleY = 0.5;
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        
        // Display Main Menu Button
        mainMenuButton = new objects.Button(stage.canvas.width - 180, stage.canvas.height - 30, "mainMenuButton", 0.6, 0.5);
        mainMenuButton.scaleX = 0.5;
        mainMenuButton.scaleY = 0.5;
        game.addChild(mainMenuButton);
        mainMenuButton.addEventListener("click", mainMenuButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
}(states || (states = {})));

