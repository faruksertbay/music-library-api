const insertAlbum = require("./queries/insertAlbum");

const createAlbum = async ({ artistId, albumName, albumYear }) => {
  const albumId = await insertAlbum({ artistId, albumName, albumYear });

  return { albumId };
};

module.exports = createAlbum;
