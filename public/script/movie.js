
function createFicheMovie(movie){

    document.getElementById("title").innerHTML = movie.name
    document.getElementById("img").innerHTML = `<img src="${movie.path_img}" alt="${movie.name} class="rounded">`
    document.getElementById("description").innerHTML =`<p> ${movie.description}</p>`
    //TODO document.getElementById("video").
}

/**
 * TODO
 * GET parameter lien address
 * ajouter cote serveur way to get specific movie and show
 */