import express from "express" 
import * as fs from 'node:fs'
import * as videos from "../gestion/videoGestion.js"
const router = express.Router()

router.get("/video/:id",(req, res)=>{
    try{
        const id = req.params.id
        const video = videos.get(id)

        const range = req.headers.range
        const sizeFile = fs.statSync(video.path).size

        if(!range){
            res.writeHead(200, {
                "Content-Length": sizeFile,
                "Content-Type": "video/mp4",
            })
            fs.createReadStream(video.path).pipe(res)
            return 
        }

        const parts = range.replace(/bytes=/, "").split()
        const start = parseInt(parts[0])
        const end = parts[1] ? parseInt(parts[1]) : sizeFile - 1
        const chunkSize = end - start + 1

        res.writeHead(206, {
            "Content-Range":`bytes ${start}-${end}/${sizeFile}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkSize,
            "Content-Type": "video/mp4",
        })

        fs.createReadStream(video.path).pipe(res)
    }
    catch(e){
        console.log(e)
        res.status(404).json({ error : e.message })

    }

})  

export default router