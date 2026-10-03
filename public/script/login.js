
document.getElementById("form-login").addEventListener("submit",async(e) =>{
    e.preventDefault()

    const user = document.getElementById("user").value
    const password = document.getElementById("password").value

    const reponse =  await fetch("/api/login",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user, password:password })
    })

    const data = await reponse.json()

    if (reponse.ok) {
        window.location.href = "welcome.html";
    } else {
        alert(data.error)
        //afficherErreur("Identifiants invalides");
    }

})