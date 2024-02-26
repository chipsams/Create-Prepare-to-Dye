
if(feature("Remove Mob-trapping Flowers")){
  removeItems([
    'botania:jiyuulia', 'botania:tangleberrie',
    'botania:jiyuulia_chibi', 'botania:tangleberrie_chibi',
    'botania:medumone',
    'botania:tigerseye',
    'botania:vinculotus'
  ])
}

if(feature("Remove Mob-hurting Flowers")){
  removeItems(['botania:hyacidus', 'botania:heisei_dream', 'botania:bellethorn', 'botania:bellethorn_chibi' ])
}

if(feature("Remove Mob-breeding Flowers")){ //breeding isn't terribly interesting compared to trading for mobs.
  removeItems(['botania:pollidisiac', 'botania:dreadthorn'])
}

if(feature("Remove Flowers Irrelevant To C:PTD Gameplay")){
  removeItems([
    'botania:fallen_kanade', //no health...
    'botania:bubbell', 'botania:bubbell_chibi', //no water...
    'botania:exoflame', //no furnaces... (well, no furnaces is the plan, i think?)
    'botania:solegnolia', 'botania:solegnolia_chibi' //no magnet ring...
  ])
}

if(feature("Remove Loonium")) removeItem('botania:loonium') //game ballence. also we already have a company for this

if(feature("Remove Too Good/Bad Logistical Flowers")){
  removeItems([
    'botania:daffomill', //it's like a worse fan from create. it doesn't trap mobs, is buggier and costs mana.
    'botania:spectranthemum' //long distance teleportation? terrible idea! no place in C:PTD.
  ])
}

if(feature("Remove Some Generating Flowers")){
  removeItems([
    //TO BE REINTRODUCED(?): shulkers are unobtainable, i'm fairly sure. re-add when shulkers are back!!!
    'botania:shulk_me_not',
    /*
      TO BE REINTRODUCED(?): slimes are unobtainable right now.
      you'll need a LOT of slimes to power this thing, which is an interesting logistical challenge,
      although you're kinda rate-limited by the trading table. would require getting multiple fixed-rate slime contracts.
    */
    'botania:narslimmus',
    /*
      we (me (asof) & yarden) had a whole discussion about this one.
      skill requirement is very high if you don't google anything, and unreasonably low if you do google stuff.
      there's no real cellular block cost or mana output that could justify this flower.
    */
    'botania:cell_block',
    'botania:dandelifeon',
    /*
      leaves are unobtainable, i'm fairly sure. definitely not in the numbers this thing asks for.
    */
    'botania:munchdew'
  ])
}
