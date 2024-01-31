const selectSongById = require("./queries/selectSongById");

const fetchSongById = async ({ songId }) => {
  const song = await selectSongById({
    songId
  });
  return { song };
};
module.exports = fetchSongById;
