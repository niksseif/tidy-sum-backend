
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('balance').del()
    .then(function () {
      // Inserts seed entries
      return knex('balance').insert([
        {users_id: '1',total:'0'},
        
      ]);
    });
};
