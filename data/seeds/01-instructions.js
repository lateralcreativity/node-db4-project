exports.seed = function(knex) {
    return knex('instructions').insert([
      {
        step: 'Heat up water until it boils',
        recipe_id: 1
      },
      {
        step: 'Pour water into instant ramen cup and let it sit for 3 minutes before eating',
        recipe_id: 1
      },
      {
        step: 'Pour water into cup',
        recipe_id: 2
      },
      {
        step: 'Drink it',
        recipe_id: 2
      }
    ]);
  };