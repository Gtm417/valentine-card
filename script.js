let currentPage = 1;
const totalPages = 4;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const pages = document.querySelectorAll('.page');

// Load custom content from config
function loadContent() {
    for (let i = 1; i <= totalPages; i++) {
        const titleElement = document.getElementById(`page${i}-title`);
        const textElement = document.getElementById(`page${i}-text`);
        
        if (pageContent[`page${i}`]) {
            titleElement.textContent = pageContent[`page${i}`].title;
            textElement.textContent = pageContent[`page${i}`].text;
        }
    }
}

function updatePages() {
    pages.forEach((page, index) => {
        page.classList.remove('active', 'left', 'right');
        
        const pageNumber = index + 1;
        
        if (pageNumber === currentPage) {
            page.classList.add('active');
        } else if (pageNumber < currentPage) {
            page.classList.add('left');
        } else {
            page.classList.add('right');
        }
    });
    
    currentPageSpan.textContent = currentPage;
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePages();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePages();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// Initialize
loadContent();
updatePages();