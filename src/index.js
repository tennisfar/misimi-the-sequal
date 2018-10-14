import 'phaser'
import { version } from '../package.json'
import Preloader from './scenes/preloader'
import Main from './scenes/main'
import { canvas } from './config/dimensions'

new Phaser.Game({
  title: 'Misimi the Sequal',
  url: 'https://misimi2.netlify.com',
  version,
  banner: {
    hidePhaser: true,
  },
  type: Phaser.AUTO,
  height: canvas.height,
  width: canvas.width,
  // transparent: true,
  scene: [Preloader, Main],
})
