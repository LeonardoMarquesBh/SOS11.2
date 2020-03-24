
exports.up = function(knex) { /** UP --> responsabel pela a criacao da tabela */
  return knex.schema.createTable('ongs',function (table) {
      table.string('id').primary();
      table.string('name').notNullable(); /** nao pode ser vazio*/
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable(); /**passamos o 2 pois ja sabemos o tamanho, assim ele ja fixa! */
  })
};

exports.down = function(knex) { /**DOWN --> caso precise voltar atra, desfazer,deletar */
  return knex.schema.dropTable('ongs');
};
