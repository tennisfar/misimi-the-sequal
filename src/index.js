import 'phaser';

import {version} from '../package.json'
import {SimpleScene} from './scenes/simple-scene';
import { canvas } from './config/dimensions'

const gameConfig = {
  title: 'Misimi the Sequal',
  url: 'http://misimi2.netlify.com',
  version,
  banner: {
    hidePhaser: true
  },
  type: Phaser.AUTO,
  height: canvas.height,
  width: canvas.width,
  // transparent: true,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);