window.addEventListener("scroll", moveScrollIndicator);

const ScrollIndicatorElt = document.getElementById("scrollIndicator");

const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e){
    const porcentaje = ((window.scrollY) / maxHeight) * 100;

    ScrollIndicatorElt.style.width = porcentaje + "%";
}