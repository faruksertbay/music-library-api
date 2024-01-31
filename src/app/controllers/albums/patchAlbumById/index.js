const modifyAlbumById = require("~root/actions/albums/modifyAlbumById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchAlbumById = async (req, res) => {
  const { albumId } = req.params;
  const { artistId, albumName, albumYear } = req.body;

  try {
    const { album } = await modifyAlbumById({
      albumId,
      artistId,
      albumName,
      albumYear
    });

    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchAlbumById;
