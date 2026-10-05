import * as episodes from "../tables/episodes.js"
import * as video from "../tables/videos.js"



export function afficher(){
    return episodes.getAll()
}

export function get(id){
    if(!episodes.get(id))
        throw new Error("ID est  invalide")
    return episodes.get(id)
}


export function addEpisode(name, show_id ,video_id){
    if(!name)
        throw new Error("Le nom est invalide")
    if(!video_id)
        throw new Error("ID video est invalide")
    if(!show_id)
        throw new Error("ID show est invalide")
    if(!show_id.get(show_id))
        throw new Error("show n'existe pas")
    if(!video.get(video_id))
        throw new Error("la video n'existe pas")

    episodes.add(name, show_id, video_id)
}

export function removeEpisode(id){
    if(!movies.get(id))
        throw new Error("ID est video invalide")
    episodes.remove(id)
}

export function updateEpisode(id, name, show_id,video_id){
   if(!name)
        throw new Error("Le nom est invalide")
    if(!video_id)
        throw new Error("ID video est invalide")
     if(!show_id)
        throw new Error("ID show est invalide")
    if(!show_id.get(show_id))
        throw new Error("show n'existe pas")
    if(!video.get(video_id))
        throw new Error("la video n'existe pas")

    episodes.update(id, name, show_id, video_id)
}

