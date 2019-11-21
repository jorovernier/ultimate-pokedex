UPDATE team
SET p5 = NULL
WHERE user_id = $2;

UPDATE team
SET p5_name = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;