UPDATE posts
set content = $1
WHERE id = $2
returning *;