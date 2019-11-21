UPDATE team
SET p6 = NULL, p6_name = NULL
WHERE user_id = $1;

SELECT * FROM team
WHERE user_id = $1;