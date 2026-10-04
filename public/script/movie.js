
function createFicheMovie(movie){

    document.getElementById("title").innerHTML = movie.name
    document.getElementById("img").innerHTML = `<img src="${movie.path_img}" alt="${movie.name} class="rounded">`
    document.getElementById("description").innerHTML =`<p> ${movie.description}</p>`
    document.getElementById("video").href = `"/watch.html"id=${movie.video_id}`
}

async function init(){

    const params = new URLSearchParams(location.search)
    const movie_id = params.get("id")

    const reponse = await fetch("/api/movie",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id : movie_id})
    })

    const movie = await reponse.json()
    createFicheMovie(movie)
}

init()