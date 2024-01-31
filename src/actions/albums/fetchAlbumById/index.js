const selectAlbumById = require("./queries/selectAlbumById");

const fetchAlbumById = async ({ albumId }) => {
  const album = await selectAlbumById({
    albumId
  });
  return { album };
};
module.exports = fetchAlbumById;
