UPDATE team
SET p6 = $1
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;