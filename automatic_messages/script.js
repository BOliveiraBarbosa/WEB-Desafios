
function sendMenssage (element) {
    let message = element.firstElementChild.innerText;
    let number = prompt("Qual é o número?");

    let appLink = `https://api.whatsapp.com/send?phone=55${number}&text=${message}`;
    window.open(appLink)

    //console.log(message, number);

}
