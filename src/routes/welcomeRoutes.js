import express from "express"
import * as movies from "../gestion/movieGestion.js"
import * as shows from "../gestion/showGestion.js"

const router = express.Router()

router.get("/welcome",(req,res) =>{
    res.json({movie: movies.afficher(), show: shows.afficher()})
})

export default router