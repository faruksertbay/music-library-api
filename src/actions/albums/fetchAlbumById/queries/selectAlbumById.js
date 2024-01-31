const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAlbumById = ({ albumId }) => submitQuery`
    SELECT artist_id, album_name, album_year FROM albums WHERE album_id = ${albumId}
    `;
module.exports = camelKeys(selectAlbumById);
