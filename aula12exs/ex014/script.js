function getTime() {
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")

    let date = new Date()
    let hour = date.getHours()
    msg.innerHTML = `Agora são ${hour} horas`

    if (hour >= 0 && hour < 12) {
        img.src = "imgs/manha.png"
        document.body.style.background = "#e2cd9f"
    }

    else if (hour >= 12 && hour < 18) {
        img.src = "imgs/tarde.png"
        document.body.style.background = "#b9846f"
    }

    else {
        img.src = "imgs/noite.png"
        document.body.style.background = "#515154"
    }
}