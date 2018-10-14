export default function setupMap(game) {
  const g = game

  const map = g.make.tilemap({ key: 'map' })
  const groundTiles = map.addTilesetImage('tiles')
  g.groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0)
  g.groundLayer.setCollisionByExclusion([-1])
}
