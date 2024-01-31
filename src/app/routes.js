const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const postArtist = require("./controllers/artists/postArtist");
const getAllArtists = require("./controllers/artists/getAllArtists");
const getArtistById = require("./controllers/artists/getArtistById");
const patchArtistById = require("./controllers/artists/patchArtistById");
const deleteArtistById = require("./controllers/artists/deleteArtistById");
const getAllAlbums = require("./controllers/albums/getAllAlbums");
const getAlbumById = require("./controllers/albums/getAlbumById");
const postAlbum = require("./controllers/albums/postAlbum");
const patchAlbumById = require("./controllers/albums/patchAlbumById");
const deleteAlbumById = require("./controllers/albums/deleteAlbumById");
const getAllSongs = require("./controllers/songs/getAllSongs");
const getSongsById = require("./controllers/songs/getSongsById");
const postSong = require("./controllers/songs/postSong");
const patchSongById = require("./controllers/songs/patchSongById");
const deleteSongById = require("./controllers/songs/deleteSongById");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

// ALL ENDPOINTS WERE TESTED WITH POSTMAN AND WORK AS EXPECTED

// artists

router.post("/artist", postArtist);

router.get("/artists", getAllArtists);

router.get("/artist/:artistId", getArtistById);

router.patch("/artist/:artistId", patchArtistById);

router.delete("/artists/:artistId", deleteArtistById);

// albums

router.get("/albums", getAllAlbums);

router.get("/album/:albumId", getAlbumById);

router.post("/album", postAlbum);

router.patch("/album/:albumId", patchAlbumById);

router.delete("/albums/:albumId", deleteAlbumById);

// songs

router.get("/songs", getAllSongs);

router.get("/song/:songId", getSongsById);

router.post("/song", postSong);

router.patch("/song/:songId", patchSongById);

router.delete("/songs/:songId", deleteSongById);

module.exports = router;
