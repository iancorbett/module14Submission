// /api/users/login

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;


    fetch("/api/users/login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            username: username, 
            password: password
        })
    })
    .then(res => {
        if(res.status == "200") {
            window.location.href = "/dashboard"
        }
    })
    .catch(err => {
        console.log(err)
    })



})