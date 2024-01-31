const handleAPIError = require("~root/utils/handleAPIError");
const createAlbum = require("~root/actions/albums/createAlbum");

const postAlbum = async (req, res) => {
  const { artistId, albumName, albumYear } = req.body;

  try {
    const { albumId } = await createAlbum({ artistId, albumName, albumYear });

    res.status(201).send({
      albumId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postAlbum;
