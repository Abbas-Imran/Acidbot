
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});


function searchBots() {
    var input, filter, container, cards, title, i, txtValue;
    input = document.getElementById('botSearch');
    filter = input.value.toUpperCase();
    container = document.getElementById('container');
    cards = container.getElementsByClassName('card');

    for (i = 0; i < cards.length; i++) {
        title = cards[i].getElementsByClassName('title')[0];
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Previous JavaScript code remains unchanged

// Function to toggle the menu
// Function to toggle the menu
// Toggles the menu visibility
function toggleMenu() {
    var menu = document.querySelector('.bot-menu');
    var icon = document.querySelector('.menu-icon');
    menu.classList.toggle('show');
    icon.classList.toggle('change');
}

