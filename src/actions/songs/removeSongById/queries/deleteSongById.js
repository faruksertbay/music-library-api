const { submitQuery } = require("~root/lib/database");

const deleteSongById = ({ songId }) => submitQuery`
    DELETE FROM songs WHERE song_id = ${songId} 
`;

module.exports = deleteSongById;
