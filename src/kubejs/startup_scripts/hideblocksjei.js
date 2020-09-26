// This file is for hiding items in JEI

//Write to console that this file is executing
console.info('Kubejs Removing blocks from JEI')

events.listen('jei.hide.items', function (event) {
	//BluePower
	event.hide('bluepower:copper_ingot')
	event.hide('bluepower:silver_ingot')
	event.hide('bluepower:copper_block')
	event.hide('bluepower:silver_block')
	event.hide('bluepower:copper_ore')
	event.hide('bluepower:silver_ore')
})