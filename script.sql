CREATE TABLE video(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path VARCHAR(255)
    
);
CREATE TABLE movie (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    video_id INTEGER,
    name VARCHAR(255),
    path_img VARCHAR(255),
    FOREIGN KEY(video_id) 
    REFERENCES video(id) 
    ON DELETE CASCADE
);
CREATE TABLE show (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    path_img VARCHAR(255)
    
);
CREATE TABLE episode(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    show_id INTEGER,
    video_id INTEGER,
    FOREIGN KEY(show_id) REFERENCES show(id) ON DELETE CASCADE,
    FOREIGN KEY(video_id) REFERENCES video(id)
    ON DELETE CASCADE
);
CREATE TABLE user( username VARCHAR(255), password VARCHAR(255),PRIMARY KEY(username, password) );

INSERT INTO user (username,password) VALUES ('foo','foo')
