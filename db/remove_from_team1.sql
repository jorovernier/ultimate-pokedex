UPDATE team
SET p1 = NULL
WHERE user_id = $2;

UPDATE team
SET p1_name = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;