const { submitQuery, getInsertId } = require("~root/lib/database");

const insertAlbum = async ({ artistId, albumName, albumYear }) => submitQuery`
    INSERT INTO albums (artist_id, album_name, album_year)
    VALUES (${artistId},${albumName}, ${albumYear});
`;

module.exports = getInsertId(insertAlbum);
