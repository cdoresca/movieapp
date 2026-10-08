import express from "express"
import * as movies from "../gestion/movieGestion.js"
import * as shows from "../gestion/showGestion.js"

const router = express.Router()

router.get("/search",(req,res)=>{
    try{
        
        let terme = req.query.terme
        res.json({movie: movies.searchMovie(terme),show: shows.searchShow(terme)})
    }
    catch(e){
        console.log(e)
        res.status(500).json({error: e.message})
    }
})

export default router 