// function getTradeNbtNameFilter(item) {
//   console.log(`getting trade nbt name filter for ${item.getNbt()}`)
//   return Item.of(item.id).withName(item.nbt.get("display").get("Name")).weakNBT();
// }
// addMixing(
//   "stick",
//   getTradeNbtNameFilter(
//     Item.of("minecraft:stick", 2, "{Damage:0}").withName("Trading Transceiver")
//   )
// );
const bcfPlates = getAgreement("bcfPlates", {
  paymentItems: [
    "32x minecraft:andesite",
    "10x create:cogwheel",
    "8x create:belt_connector",
  ], // This is the result of the trade
  requestedItems: ["64x create:iron_sheet"], // This is the cost of the trade
  title: "We want plates", // This is the title of the trade
  orderedAmount: 3, // This is how many times the trade is done, until the deal is considered complete
  company: "bobs_construction_fleet", // This is the name of the company
  message:
    "Hello, I see you are new here in the trading mesh, doesnt matter much, Im from BCF and we want to contract some white plates, willing to pay too", // This is the description of the trade
});
const bcfPlates2 = getAgreement("bcfPlates2", {
  paymentItems: [
    "16x minecraft:andesite",
    "16x ptdye:sealed_device",
    "10x ae2:flawed_budding_quartz",
    "32x ptdye:mechanical_device",
    "16x ptdye:smart_device",
    "create:super_glue",
  ],
  requestedItems: [
    "64x create:iron_sheet",
    "64x create:iron_sheet",
    "64x create:iron_sheet",
  ],
  title: "We want more plates",
  orderedAmount: 2,
  company: "bobs_construction_fleet",
  message:
    "Hello, you did well on you last contract, good job. We require more plates, this time our volume is bigger, and so is the payment",
});
const bfcPlatesPermanent = getAgreement("bfcPlatesPermanent", {
  paymentItems: ["64x andesite", "32x minecraft:andesite"],
  requestedItems: ["64x create:iron_sheet", "64x create:iron_sheet"],
  title: "Plates, fixed rates",
  orderedAmount: 0,
  company: "bobs_construction_fleet",
  message:
    "You have done well, I forsee a long and profitable relationship between us. Now that we have setup a new factory on Zora with the help of mlc, we want fixed rates with you, if you are up for it.",
});
const bfcPickaxes = getAgreement("bfcPickaxes", {
  paymentItems: ["32x create:track", "8x ptdye:locomotive_device"],
  requestedItems: ["16x #forge:tools/pickaxes"],
  title: "Tools needed",
  orderedAmount: 2,
  company: "bobs_construction_fleet",
  message:
    "Planing to do some work for some computer company on Zora, we need some tools",
});
const bfcHelmets = getAgreement("bfcHelmets", {
  paymentItems: ["16x ptdye:locomotive_device", "16x create:track"],
  requestedItems: ["16x minecraft:iron_helmet"],
  title: "Hardhats",
  orderedAmount: 2,
  company: "bobs_construction_fleet",
  message:
    "We also need some hardhats for our upcoming contract, less urgent though so take your time",
});
// const bcfPlates3 = getAgreement(
const mlcEndstoneFixed = getAgreement("mlcEndstoneFixed", {
  paymentItems: ["16x quark:chorus_fruit_block"],
  requestedItems: ["32x minecraft:end_stone"],
  title: "Building a moon, materials needed",
  orderedAmount: 0,
  company: "magical_landscaping_co",
  message:
    "We have a long term project going, building a moon for a rich client of ours, we need a lot of moonstone, we can supply you with some chorus fruit in return",
});
const mlcSand = getAgreement("mlcSand", {
  paymentItems: [
    // "botania:manasteel_shovel",
    Item.of("minecraft:golden_pickaxe", 2, "{Damage:0}"),
    "2x botania:hopperhock",
    "2x botania:mana_pool",
    "dirt",
    "botania:mana_spreader",
  ],
  requestedItems: [
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
  ],
  title: "Your Sand – Our Beaches?",
  orderedAmount: 2,
  company: "magical_landscaping_co",
  message:
    "Hey there, new kid. Heard youre the fresh grain on the block. We are in the biz of building billionaire beachfronts. So, heres the scoop: we need sand. Lots of it. Pristine, white, untouched, like your manufacturing rep. Lets make a deal that will put your sands on the lunar map. Whaddya say?",
});
const mlcSand2 = getAgreement("mlcSand2", {
  paymentItems: [
    Item.of("minecraft:golden_pickaxe", 4, "{Damage:0}"),
    "32x dirt",
    "16x supplementaries:jar",
    "8x ptdye:smart_device",
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ],
  title: "More sand!",
  orderedAmount: 3,
  company: "magical_landscaping_co",
  message:
    "Your sand is smooth like no other! We want to buy MORE of it, not white this time, regular clean sand, and a bunch more, lets get this going shall we?",
});
const mlcSandFixed = getAgreement("mlcSandFixed", {
  paymentItems: [
    Item.of("minecraft:golden_pickaxe", 16, "{Damage:0}"),
    "64x minecraft:cobblestone",
  ],
  requestedItems: [
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ],
  title: "Lets seal the deal on that beautiful sand",
  orderedAmount: 5,
  company: "magical_landscaping_co",
  message:
    "Alright this is a done deal. Lets have a relationship you and I, lets start a constant thing, lets tell the family. First lets make sure we got solid lines right? Consider us partners forever, you keep sending us your golden dust and we are happy bees",
});
const bhbCheese = getAgreement("bhbCheese", {
  paymentItems: [
    "1x botania:gourmaryllis",
    "1x minecraft:water_bucket",
    "1x minecraft:water_bucket",
    "8x minecraft:sugar_cane",
  ],
  requestedItems: ["32x kubejs:fermented_blob"],
  title: "Ingredients needed",
  orderedAmount: 3,
  company: "black_hole_bagels_llc",
  message:
    "Hello, we are a new company that is trying to make a new recipe for bagels, we need some ingredients, willing to pay, simple as that",
});
const bhbCheeseFixed = getAgreement("bhbCheeseFixed", {
  paymentItems: ["32x supplementaries:soap"],
  requestedItems: ["64x kubejs:fermented_blob"],
  title: "Lets make some bagels",
  orderedAmount: 0,
  company: "black_hole_bagels_llc",
  message:
    "Alright, yup, this works. I want more of that cheesy stuff, a lot more. Lets make this a regular thing",
});
const bhbWheat = getAgreement("bhbWheat", {
  paymentItems: ["32x botania:livingwood_log", "water_bucket"],
  requestedItems: ["64x wheat"],
  title: "Clean wheat needed",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "Currently we are getting our wheat from Qube, we are not 100% where they are getting it but it always comes stained with blood, we have a line dedicated to cleaning just because of that. If you can supply clean wheat, I think we can be great friends",
});

