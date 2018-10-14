export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this.load.image('cokecan', 'assets/cokecan.png')

    this.load.tilemapTiledJSON('map', 'assets/spritesheets/misimi.json')
    this.load.spritesheet(
      'tiles',
      'assets/spritesheets/tiles.png',
      { frameWidth: 35, frameHeight: 35 },
    )
  }

  create() {
    this.scene.start('main')
  }
}
