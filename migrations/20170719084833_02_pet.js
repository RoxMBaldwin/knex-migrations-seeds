
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.integer('age');
    table.integer('owner_id').references('owner.id').unsigned().onDelete('cascade');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pet');
};
