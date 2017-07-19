
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owner', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('email').notNullable().unique();
    table.date('dateCreated').notNullable();
    table.text('bio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('owner');
};
