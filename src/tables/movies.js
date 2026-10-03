import db from "./../connexion.js"

const stmtexisteall = db.prepare("SELECT * FROM movie")
const stmtexiste = db.prepare("SELECT * FROM movie WHERE id = ?")
const stmtajouter = db.prepare("INSERT INTO movie (name, video_id) VALUES (?, ?)")
const stmtdelete = db.prepare("DELETE FROM movie WHERE id = ?")
const stmtupdate = db.prepare("UPDATE movie SET name = ?, video_id = ? WHERE id = ?")

export function getAll(){
    return stmtexisteall.all()
}

export function get(id){
    return stmtexiste.get(id)
}

export function add(nom, video_id){
    
    return stmtajouter.run(nom, video_id)
}

export function remove(id){
    return stmtdelete.run(id)
}

export function update(id, nom, video_id){
    return stmtupdate.run(nom, video_id, id)
}