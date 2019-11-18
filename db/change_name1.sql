-- UPDATE team
-- SET ${slot} = ${name}
-- WHERE user_id = ${user_id};

-- SELECT * FROM team
-- WHERE user_id = ${user_id};

UPDATE team
SET p1_name = $1
WHERE user_id = $2;

SELECT * FROM team
WHERE user_id = $2;