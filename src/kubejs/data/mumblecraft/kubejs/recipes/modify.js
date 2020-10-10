// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {
    //Armor/Equipment

    //Change Mekanism steel shield to require steel plates
    event.shaped(item.of('mekanismtools:steel_shield', 1), [
        'ABA',
        'AAA',
        ' A ',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'minecraft:shield'
    })

    //Machines/Components

    //Mekanism
    //Steel Casing
    event.shaped(item.of('mekanism:steel_casing', 1), [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: 'immersiveengineering:storage_steel',
        B: 'minecraft:glass',
        C: 'mekanism:block_osmium'
    })

    //Metallurgic Infuser
    event.shaped(item.of('mekanism:metalurgic_infuser', 1), [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'immersiveengineering:plate_steel',
        B: 'engineersdecor:small_electrical_furnace_recipe',
        C: 'minecraft:redstone_block',
        D: 'mekanism:block_osmium'
    })

})