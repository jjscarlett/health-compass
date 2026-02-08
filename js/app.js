// ============================================
// TERMS AND AGREEMENT
// ============================================

// Enable accept button when checkbox is checked
document.getElementById('agreeCheckbox').addEventListener('change', function() {
    document.getElementById('acceptButton').disabled = !this.checked;
});

// Accept terms and close overlay
function acceptTerms() {
    document.getElementById('termsOverlay').classList.add('hidden');
    document.getElementById('searchBox').classList.remove('disabled');
    document.getElementById('searchInput').focus();
}

// Decline terms
function declineTerms() {
    alert('You must accept the terms and agreement to use Alberta\'s Health Compass.');
}

// ============================================
// INFO POPUPS
// ============================================

function openHowItWorksPopup(e) {
    e.preventDefault();
    document.getElementById('howItWorksPopup').classList.add('show');
}

function openDataSourcesPopup(e) {
    e.preventDefault();
    document.getElementById('dataSourcesPopup').classList.add('show');
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.remove('show');
}

// Close popup when clicking outside modal
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('info-overlay')) {
        e.target.classList.remove('show');
    }
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

// Enable search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !this.closest('.search-box').classList.contains('disabled')) {
        performSearch(this.value);
    }
});

// Search button click
document.querySelector('.search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput.closest('.search-box').classList.contains('disabled')) {
        performSearch(searchInput.value);
    }
});

// Placeholder for actual search implementation
function performSearch(query) {
    console.log('Search query:', query);
    // TODO: Implement actual search API call
    alert('Search functionality will be implemented here.\nQuery: ' + query);
}
