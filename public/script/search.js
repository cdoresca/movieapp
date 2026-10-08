const input = document.querySelector(`input[placeholder='search']`)

let delai

input.addEventListener("input", async(e)=>{
    clearTimeout(delai)
    delai = setTimeout(async()=>{
        
        const terme = e.target.value
    
        const reponse = await fetch(`/api/search?terme=${terme}`)
        const data = await reponse.json()
    
        if(reponse.ok){
            //TODO
        }
        else{
            alert(data.error)
        }
    } ,300)
})