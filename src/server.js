import  express from "express"
import welcome from "./routes/welcomeRoutes.js"
import login from "./routes/loginRoutes.js"



const app = express()

app.use(express.json())

app.use("/api",welcome)
app.use("/api",login)

app.use(express.static("public"))

app.listen(3000, () =>
    console.log("Serveur sur http://localhost:3000")
)