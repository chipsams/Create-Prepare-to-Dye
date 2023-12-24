// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

let dyeFlowerPairs = [
  ["minecraft:light_gray_dye","botania:clayconia_chibi",[
    "bonemeal",
    ["minecraft:purple_dye","botania:marimorphosis_chibi",["bonemeal"]]
  ]],
  ["minecraft:gray_dye","botania:hopperhock_chibi",[
    "bonemeal",
    ["create:encased_fan","botania:daffomill"]
  ]],
  ["minecraft:white_dye","botania:pure_daisy",[
    ["minecraft:red_dye","botania:orechid_ignem"],
    ["minecraft:gray_dye","botania:orechid"]
  ]],
  ["minecraft:pink_dye","botania:rannucarpus_chibi",[
    "bonemeal"
  ]],
  ["minecraft:lime_dye","botania:agricarnation_chibi",["bonemeal"]]
  ["minecraft:blue_dye","botania:hydroangeas",[
    ["create:experience_nugget","botania:rosa_arcana"],
    ["create:wheat_flour","botania:kekimurus"],
    ["minecraft:string","botania:spectrolus"],
    ["create:speedometer","botania:manastar"]
  ]],
  ["minecraft:wheat", "botania:gourmaryllis",[
    ["minecraft:orange_dye", "botania:thermalily"],
    ["minecraft:oak_leaves", "botania:munchdew"],
    ["minecraft:gunpowder", "botania:entropinnyum"],
    ["botania:endoflame", "minecraft:yellow_dye"]
  ]]
]

let flowerRecipes = []
let craftableFlowers = []
let downgrades = {}

function processFlower(parent,flowerData){
  if(!flowerData)return
  let material, flower, secondStages;

  if(flowerData=="bonemeal"){
    material = "minecraft:bone_meal";
    flower = parent.replace("_chibi","");
  }else{
    [material,flower,secondStages] = flowerData;
  }

  
  for(const replace of [":",":floating_"]){
    craftableFlowers.push(flower.replace(":",replace))
    flowerRecipes.push({
      type: "create:item_application",
      results: [
        Item.of(flower.replace(":",replace)).toJson()
      ],
      ingredients: [
        Ingredient.of(parent.replace(":",replace)).toJson(),
        Ingredient.of(material).toJson()
      ],
    })
    downgrades[flower.replace(":",replace)] = {material:material,downgrade:parent.replace(":",replace)}
  }

  if(secondStages)
    for(const secondStage of secondStages)
      processFlower(flower,secondStage)
}

for(const flower of dyeFlowerPairs)
  processFlower("ptdye:botanic_device",flower)

ServerEvents.tags("block",(event)=>{
  for(const flower of craftableFlowers) event.add("create:wrench_pickup",flower)
})

ServerEvents.recipes(event=>{  
  event.remove({output:"#botania:special_flowers"})
  flowerRecipes.forEach(recipe=>event.custom(recipe))
})

ServerEvents.tags("item",event=>{
  event.add("forge:tools/wrench","botania:twig_wand");
  event.add("forge:tools/wrench","botania:dreamwood_wand");
})

let noSameTickBreaking = {}
BlockEvents.broken((event)=>{
  console.log(`${noSameTickBreaking[event.player.uuid]} ${event.server.tickCount}`)
  if(!event.player.crouching) event.exit();
  if((noSameTickBreaking[event.player.uuid]??0) + 1 >= event.server.tickCount) event.cancel();

  let item = event.player.getHeldItem("main_hand");

  if(item.hasTag("forge:tools/wrench")){

    let block = event.block;
    let downgrade = downgrades[block.id];
    if(downgrade){
      block.set(downgrade.downgrade);
      let itemEntity = block.createEntity("item");

      itemEntity.item = Item.of(downgrade.material);

      itemEntity.y = block.y + 0.5
      itemEntity.x = block.x + 0.5
      itemEntity.z = block.z + 0.5
      itemEntity.motionY = 0.32 //nyoom
      itemEntity.spawn()

      event.player.addItemCooldown(item,4)

      noSameTickBreaking[event.player.uuid] = event.server.tickCount;
      return event.cancel();
    }
  }
})