document.querySelectorAll('.category button').forEach(button => {
    button.addEventListener('click', (event) => {
        alert(`${event.target.parentElement.querySelector('h2').textContent} category clicked`);
    });
});

function navigateTo(page) {
    window.location.href = page;
}
