document.addEventListener('DOMContentLoaded', function() {
    const careerSearch = document.querySelector('#careerSearch');
    const careerCards = document.querySelectorAll('.career-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');

    // Filter functionality
    function filterCards(category) {
        careerCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter cards based on category
            filterCards(button.dataset.filter);
        });
    });

    // Add click event listeners to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to corresponding filter button
            const correspondingButton = document.querySelector(`.filter-btn[data-filter="${category}"]`);
            if (correspondingButton) {
                correspondingButton.classList.add('active');
            }
            // Filter cards based on category
            filterCards(category);
            
            // Scroll to results section
            const resultsSection = document.querySelector('.career-results');
            if (resultsSection) {
                const headerOffset = 100;
                const elementPosition = resultsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search functionality
    if (careerSearch) {
        careerSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.toLowerCase().trim();
                let firstMatch = null;

                // Reset filter buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

                // Hide all cards first
                careerCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const requirements = Array.from(card.querySelectorAll('.requirements-list li'))
                        .map(li => li.textContent.toLowerCase())
                        .join(' ');
                    const category = card.dataset.category.toLowerCase();

                    const isMatch = title.includes(searchTerm) || 
                                  requirements.includes(searchTerm) || 
                                  category.includes(searchTerm);

                    if (isMatch) {
                        card.style.display = 'block';
                        if (!firstMatch) firstMatch = card;
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Scroll to first matching result if found
                if (firstMatch) {
                    const headerOffset = 150;
                    const elementPosition = firstMatch.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }

                // Show "no results" message if no matches found
                const noResults = document.querySelector('.no-results');
                if (!firstMatch) {
                    if (!noResults) {
                        const message = document.createElement('p');
                        message.className = 'no-results';
                        message.style.textAlign = 'center';
                        message.style.padding = '2rem';
                        message.style.color = '#666';
                        message.textContent = 'No matching careers found.';
                        document.querySelector('.career-grid').appendChild(message);
                    }
                } else if (noResults) {
                    noResults.remove();
                }
            }
        });

        // Reset display when search is cleared
        careerSearch.addEventListener('input', function() {
            if (this.value === '') {
                careerCards.forEach(card => card.style.display = 'block');
                const noResults = document.querySelector('.no-results');
                if (noResults) noResults.remove();
                
                // Reset filter buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            }
        });
    }
}); 