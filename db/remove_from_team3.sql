UPDATE team
SET p3 = NULL, p3_name = NULL
WHERE user_id = $1;

SELECT * FROM team
WHERE user_id = $1;