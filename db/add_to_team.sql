UPDATE team
SET p$3 = $1
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;