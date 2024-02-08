if (feature("Tomato")) {
  StartupEvents.registry("item", (event) => {
    event
      .create("ptdye:tomato")
      .group("food")
      .food((food) => {
        food.hunger(3).saturation(1);
      });
  });
}

if (feature('Pizza')) {
    StartupEvents.registry("item", (event) => {
        event
        .create("ptdye:pizza")
        .group("food")
        .food((food) => {
            food.hunger(3).saturation(1);
        });
    });
}

if (feature('Misc. Rolls')) {
    StartupEvents.registry("item", (event) => {
        event
        .create("ptdye:chocolate_roll")
        .group("food")
        .food((food) => {
            food.hunger(6).saturation(0.75);
        });
        event
        .create("ptdye:honey_roll")
        .group("food")
        .food((food) => {
            food.hunger(6).saturation(0.75);
        });
        event.create("ptdye:incomplete_tomato_roll","create:sequenced_assembly")
        event
        .create("ptdye:tomato_roll")
        .group("food")
        .food((food) => {
            food.hunger(6).saturation(0.75);
        });
        event
        .create("ptdye:plain_roll")
        .group("food")
        .food((food) => {
            food.hunger(3).saturation(0.6);
        });
    });
}
