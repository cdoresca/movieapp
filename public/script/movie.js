
function createFicheMovie(movie){
    return `
    <div>
        <img src="${movie.path_img}" class="img-fluid rounded" alt="${movie.name}">
    </div>
    <div>
        <p>
            ${movie.description}
        </p>
    </div>
    <div>
        <a href=""> WATCH</a>
    </div>
    `

}