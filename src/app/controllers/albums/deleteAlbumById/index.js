const removeAlbumById = require("~root/actions/albums/removeAlbumById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteAlbumById = async (req, res) => {
  const { albumId } = req.params;

  try {
    const { deletedAlbum } = await removeAlbumById({
      albumId
    });

    res.status(201).send({ deletedAlbum });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteAlbumById;
