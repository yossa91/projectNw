CREATE TABLE member(  
    id VARCHAR(100) NOT NULL PRIMARY KEY,
    psw VARCHAR(100),
    name VARCHAR(100),
    phone VARCHAR(100),
    mobile VARCHAR(100),
    mail VARCHAR(200),
    mailing VARCHAR(20),
    sms VARCHAR(20),
    adrs VARCHAR(255)
) DEFAULT CHARSET UTF8 COMMENT 'newTable';