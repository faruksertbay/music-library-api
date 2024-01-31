const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllAlbums = () => submitQuery`
    SELECT * FROM albums;
`;

module.exports = camelKeys(selectAllAlbums);
