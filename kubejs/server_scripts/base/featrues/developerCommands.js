/**
 * 
 * @param {Internal.CommandContext_<Internal.CommandSourceStack>} c 
 * @returns 
 */
global.customCommandGiveItems = (c) => {
  
  try{
    let nbt = {BlockEntityTag:{stacks: []}, display:{Name:`{"text":"items"}`}}

    //there's definitely a better way to do this, but the command is so simple and only for development that it simply isn't of concern.
    let text = c.getInput().replace("getcrate ","");

    //json doesn't like single quotes, for some reason.
    JSON.parse(text.replaceAll("'",'"')).forEach(element => {
      nbt.BlockEntityTag.stacks.push({Count:1, id: element})
    });

    c.source.server.runCommandSilent(`/give @p quark:crate${JSON.stringify(nbt)}`)

  }catch(e){
    console.log(e);
  }
  return 1;
}

//this is basically just to make sure the command doesn't need a full /reload cycle to update functionality, although since the speed up it really isn't as big a concern.
function wrapCall(c){
  return global.customCommandGiveItems(c)
}


ServerEvents.commandRegistry(e => {
  const { commands: Commands, arguments: Arguments } = e;
  e.register(
    Commands.literal("getcrate")
      .requires(s => s.hasPermission(2))
      .then(
        Commands.argument('itemlist', Arguments.GREEDY_STRING.create(e))
          .executes(wrapCall)
      )
  );
})