import express from "express"
import * as movie from "../gestion/movieGestion.js"

const router = express.Router()

router.get("/movie/:id", (req,res)=>{
    try{
        const id = req.params.id
        res.json({ movie : movie.get(id)})

    }catch(e){
        console.log(e)
        res.status(404).json({ error : e.message })
    }
})

export default router