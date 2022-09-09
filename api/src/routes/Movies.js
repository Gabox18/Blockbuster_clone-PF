const router = require("express").Router();
const {getMovies} = require('../Controllers/Gets') 


//GET ALL

router.get("/", getMovies)




module.exports = router;