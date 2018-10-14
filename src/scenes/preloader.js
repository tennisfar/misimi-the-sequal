export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this
      .load
      .image('cokecan', 'assets/cokecan.png')
  }

  create() {
    this
      .scene
      .start('main')
  }
}
