const { Router } = require('express');
const routerAllMovies = require("./Movies");


const router = Router();

//MIDLEWEARE
router.use("movies", routerAllMovies)


module.exports = router;
