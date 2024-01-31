const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSongById = ({ songId }) => submitQuery`
    SELECT artist_id, album_id, song_name, song_genre, song_year FROM songs WHERE song_id = ${songId}
    `;
module.exports = camelKeys(selectSongById);
