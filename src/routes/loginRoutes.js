import express from "express"
import * as user from "../gestion/userGestion.js"

const router = express.Router()

router.post("/login",(req,res) =>{
    try{

        const {username, password} =  req.body
        user.get(username, password)
    
        res.json({ message: "Connexion réussie" })
    }
    catch(e){
        console.log(e)
        res.status(401).json({ error: e.message })

    }
})

export default router
