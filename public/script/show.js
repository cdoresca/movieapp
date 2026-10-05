
function createFicheShow(show){
    document.getElementById("title").innerHTML = show.name
    document.getElementById("img").src = show.path_img
    document.getElementById("img").alt = show.name
    document.getElementById("description").innerHTML =`<p> ${show.description}</p>`
}
//TODO : ajouer description comme colonne dans show table
function afficherEpisode(episode){
    let html = ""
    for(let i = 0; i < episode.lentgh; i++){
        html += `<div>
                    <a href="/watch.html?id=${episode.video_id}">${episode[i].name}</a>
                </div>`
    }
    document.getElementById("list-episode").innerHTML=html
}

async function init(){
    const params = new URLSearchParams(location.search)
    const show_id = params.get("id")

    const reponse = await fetch(`api/show/${show_id}`)

    const data = await reponse.json()

    if(reponse.ok){
        createFicheShow(data.show)
        afficherEpisode(data.episode)
    }
    else{
        alert(data.eror)
    }

}