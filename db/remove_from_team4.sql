UPDATE team
SET p4 = NULL
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;