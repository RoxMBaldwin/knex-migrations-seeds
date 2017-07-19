
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "pet"; ALTER SEQUENCE pet_id_seq RESTART WITH 3;')

  .then(function () {

    var pets = [{
      id: 1,
      name: 'fluffy',
      age: 6,
      owner_id: 1
    }, {
      id: 2,
      name: 'scout',
      age: 3,
      owner_id: 2
    }];

    return knex('pet').insert(pets);
  });
};
