import setupMap from '../components/map'
import { setupCamera } from '../components/camera'

export default class Main extends Phaser.Scene {
  constructor() {
    super('main')
  }

  create() {
    setupMap(this)
    setupCamera(this)

    this.add.text(100, 100, 'Hello Misimi!', { fill: '#0f0' })
    this.add.image(100, 200, 'cokecan')


  }
}
