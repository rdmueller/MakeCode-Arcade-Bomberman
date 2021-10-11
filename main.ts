controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bombSprite = sprites.create(assets.image`bomb_s`, SpriteKind.Projectile)
    bombSprite.setPosition(player1sx, player1sy)
    animation.runImageAnimation(
    bombSprite,
    assets.animation`bomb_anim`,
    500,
    false
    )
})
function posNachScreen (x: number, y: number) {
    player1sx = 24 + x * 1.6
    player1sy = 24 + y * 1.6
}
function isWall (x: number, y: number) {
    location = tiles.getTileLocation(x / 10 + 1, y / 10 + 1)
    if (tiles.tileAtLocationEquals(location, sprites.dungeon.greenOuterNorth0)) {
        return true
    }
    if (tiles.tileAtLocationEquals(location, sprites.dungeon.greenOuterEast0)) {
        return true
    }
    if (tiles.tileAtLocationEquals(location, sprites.dungeon.greenOuterWest0)) {
        return true
    }
    if (tiles.tileAtLocationEquals(location, sprites.dungeon.greenOuterSouth1)) {
        return true
    }
    if (tiles.tileAtLocationEquals(location, sprites.dungeon.floorDark2)) {
        return true
    }
    if (tiles.tileAtLocationEquals(location, sprites.builtin.forestTiles0)) {
        return true
    }
    return false
}
let player1y = 0
let player1x = 0
let player1Richtung = ""
let location: tiles.Location = null
let player1sy = 0
let player1sx = 0
let bombSprite: Sprite = null
let kachelOben = null
tiles.setTilemap(tilemap`level1`)
let player1Sprite = sprites.create(assets.image`bomber`, SpriteKind.Player)
player1Sprite.setPosition(24, 24)
player1Sprite.z = 2
scene.cameraFollowSprite(player1Sprite)
game.onUpdateInterval(20, function () {
    if (controller.right.isPressed()) {
        if (player1Richtung == "" || player1Richtung == "links") {
            if (!(isWall(player1x + 10, player1y))) {
                player1Richtung = "rechts"
            }
        }
    }
    if (controller.left.isPressed()) {
        if (player1Richtung == "" || player1Richtung == "recht") {
            if (!(isWall(player1x - 10, player1y))) {
                player1Richtung = "links"
            }
        }
    }
    if (controller.up.isPressed()) {
        if (player1Richtung == "" || player1Richtung == "runter") {
            if (!(isWall(player1x, player1y - 10))) {
                player1Richtung = "hoch"
            }
        }
    }
    if (controller.down.isPressed()) {
        if (player1Richtung == "" || player1Richtung == "hoch") {
            if (!(isWall(player1x, player1y + 10))) {
                player1Richtung = "runter"
            }
        }
    }
    if (player1Richtung == "rechts") {
        player1x += 1
        if (player1x % 10 == 0) {
            player1Richtung = ""
        }
    }
    if (player1Richtung == "links") {
        player1x += -1
        if (player1x % 10 == 0) {
            player1Richtung = ""
        }
    }
    if (player1Richtung == "runter") {
        player1y += 1
        if (player1y % 10 == 0) {
            player1Richtung = ""
        }
    }
    if (player1Richtung == "hoch") {
        player1y += -1
        if (player1y % 10 == 0) {
            player1Richtung = ""
        }
    }
    posNachScreen(player1x, player1y)
    player1Sprite.setPosition(player1sx, player1sy)
})
