const { Client } = require('pg');

const DB_URI = process.env.DATABASE_URL || 'postgres://wglihlii:STPqHtuqMRCaA1vGbig5Yo5kJ3ceMUrI@stampy.db.elephantsql.com/wglihlii';

let dbConfig = {
  connectionString: DB_URI
};

if (process.env.NODE_ENV === 'production') {
  dbConfig.ssl = {
    rejectUnauthorized: false
  };
}

let db = new Client(dbConfig);

db.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = db;
