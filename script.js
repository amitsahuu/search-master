const suggestions = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
];

function showSuggestions(value) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';
    if (value) {
        const filteredSuggestions = suggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(value.toLowerCase())
        );
        filteredSuggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = suggestion;
            div.onclick = () => selectSuggestion(suggestion);
            suggestionsContainer.appendChild(div);
        });
        suggestionsContainer.style.display = filteredSuggestions.length ? 'block' : 'none';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

function selectSuggestion(suggestion) {
    document.getElementById('search-bar').value = suggestion;
    document.getElementById('suggestions').style.display = 'none';
    displayResults(suggestion);
}

function displayResults(query) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.textContent = `You searched for: ${query}`;
    resultsContainer.appendChild(resultItem);
}

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        document.getElementById('suggestions').style.display = 'none';
    }
});
