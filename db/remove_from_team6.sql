UPDATE team
SET p6 = NULL
WHERE user_id = $2;

UPDATE team
SET p6_name = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;