UPDATE team
SET p3 = NULL, p3_name = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;