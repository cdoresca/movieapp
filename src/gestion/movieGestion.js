import * as movies from "../tables/movies.js"
import * as video from "../tables/videos.js"

export function afficher(){
    return movies.getAll()
}

export function get(id){
    if(!movies.get(id))
        throw new Error("ID est  invalide")
    return movies.get(id)
}

export function addMovie(name, video_id){
    if(!name)
        throw new Error("Le nom est invalide")
    if(!video_id)
        throw new Error("ID video est invalide")
    if(!video.get(video_id))
        throw new Error("la video n'existe pas")

    movies.add(name, video_id)
}

export function removeMovie(id){
    if(!movies.get(id))
        throw new Error("ID est video invalide")
    movies.remove(id)
}

export function updateMovie(id, name, video_id){
   if(!name)
        throw new Error("Le nom est invalide")
    if(!video_id)
        throw new Error("ID video est invalide")
    if(!video.get(video_id))
        throw new Error("la video n'existe pas")

    movies.update(id, name,video_id)
}

export function searchMovie(terme){
    return movies.search(terme)
}