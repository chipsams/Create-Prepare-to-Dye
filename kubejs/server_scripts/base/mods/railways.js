if (feature("Remove horrible tracks")) {
  [
    "railways:track_ender",
    "railways:track_jungle_narrow",
    "railways:track_birch_narrow",
    "railways:track_spruce_narrow",
    "railways:track_oak_narrow",
    "railways:track_ender_narrow",
    "railways:track_crimson_narrow",
    "railways:track_tieless_narrow",
    "railways:track_blackstone_narrow",
    "railways:track_dark_oak_narrow",
    "railways:track_warped_narrow",
    "railways:track_mangrove_narrow",
    "railways:track_acacia_wide",
    "railways:track_jungle_wide",
    "railways:track_spruce_wide",
    "railways:track_warped_wide",
    "railways:track_dark_oak_wide",
    "railways:track_blackstone_wide",
    "railways:track_tieless_wide",
    "railways:track_crimson_wide",
    "railways:track_ender_wide",
    "railways:track_oak_wide",
    "railways:track_birch_wide",
    "railways:track_mangrove_wide",
    "railways:track_phantom",
    "railways:track_mangrove",
    "railways:track_tieless",
    "railways:track_acacia_narrow",
    "railways:track_blackstone",
    "railways:track_warped",
    "railways:track_spruce",
    "railways:track_oak",
    "railways:track_jungle",
    "railways:track_dark_oak",
    "railways:track_crimson",
    "railways:track_birch",
    "railways:track_acacia",
  ].forEach((track) => {
    removeItem(track);
  });
}

if (feature("Remove conductors cap colored recipes in assembly")) {
  global.colors.forEach((color) => {
    removeRecipe({ id: `railways:sequenced_assembly/${color}_conductor_cap` });
  });
}
