BEGIN;

DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS group_list CASCADE;
DROP TABLE IF EXISTS event_list CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE group_list (
  id SERIAL PRIMARY KEY,
  group_name VARCHAR NOT NULL
);

INSERT INTO group_list (group_name)
VALUES
    ('Friends'),
    ('Family');

CREATE TABLE event_list (
  id SERIAL PRIMARY KEY,
  event_name VARCHAR NOT NULL
);

INSERT INTO event_list (event_name)
VALUES
    ('Birthday'),
    ('Anniversary');

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  phone VARCHAR(15) NOT NULL,
  group_name VARCHAR NOT NULL
);

INSERT INTO contacts (name, phone, group_name)
VALUES
    ('James Levine', '+4407590060709', 'Friends'),
    ('Sylvia Hoang', '+4407564498909', 'Family'),
    ('Burhan Baalwaan', '+4407564498111', 'Family');

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_name VARCHAR NOT NULL,
  event_date DATE NOT NULL,
  contact_name VARCHAR NOT NULL,
  event_monthday VARCHAR NOT NULL
);

INSERT INTO events (event_name, event_date, contact_name, event_monthday)
VALUES
    ('Birthday', '1991-01-10', 'James Levine', '0110'),
    ('Anniversary', '2015-06-07', 'James Levine', '0607'),
    ('Birthday', '1996-09-14', 'Sylvia Hoang', '0914'),
    ('Birthday', '1990-11-23', 'Burhan Baalwaan', '1123'),
    ('Anniversary', '2018-07-21', 'Burhan Baalwaan', '0721'),
    ('Birthday', '2019-11-23', 'Burhan Baalwaan', '1123'),
    ('Anniversary', '2019-07-21', 'Burhan Baalwaan', '0721');

CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR NOT NULL,
      last_name VARCHAR NOT NULL,
      mobile_number VARCHAR NOT NULL,
      email VARCHAR NOT NULL,
      hashed_pass VARCHAR NOT NULL
);

INSERT INTO users (first_name, last_name, mobile_number, email, hashed_pass)
VALUES
    ('James', 'Limbo', '12345678', 'abc123@gmail.com', 'pass');

COMMIT;
