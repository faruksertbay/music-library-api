const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateSongById = ({
  songId,
  artistId = null,
  albumId = null,
  songName = null,
  songGenre = null,
  songYear = null
}) => {
  const updates = [];

  if (artistId !== null) {
    updates.push(sql`artist_id = ${artistId}`);
  }

  if (albumId !== null) {
    updates.push(sql`album_id = ${albumId}`);
  }

  if (songName !== null) {
    updates.push(sql`song_name = ${songName}`);
  }

  if (songGenre !== null) {
    updates.push(sql`song_genre = ${songGenre}`);
  }

  if (songYear !== null) {
    updates.push(sql`song_year = ${songYear}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPDATE
     songs
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     song_id = ${songId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateSongById;
