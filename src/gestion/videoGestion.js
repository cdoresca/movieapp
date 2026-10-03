import * as video from "../tables/videos.js"

export function afficher(){
    return video.getAll()
}

export function get(id){
    if(!video.get(id))
        throw new Error("ID est video invalide")
    return video.get(id)
}

export function addVideo(path){
    if(!path)
        throw new Error("Le path est invalide")
    if(video.getByPath(path))
        throw new Error("La video existe deja.")

    video.add(path)
}

export function removeVideo(id){
    if(!video.get(id))
        throw new Error("ID est video invalide")
    video.remove(id)
}

export function updateVideo(id,path){
    if(!path)
        throw new Error("path invalide")

    if(!video.getByPath(path))
        throw new Error("La video n'existe pas deja.")
    video.update(id, path)
}

