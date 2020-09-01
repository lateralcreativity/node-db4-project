const db = require('../data/connection');

module.exports = {
    get,
    getShoppingList,
    getInstructions,
}

function get() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('shopping_list')
    .join('recipes', 'recipes.id', 'shopping_list.recipe_id')
    .where('recipes.id', id)
    .select('shopping_list.id', 'shopping_list.ingredient_id', 'recipes.name')
    .orderBy('recipes.name')
}

function getInstructions(id) {
    return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .where('recipes.id', id)
    .select('recipes.name', 'instructions.step', 'instructions.id')
    .orderBy('instructions.id')
}