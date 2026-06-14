// script.js

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // 300ms delay to see the spin effect
    setTimeout(function() {
        loader.classList.add('loader-hidden');
    },300); 
});
