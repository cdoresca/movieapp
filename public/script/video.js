

async function init(){
    const params = new URLSearchParams(location.search)
    const video_id = params.get("id")
    console.log(video_id)
    if(params.get("movie")){
        document.getElementById("title").innerText = params.get("movie")
    }
    if(params.get("show")){
        document.getElementById("title").innerText = params.get("show")
        document.getElementById("title-episode").innerText = params.get("episode")
    }
    
    document.getElementById("video-source").src=`/api/video/${video_id}`
    document.getElementById("player").load()
}

init()