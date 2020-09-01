exports.seed = function(knex) {
    return knex('ingredients').insert([
      {
        name: 'Ramen',
        quantity: 1
      },
      {
        name: 'Water',
        quantity: 1
      },
    ])
  };