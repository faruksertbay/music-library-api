const fetchAlbumById = require("~root/actions/albums/fetchAlbumById");
const handleAPIError = require("~root/utils/handleAPIError");

const getAlbumById = async (req, res) => {
  const { albumId } = req.params;
  try {
    const { album } = await fetchAlbumById({
      albumId
    });
    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getAlbumById;
