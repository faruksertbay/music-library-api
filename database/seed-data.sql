/* Initialize DB with some seed data */
USE `music_library_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");


INSERT INTO artists (artist_name, artist_genre)
VALUES ("OutKast", "Hip Hop");

INSERT INTO artists (artist_name, artist_genre)
VALUES ("Common", "Hip Hop");

INSERT INTO artists (artist_name, artist_genre)
VALUES ("Frank Ocean", "Rnb");



INSERT INTO albums (artist_id, album_name, album_year)
VALUES (1, "Stankonia", 2000);

INSERT INTO albums (artist_id, album_name, album_year)
VALUES (2, "Like Water for Chocolate", 2000);

INSERT INTO albums (artist_id, album_name, album_year)
VALUES (3, "Channel Orange", 2012);


INSERT INTO songs (artist_id, album_id, song_name, song_genre, song_year)
VALUES (1, 1, "Ms. Jackson", "Hip Hop", 2000);

INSERT INTO songs (artist_id, album_id, song_name, song_genre, song_year)
VALUES (1, 1, "B.O.B", "Hip Hop", 2000);

INSERT INTO songs (artist_id, album_id, song_name, song_genre, song_year)
VALUES (2, 2, "The Light", "Hip Hop", 2000);