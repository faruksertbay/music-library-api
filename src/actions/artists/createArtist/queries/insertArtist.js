const { submitQuery, getInsertId } = require("~root/lib/database");

const insertArtist = async ({ artistName, artistGenre }) => submitQuery`
    INSERT INTO artists (artist_name, artist_genre)
    VALUES (${artistName}, ${artistGenre});
`;

module.exports = getInsertId(insertArtist);
