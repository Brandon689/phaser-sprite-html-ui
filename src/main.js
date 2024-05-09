import { Game as MainGame } from './scenes/Game';
import { AUTO, Scale,Game } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: AUTO,
    width: 700,
    height: 600,
    pixelArt: true,
    parent: 'game-container',
    scale: {
        mode: Scale.NONE,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        MainGame
    ]
};

export default new Game(config);