const wscAxes = getAgreement("wscAxes", {
  paymentItems: [
    "16x minecraft:oak_log",
    "10x storagedrawers:oak_full_drawers_1",
    "2x minecraft:chest",
    "ptdye:trading_transceiver",
  ],
  requestedItems: ["16x #forge:tools/axes"],
  title: "A new season is upon us, Tools needed",
  orderedAmount: 1,
  company: "wood_strike_and_co",
  message:
    "Hey there, hoser. Were the fun folks at WSC busier than a beaver in a woodpile! Our tools are top-notch, but we're short a few axes. Need more to chop-chop as fast as a moose on a ski slope. Can you help us out?",
});
const wscBread = getAgreement("wscBread", {
  paymentItems: [
    "8x minecraft:birch_log",
    "minecraft:chest",
    "4x storagedrawers:oak_full_drawers_1",
  ],
  requestedItems: ["64x minecraft:bread"],
  title: "Food needed for the workers",
  orderedAmount: 2,
  company: "wood_strike_and_co",
  message:
    "Its WSC here. After any long day among the pines, our teams as hungry as a bear in spring! Were on the hunt for some good, hearty food to fill our bellies and fuel our saws. Barring that, bread would do as well",
});
const wscBreadAndAxesFixed = getAgreement("wscBreadAndAxesFixed", {
  paymentItems: ["8x minecraft:birch_log"],
  requestedItems: ["64x minecraft:bread", "16x #forge:tools/axes"],
  title: "Food and tools, fixed rates",
  orderedAmount: 0,
  company: "wood_strike_and_co",
  message:
    "We are reaching out for a bit of a deal. We're looking to set up a fixed rate for two essentials: good, sturdy axes and plenty of bread to keep our crew well-fed. We're thinking long-term partnership here, with regular orders. Let's talk numbers and see if we can make this work for both of us. Looking forward to a fruitful collaboration",
});
const bhbFurnaces = getAgreement("bhbFurnaces", {
  paymentItems: [
    "8x minecraft:clay",
    "8x copper_ingot",
    "8x botania:manasteel_ingot",
  ],
  requestedItems: ["64x minecraft:furnace"],
  title: "Expanding our presence on Zora",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "We are expanding our presence on Zora, we need some furnaces, you have proven yourself so far, lets see if we can work some fixed rates for your wheat after this",
});
const bhbWheatFixedRates = getAgreement("bhbWheatFixedRates", {
  paymentItems: ["32x clay"],
  requestedItems: ["64x wheat", "64x wheat"],
  title: "Clean wheat fixed rates",
  orderedAmount: 0,
  company: "black_hole_bagels_llc",
  message:
    "Alright, you are our new main source now, dont fail us, and dont worry about Qube, we wont tell them",
});
const bnwRedstone = getAgreement("bnwRedstone", {
  paymentItems: [
    Item.of(
      "ae2:energy_cell",
      2,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "16x ae2:fluix_smart_cable",
    "4x ptdye:logic_device",
  ],
  requestedItems: ["64x minecraft:redstone", "64x minecraft:redstone"],
  title: "Redstone from the red planet",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "Causing quite the stir there arnt you? Your horrific red planet was empty for eons, hope you know what you are doing landing there so spectacularly. Anyways we heard your planet is red because it's made of redstone, so we want to buy some",
});
const bnwRedstoneFixedRates = getAgreement("bnwRedstoneFixedRates", {
  paymentItems: ["8x ae2:fluix_smart_cable"],
  requestedItems: ["64x minecraft:redstone", "64x minecraft:redstone"],
  title: "Fixed rates redstone > cables",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "Alright, you seem to be reliable, I believe it is time we made it official, lets start a fixed rates agreement. Your redstone is high quality, we make great cables, simple as that",
});
const bnwManasteel = getAgreement("bnwManasteel", {
  paymentItems: [
    "4x ae2:storage_monitor",
    Item.of(
      "ae2:energy_cell",
      1,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "8x minecraft:lever",
    "8x minecraft:gold_ingot",
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
  ],
  title: "New material",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "Hello again, we are experimenting with new types of processors based on a more conductive material, if you can get us some we can continue this research, we can't pay a lot now, but if this works out we will require much more and our budget will be higher too if you catch my drift",
});
const bnwManasteelFixedRates = getAgreement("bnwManasteelFixedRates", {
  paymentItems: ["8x ptdye:logic_device"],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "32x botania:manasteel_ingot",
  ],
  title: "Fixed rates blue > cells",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "Well, well, seems that this blue stuff is working really well for us, we are going to need a lot more, lets fix our rates, we can supply you with energy cells, you can supply us with this new material",
});
const bnwQuartz = getAgreement("bnwQuartz", {
  paymentItems: [
    "8x ptdye:smart_device",
    "8x minecraft:gold_ingot",
    "2x ptdye:logic_device",
  ],
  requestedItems: ["64x minecraft:quartz"],
  title: "Need raw materials for silicon",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are great partners, you and me, its great to have a reliable source for once. Anyways, we are working on a new batch of silicon, we need some raw material, counting on you. Sidenote, ive talked about you to a few friends of mine, lets just say they are keeping an eye on you, the good kind of eye, dont worry",
});
const bnwCogs = getAgreement("bnwCogs", {
  paymentItems: [
    "8x ptdye:smart_device",
    "8x ae2:fluix_smart_cable",
    "5x ae2:storage_bus",
    "2x ae2:toggle_bus",
  ],
  requestedItems: ["64x create:cogwheel"],
  title: "Assembly expansion",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const bnwPolishedRoseQuartz = getAgreement("bnwPolishedRoseQuartz", {
  paymentItems: [
    "8x ae2:fluix_smart_cable",
    "4x create:mechanical_arm",
    "4x ae2:storage_bus",
    "4x ptdye:logic_device",
  ],
  requestedItems: ["64x create:polished_rose_quartz"],
  title: "Assembly expansion",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const qubeAngry = getAgreement("qubeAngry", {
  paymentItems: ["minecraft:air"],
  requestedItems: [bhbWheatFixedRates.item],
  title: "Who do you think you are?!",
  orderedAmount: 1,
  company: "qube",
  message:
    "You sun of a squid, thought we woudnt find out? Who do you think you are? Waltzing over to our system and changing things around, this is unacceptable. Know this, if you want ANY trade from REAL companies around here give up this contract NOW and you will be forgiven, we may talk then",
});

const gbdSticks = getAgreement("gbdSticks", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:1.0499999999999998d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.020354872569441795d,8.017524960450828E-4d,-0.02206386998295784d],OnGround:0b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.1876d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:squid"},Name:"Squid",Scale:0.6944444f,UUID:[I;488746606,1876312093,-1582293357,2139790907]}},RepairCost:0,display:{Name:\'{"text":"Kraken of the depths!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.25d,Name:"minecraft:generic.movement_speed"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:16.0d,Modifiers:[{Amount:-0.028267175516417276d,Name:"Random spawn bonus",Operation:1,UUID:[I;904579365,1095388434,-2079221910,56613228]}],Name:"minecraft:generic.follow_range"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:8.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.06663110395805134d,-0.0784000015258789d,0.0011508201133065817d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],"forge:spawn_type":"SPAWN_EGG",id:"minecraft:silverfish"},Name:"Silverfish",Scale:0.9615385f,UUID:[I;913707991,1000820097,-1560499399,-304684093]}},RepairCost:0,display:{Name:\'{"text":"Silver stone-dweller of DOOM!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x minecraft:stick",
    "64x minecraft:stick",
    "64x minecraft:stick",
  ],
  title: "Interested in exotic creatures?",
  orderedAmount: 1,
  company: "galactic_beast_deliveries",
  message:
    "HELLO, fellow trade mesh body! We here at gbd supply THE BEST of BEASTS. We heard you are an amazing supplier and we currently need some incentive devices to help our employees work harder, nothing special mind you, and of course in return you will get to see some our most EXCLUSIVE AMAZING BEASTS! What do you say?",
});
const gdbLead = getAgreement("gdbLead", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "Leftovers from nether exhibition",
  orderedAmount: 2,
  company: "galactic_beast_deliveries",
  message:
    "HELLO, we are excited to offer you an incredible opportunity! We have a few leftover beasts from our nether exhibition, the highest quality stock around! We need a few leads for our future endeavors, lets strike a deal!",
});
const gdbLeadFriend = getAgreement("gdbLeadFriend", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "EXCLUSIVE Leftovers from nether exhibition",
  orderedAmount: 6,
  company: "galactic_beast_deliveries",
  message:
    "As our most VALUABLE customer, we are excited to offer you a once in a lifetime opportunity! We have a few leftover beasts from our nether exhibition, and we are willing to part with them for a small fee. What do you say?",
});

