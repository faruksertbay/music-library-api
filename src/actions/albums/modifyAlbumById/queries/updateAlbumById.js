const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateAlbumById = ({
  albumId,
  artistId = null,
  albumName = null,
  albumYear = null
}) => {
  const updates = [];

  if (artistId !== null) {
    updates.push(sql`artist_id = ${artistId}`);
  }
  if (albumName !== null) {
    updates.push(sql`album_name = ${albumName}`);
  }

  if (albumYear !== null) {
    updates.push(sql`album_year = ${albumYear}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPDATE
     albums
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     album_id = ${albumId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateAlbumById;
