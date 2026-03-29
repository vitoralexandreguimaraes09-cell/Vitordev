const abrir = document.getElementById("Abrir");
const fechar = document.getElementById("fechar");

const card1 = document.getElementById("Cards");
const card2 = document.getElementById("Cards1");
const card3 = document.getElementById("Cards2");

// ABRIR
abrir.addEventListener("click", () => {

    // CARD 1
    card1.style.display = "block";
    card1.classList.remove("esconder");

    setTimeout(() => {
        card1.classList.add("mostrar");
    }, 50);

    // CARD 2 (só depois)
    setTimeout(() => {
        card2.style.display = "block";
        card2.classList.remove("esconder");

        setTimeout(() => {
            card2.classList.add("mostrar");
        }, 50);

    }, 300);

    setTimeout(() => {
        card3.style.display = "block";
        card3.classList.remove("esconder");

        setTimeout(() => {
            card3.classList.add("mostrar");
        }, 50);
    }, 500);
    
    fechar.style.display = "block";
});

// FECHAR
fechar.addEventListener("click", () => {

    card3.classList.remove("mostrar");
    card3.classList.add("esconder");

    setTimeout(() => {
        card3.style.display = "none";
    }, 400);
    
    setTimeout(() => {
        card2.classList.remove("mostrar");
        card2.classList.add("esconder");

        setTimeout(() => {
            card2.style.display = "none";
        }, 400);

    }, 200);

    // depois o primeiro
    setTimeout(() => {
        card1.classList.remove("mostrar");
        card1.classList.add("esconder");

        setTimeout(() => {
            card1.style.display = "none";
        }, 500);

    }, 300);

    fechar.style.display = "none";
});
