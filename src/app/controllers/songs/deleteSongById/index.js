const removeSongById = require("~root/actions/songs/removeSongById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteSongById = async (req, res) => {
  const { songId } = req.params;

  try {
    const { deletedSong } = await removeSongById({
      songId
    });

    res.status(201).send({ deletedSong });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteSongById;
