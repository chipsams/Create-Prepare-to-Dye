// BlockEvents.rightClicked(event => {
//     if (event.item.id === 'create:wrench') {
//         event.cancel()
//     }
// })
let wrenchables = [
  "quark:magent",
  "minecraft:dispenser",
  "minecraft:dropper",
  "minecraft:observer",
  "minecraft:cauldron",
  "quark:pipe",
  "quark:crate",
  "minecraft:barrel",
  "minecraft:chest",
  "minecraft:trapped_chest",
  "minecraft:ender_chest",
  "minecraft:shulker_box",
  "minecraft:barrel",
  "minecraft:loom",
  "minecraft:cartography_table",
  "minecraft:smithing_table",
  "minecraft:grindstone",
  "minecraft:lectern",
  "minecraft:stonecutter",
  "minecraft:campfire",
  "minecraft:blast_furnace",
  "minecraft:smoker",
  "minecraft:brewing_stand",
  "minecraft:beacon",
  "minecraft:anvil",
  "minecraft:chipped_anvil",
  "minecraft:damaged_anvil",
  "minecraft:bell",
  "ae2:energy_cell",
  "ae2:fluix_smart_cable",
  "ae2:toggle_bus",
  "ae2:inverted_toggle_bus",
  "ae2:terminal",
  "ae2:storage_bus",
  "ae2:storage_monitor",
  "ae2:quartz_fiber",
  "supplementaries:turn_table",
  "botania:default_apothecary"
];
if (feature("Add wrenchable blocks")) {
  ServerEvents.tags("block", (event) => {
    wrenchables.forEach((block) => {
      event.add("create:wrench_pickup", block);
    });
  });
}

if (feature('Wrench picks up broken blocks')) {
  BlockEvents.broken((event) => {
    if (event.player.getMainHandItem().id === 'create:wrench' && !event.player.creative) {
      event.block.getDrops(event.player, event.item).forEach((item) => {
        event.player.give(item);
      });
      event.block.set('minecraft:air')
      event.cancel();
    }
  });
}

if (feature('Wrench unencase pipes')) {
  BlockEvents.rightClicked('quark:encased_pipe', event => {
    if (event.player.getMainHandItem().id === 'create:wrench') {
      let block = event.block;
      // let prop = block.getProperties();
      // //check if only one of east west south north up down is true, and if so, make the opposite also true

      // let directions_map ={
      //    east : 'west',
      //    west : 'east',
      // }
      // [].forEach((dir) => {
      //   if (prop.get(dir) && !prop.get(Utils.getOpposite(dir))) {
      //     prop.set(Utils.directions.getOpposite(dir), true);
      //   }
      // });
      if (!event.player.creative){
        event.player.give('glass');
      }
      block.set('quark:pipe', block.getProperties());
      event.cancel();
    }
  })
}
// if (feature("Fix applied energistics machines not properly wrenchable")) {
//   ServerEvents.tags("item", (event) => {
//     // event.remove("forge:tools/wrench", "create:wrench");
//     // event.add("forge:tools/wrench/create", "create:wrench");
//   });
// }

// // BlockEvents.broken((event) => {
// //     console.info(event.getEntity())
// // });
// EntityEvents.drops((event) => {
//     console.info(event.entity)
// });