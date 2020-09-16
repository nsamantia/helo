DROP TABLE IF EXISTS posts 
DROP TABLE IF EXISTS users CASCADE


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    hash varchar(20),
    profile_pic TEXT
)

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    img TEXT,
    content TEXT,
    author_id integer references users(id)
    
)


ALTER TABLE users
ALTER COLUMN hash
SET DATA TYPE TEXT