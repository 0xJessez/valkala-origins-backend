CREATE DATABASE
valkala_origins;
\c valkala_origins

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    ,username TEXT
    ,password_digest TEXT
);

CREATE TABLE characters(
    id SERIAL PRIMARY KEY
    ,user_id INT
    ,energy INT
    ,level INT
    ,exp INT
    ,hp INT
    ,mainhand TEXT
    ,offhand TEXT
    ,helm TEXT
    ,mainhand_tier INT
    ,offhand_tier INT
    ,helm_tier INT
);



-- below to be reviewed

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY
    ,name TEXT
    ,recipe_id INT
    ,rating INT
    ,review TEXT
);

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY
    ,name TEXT
    ,image_url TEXT
    ,description TEXT
    ,recipe_id INT
);

INSERT INTO reviews(name, recipe_id, rating, review)
VALUES
    ('Jesse', 1111, 4, 'Great')
    ,('George', 2222, 2, 'Bad');


ALTER TABLE users
ADD CONSTRAINT unique_users
UNIQUE(username, email);

DROP TABLE reviews;

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY
    ,user_id INT
    ,recipe_id INT
    ,rating INT
    ,review TEXT
);

INSERT INTO reviews(user_id, recipe_id, rating, review)
VALUES
    (1, 1096010, 4, 'Great')
    ,(2, 1096010, 2, 'Bad');

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    recipe_id INT,
    user_id INT
);