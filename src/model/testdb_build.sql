BEGIN;

DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS group_list CASCADE;
DROP TABLE IF EXISTS event_list CASCADE;

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
  contact_name VARCHAR NOT NULL
);

INSERT INTO events (event_name, event_date, contact_name)
VALUES
    ('Birthday', '1991-01-10', 'James Levine'),
    ('Anniversary', '2015-06-07', 'James Levine'),
    ('Birthday', '1996-09-14', 'Sylvia Hoang'),
    ('Birthday', '1990-11-23', 'Burhan Baalwaan'),
    ('Anniversary', '2018-07-21', 'Burhan Baalwaan');

COMMIT;
