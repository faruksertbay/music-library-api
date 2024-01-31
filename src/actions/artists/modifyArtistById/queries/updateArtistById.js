const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateArtistById = ({
  artistId,
  artistName = null,
  artistGenre = null
}) => {
  const updates = [];

  if (artistName !== null) {
    updates.push(sql`artist_name = ${artistName}`);
  }

  if (artistGenre !== null) {
    updates.push(sql`artist_genre = ${artistGenre}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPDATE
     artists
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     artist_id = ${artistId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateArtistById;
