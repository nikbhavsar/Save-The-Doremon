var constants;
(function (constants) {
    'use strict';
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTION_STATE = 3;
    constants.LEVEL2_STATE = 4;
    constants.LOADING = 5;
    constants.LEVEL3_STATE = 6;
    
    // Game Constants
    constants.CLOUD_NUM = 3;
    constants.ENEMY_NUM = 3;
    constants.LABEL_FONT = "20px Wallpoet";
    constants.LABEL_COLOUR = "#B21414";
    constants.PLANE_LIVES = 10;
    constants.LASER_MIN_SPEED = 1;
    constants.LASER_MAX_SPEED = 5;
    constants.ENEMY_MIN_SPEED = 5;
    constants.ENEMY_MAX_SPEED = 10;
    constants.BULLET_SPEED = 20;
    constants.COINSCOLLECTED = 10;
    constants.ENEMIESKILLED = 10;
    constants.SCORE = 0;
}(constants || (constants = {})));