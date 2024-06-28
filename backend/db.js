const { Client } = require('pg');

let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'postgresql:///greenthumb_test';
} else if (process.env.NODE_ENV === 'production') {
  DB_URI = 'postgres://wglihlii:STPqHtuqMRCaA1vGbig5Yo5kJ3ceMUrI@stampy.db.elephantsql.com/wglihlii';
} else {
  DB_URI = 'postgresql:///greenthumb';
}

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
