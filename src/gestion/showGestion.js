import * as show from "../tables/shows.js"
import * as episode from "../tables/episodes.js"


export function afficher(){
    return show.getAll()
}

export function get(id){
    if(!show.get(id))
        throw new Error("ID est  invalide")
    return show.get(id)
}

export function getEpisode(id){
    if(!show.get(id))
        throw new Error("ID est  invalide")
    return episode.showGet(id)
}

export function addShow(name){
    if(!name)
        throw new Error("Le nom est invalide")
    
    show.add(name)
}

export function removeShow(id){
    if(!show.get(id))
        throw new Error("ID est show invalide")
    show.remove(id)
}

export function updateShow(id, name){
   if(!name)
        throw new Error("Le nom est invalide")
    show.update(id, name)
}


export function searchShow(terme){
    return show.search(terme)
}

