let g

export function setupCamera(game) {
  g = game
  g.cam = g.cameras.main

  const setCamViewPort = () => {
    g.cam.x = 0
    g.cam.y = 0
    g.cam.width = 250
    g.cam.height = 350
  }

  setCamViewPort()
  window.addEventListener('resize', setCamViewPort)

}