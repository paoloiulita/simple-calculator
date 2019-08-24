const getDigits = ({ dom }) => dom.querySelectorAll('[data-type="digit"]');
const getOperators = ({ dom }) => dom.querySelectorAll('[data-type="operator"]');
const getSpecials = ({ dom }) => dom.querySelectorAll('[data-type="special"]');

const UI = {
	parse: ({ dom }) => {
		const digits = Array.from(getDigits({dom}));
		const operators = Array.from(getOperators({dom}));
		const specials = Array.from(getSpecials({dom}));
		return {
			digits: {
				d0: digits.find(elem => elem.getAttribute('data-value') == 0),
				d1: digits.find(elem => elem.getAttribute('data-value') == 1),
				d2: digits.find(elem => elem.getAttribute('data-value') == 2),
				d3: digits.find(elem => elem.getAttribute('data-value') == 3),
				d4: digits.find(elem => elem.getAttribute('data-value') == 4),
				d5: digits.find(elem => elem.getAttribute('data-value') == 5),
				d6: digits.find(elem => elem.getAttribute('data-value') == 6),
				d7: digits.find(elem => elem.getAttribute('data-value') == 7),
				d8: digits.find(elem => elem.getAttribute('data-value') == 8),
				d9: digits.find(elem => elem.getAttribute('data-value') == 9)
			},
			operators: {
				add: operators.find(elem => elem.getAttribute('data-value') == 'plus'),
				subtract: operators.find(elem => elem.getAttribute('data-value') == 'minus'),
				multiply: operators.find(elem => elem.getAttribute('data-value') == 'x'),
				divide: operators.find(elem => elem.getAttribute('data-value') == 'slash'),
			},
			specials: {
				calculate: specials.find(elem => elem.getAttribute('data-value') == 'equal'),
				decimal: specials.find(elem => elem.getAttribute('data-value') == 'dot'),
				clear: specials.find(elem => elem.getAttribute('data-value') == 'c'),
				changeSign: specials.find(elem => elem.getAttribute('data-value') == 'sign'),
				percentage: specials.find(elem => elem.getAttribute('data-value') == 'percent'),
				display: specials.find(elem => elem.getAttribute('data-value') == 'display'),
			}
		}
	}
};

export default UI;