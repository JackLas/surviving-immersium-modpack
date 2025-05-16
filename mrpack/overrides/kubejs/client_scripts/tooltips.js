ItemEvents.tooltip(event => {
  event.add('tconstruct:pickadze', Text.translate('tooltip.modpack.aka_shovel').gray().italic());
});

// ItemEvents.tooltip(event => {
//   event.addAdvanced('tconstruct:pickadze', (item, advanced, text) => {
//     text.splice(1, 0, Text.translate('tooltip.modpack.aka_shovel').gray().italic());
//   });
// });
