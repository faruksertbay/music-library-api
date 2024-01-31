const fetchSongById = require("~root/actions/songs/fetchSongById");
const handleAPIError = require("~root/utils/handleAPIError");

const getSongsById = async (req, res) => {
  const { songId } = req.params;
  try {
    const { song } = await fetchSongById({
      songId
    });
    res.status(201).send({
      song
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getSongsById;
