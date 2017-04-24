const pgp =require('pg-promise')();
const db  = pgp(process.env.DATABASE_URL || 'postgress://student_04@localhost:5432/grant_me' );

module.exports = db;
