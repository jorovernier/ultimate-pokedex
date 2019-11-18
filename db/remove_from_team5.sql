UPDATE team
SET p5 = NULL, p5_name = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;