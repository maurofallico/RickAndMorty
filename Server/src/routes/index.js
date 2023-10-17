const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const getAllCharacters = require('../controllers/getAllCharacters')

const {postFav, deleteFav} = require('../controllers/handleFavs')
const postUser = require('../controllers/postUser')


const router = Router ()

router.get("/character/:id", getCharById)
router.get("/login", login)
router.get("/characters", getAllCharacters)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)
router.post("/login", postUser)

module.exports = router