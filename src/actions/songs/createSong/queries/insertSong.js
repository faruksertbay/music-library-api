const { submitQuery, getInsertId } = require("~root/lib/database");

const insertSong = async ({
  artistId,
  albumId,
  songName,
  songGenre,
  songYear
}) => submitQuery`
    INSERT INTO songs (artist_id, album_id, song_name, song_genre, song_year)
    VALUES (${artistId}, ${albumId}, ${songName}, ${songGenre}, ${songYear});
`;

module.exports = getInsertId(insertSong);
