const deleteAlbumById = require("./queries/deleteAlbumById");

const removeAlbumById = async ({ albumId }) => {
  const deletedAlbum = await deleteAlbumById({ albumId });
  return { deletedAlbum };
};

module.exports = removeAlbumById;
