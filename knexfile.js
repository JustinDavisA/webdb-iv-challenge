module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/recipebook.sqlite3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    }
  
  };