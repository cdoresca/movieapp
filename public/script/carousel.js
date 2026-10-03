

async function get(){
    const reponse = await fetch("/api/welcome")
    const {movie, show} = await reponse.json()
    return {movie,show}
}

async function choose(){
    const {movie, show} = await get()
    const movieten = movie.slice(0,10)
    const showten = show.slice(0,10)
    
    return {movieten, showten}
}

function carousel(data, idConteneur,typeData){
    let html = ""
    for(let i = 0; i < data.length; i++){
        html += `<div class="card">
                    <a href="/${typeData}.html?id=${data[i].id}">
                        <img src="${data[i].path_img}" class="img-fluid rounded" alt="${data[i].name}">
                    </a>
                </div>`
    }

    document.getElementById(idConteneur).innerHTML=html
}

async function init(){
    const {movieten, showten} = await choose()
    carousel(movieten,"rangee-films", "movie")
    carousel(showten, "rangee-show", "show") 
}

init()
