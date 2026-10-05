import db from "./../connexion.js"

const stmtexisteall = db.prepare("SELECT * FROM episode")
const stmtexiste = db.prepare("SELECT * FROM episode WHERE id = ?")
const stmtajouter = db.prepare("INSERT INTO episode (name, show_id,video_id) VALUES (?, ?,?)")
const stmtdelete = db.prepare("DELETE FROM episode WHERE id = ?")
const stmtupdate = db.prepare("UPDATE episode SET name = ?, show_id = ?, video_id = ? where id = ?")
const stmtshow = db.prepare("SELECT * FROM episode WHERE show_id =?")

export function getAll(){
    return stmtexisteall.all()
}

export function get(id){
    return stmtexiste.get(id)
}

export function add(nom, show_id,video_id){
    
    return stmtajouter.run(nom, show_id,video_id)
}

export function remove(id){
    return stmtdelete.run(id)
}

export function update(id, nom, show_id, video_id){
    return stmtupdate.run(nom, show_id,video_id,id)
}

export function showGet(show_id){
    return stmtshow.get(show_id)
}