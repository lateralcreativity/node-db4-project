exports.seed = function(knex) {
    return knex('recipes').insert([
      {
        name: 'Instant Ramen'
      },
      {
        name: 'Cup of Water'
      }
    ])
  };