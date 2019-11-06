INSERT INTO users (username, password, email)
VALUES ($1, $2, $3);

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

SELECT email, username FROM users
WHERE email = $3;