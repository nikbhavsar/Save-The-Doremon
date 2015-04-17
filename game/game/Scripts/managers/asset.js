var managers;
(function (managers) {
    'use strict';
    var spriteSheetData, spriteSheetData2, spriteSheetData3, spriteSheetData4, spriteSheetData5, spriteSheetData6, assetManifest, Assets;
    // Image and Sound Manifest; 

    assetManifest = [
        { id: "level1_bg", src: "assets/images/blue.jpg" },
        //    { id: "laser", src: "assets/images/beam.png" },
        { id: "laser", src: "assets/images/cloud.png" },
        { id: "bomb", src: "assets/images/bomb.png" },
        { id: "plane1", src: "assets/images/plane1.png" }, //kk
        //     made in http://www.bfxr.net/
        { id: "shipHit", src: "assets/sounds/shipHit.wav" },
        { id: "startBtnSound", src: "assets/sounds/startGame.wav" },
        { id: "coinSound", src: "assets/sounds/Pickup_Coin24.wav" },
        //     credits to: http://www.tannerhelland.com
        { id: "gameOver", src: "assets/sounds/Nevermore.mp3" },
        { id: "gameMusic", src: "assets/sounds/WildWaters.mp3" },
		{ id: "level2_bg", src: "assets/images/water.jpg"},
        { id: "level3_bg", src: "assets/images/forest.jpg"} 
    ];    
    
    
    // SpriteSheet Data Object
    spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [207, 72, 200, 70],
            [0, 73, 200, 70],
            [0, 0, 200, 70],
            [204, 0, 200, 68]
        ],
        "animations": {
            "instructionsButton": [0],
            "tryAgainButton": [1],
            "playButton": [2],
            "mainMenuButton": [3]
        }
    };
	
    spriteSheetData2 = {
        "images": ["assets/images/bird.png"],
        "frames": [
          //  [128, 0, 42, 50],
           
           // [177, 0, 42, 50],
          //  [10, 0, 48, 50],
          //  [67, 0, 48, 50],
          //  [231, 0, 48, 50],
          //  [289, 0, 48, 50]
           [0, 0, 116, 116],
           [0, 0, 116, 116],
           [0, 0, 116, 116],
           [0, 0, 116, 116],
           [0, 0, 116, 116],
           [0, 0, 116, 116]
        ],
    
        "animations": {
            up: [2, 3, , 0.3],
            idle: [0, 1, , 0.3],
            down: [ 4, 5, , 0.3]
        }
    };

       spriteSheetData5 = {
        "images": ["assets/images/enemy2.png"],
        "frames": [
         //  [128, 0, 42, 50],

          // [177, 0, 42, 50],
         //  [10, 0, 48, 50],
         //  [67, 0, 48, 50],
         //  [231, 0, 48, 50],
         //  [289, 0, 48, 50]
          [0, 0, 199, 199],
          [0, 0, 199, 199],
          [0, 0, 199, 199],
          [0, 0, 199, 199],
          [0, 0, 199, 199],
          [0, 0, 199, 199]
          
        ],
        "animations": {
            enemyanimation: [0, 1, , 0.3]
        }
       };


       spriteSheetData6 = {
           "images": ["assets/images/bomb.png"],
           "frames": [
            //  [128, 0, 42, 50],

             // [177, 0, 42, 50],
            //  [10, 0, 48, 50],
            //  [67, 0, 48, 50],
            //  [231, 0, 48, 50],
            //  [289, 0, 48, 50]
             [0, 0, 50, 50],
              [0, 0, 50, 50],
               [0, 0, 50, 50],
                [0, 0, 50, 50],
                 [0, 0, 50, 50],
               [0, 0, 50, 50]
            

           ],
           "animations": {
               bomb: [0, 1, , 0.3]
           }
       };

    
    spriteSheetData3 = {
        "images": ["assets/images/egg.png"],
        "frames": [
        //  [128, 0, 42, 50],

         // [177, 0, 42, 50],
        //  [10, 0, 48, 50],
        //  [67, 0, 48, 50],
        //  [231, 0, 48, 50],
        //  [289, 0, 48, 50]
         [0, 0, 64, 64],
          [0, 0, 64, 64],
           [0, 0, 64, 64],
            [0, 0, 64, 64],
             [0, 0, 64, 64],
              [0, 0, 64, 64]
        ],
        "animations": {
            spin: [0, 1, , 0.3]
        }
    };
    
    spriteSheetData4 = {
        "images": ["assets/images/explosion.png"],
        "frames": {width: 38.4, height: 39},
        "animations": {
            explode: [0, 24, , 1]
        }
    };

    // Asset Manager Class
    Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue(true);
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.ship = new createjs.SpriteSheet(spriteSheetData2);
            this.coin = new createjs.SpriteSheet(spriteSheetData3);
            this.explode = new createjs.SpriteSheet(spriteSheetData4);

            this.enemy2 = new createjs.SpriteSheet(spriteSheetData5);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
