document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {

        // Send a GET request to the URL
        fetch('https://api.exchangerate.host/latest')
        // Put response into json form
        .then(response => response.json())
        .then(data => {
            // Get currency from user input and convert to upper case
            const currency1 = document.querySelector('#currency1').value.toUpperCase();
            const currency2 = document.querySelector('#currency2').value.toUpperCase();
            // Get rate from data
            const rate = parseFloat(data.rates[currency1]);
            const rate2 = parseFloat(data.rates[currency2]);
            // Check if currency is valid:
            const amouunt2=(parseFloat(document.querySelector('#quantity1').value)/parseFloat(rate))*rate2;
            if (rate !== undefined) {
                // Display exchange on the screen
                document.querySelector('#result').innerHTML = `${document.querySelector('#quantity1').value} ${currency1} is equal to ${amouunt2.toFixed(2)} ${currency2}.`;
            }
            else {
                // Display error on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        })
        // Catch any errors and log them to the console
        .catch(error => {
            console.log('Error:', error);
        });

        // Prevent default submission
        return false;}
    });