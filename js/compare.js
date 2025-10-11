// js/compare.js

// DOM Elements
const boxes = document.querySelectorAll(".compare-box button");
const popup = document.getElementById("searchPopup");
const closePopup = document.getElementById("closePopup");
const searchInput = document.getElementById("watchSearch");
const searchResults = document.getElementById("searchResults");
const compareTable = document.getElementById("compareTable");
const tableBody = document.querySelector("#compareTable tbody");
const tableHead = document.querySelector("#compareTable thead");

// State Variables
let selectedWatches = [null, null, null, null]; // Compared watches
let activeBoxElement = null; // The clicked comparison box

// We assume that the 'watches' array from data.js is defined in this file.

// --- TABLE FEATURES (ENGLISH CONSTANT TEXTS) ---
// This object defines which watch features the table will display, in what order, and their English labels.
const features = {
    // BASIC FEATURES
    'brand': 'Brand',
    'model': 'Model',
    'price': 'Price (€)',
    'diameter': 'Case Diameter',
    'thickness': 'Case Thickness',
    'weight': 'Weight',

    // MOVEMENT AND TECHNICAL SPECIFICATIONS
    'movement': 'Movement Type',
    'movement_calibre': 'Movement Calibre',
    'power_reserve': 'Power Reserve',
    'frequency_vph': 'Frequency (vph)',
    'jewels': 'Jewels',
    
    // CASE AND STRUCTURE FEATURES
    'case_material': 'Case Material',
    'crystal_type': 'Crystal Type',
    'waterResistance': 'Water Resistance',
    'crown_type': 'Crown Type',
    'lug_width': 'Lug Width',
    'strap_material': 'Strap Material',
    
    // FUNCTIONS
    'is_chronograph': 'Chronograph',
    'has_date': 'Date Window',
    'bezel_function': 'Bezel Function',
};


// --- EVENT LISTENERS ---

// 1. Click on + Button (Open Popup)
boxes.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // Save the clicked box
        activeBoxElement = e.target.closest(".compare-box");
        
        // Show the popup
        popup.style.display = "flex";
        popup.classList.add("show");
        
        // Clear and focus the search field
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchInput.focus();
        
        // List all watches when the popup opens
        renderSearchResults(watches);
    });
});

// 2. Close Popup
closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
    // Hide after animation
    setTimeout(() => (popup.style.display = "none"), 300);
});

// 3. Search Box Input (Filter Watches)
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length > 1) {
        // Filter watches containing Model or Brand
        const filtered = watches.filter(w => 
            w.model.toLowerCase().includes(query) || 
            w.brand.toLowerCase().includes(query)
        );
        renderSearchResults(filtered);
    } else {
        // Show all watches if search is empty
        renderSearchResults(watches);
    }
});


// --- FUNCTIONS ---

// Function to list search results
function renderSearchResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
        const noResult = document.createElement("div");
        noResult.className = "search-item no-result";
        // Text set to English
        noResult.textContent = 'No results found.'; 
        searchResults.appendChild(noResult);
        return;
    }
    
    results.forEach(watch => {
        const item = document.createElement("div");
        item.className = "search-item";
        item.innerHTML = `
            <img src="${watch.image}" alt="${watch.model}" class="search-img">
            <div class="search-info">
                <strong>${watch.brand}</strong>
                <span>${watch.model}</span>
                <small>${watch.price}</small>
            </div>
        `;
        
        // Watch click event
        item.addEventListener("click", () => {
            addWatchToCompare(watch);
            popup.classList.remove("show");
            setTimeout(() => (popup.style.display = "none"), 300);
        });
        searchResults.appendChild(item);
    });
}

// Function that adds the selected watch to the comparison slot
function addWatchToCompare(watch) {
    // Find the array index by subtracting 1 from data-index
    const index = parseInt(activeBoxElement.dataset.index) - 1;
    selectedWatches[index] = watch;
    updateCompareBoxes();
    updateCompareTable();
}

// Function to update the comparison boxes
function updateCompareBoxes() {
    selectedWatches.forEach((watch, index) => {
        const box = document.querySelector(`.compare-box[data-index="${index + 1}"]`);
        
        if (watch) {
            // Card view if watch is added
            box.innerHTML = `
                <div class="watch-card" data-id="${watch.id}">
                    <img src="${watch.image}" alt="${watch.model}" class="card-img">
                    <button class="remove-btn" data-index="${index}">✕</button>
                    <p class="card-brand">${watch.brand}</p>
                    <p class="card-model">${watch.model}</p>
                </div>
            `;
            // Add event listener for the remove button
            box.querySelector('.remove-btn').addEventListener('click', removeWatch);
        } else {
            // + button if watch is not added
            box.innerHTML = `<button>+</button>`;
            // Re-add event listener for the + button
            box.querySelector('button').addEventListener("click", (e) => {
                 activeBoxElement = e.target.closest(".compare-box");
                 popup.style.display = "flex";
                 popup.classList.add("show");
                 searchInput.value = "";
                 searchResults.innerHTML = "";
                 searchInput.focus();
                 renderSearchResults(watches); // List all watches when opening the new popup
            });
        }
    });
}

// Function to remove the watch from the list
function removeWatch(e) {
    e.stopPropagation();
    const index = parseInt(e.target.dataset.index);
    selectedWatches[index] = null;
    updateCompareBoxes();
    updateCompareTable();
}

// Main function to update the comparison table
function updateCompareTable() {
    const filledWatches = selectedWatches.filter(w => w !== null);
    
    // 1. Set the table visibility
    if (filledWatches.length === 0) {
        compareTable.style.display = 'none';
        return;
    }
    compareTable.style.display = 'table';
    
    // 2. Update the table header (Watch Models)
    let headerRow = '<tr><th></th>'; 
    filledWatches.forEach(watch => {
        // Create a header cell for each watch
        headerRow += `<th>
            <img src="${watch.image}" alt="${watch.model}" class="table-img">
            <p>${watch.brand} ${watch.model}</p>
        </th>`;
    });
    headerRow += '</tr>';
    tableHead.innerHTML = headerRow;

    // 3. Update the table body (Features)
    tableBody.innerHTML = '';
    
    // Create a row for each feature in the features object
    for (const key in features) {
        // Skip the row if none of the watches have this feature or if it's empty/null
        if (filledWatches.every(w => !w.hasOwnProperty(key) || !w[key])) { 
            continue; 
        }

        let row = '<tr>';
        // First cell: Feature name (Directly the English text from the features object)
        const featureName = features[key]; 
        row += `<td class="feature-name">${featureName}</td>`; 

        // Subsequent cells: Feature values for the watches
        filledWatches.forEach(watch => {
            // Show "-" if the value is missing or empty
            const value = watch[key] || '-'; 
            row += `<td>${value}</td>`;
        });
        
        row += '</tr>';
        tableBody.innerHTML += row;
    }
}

// Function to be executed at startup
function initComparePage() {
    // Language-related event listeners and initial settings were removed.
    
    // Prepare the boxes and table on initial load
    updateCompareBoxes();
    updateCompareTable(); 
}

// Start when the page loads
window.addEventListener("DOMContentLoaded", initComparePage);