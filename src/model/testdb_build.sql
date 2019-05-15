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
  group_id INTEGER REFERENCES group_list(id) NOT NULL
);

INSERT INTO contacts (name, phone, group_id)
VALUES
    ('James Levine', '+4407590060709', 1),
    ('Sylvia Hoang', '+4407564498909', 2),
    ('Burhan Baalwaan', '+4407564498111', 2);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES event_list(id) NOT NULL,
  event_date DATE NOT NULL,
  contact_id INTEGER REFERENCES contacts(id) NOT NULL
);

INSERT INTO events (event_id, event_date, contact_id)
VALUES
    (1, '1991-01-10', 1),
    (2, '2015-06-07', 1),
    (1, '1996-09-14', 2),
    (1, '1990-11-23', 3),
    (2, '2018-07-21', 3);

COMMIT;
