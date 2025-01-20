document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You clicked on ${this.textContent}`);
        });
    });
});