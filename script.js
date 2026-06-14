// script.js

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // Only run the hiding logic if the loader actually exists on this page
    if (loader) {
        // 300ms delay to see the spin effect
        setTimeout(function() {
            loader.classList.add('loader-hidden');
        }, 3000); 
    }
});

// Testimonials Interactive Logic
document.addEventListener('DOMContentLoaded', function() {
    const tCards = document.querySelectorAll(".testimonial-card");
    const tContentBoxes = document.querySelectorAll(".testimonial-contentBox");

    if (tCards.length > 0) {
        for (let i = 0; i < tCards.length; i++) {
            tCards[i].addEventListener("mouseover", function () {
                // Reset all content boxes
                for (let j = 0; j < tContentBoxes.length; j++) {
                    tContentBoxes[j].className = "testimonial-contentBox";
                }
                
                // Show matched content box
                document.getElementById(this.dataset.id).className = "testimonial-contentBox active";

                // Reset all cards
                for (let k = 0; k < tCards.length; k++) {
                    tCards[k].className = "testimonial-card";
                }
                
                // Highlight active card
                this.className = "testimonial-card active";
            });
        }
    }
});
