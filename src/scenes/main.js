export default class Main extends Phaser.Scene {
  constructor() {
    super('main')
  }

  create() {
    this
      .add
      .text(100, 100, 'Hello Misimi 2!', { fill: '#0f0' })
    this
      .add
      .image(100, 200, 'cokecan')
  }
}
