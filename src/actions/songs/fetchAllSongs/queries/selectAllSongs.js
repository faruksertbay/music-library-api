const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllSongs = () => submitQuery`
    SELECT * FROM songs;
`;

module.exports = camelKeys(selectAllSongs);
