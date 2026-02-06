// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    
    // GENRE FILTER FUNCTIONALITY
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const movieCards = document.querySelectorAll('.movie-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the selected genre
            const selectedGenre = this.getAttribute('data-genre');
            
            // Filter movie cards
            movieCards.forEach(card => {
                const cardGenre = card.getAttribute('data-genre');
                
                if (selectedGenre === 'all' || cardGenre === selectedGenre) {
                    // Show the card with fade-in animation
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    // Hide the card with fade-out animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    

    // SMOOTH SCROLL ANIMATION
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all movie cards for scroll animation
    movieCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // VIEW DETAILS INTERACTION
   
    movieCards.forEach(card => {
        const viewMoreBtn = card.querySelector('.view-more');
        
        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation();  //keeps click isolated to just the button and avoids triggering card hover effects
                const movieTitle = card.querySelector('.movie-title').textContent;
                alert(`Feature coming soon! You clicked on "${movieTitle}"`);
                // In a real application, this would open a modal or navigate to a details page
            });
        }
    });
   
    // RESPONSIVE NAVIGATION HELPER
   
    // Smooth scroll to top button 
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
    });
    
});
