
-- 1. Write an SQL statement to select all articles with their author’s email.


SELECT * , user.email AS author_email
FROM article
INNER JOIN user ON article.author_id = user.id;

-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.

SELECT *
FROM article
ORDER BY id
LIMIT 6, 6;
