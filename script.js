const abrir = document.getElementById("Abrir");
const fechar = document.getElementById("fechar");

const card1 = document.getElementById("Cards");
const card2 = document.getElementById("Cards1");

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

    fechar.style.display = "block";
});

// FECHAR
fechar.addEventListener("click", () => {

    // primeiro o segundo
    card2.classList.remove("mostrar");
    card2.classList.add("esconder");

    setTimeout(() => {
        card2.style.display = "none";
    }, 400);

    // depois o primeiro
    setTimeout(() => {
        card1.classList.remove("mostrar");
        card1.classList.add("esconder");

        setTimeout(() => {
            card1.style.display = "none";
        }, 400);

    }, 200);

    fechar.style.display = "none";
});