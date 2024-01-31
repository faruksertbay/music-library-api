const insertSong = require("./queries/insertSong");

const createSong = async ({
  artistId,
  albumId,
  songName,
  songGenre,
  songYear
}) => {
  const songId = await insertSong({
    artistId,
    albumId,
    songName,
    songGenre,
    songYear
  });

  return { songId };
};

module.exports = createSong;
