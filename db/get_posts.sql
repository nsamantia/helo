SELECT  p.id, u.username, p.author_id, p.content, p.img, p.title
FROM posts p
JOIN users u ON p.author_id = u.id