import setupMap from '../components/map'
import { setupCamera } from '../components/camera'

export default class Main extends Phaser.Scene {
  constructor() {
    super('main')
  }

  create() {
    setupMap(this)
    setupCamera(this)
  }
}
