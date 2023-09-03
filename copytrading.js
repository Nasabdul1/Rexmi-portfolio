// JavaScript code for interactive trade type selection
const tradeTypeSelect = document.getElementById('tradeType');
const forexFields = document.getElementById('forexFields');
const cryptoFields = document.getElementById('cryptoFields');
const cryptoTokenNameSelect = document.getElementById('cryptoTokenName');

tradeTypeSelect.addEventListener('change', function() {
    const selectedOption = tradeTypeSelect.value;

    // Hide all fields initially
    forexFields.style.display = 'none';
    cryptoFields.style.display = 'none';

    if (selectedOption === 'forex') {
        forexFields.style.display = 'block';
    } else if (selectedOption === 'crypto') {
        cryptoFields.style.display = 'block';

        // Fetch token names from an API (replace with your API endpoint)
        fetch('https://api.example.com/token-names')
            .then(response => response.json())
            .then(data => {
                // Populate the select options with token names
                cryptoTokenNameSelect.innerHTML = '';
                data.forEach(token => {
                    const option = document.createElement('option');
                    option.value = token;
                    option.textContent = token;
                    cryptoTokenNameSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching token names:', error);
            });
    }
});

// JavaScript code for form submission (same as before)
document.getElementById('tradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values based on the selected trade type
    const selectedOption = tradeTypeSelect.value;
    let pair, entryPrice, stopLoss, takeProfit;

    if (selectedOption === 'forex') {
        pair = document.getElementById('forexPair').value;
        entryPrice = parseFloat(document.getElementById('forexEntryPrice').value);
        stopLoss = parseFloat(document.getElementById('forexStopLoss').value);
        takeProfit = parseFloat(document.getElementById('forexTakeProfit').value);
    } else if (selectedOption === 'crypto') {
        const cryptoAddress = document.getElementById('cryptoAddress').value;
        const tokenName = cryptoTokenNameSelect.value;
        const tokenChain = document.getElementById('cryptoTokenChain').value;
        entryPrice = parseFloat(document.getElementById('cryptoEntryPrice').value);
        stopLoss = parseFloat(document.getElementById('cryptoStopLoss').value);
        takeProfit = parseFloat(document.getElementById('cryptoTakeProfit').value);
        
        // You can use cryptoAddress, tokenName, and tokenChain as needed.
    }

    // You can perform further processing and API calls here to send the trade details.
    // For simplicity, we'll just log the data.
    console.log(`Trade Type: ${selectedOption}`);
    console.log(`Pair/Token: ${pair}`);
    console.log(`Entry Price: ${entryPrice}`);
    console.log(`Stop Loss: ${stopLoss}`);
    console.log(`Take Profit: ${takeProfit}`);

    // You can use AJAX or other methods to send this data to your server/API for processing.
});