UPDATE team
SET p2 = NULL, p2_name = NULL
WHERE user_id = $1;

SELECT * FROM team
WHERE user_id = $1;