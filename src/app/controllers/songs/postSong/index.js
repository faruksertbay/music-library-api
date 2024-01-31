const handleAPIError = require("~root/utils/handleAPIError");
const createSong = require("~root/actions/songs/createSong");

const postSong = async (req, res) => {
  const { artistId, albumId, songName, songGenre, songYear } = req.body;

  try {
    const { songId } = await createSong({
      artistId,
      albumId,
      songName,
      songGenre,
      songYear
    });

    res.status(201).send({
      songId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postSong;
