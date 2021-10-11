// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0f000f00010202020202020202020202020203080b0c0a0a0a0a0a0a0a0a0a0c0d040812090a090a090a090a090a090e04080a0a0a0a0a0a0a0a0a0a0a0a0a04080a090a090a090a090a090a090a04080a0a0a0a0a0a0a0a0a0a0a0a0a04080a090a090a090a090a090a090a04080a0a0a0a0a0a0a0a0a0a0a0a0a04080a090a090a090a090a090a090a04080a0a0a0a0a0a0a0a0a0a0a0a0a04080a090a090a090a090a090a090a04080a0a0a0a0a0a0a0a0a0a0a0a0a040812090a090a090a090a090a090e040811100a0a0a0a0a0a0a0a0a100f04070505050505050505050505050506`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorDark2,sprites.builtin.forestTiles0,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
