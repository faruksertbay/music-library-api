const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtistById = ({ artistId }) => submitQuery`
    SELECT artist_name, artist_genre FROM artists WHERE artist_id = ${artistId}
    `;
module.exports = camelKeys(selectArtistById);
