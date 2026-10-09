function affichage(movie,show){
    let html = "<ul>"
    for(let i = 0; i < movie.lentgh; i++){
        html += `<li><a href='/movie.html?id=${movie[i].id}'>${movie[i].name}</a></li>`
    }
    for(let i = 0; i < show.lentgh; i++){
        html += `<li><a href='/show.html?id=${show[i].id}'>${show[i].name}</a></li>`
    }
    html += "</ul>"

    document.getElementById("search-dropdown").innerHTML = html
}

const input = document.querySelector(`input[placeholder='search']`)

let delai

input.addEventListener("input", async(e)=>{
    clearTimeout(delai)
    delai = setTimeout(async()=>{
        
        const terme = e.target.value
    
        const reponse = await fetch(`/api/search?terme=${terme}`)
        const data = await reponse.json()
    
        if(reponse.ok){
            affichage(data.movie, data.show)
        }
        else{
            alert(data.error)
        }
    } ,300)
})