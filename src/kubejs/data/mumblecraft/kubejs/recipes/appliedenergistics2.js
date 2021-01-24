// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {

    //Machines
    //Grindstone
    event.shaped(item.of('appliedenergistics2:grindstone', 1), [
        'ABA',
        'CAC',
        'DCD',
    ], {
        A: '#forge:stone',
        B: 'create:cogwheel',
        C: '#appliedenergistics2:crystals/quartz',
	D: '#forge:cobblestone',
    })
})