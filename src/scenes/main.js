import { setupCamera } from '../components/camera'

export default class Main extends Phaser.Scene {
  constructor() {
    super('main')
  }

  create() {
    setupCamera(this)

    this.add.text(100, 100, 'Hello Misimi!', { fill: '#0f0' })
    this.add.image(100, 200, 'cokecan')


  }
}
