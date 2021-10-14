DROP DATABASE IF EXISTS br;
CREATE DATABASE br;

\c br;

CREATE TABLE users (
  id integer,
  username varchar,
  platform varchar,
  PRIMARY KEY (id)
);

CREATE TABLE apex (
  id integer,
  user_id integer,

  username varchar(25),
  platform varchar(10),
  player_rank varchar(15),
  player_level integer,
  kills integer,

  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