const sssHelmets = getAgreement("sssHelmets", {
  paymentItems: ["air"],
  requestedItems: ["16x botania:manasteel_helmet"],
  title: "The syndicate needs YOU!",
  orderedAmount: 2,
  company: "stellar_sigil_syndicate",
  message:
    "We are the syndicate, we know you have heard of us, we are here to make the world a better place, and we want you to be a part of that! We need some helmets for our new recruits, if you help us out with this, you can enjoy the feeling of being a part of something bigger than yourself!",
});
const sssHelmetsFixedRates = getAgreement("sssHelmetsFixedRates", {
  paymentItems: ["air"],
  requestedItems: ["32x botania:manasteel_helmet"],
  title: "Making the world a better place!",
  orderedAmount: 0,
  company: "stellar_sigil_syndicate",
  message:
    "Amazing! Its so great to have you with us brother, or sister, or whatever you are. We always require more recruits, and so we always require more helmets!",
});
const cccRawWhiteOld = getAgreement("cccRawWhiteOld", {
  paymentItems: [
    "8x minecraft:leather",
    "8x supplementaries:copper_lantern",
    "2x createdieselgenerators:basin_lid",
    "2x create:weighted_ejector",
  ],
  requestedItems: ["64x minecraft:raw_iron", "16x minecraft:raw_iron"],
  title: "Supplements required",
  orderedAmount: 3,
  company: "cosmic_cuisine_collective",
  message:
    "We have been receiving complaints from customers which we have not managed to deal with violently yet. Looking into a different approach. People are experiencing extreme deficiency in white minerals on our CCC Diet Plus program. We want to acquire some additives that can solve this.",
});
const cccRawWhite = getAgreement("cccRawWhite", {
  paymentItems: [
    "8x minecraft:leather",
    "8x supplementaries:copper_lantern",
    "8x slime_ball",
    "8x create:cogwheel",
    "2x createdieselgenerators:basin_lid",
    "2x create:weighted_ejector",
  ],
  requestedItems: ["64x minecraft:raw_iron", "16x minecraft:raw_iron"],
  title: "Supplements required",
  orderedAmount: 3,
  company: "cosmic_cuisine_collective",
  message:
    "We have been receiving complaints from customers which we have not managed to deal with violently yet. Looking into a different approach. People are experiencing extreme deficiency in white minerals on our CCC Diet Plus program. We want to acquire some additives that can solve this.",
});
const cccIronBars = getAgreement("cccIronBars", {
  paymentItems: [
    "16x minecraft:leather",
    Item.of("botania:mana_tablet", "{mana:10000}"),
  ],
  requestedItems: ["64x minecraft:iron_bars", "64x minecraft:iron_bars"],
  title: "Building cells, supplies needed URGENTLY",
  orderedAmount: 4,
  company: "cosmic_cuisine_collective",
  message:
    "We are currently dealing with multiple class action lawsuits about poisonings. We have apprehended a few of those scoundrels and are currently in need of new holding cells, fast",
});
global.starterDeals = [cccRawWhite, mlcSand, bhbCheese];
tradeBranch([bcfPlates2, bnwRedstone], [bcfPlates]);
tradeBranch([cccIronBars, bcfPlates], [cccRawWhite]);
tradeBranch([cccIronBars, bcfPlates], [cccRawWhiteOld]);
tradeBranch(bnwManasteel, bnwRedstone);
tradeBranch([bnwQuartz, bnwManasteelFixedRates], bnwManasteel);
tradeBranch([bnwCogs, bnwQuartz], [bnwManasteel, bfcPickaxes]);
tradeBranch(
  [bfcPlatesPermanent, bfcPickaxes, mlcSand2], //The next trades in line
  [bcfPlates2, mlcSand] //The trades that need to be completed and process for that
);
tradeBranch([mlcEndstoneFixed, mlcSandFixed], mlcSand2);
tradeBranch([bhbWheat, wscAxes, bhbCheeseFixed], bhbCheese);
tradeBranch([wscBread], wscAxes);
tradeBranch([wscBreadAndAxesFixed], wscBread);
tradeBranch([bhbFurnaces, sssHelmets], bhbWheat);
tradeBranch(sssHelmetsFixedRates, sssHelmets);
tradeBranch([bhbWheatFixedRates, qubeAngry, gbdSticks], bhbFurnaces);
tradeBranch([bnwPolishedRoseQuartz, gdbLeadFriend], [bnwQuartz, gbdSticks]);
tradeBranch([bnwPolishedRoseQuartz, gdbLead], [bnwQuartz, bnwCogs]);

ServerEvents.commandRegistry((event) => {
  const {
    commands: Commands,
    arguments: Arguments,
    builtinSuggestions: Suggestions,
  } = event;
  event.register(
    Commands.literal("starterDeals").executes((context) => {
      global.starterDeals.forEach((deal) =>
        context.getSource().getPlayer().give(deal.item)
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("starterDealCompleted").executes((context) => {
      global.starterDeals.forEach((deal) =>
        context.getSource().getPlayer().give(deal.completedItem)
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("allAgreements").executes((context) => {
      global.allAgreements.forEach((deal) =>
        context.getSource().getPlayer().give(deal)
      );
      return 0;
    })
  );
});
