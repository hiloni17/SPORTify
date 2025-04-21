document.addEventListener('DOMContentLoaded', function() {
    // Sample sports data
    const sportsData = [
        { id: 'cricket', name: 'Cricket', type: ['team', 'outdoor','indoor'], image: 'cricket.jpg' },
        { id:'baseball',name:'Baseball',type:['team','outdoor'],image:'baseball.webp'},
        { id: 'skating', name: 'Skating', type: ['individual', 'indoor'], image: 'skating.jpg' },

        { id: 'football', name: 'Football', type: ['team', 'outdoor'], image: 'football.jpg' },
        { id: 'volleyball', name: 'Volleyball', type: ['team', 'indoor'], image: 'Volleyball.avif' },
        { id: 'basketball', name: 'Basketball', type: ['team', 'indoor'], image: 'basketball.jpg' },

        { id: 'tennis', name: 'Tennis', type: ['individual', 'indoor'], image: 'tennis.jpg' },
        { id: 'table-tennis', name: 'Table Tennis', type: ['individual', 'indoor'], image: 'Table-Tennis.jpg' },
        { id: 'badminton', name: 'Badminton', type: ['individual', 'indoor'], image: 'Badminton.jpg' },

        { id: 'golf', name: 'Golf', type: ['individual', 'outdoor'], image: 'Golf.jpg' },
        { id: 'swimming', name: 'Swimming', type: ['individual', 'indoor'], image: 'swimming.jpg' },
        { id: 'hockey', name: 'Hockey', type: ['team', 'indoor', 'outdoor'], image: 'hockey.jpg' },

        { id:'rugby',name:'Rugby',type:['team','outdoor'],image:'rugby.jpg'},
        { id: 'rugby_sevens', name: 'Rugby Sevens', type: ['team', 'outdoor'], image: 'rugby_sevens.jpg' },
        { id: 'boxing', name: 'Boxing', type: ['individual', 'indoor'], image: 'boxing.jpg' },
        { id: 'wrestling', name: 'Wrestling', type: ['individual', 'indoor'], image: 'wrestling.jpg' },
       
        { id:'karate',name:'Karate',type:['individual','indoor'],image:'karate.jpg'},
        { id:'judo',name:'Judo',type:['individual','indoor'],image:'judo.jpg'},
        { id: 'MMA', name: 'MMA', type: ['individual', 'indoor'], image: 'MMA.webp' },

        
        { id: 'archery', name: 'Archery', type: ['individual', 'outdoor'], image: 'arc.jpg' },
        { id: 'shooting', name: 'Shooting', type: ['individual', 'outdoor'], image: 'shooting.webp' },
        { id: 'racing', name: 'Racing', type: ['individual', 'outdoor'], image: 'racing.jpg' },

        // New sports
       

        { id: 'fencing', name: 'Fencing', type: ['individual', 'indoor'], image: 'fencing.jpg' },
        { id: 'luge', name: 'Luge', type: ['individual', 'indoor'], image: 'luge_image.jpg' },
     
        
        
        

        // Add more sports as needed
    ];

    const sportsGrid = document.querySelector('.sports-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('sportSearch');
    const categoryCards = document.querySelectorAll('.category-card');

    // Display sports grid
    function displaySports(sports) {
        sportsGrid.innerHTML = '';
        sports.forEach(sport => {
            const card = document.createElement('div');
            card.className = 'sport-card';
            card.innerHTML = `
                    <img height="85%" width="100%" src="img/${sport.image}" alt="${sport.name}">
                    <h3>${sport.name}</h3>
                    <div class="sport-types">
                        ${sport.type.map(type => `<span class="sport-type">${type}</span>`).join(' ')}
                    </div>
            `;
            // Add click handler for the entire card
            card.style.cursor = 'pointer'; // Add pointer cursor to indicate clickability
            card.addEventListener('click', () => viewSportDetails(sport.id));
            sportsGrid.appendChild(card);
        });
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (filter === 'all') {
                displaySports(sportsData);
            } else {
                const filtered = sportsData.filter(sport => sport.type.includes(filter));
                displaySports(filtered);
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = sportsData.filter(sport => 
            sport.name.toLowerCase().includes(searchTerm)
        );
        displaySports(filtered);
    });

    // Category card functionality
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterBtns.forEach(btn => {
                if (btn.dataset.filter === category) {
                    btn.click();
                }
            });
            
            // Scroll to the sports grid section
            const sportsResultsSection = document.querySelector('.sports-results');
            if (sportsResultsSection) {
                sportsResultsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initial display
    displaySports(sportsData);
});

// Function to view sport details
function viewSportDetails(sportId) {
    window.location.href = `sport-detail.html?sport=${sportId}`;
}