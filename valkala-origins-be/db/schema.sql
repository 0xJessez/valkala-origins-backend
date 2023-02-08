CREATE DATABASE
valkala_origins;
\c valkala_origins

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    ,username TEXT
    ,password_digest TEXT
);

CREATE TABLE orcs(
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
    ,orc TEXT
);

ALTER TABLE users
ADD CONSTRAINT unique_users
UNIQUE(username);


-- below to be reviewed

INSERT INTO reviews(name, recipe_id, rating, review)
VALUES
    ('Jesse', 1111, 4, 'Great')
    ,('George', 2222, 2, 'Bad');


INSERT INTO reviews(user_id, recipe_id, rating, review)
VALUES
    (1, 1096010, 4, 'Great')
    ,(2, 1096010, 2, 'Bad');

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    recipe_id INT,
    user_id INT
);