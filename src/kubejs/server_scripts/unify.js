// Whether or not to unify items in inventory
global["INVENTORY_UNIFY"] = false
// Whether or not to unify items in world
global["ITEM_UNIFY"] = false
// Whether or not to unify recipes
global["RECIPE_UNIFY"] = true
// Whether or not to hide not-first materials in jei (requires secondary script)
global["HIDE_UNIFIED_ITEMS"] = true
// Whether or not to disable non-priority ore-gen
global["UNIFY_ORE_GEN"] = true

// Mod priorities
global["unifypriorities"] = [
	"emendatusenigmatica",
	"createaddition",
    "create",
    "mekanism",
    "immersiveengineering",
    "appliedenergistics2"
]

// Add oredictionary tags here to unify (or use javascript to generate it!)
var tags = [
]
// Block tags for ore gen unification (an equal item tag is required for this to work, which is the case with ores normally)
/*var btags = [
    "forge:ores/copper",
    "forge:ores/tin",
    "forge:ores/aluminum",
    "forge:ores/lead",
    "forge:ores/silver",
    "forge:ores/nickel",
    "forge:ores/platinum",
    "forge:ores/uranium",
    "forge:ores/iridium",
    "forge:ores/zinc",
    "forge:ores/osmium",
    "forge:ores/sulfur",
]*/
// Easier way to add multiple tags (feel free to add empty extra tags, this will ignore them)
var tagGen = [
	"iron=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "gold=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "diamond=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "copper=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "tin=storage_blocks,ingots,nuggets,dusts,ores",
    "aluminum=storage_blocks,ingots,nuggets,dusts,ores,plates",
    "lead=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "silver=storage_blocks,ingots,nuggets,dusts,ores,plates,rods",
    "nickel=storage_blocks,ingots,nuggets,dusts,ores,plates,rods",
    "bronze=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "steel=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "uranium=storage_blocks,ingots,nuggets,dusts,ores,plates",
    "zinc=storage_blocks,ingots,nuggets,dusts,ores,plates",
    "osmium=storage_blocks,ingots,nuggets,dusts,ores,plates",
	"brass=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
	"constantan=storage_blocks,ingots,nuggets,dusts,ores,plates,rods",
	"electrum=storage_blocks,ingots,nuggets,dusts,ores,plates,rods",
	"wood=dusts",
	"quartz=dusts",
	"certus_quartz=dusts",

]
for (let line of tagGen) {
    let data = line.split("=")
    for (let type of data[1].split(",")) {
        tags.push("forge:" + type + "/" + data[0])
    }
}

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags (they should be loaded)
    var tagitems = new Map()
    tagLoop:
    for (let tag of tags) {
        let stacks = Ingredient.of("#"+tag).getStacks().toArray()
        for (let mod of global["unifypriorities"]) {
            for (let stack of stacks) {
                if (stack.getMod() == mod) {
                    tagitems[tag] = stack.getId()
                    continue tagLoop
                }
            }
        }
        if (stacks.length > 0) tagitems[tag] = stacks[0].getId()
    }
    // Update tags
    global["unifytags"] = tags
    global["tagitems"] = tagitems
    
    // Unify the rest
    if (global["RECIPE_UNIFY"]) {
        for (let tag of global["unifytags"]) {
            let stacks = Ingredient.of("#"+tag).getStacks().toArray()
            let oItem = global["tagitems"][tag]
            for (let tItem of stacks) {
                event.replaceInput({}, tItem.getId(), "#"+tag)
                event.replaceOutput({}, tItem.getId(), oItem)
            }
        }
    }
})

// Handle inventory change (to check for unificaiton)
// Unfortunately it gets called twice due to setting the inventory.
onEvent("player.inventory.changed", event => {
    if (global["INVENTORY_UNIFY"] && event.getEntity().getOpenInventory().getClass().getName() == "net.minecraft.inventory.container.PlayerContainer") {
        // Get held item
        var heldItem = event.getItem()
        
        // Check for every tag in the list
        for (let tag of global["unifytags"]) {
            if (Ingredient.of("#"+tag).test(heldItem)) {
                // If item is in tag, determine if it needs to be changed
                let tItem = global["tagitems"][tag]
                if (tItem != heldItem.getId()) {
                    // Fix slot number
                    let slot = event.getSlot()
                    if (slot <= 5) slot += 36
                    else if (slot == 45) slot = 40
                    else if (slot >= 36) slot -= 36
                    // Update item
                    event.getEntity().inventory.set(slot, Item.of(tItem, heldItem.getCount()))
                }
                break
            }
        }
    }
})

// Items on ground
onEvent("entity.spawned", event => {
    if (global["ITEM_UNIFY"]) {
        var entity = event.getEntity()
        if (entity.getType() == "minecraft:item") {
            var gItem = entity.getItem()
            // Check for every tag in the list
            for (let tag of global["unifytags"]) {
                if (Ingredient.of("#"+tag).test(gItem)) {
                    // If item is in tag, determine if it needs to be changed
                    let tItem = global["tagitems"][tag]
                    if (tItem != gItem.getId()) {
                        entity.setItem(Item.of(tItem, gItem.getCount()))
                    }
                    break
                }
            }
        }
    }
})