LootJS.modifiers(event => {
    event.addLootTableModifier([
        "minecraft:chests/ancient_city",
        "minecraft:chests/ancient_city_ice_box",
        "minecraft:chests/end_city_treasure",
        "minecraft:chests/woodland_mansion",
        "minecraft:chests/bastion_treasure"
    ]).addWeightedLoot([1, 3], [
        Item.of('ae2:nether_quartz_axe', '{Damage:0}'),
        Item.of('ae2:certus_quartz_hoe', '{Damage:0}'),
        Item.of('ae2:fluix_hoe', '{Damage:0}'),
        Item.of('ae2:certus_quartz_sword', '{Damage:0}'),
        Item.of('ae2:fluix_sword', '{Damage:0}'),
        Item.of('ae2:nether_quartz_sword', '{Damage:0}'),
        Item.of('immersiveengineering:pickaxe_steel', '{Damage:0}'),
        Item.of('immersiveengineering:shovel_steel', '{Damage:0}'),
        Item.of('immersiveengineering:axe_steel', '{Damage:0}'),
        Item.of('immersiveengineering:hoe_steel', '{Damage:0}'),
        Item.of('immersiveengineering:sword_steel', '{Damage:0}'),
        Item.of('ae2:fluix_axe', '{Damage:0}'),
        Item.of('ae2:fluix_pickaxe', '{Damage:0}'),
        Item.of('ae2:nether_quartz_shovel', '{Damage:0}'),
        Item.of('ae2:certus_quartz_axe', '{Damage:0}'),
        Item.of('ae2:nether_quartz_hoe', '{Damage:0}'),
        Item.of('ae2:fluix_shovel', '{Damage:0}'),
        Item.of('ae2:nether_quartz_pickaxe', '{Damage:0}'),
        Item.of('ae2:certus_quartz_shovel', '{Damage:0}'),
        Item.of('ae2:certus_quartz_pickaxe', '{Damage:0}'),
        Item.of('immersiveengineering:armor_steel_helmet', '{Damage:0,insulation:[]}').withChance(2),
        Item.of('immersiveengineering:armor_steel_chestplate', '{Damage:0,insulation:[]}').withChance(2),
        Item.of('immersiveengineering:armor_steel_leggings', '{Damage:0,insulation:[]}').withChance(2),
        Item.of('immersiveengineering:armor_steel_boots', '{Damage:0,insulation:[]}').withChance(2)
    ])
}); 