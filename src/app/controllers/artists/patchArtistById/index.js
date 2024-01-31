const modifyArtistById = require("~root/actions/artists/modifyArtistById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchArtistById = async (req, res) => {
  const { artistId } = req.params;
  const { artistName, artistGenre } = req.body;

  try {
    const { artist } = await modifyArtistById({
      artistId,
      artistName,
      artistGenre
    });

    res.status(201).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchArtistById;
