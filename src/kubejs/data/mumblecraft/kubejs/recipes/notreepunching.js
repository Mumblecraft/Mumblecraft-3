// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: modifying recipes')

events.listen('recipes', function (event) {
    
    //Saw recipes
    
	//Remove default recipes
	var idRemove =[
	
	//Minecraft
	'minecraft:warped_planks',
	'minecraft:crimson_planks',
	
	//No Tree Punching
	'immersiveengineering:crafting/stick_treated',
	'biomesoplenty:fir_planks',
	'biomesoplenty:redwood_planks',
	'biomesoplenty:cherry_planks',
	'biomesoplenty:mahogany_planks',
	'biomesoplenty:jacaranda_planks',
	'biomesoplenty:palm_planks',
	'biomesoplenty:willow_planks',
	'biomesoplenty:dead_planks',
	'biomesoplenty:magic_planks',
	'biomesoplenty:umbran_planks',
	'biomesoplenty:hellbark_planks',
	'botania:livingwood_planks',
	'botania:dreamwood_planks',
	
	]
	
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})
	
    event.shaped(item.of('immersiveengineering:stick_treated', 2), [
        'AB',
    ], {
        A: '#notreepunching:saws',
        B: '#forge:treated_wood'
    })

    //Add BoP logs->planks
    var planksList =[
        'biomesoplenty:fir_planks',
        'biomesoplenty:redwood_planks',
        'biomesoplenty:cherry_planks',
        'biomesoplenty:mahogany_planks',
        'biomesoplenty:jacaranda_planks',
        'biomesoplenty:palm_planks',
        'biomesoplenty:willow_planks',
        'biomesoplenty:dead_planks',
        'biomesoplenty:magic_planks',
        'biomesoplenty:umbran_planks',
        'biomesoplenty:hellbark_planks',
		'minecraft:warped_planks',
		'minecraft:crimson_planks',
		'botania:livingwood_planks',
		'botania:dreamwood_planks',
    ]

    var logsList =[
        '#biomesoplenty:fir_logs',
        '#biomesoplenty:redwood_logs',
        '#biomesoplenty:cherry_logs',
        '#biomesoplenty:mahogany_logs',
        '#biomesoplenty:jacaranda_logs',
        '#biomesoplenty:palm_logs',
        '#biomesoplenty:willow_logs',
        '#biomesoplenty:dead_logs',
        '#biomesoplenty:magic_logs',
        '#biomesoplenty:umbran_logs',
        '#biomesoplenty:hellbark_logs',
		'minecraft:warped_stem',
		'minecraft:crimson_stem',
		'botania:livingwood',
		'botania:dreamwood',
    ]
    var i = 0

    planksList.forEach(function (planks) {
        event.shaped(item.of(planks, 4), [
            'A',
            'B'
        ], {
            A: '#notreepunching:saws',
            B: logsList[i]
        })
        i++
    })
	
	var i = 0

    planksList.forEach(function (planks) {
        event.shaped(item.of(planks, 2), [
            'A',
            'B'
        ], {
            A: 'notreepunching:flint_axe',
            B: logsList[i]
        })
        i++
    })
})