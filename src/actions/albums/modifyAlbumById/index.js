const updateAlbumById = require("./queries/updateAlbumById");

const modifyAlbumById = async ({ albumId, artistId, albumName, albumYear }) => {
  const album = await updateAlbumById({
    albumId,
    artistId,
    albumName,
    albumYear
  });

  return { album };
};

module.exports = modifyAlbumById;
