UPDATE team
SET p1 = NULL, p1_name = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;