const { submitQuery } = require("~root/lib/database");

const deleteAlbumById = ({ albumId }) => submitQuery`
    DELETE FROM albums WHERE album_id = ${albumId} 
`;

module.exports = deleteAlbumById;
