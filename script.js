// Sistema de Filtros para Carros Antigos e Modernos
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const carCards = document.querySelectorAll(".car-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            // Exibe ou oculta os cards com base na categoria
            carCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

// Funções para Abrir e Fechar o Modal de Detalhes
function openModal(title, description, imgSrc) {
    const modal = document.getElementById("carModal");
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-img").src = imgSrc;

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("carModal");
    modal.style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("carModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
