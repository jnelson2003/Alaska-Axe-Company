// script.js

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // Only run the hiding logic if the loader actually exists on this page
    if (loader) {
        // 300ms delay to see the spin effect
        setTimeout(function() {
            loader.classList.add('loader-hidden');
        }, 300); 
    }
});
