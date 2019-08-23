import model from './model';

const addDigitListeners = ({ digits }) => {
	for (const key of Object.keys(digits)) {
		const elem = digits[key];
		elem.onclick = e => model.addDigit(e.target.dataset.value);
	}
}

const addOperatorListeners = ({ operators }) => {
	for (const key of Object.keys(operators)) {
		const elem = operators[key];
		elem.onclick = e => model.setOperator(key);
	}
}

const Calculator = {
	create: ({ ui }) => {
		const { digits, operators } = ui;
		addDigitListeners({ digits });
		addOperatorListeners({ operators });
	}
};

export default Calculator;