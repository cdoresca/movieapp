
function  afficher(name, data, type) {
    document.getElementById("title").innerText=name

    let html =""
    for(let i = 0; i < data.length; i++){
        html += `<div>
                    <a href="/${type}.html?id=${data[i].id}">
                        <img src="${data[i].path_img}" class="img-fluid rounded" alt="${data[i].name}">
                    </a>
                </div>`
    }
    document.getElementById("catalogue").innerHTML=html
}


async function init(){
    const params = new URLSearchParams(location.search)
    let name = params.get("type")
    const reponse = await fetch("/api/welcome")
    const {movie, show} = await reponse.json()
     
    if(name=="movie"){
        afficher("Movie",movie,name)
    }
    else if(name=="show"){
        
        afficher("TV Show",show,name)
    }
}

init()