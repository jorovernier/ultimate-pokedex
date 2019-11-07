DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    img_url TEXT
);

INSERT INTO users (username, password, email, img_url)
VALUES
('pokemon-master', '$2b$12$NUdUEBQIAd/Ef47r9cDNc.2Lx2Bum00rbwXCnYeVSdFnEFrbWNjeW', 'theverybest@pokemail.com', 'http://files.gamebanana.com/img/ico/sprays/554003d253be0.png');

-- UPDATE users
-- SET img_url = 'http://files.gamebanana.com/img/ico/sprays/554003d253be0.png'
-- WHERE img_url IS NULL;

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

SELECT users.user_id, username, password, email, img_url, p1 FROM users
JOIN team ON (users.user_id = team.user_id);