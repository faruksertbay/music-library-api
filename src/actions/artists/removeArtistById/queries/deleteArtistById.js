const { submitQuery } = require("~root/lib/database");

const deleteArtistById = ({ artistId }) => submitQuery`
    DELETE FROM artists WHERE artist_id = ${artistId} 
`;

module.exports = deleteArtistById;
