

const illustration = document.getElementById("illustration")

const screenWidth = window.innerWidth

const changeImage = () => {
    if(screenWidth > 800) {
        illustration.src = "./assets/images/illustration-sign-up-desktop.svg"
    }
    else {
        illustration.src = "./assets/images/illustration-sign-up-mobile.svg"
    }
}

changeImage()


document.getElementById("form").onsubmit = (event) => {
    event.preventDefault()

    document.querySelector(".sub-section").style.display = "none"
    document.querySelector(".thank-section").style.display = "initial"

    const email =  document.getElementById("email").value;
    document.getElementById("display-email").textContent = `${email}`
}


document.getElementById("dismiss-button").onclick = () => {
    window.location.reload()
}
