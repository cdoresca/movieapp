import db from "./../connexion.js"

const stmtexiste = db.prepare("SELECT * FROM user WHERE username =? AND password=?")

export function get(username,password){
    return stmtexiste.get(username,password)
}