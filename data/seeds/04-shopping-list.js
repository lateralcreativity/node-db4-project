exports.seed = function(knex) {
    return knex('shopping_list').insert([
      {
        recipe_id: 1,
        ingredient_id: 1
      },
      {
        recipe_id: 1,
        ingredient_id: 2
      },
      {
        recipe_id: 2,
        ingredient_id: 2
      },
    ])
  };