// Valentine's Day Card - Page Navigation Script

let currentPage = 0;
let totalPages = 0;

// Initialize the card when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCard();
    updateButtons();
});

// Create all the pages from config
function initializeCard() {
    const heartCard = document.getElementById('heartCard');
    totalPages = cardPages.length;

    // Update total pages display
    document.getElementById('totalPages').textContent = totalPages;

    // Create a page for each entry in config
    cardPages.forEach((pageData, index) => {
        const page = createPage(pageData, index);
        heartCard.appendChild(page);
    });

    // Set the first page as active
    updatePageDisplay();
}

// Create a single page element
function createPage(pageData, index) {
    const page = document.createElement('div');
    page.className = 'page';
    page.dataset.pageIndex = index;

    const heartShape = document.createElement('div');
    heartShape.className = 'heart-shape';

    // Create SVG heart from Heart-Arrow-Monogram-Frames_4.svg
    heartShape.innerHTML = `
        <svg
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Calque_1"
        x="0px"
        y="0px"
        viewBox="0 0 431.91345 607.16272"
        xml:space="preserve"
        width="4.4990983in"
        height="6.3246117in"><metadata
   id="metadata29"><rdf:RDF><cc:Work
       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
        rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title></dc:title></cc:Work></rdf:RDF></metadata>
    <defs
            id="defs27"><clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath38"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path36-9" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12070"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12068" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12102"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12100" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12134"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12132" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12166"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12164" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12198"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12196" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12230"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12228" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12262"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12260" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12294"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12292" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12326"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12324" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12358"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12356" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12390"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12388" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12422"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12420" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12454"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12452" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12486"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12484" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12518"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12516" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12550"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12548" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12582"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12580" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12614"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12612" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12646"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12644" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12678"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12676" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12710"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12708" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12742"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12740" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12774"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12772" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12806"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12804" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12838"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12836" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12870"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12868" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12902"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12900" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12934"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12932" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12966"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12964" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath12998"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path12996" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath13030"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path13028" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath13062"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path13060" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath13094"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path13092" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath13126"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path13124" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath14694"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path14692" /></clipPath>
        <clipPath
                clipPathUnits="userSpaceOnUse"
                id="clipPath14726"><path
       d="M 0,1014.823 H 1651.961 V 0 H 0 Z"
       id="path14724" /></clipPath></defs>
    <style
            type="text/css"
            id="style2">
\t.st0{fill:#C1272D;}
\t.st1{fill:#FFFFFF;}
</style>

    <path
            style="fill:#ff2a2a;stroke-width:9.61447906"
            id="path291"
            d="m 302.9431,130.85492 c 45.53321,1.00739 91.12122,39.28189 91.12122,108.58592 0,138.61195 -177.28141,236.89118 -177.28141,236.89118 h -1.65243 c 0,0 -177.281367,-98.27923 -177.281367,-236.89118 0,-126.41116 151.437637,-149.553228 178.108197,-31.63261 12.04888,-53.26806 49.47422,-77.78689 86.98991,-76.95717 z"/>
    <path
            style="fill:#d40000;stroke-width:9.61447906"
            id="path293"
            d="m 277.74263,180.89244 c 32.34118,0.71551 64.7218,27.90124 64.7218,77.1293 0,98.45225 -125.92085,168.263 -125.92085,168.263 h -1.17373 c 0,0 -125.920847,-69.80307 -125.920847,-168.263 0,-89.78772 107.566807,-106.22079 126.507347,-22.46807 8.55793,-37.83491 35.14092,-55.25058 61.78743,-54.66123 z"/></svg>
    `;

    console.log(`Page ${index + 1} created with SVG heart from Heart-Arrow-Monogram-Frames_4.svg`);

    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = `
        <h1>${pageData.emoji}</h1>
        <h2>${pageData.title}</h2>
        <p>${pageData.message}</p>
        <div class="heart-emoji">${pageData.customText}</div>
    `;

    heartShape.appendChild(content);
    page.appendChild(heartShape);

    return page;
}

// Update which page is visible
function updatePageDisplay() {
    const pages = document.querySelectorAll('.page');

    pages.forEach((page, index) => {
        page.classList.remove('active', 'left', 'right');

        if (index === currentPage) {
            page.classList.add('active');
        } else if (index < currentPage) {
            page.classList.add('left');
        } else {
            page.classList.add('right');
        }
    });

    // Update page number display
    document.getElementById('currentPage').textContent = currentPage + 1;
}

// Update button states
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Disable previous button on first page
    prevBtn.disabled = currentPage === 0;

    // Disable next button on last page
    nextBtn.disabled = currentPage === totalPages - 1;
}

// Navigate to previous page
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePageDisplay();
        updateButtons();
    }
}

// Navigate to next page
function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePageDisplay();
        updateButtons();
    }
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('prevBtn').addEventListener('click', previousPage);
    document.getElementById('nextBtn').addEventListener('click', nextPage);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            previousPage();
        } else if (e.key === 'ArrowRight') {
            nextPage();
        }
    });
});

