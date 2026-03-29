const abrir = document.getElementById("Abrir");
const fechar = document.getElementById("fechar");

const cards = [
    document.getElementById("Cards"),
    document.getElementById("Cards1"),
    document.getElementById("Cards2")
];

// 🔓 ABRIR (cascata)
abrir.addEventListener("click", () => {

    cards.forEach((card, index) => {

        setTimeout(() => {
            card.style.display = "block";
            card.classList.remove("esconder");

            setTimeout(() => {
                card.classList.add("mostrar");
            }, 50);

        }, index * 250); // 🔥 efeito cascata
    });

    fechar.style.display = "block";
});

// 🔒 FECHAR (cascata reversa)
fechar.addEventListener("click", () => {

    cards.slice().reverse().forEach((card, index) => {

        setTimeout(() => {
            card.classList.remove("mostrar");
            card.classList.add("esconder");

            setTimeout(() => {
                card.style.display = "none";
            }, 400);

        }, index * 200);
    });

    fechar.style.display = "none";
});

function irDashboard() {
    window.location.href = "AbaFilmes.html";
}
