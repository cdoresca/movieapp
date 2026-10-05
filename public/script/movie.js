
function createFicheMovie(movie){

    document.getElementById("title").innerHTML = movie.name
    document.getElementById("img").src = movie.path_img 
    document.getElementById("img").alt= movie.name
    document.getElementById("description").innerHTML =`<p> ${movie.description}</p>`
    document.getElementById("video").href = `"/watch.html"id=${movie.video_id}`
}

async function init(){

    const params = new URLSearchParams(location.search)
    const movie_id = params.get("id")

    const reponse = await fetch(`/api/movie/${movie_id}`)

    const movie = await reponse.json()
    if(reponse.ok){
        createFicheMovie(movie)
    }
    else{
        alert(movie.error)
    }

}

init()