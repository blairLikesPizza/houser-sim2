CREATE TABLE if not exists house (
    id SERIAL PRIMARY KEY,
    recommendedRent DECIMAL (20, 2) NOT NULL,
    propName VARCHAR(180) NOT NULL,
    propDescription VARCHAR(600),
    addressOne VARCHAR(180) NOT NULL,
    addressTwo VARCHAR(180) NOT NULL,
    addressThree VARCHAR(25) NOT NULL,
    addressFour VARCHAR(5) NOT NULL,
    imgURL TEXT,
    loan DECIMAL(20, 2) NOT NULL,
    mortgage DECIMAL(20, 2) NOT NULL,
    desiredRent DECIMAL(20, 2) NOT NULL
)