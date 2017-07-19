
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "owner"; ALTER SEQUENCE owner_id_seq RESTART WITH 3;')
  .then(function() {

    var owners = [{
      id: 1,
      name: 'sam',
      email: 'sam@gmail.com',
      dateCreated: new Date(),
      bio: 'Sam is the man'
    }, {
      id: 2,
      name: 'alex',
      email: 'alex@gmail.com',
      dateCreated: new Date(),
      bio: 'Alex is not the man'
    }];

    return knex('owner').insert(owners);
  });
};
