import { camProps, worldProp } from '../config/dimensions'

let g

export function setBounds() {
  g.cam.setBounds(worldProp.x, worldProp.y, worldProp.width, worldProp.height)
  // g.physics.world.setBounds(worldProp.x, worldProp.y, worldProp.width, worldProp.height)
}

export function setupCamera(game) {
  g = game
  g.cam = g.cameras.main

  const setCamViewPort = () => {
    g.cam.x = camProps().x
    g.cam.y = camProps().y
    g.cam.width = camProps().width
    g.cam.height = camProps().height
  }

  setCamViewPort()
  window.addEventListener('resize', setCamViewPort)

  setBounds(g)
}