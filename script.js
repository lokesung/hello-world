// Google Sheet ID extracted from the URL
const SHEET_ID = '1EBQwKXKU2NpiQXz1YFlMjDTtdAf9UQ-bh6BZHGYFHnk';
const SHEET_NAME = 'Sheet1'; // Default sheet name, adjust if needed

// Function to fetch vegetables data from Google Sheets
async function fetchVegetablesData() {
    const vegetablesGrid = document.getElementById('vegetables-grid');
    
    // Show loading state
    vegetablesGrid.innerHTML = '<div class="loading">Loading fresh vegetables...</div>';
    
    try {
        // Using opensheet API to fetch data from the Google Sheet
        const response = await fetch(`https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`);
        const data = await response.json();
        
        // Clear loading state
        vegetablesGrid.innerHTML = '';
        
        // Process the data starting from row 8 (index 7 in 0-based array)
        // Column C contains vegetable names, Column G contains prices
        const vegetables = [];
        
        // Since opensheet returns objects with column headers as keys,
        // we need to identify which columns are C and G
        if (data && data.length > 0) {
            // Get column headers to identify C and G columns
            const headers = Object.keys(data[0]);
            const columnC = headers[2]; // Column C (0-indexed: A=0, B=1, C=2)
            const columnG = headers[6]; // Column G (0-indexed: G=6)
            
            // Start from row 8 (skip first 7 rows)
            for (let i = 7; i < data.length; i++) {
                const row = data[i];
                const vegetableName = row[columnC];
                const price = row[columnG];
                
                // Skip blank rows
                if (vegetableName && vegetableName.trim() !== '' && price && price.trim() !== '') {
                    vegetables.push({
                        name: vegetableName.trim(),
                        price: price.trim()
                    });
                }
            }
        }
        
        // Display vegetables in the grid
        if (vegetables.length > 0) {
            vegetables.forEach(vegetable => {
                const vegetableItem = document.createElement('div');
                vegetableItem.className = 'vegetable-item';
                vegetableItem.innerHTML = `
                    <div class="vegetable-name">${vegetable.name}</div>
                    <div class="vegetable-price">$${vegetable.price}</div>
                `;
                vegetablesGrid.appendChild(vegetableItem);
            });
        } else {
            vegetablesGrid.innerHTML = '<div class="loading">No vegetables found. Please check the Google Sheet.</div>';
        }
        
    } catch (error) {
        console.error('Error fetching vegetables data:', error);
        vegetablesGrid.innerHTML = `
            <div class="loading">
                Unable to load vegetables data. 
                <br><br>
                <small>Please ensure the Google Sheet is publicly accessible.</small>
            </div>
        `;
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add click handlers for buttons
function setupButtonHandlers() {
    const shopNowBtn = document.querySelector('.shop-now-btn');
    const vegetablesBtn = document.querySelector('.vegetables-btn');
    const fruitsBtn = document.querySelector('.fruits-btn');
    
    shopNowBtn.addEventListener('click', () => {
        // Scroll to vegetables section
        document.getElementById('vegetables').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    vegetablesBtn.addEventListener('click', () => {
        alert('🥕 Vegetables catalog coming soon! This would redirect to a detailed vegetables page.');
    });
    
    fruitsBtn.addEventListener('click', () => {
        alert('🍎 Fruits catalog coming soon! This would redirect to a detailed fruits page.');
    });
}

// Add some interactive animations
function setupInteractiveAnimations() {
    // Add parallax effect to floating emojis
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.floating-emoji');
        
        parallax.forEach((emoji, index) => {
            const speed = 0.5 + (index * 0.1);
            emoji.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
    });
    
    // Add hover effects to category sections
    const categoryImages = document.querySelectorAll('.category-img');
    categoryImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.filter = 'brightness(1) saturate(1)';
        });
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('🥕 Fresh Market website loaded!');
    
    // Fetch vegetables data from Google Sheets
    fetchVegetablesData();
    
    // Setup interactive features
    setupSmoothScrolling();
    setupButtonHandlers();
    setupInteractiveAnimations();
    
    // Add a welcome message
    setTimeout(() => {
        console.log('🍎 Welcome to Fresh Market! Enjoy browsing our fresh produce.');
    }, 1000);
});