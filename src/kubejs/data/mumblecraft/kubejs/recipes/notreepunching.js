// This file is for modifying existing recipes

//Write to console that this file is executing
console.info('Kubejs: Modifying No Tree Punching recipes')

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
	
	]
	
	idRemove.forEach(function (remove) {
		event.remove({id: remove})
	})

    //Add BoP logs->planks
    var planksList = [
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
    ]

    var logsList = [
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
    ]
	
	//Saw Recipes
    var i = 0

    planksList.forEach(function (planks) {
		//Logs to Planks
        event.shaped(item.of(planks, 4), [
            'A',
            'B'
        ], {
            A: '#notreepunching:saws',
            B: logsList[i]
        }).damageIngredient(0)
		
		//Planks to Sticks
		event.shaped(item.of('minecraft:stick', 2), [
            'AB'
        ], {
            A: '#notreepunching:saws',
            B: planks
        })
        i++
    }).damageIngredient(0)
	
	//Logs to Sticks
	logsList.forEach(function (logs) {
		event.shaped(item.of('minecraft:stick', 8), [
			'AB'
		], {
			A: '#notreepunching:saws',
            B: logs
		}).damageIngredient(0)
	})
	
	event.shaped(item.of('immersiveengineering:stick_treated', 2), [
        'AB'
    ], {
        A: '#notreepunching:saws',
        B: '#forge:treated_wood'
    }).damageIngredient(0)
	
	//Axe  Recipes
	var i = 0

    planksList.forEach(function (planks) {
		//Logs to Planks
        event.shaped(item.of(planks, 2), [
            'A',
            'B'
        ], {
            A: '#notreepunching:weak_saws',
            B: logsList[i]
        }).damageIngredient(0)
		
		//Planks to Sticks
		event.shaped(item.of('minecraft:stick', 1), [
            'AB'
        ], {
            A: '#notreepunching:weak_saws',
            B: planks
        })
        i++
    }).damageIngredient(0)
	
	//Logs to Sticks
	logsList.forEach(function (logs) {
		event.shaped(item.of('minecraft:stick', 6), [
			'AB'
		], {
			A: '#notreepunching:weak_saws',
            B: logs
		}).damageIngredient(0)
	})
	
	//Treated Sticks
	event.shaped(item.of('immersiveengineering:stick_treated', 1), [
        'AB'
    ], {
        A: '#notreepunching:weak_saws',
        B: '#forge:treated_wood'
    }).damageIngredient(0)
	
	//Saws
	//Iron
	event.remove({id: 'notreepunching:iron_saw'})
	
	//Add recipe for crafting
	 event.shaped(item.of('notreepunching:iron_saw', 1), [
		'  A',
		' AB',
		'AB ',
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/iron',
	})
	
	//Gold
	event.remove({id: 'notreepunching:gold_saw'})
	
	//Add recipe for crafting
	 event.shaped(item.of('notreepunching:gold_saw', 1), [
		'  A',
		' AB',
		'AB ',
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/gold',
	})
	
	//Diamond
	event.remove({id: 'notreepunching:diamond_saw'})
	
	//Add recipe for crafting
	 event.shaped(item.of('notreepunching:diamond_saw', 1), [
		'  A',
		' AB',
		'AB ',
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/diamond',
	})
})