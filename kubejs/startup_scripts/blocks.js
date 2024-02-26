StartupEvents.registry("fluid", (event) => {
  event
    .create("fermented_goop")
    .displayName("Fermented Goop")
    .thickTexture(0xe0c3bc)
    .bucketColor(0xe0c3bc)
    .noBlock();
  event
    .create("organic_mass")
    .displayName("Organic Mass")
    .thickTexture(0x2db83d)
    .bucketColor(0x2db83d)
  event
    .create("minecraft:milk").displayName("Milk")
    .thinTexture(0xfcfcfc)
    .bucketColor(0xfcfcfc)
});

StartupEvents.registry("item", (event) => {
  event
    .create("fermented_blob")
    .displayName("Fermented Blob")  
    .food((food) => {
      food
        .hunger(5)
        .saturation(7) 
        .fastToEat() 
        .meat(); 
    });

    event.create("ptdye:orange_tubes");

    event.create("ptdye:incomplete_sturdy_device", 'create:sequenced_assembly');
    event.create("ptdye:incomplete_mechanical_device", 'create:sequenced_assembly');
    event.create("ptdye:incomplete_sealed_device", 'create:sequenced_assembly');
    event.create("ptdye:incomplete_smart_device", 'create:sequenced_assembly');
    event.create("ptdye:incomplete_locomotive_device", 'create:sequenced_assembly');
    event.create("ptdye:incomplete_logic_device", 'create:sequenced_assembly');
    event.create("ptdye:incomplete_furnished_device", 'create:sequenced_assembly');
    event.create("ptdye:incomplete_red_stringed_device", 'create:sequenced_assembly');
});


StartupEvents.registry("block", (event) => {

  //TODO: figure this out! while this isn't strictly neccesary, it'd make things like this and the fragile bone block look way better.
  event.create('ptdye:orange_tube_block')
  .material("metal")
  .soundType("copper")
  .property(BlockProperties.AXIS)
  .placementState(event => {
    //console.log(event.clickedFace.axis)
    event['set(net.minecraft.world.level.block.state.properties.EnumProperty,java.lang.Enum)'](BlockProperties.AXIS, event.clickedFace.axis)
  })
  .blockstateJson = {
    "variants": {
      "axis=x": {
        "model": "ptdye:block/orange_tube_block",
        "x": 90,
        "y": 90
      },
      "axis=y": {
        "model": "ptdye:block/orange_tube_block"
      },
      "axis=z": {
        "model": "ptdye:block/orange_tube_block",
        "x": 90
      }
    }
  }

  event.create("ptdye:frail_bone_block")
  .material("stone")
  .soundType("bone_block")
  .hardness(0)
  .resistance(0)
  .opaque(false)
  .notSolid()
  .redstoneConductor(false)
  .fullBlock(true)
  .noValidSpawns(true)
  .textureAll("ptdye:block/frail_bone_block_side")
  .textureSide(Direction.UP,"ptdye:block/frail_bone_block_top")
  .textureSide(Direction.DOWN,"ptdye:block/frail_bone_block_top")
  .noDrops();


  global.colors.forEach(color=>{
    event.create(`ptdye:${color}_dye_block`)
    .hardness(1)
    .resistance(4)
    .material("clay")
    .soundType("slime_block")
    .textureAll(`ptdye:block/dye_blocks/${color}_dye_block`);
  })

  const device = name => {
    return event
      .create(name,"cardinal")
      .hardness(2)
      .resistance(6)
      .tagBlock("create:wrench_pickup")
      .opaque(false)
      .notSolid()
      .redstoneConductor(false)
      .fullBlock(false)
      .noValidSpawns(true)
      .suffocating(false)
      .viewBlocking(false)
      .defaultCutout()
      .transparent(true);
  }

  device("ptdye:sturdy_device")
    .material("stone")
    .soundType("stone");

  device("ptdye:logic_device")
    .material("stone")
    .soundType("stone")
    .box(0, 0, 0, 16, 2, 16);
    
  device("ptdye:sealed_device")
    .material("metal")
    .soundType("copper")
    .box(0, 0, 0, 16, 15, 16);

  device("ptdye:smart_device")
    .material("metal")
    .soundType("metal");

  device('ptdye:floating_botanic_device')
    .defaultCutout()
    .material("leaves")
    .soundType("grass")
    .box(2,2,2,14,14,14);
  device('ptdye:botanic_device')
    .noCollision()
    .defaultCutout()
    .material("leaves")
    .soundType("grass")
    .box(4,0,4,12,12,12)
    .item(item=>{
      item.parentModel("minecraft:item/generated").texture("layer0","ptdye:block/botanic_device")
    });

  device("ptdye:furnished_device")
    .material("wood")
    .soundType("wood")
    .box(0, 0, 0, 16, 12, 16);

  device("ptdye:mechanical_device")
    .material("metal")
    .soundType("wood");

  device("ptdye:locomotive_device")
    .material("metal")
    .soundType("metal")
    .box(3, 0, 0, 13, 9, 16)
    .box(4, 9, 4, 12, 12, 16);
    
  device("ptdye:red_stringed_device")
    .material("stone")
    .soundType("stone")
    .box(2, 0, 1, 14, 14, 15);
});


let botanicDeviceBlock;

StartupEvents.registry("block", (event) => {
  // botanic device
  botanicDeviceBlock = event
    .createCustom(
      "ptdye:botanic_device",
      () =>
        new global.minecraft.FlowerBlock(
          global.minecraft.MobEffects.NIGHT_VISION,
          5,
          global.minecraft.Block.BehaviourProperties.copy(Blocks.DANDELION)
        )
    )
});

StartupEvents.registry("item", (event) => {
  event.createCustom(
    "ptdye:botanic_device",
    () => new global.minecraft.Block.BlockItem(botanicDeviceBlock.get(), new global.minecraft.ItemProperties())
  );
});

//devices that work like flowers
{
  //todo: find a way to do it with a loop, when i tried it just complained about duplicate ids, as if the event was taking the newest value of id every time.
  let generatingFloricDevice;
  let functionalFloricDevice;
  StartupEvents.registry("block", (event) => {
    generatingFloricDevice = event
    .createCustom("ptdye:generating_floric_device",
      () => new global.minecraft.FlowerBlock(global.minecraft.MobEffects.NIGHT_VISION,5,global.minecraft.Block.BehaviourProperties.copy(Blocks.DANDELION))
    )
    functionalFloricDevice = event
    .createCustom("ptdye:functional_floric_device",
      () => new global.minecraft.FlowerBlock(global.minecraft.MobEffects.NIGHT_VISION,5,global.minecraft.Block.BehaviourProperties.copy(Blocks.DANDELION))
    )
  });
  
  StartupEvents.registry("item", (event) => {
    event.createCustom(
      "ptdye:generating_floric_device",
      () => new global.minecraft.Block.BlockItem(generatingFloricDevice.get(), new global.minecraft.ItemProperties())
    );
    event.createCustom(
      "ptdye:functional_floric_device",
      () => new global.minecraft.Block.BlockItem(functionalFloricDevice.get(), new global.minecraft.ItemProperties())
    );
  });
}
