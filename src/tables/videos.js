import db from "./../connexion.js"

const stmtexisteall = db.prepare("SELECT * FROM video")
const stmtexiste = db.prepare("SELECT * FROM video WHERE id = ?")
const stmtajouter = db.prepare("INSERT INTO video (path) VALUES (?)")
const stmtdelete = db.prepare("DELETE FROM movie WHERE id = ?")
const stmtupdate = db.prepare("UPDATE video SET path = ? WHERE id = ?")

export function getAll(){
    return stmtexisteall.all()
}

export function get(id){
    return stmtexiste.get(id)
}

export function add(path){
    
    return stmtajouter.run(path)
}

export function remove(id){
    return stmtdelete.run(id)
}

export function update(id, path){
    return stmtupdate.run(path, id)
}