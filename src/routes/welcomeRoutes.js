import express from "express"
import * as movies from "../gestion/movieGestion.js"
import * as shows from "../gestion/showGestion.js"

const router = express.Router()

router.get("/welcome",(req,res) =>{
    try{

        res.json({movie: movies.afficher(), show: shows.afficher()})
    }
    catch(e){
        console.log(e)
        res.status(500).json({error:e.message})
    }
})

export default router