const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75 },
    EUR: { USD: 1.18, GBP: 0.88 },
    GBP: { USD: 1.34, EUR: 1.14 }
};


function convertCurrency() {
    // recupere les information saisie
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // condiction de test si les la valeur entrer est negatif
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'S\'il vous plait entrer un montant valide';
        return;
    }

    // condiction pour se rassurer qu'on choisi deux devise differente
    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = 'Veuillez sélectionner une devise différente';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}



module.exports = { convertCurrency };