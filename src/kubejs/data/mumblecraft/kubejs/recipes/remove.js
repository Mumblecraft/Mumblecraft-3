// This file is for removing recipes

//Write to console that this file is executing
console.info('Kubejs Removing recipes')

events.listen('recipes', function (event) {
	//BluePower
	event.remove({id: 'bluepower:copper_ingot'})
	event.remove({id: 'bluepower:silver_ingot'})
	event.remove({id: 'bluepower:copper_block'})
	event.remove({id: 'bluepower:silver_block'})
	event.remove({id: 'bluepower:copper_ore'})
	event.remove({id: 'bluepower:silver_ore'})
})
