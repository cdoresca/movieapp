import express from "express"
import * as movie from "../gestion/movieGestion.js"

const router = express.Router()

router.post("/movie", (req,res)=>{
    try{
        const id = req.body.id
        res.json({ movie : movie.get(id)})

    }catch(e){
        console.log(e)
        res.status(500).json({ error : e.message })
    }
})