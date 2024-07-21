const { JSDOM } = require('jsdom');
const { convertCurrency } = require('./scripts');

describe('convertCurrency', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`
            <input type="text" id="amount" value="100">
            <select id="fromCurrency">
                <option value="USD" selected>USD</option>
            </select>
            <select id="toCurrency">
                <option value="EUR" selected>EUR</option>
            </select>
            <div id="result"></div>
        `);
        document = dom.window.document;
        global.document = document;
    });

     // Test pour vérifier que la conversion de USD à EUR se fait correctement.
    test('should convert USD to EUR correctly', () => {
        convertCurrency();
        expect(document.getElementById('result').innerText).toBe('100 USD = 85.00 EUR');
    });

    // Test pour vérifier que la fonction gère les montants invalides correctement.
    test('should handle invalid amount', () => {
        document.getElementById('amount').value = '-50';
        convertCurrency();
        expect(document.getElementById('result').innerText).toBe('S\'il vous plait entrer un montant valide');
    });

    // Test pour vérifier que la fonction gère les conversions avec la même devise correctement.
    test('should handle same currency conversion', () => {
        document.getElementById('toCurrency').value = 'USD';
        convertCurrency();
        expect(document.getElementById('result').innerText).toBe('Veuillez sélectionner une devise différente');
    });
});
