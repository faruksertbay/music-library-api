const updateArtistById = require("./queries/updateArtistById");

const modifyArtistById = async ({ artistId, artistName, artistGenre }) => {
  const artist = await updateArtistById({
    artistId,
    artistName,
    artistGenre
  });

  return { artist };
};

module.exports = modifyArtistById;
