import Model from './model';

const addDigitListeners = ({ model, digits }) => {
	for (const key of Object.keys(digits)) {
		const elem = digits[key];
		elem.onclick = e => model.addDigit(e.target.dataset.value);
	}
}

const addOperatorListeners = ({ model, operators }) => {
	for (const key of Object.keys(operators)) {
		const elem = operators[key];
		elem.onclick = e => model.setOperator(key);
	}
}

const getChangeCallback = display => result => {
	display.textContent = result;
}

const Calculator = {
	create: ({ ui }) => {
		const { digits, operators, specials } = ui;
		const changeCallback = getChangeCallback(specials.display);
		const model = Model.create({ callback: changeCallback })
		addDigitListeners({ model, digits });
		addOperatorListeners({ model, operators });
		specials.calculate.onclick = e => model.calculateResult();
		specials.clear.onclick = e => model.clear();
		specials.decimal.onclick = e => model.addDecimal();
		specials.changeSign.onclick = e => model.changeSign();
	}
};

export default Calculator;