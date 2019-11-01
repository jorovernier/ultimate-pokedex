DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

INSERT INTO users (username, password, email)
VALUES
('pokemon-master', '$2b$12$NUdUEBQIAd/Ef47r9cDNc.2Lx2Bum00rbwXCnYeVSdFnEFrbWNjeW', 'theverybest@pokemail.com');

CREATE TABLE team (
    team_id SERIAL PRIMARY KEY,
    p1 INTEGER,
    p2 INTEGER,
    p3 INTEGER,
    p4 INTEGER,
    p5 INTEGER,
    p6 INTEGER,
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO team (p1, user_id)
VALUES (25, 1);

SELECT users.user_id, username, password, email, p1 FROM users
JOIN team ON (users.user_id = team.user_id);
-- $2b$12$NUdUEBQIAd/Ef47r9cDNc.2Lx2Bum00rbwXCnYeVSdFnEFrbWNjeW = 'pikachu342'