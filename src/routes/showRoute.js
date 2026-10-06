import express from "express"
import * as shows from "../gestion/showGestion"


const router = express.Router()

router.get("/show/:id",(req,res)=>{
    try{
        const id = req.params.id
        res.json({show:shows.get(id), episode: shows.getEpisode(id)})

    }catch(e){
        console.log(e)
        res.status(404).json({ error : e.message })
    }
})

export default router