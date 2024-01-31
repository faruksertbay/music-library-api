const deleteArtistById = require("./queries/deleteArtistById");

const removeArtistById = async ({ artistId }) => {
  const deletedArtist = await deleteArtistById({ artistId });
  return { deletedArtist };
};

module.exports = removeArtistById;
