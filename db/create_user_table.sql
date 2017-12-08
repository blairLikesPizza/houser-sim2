CREATE TABLE HouserUsers (
    userid SERIAL PRIMARY KEY,
    username VARCHAR(180) NOT NULL,
    password VARCHAR(180) NOT NULL
)