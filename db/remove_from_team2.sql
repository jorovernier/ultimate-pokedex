UPDATE team
SET p2 = NULL, p2_name = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;