if (feature("Tomato sauce recipes")) {
  addMixing(
    "50mb ptdye:tomato_sauce",
    ["ptdye:tomato", "salt:salt"],
    temperature.heated
  );
}
if (feature("Better dough recipes")) {
  removeRecipe({ id: "create:crafting/appliances/dough" });
  removeRecipe({ id: "create:mixing/dough_by_mixing" });
  addMixing("create:dough", ["create:wheat_flour", "50mb water"]);
}

if (feature("Better pancake recipe")) {
  addFluidToTag("ptdye:pancake_batter", [
    "create:chocolate",
    "create:honey",
    "milk",
  ]);

  removeRecipe({ id: "supplementaries:pancake" });

  ["200x create:chocolate", "200x create:honey", "200x milk"].forEach(
    (pancake_batter) => {
      addAssembly("4x supplementaries:pancake", "create:dough", [
        addFilling("stick", "stick", pancake_batter),
        addDeploying("stick", "stick", "egg"),
        addDeploying("stick", "stick", "sugar"),
        addPressing("stick", "stick"),
      ]);
    }
  );
}

if (feature("Pizza recipes")) {
  addPressing("ptdye:pizza_base", "create:dough");
  addAssembly("ptdye:pizza", "ptdye:pizza_base", [
    addFilling("ptdye:pizza", "ptdye:pizza_base", "ptdye:tomato_sauce"),
    addDeploying("ptdye:pizza", "ptdye:pizza_base", "kubejs:fermented_blob"),
  ]);
}

if (feature("Misc. Rolls")) {
  addFilling("ptdye:chocolate_roll","minecraft:bread",Fluid.of("create:chocolate",250));
  addFilling("ptdye:honey_roll","minecraft:bread",Fluid.of("create:honey",250));
  addAssembly("ptdye:tomato_roll","minecraft:bread",[
    addFilling("ptdye:incomplete_tomato_roll","ptdye:incomplete_tomato_roll",Fluid.of("ptdye:tomato_sauce",250)),
    addDeploying("ptdye:incomplete_tomato_roll",["ptdye:incomplete_tomato_roll","ptdye:tomato"])
  ])
  addMixing("ptdye:plain_roll",["minecraft:bread","minecraft:egg"]);
  addFilling("ptdye:chocolate_roll","ptdye:plain_roll");
  addMixing("create:sweet_roll",["#forge:rolls/sweet",'supplementaries:soap'])
}