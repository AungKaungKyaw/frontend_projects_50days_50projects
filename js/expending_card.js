const panels = document.querySelectorAll('.panel');

function remove_active_class() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        remove_active_class();
        panel.classList.add('active');
    })
})