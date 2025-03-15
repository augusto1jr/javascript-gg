function verificar() {
    let date = new Date()
    let year = date.getUTCFullYear()

    let form_year = document.getElementById("ano_nascimento")
    let form_sex = document.getElementsByName("sexo")

    let age = year - Number(form_year.value)

    let img = document.createElement("img")
    img.setAttribute("id", "img")

    if (form_year.value.length == 0 || Number(form_year.value) > year) {
        window.alert("Dados inválidos, tente novamente.")
        return;
    }

    else {
        if (form_sex[0].checked) {
            sexo = "Homem"

            if (age >=0 && age < 10) {
                img.setAttribute("src", "imgs/baby-male.jpg")
            }
            else if (age < 21) {
                img.setAttribute("src", "imgs/young-male.jpg")
            }
            else if (age >=0 && age < 60) {
                img.setAttribute("src", "imgs/adult-male.jpg")
            }
            else {
                img.setAttribute("src", "imgs/elder-male.jpg")
            }
        }

        else {
            sexo = "Mulher"

            if (age >=0 && age < 10) {
                img.setAttribute("src", "imgs/baby-female.jpg")
            }
            else if (age < 21) {
                img.setAttribute("src", "imgs/young-female.jpg")
            }
            else if (age >=0 && age < 60) {
                img.setAttribute("src", "imgs/adult-female.jpg")
            }
            else {
                img.setAttribute("src", "imgs/elder-female.jpg")
            }
        }
    }

    result.innerHTML = `Você é um ${sexo} com ${age} anos.`;
    result.appendChild(img);
}