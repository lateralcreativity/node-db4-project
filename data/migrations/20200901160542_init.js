exports.up = function(knex) {
    return knex.schema
    .createTable('ingredients', table => {
        table.increments();

        table.string('name').notNullable().index();
        table.float('quantity').notNullable();
    })

    .createTable('recipes', table => {
        table.increments();

        table.string('name').notNullable().index();
    })

    .createTable('instructions', table => {
        table.increments();

        table.string('step').notNullable().index();
        table.integer('recipe_id').unsigned()
        .references('recipes.id').onDelete('RESTRICT').onUpdate('CASCADE');
    })

    .createTable('shopping_list', table => {
        table.increments();

        table.integer('recipe_id').unsigned()
        .references('recipes.id').onDelete('RESTRICT').onUpdate('CASCADE');

        table.integer('ingredient_id').unsigned()
        .references('ingredients.id').onDelete('RESTRICT').onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('shopping_list')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
