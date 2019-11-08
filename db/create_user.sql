INSERT INTO users (username, password, email, img_url)
VALUES ($1, $2, $3, 'http://files.gamebanana.com/img/ico/sprays/554003d253be0.png');

INSERT INTO team (p1, p2, p3, p4, p5, p6)
VALUES (NULL, NULL, NULL, NULL, NULL, NULL);

UPDATE team
SET user_id = team_id;

SELECT email, username FROM users
WHERE email = $3;

SELECT users.user_id, username, password, email, img_url, p1 FROM users
JOIN team ON (users.user_id = team.user_id)
WHERE email = $3;