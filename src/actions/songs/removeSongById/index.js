const deleteSongById = require("./queries/deleteSongById");

const removeSongById = async ({ songId }) => {
  const deletedSong = await deleteSongById({ songId });
  return { deletedSong };
};

module.exports = removeSongById;
