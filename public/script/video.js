

async function init(){
    const params = new URLSearchParams(location.search)
    const video_id = params.id
    
    if(params.movie){
        document.getElementById("title") = params.movie
    }
    if(params.show){
        document.getElementById("title") = params.show
        document.getElementById("title-episode") = params.episode
    }
    
    document.getElementById("video-source").src=`/api/video/${video_id}`
    document.getElementById("player").load()
}

init()