DROP DATABASE IF EXISTS grant_me;

CREATE DATABASE grant_me;

\c grant_me;

CREATE TABLE states
(
  "id" SERIAL PRIMARY KEY NOT NULL,
  "state" varchar(255) NOT NULL,
  "state_code" varchar(255) NOT NULL
  );

CREATE TABLE cities
(
  "id" SERIAL PRIMARY KEY NOT NULL,
  "city" varchar(255) NOT NULL,
  "state_code" varchar(255) NOT NULL,
  "county" varchar(255) NOT NULL
);

CREATE TABLE business_type
(
  "id" SERIAL PRIMARY KEY NOT NULL,
  "selection" varchar(255) NOT NULL
);

COPY states
  (state, state_code)
FROM '/Users/student_04/Desktop/final_project/server/migrations/usa_states.csv'
    DELIMITER ',' CSV;

COPY cities
(city, state_code, county)
FROM '/Users/student_04/Desktop/final_project/server/migrations/usa_states_counties.csv'
    DELIMITER ',' CSV;

COPY business_type
(selection)
FROM '/Users/student_04/Desktop/final_project/server/migrations/selections.csv'
    DELIMITER ',' CSV;
