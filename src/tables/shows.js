import db from "./../connexion.js"

const stmtexisteall = db.prepare("SELECT * FROM show")
const stmtexiste = db.prepare("SELECT * FROM show WHERE id = ?")
const stmtajouter = db.prepare("INSERT INTO show (name) VALUES (?)")
const stmtdelete = db.prepare("DELETE FROM show WHERE id = ?")
const stmtupdate = db.prepare("UPDATE show SET name = ?")

export function getAll(){
    return stmtexisteall.all()
}

export function get(id){
    return stmtexiste.get(id)
}

export function add(nom){
    
    return stmtajouter.run(nom)
}

export function remove(id){
    return stmtdelete.run(id)
}

export function update(nom){
    return stmtupdate.run(nom)
}