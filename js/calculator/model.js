const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let state;
let cb;
const operatorMap = { add, subtract, multiply, divide };
const getRealOperand = operand => parseFloat(operand.join(''));

const addDigit = d => {
	state.currentOperand.push(d);
	cb && cb(getRealOperand(state.currentOperand));
}
const calculateResult = _ => {
	const f = getRealOperand(state.firstOperand);
	const s = getRealOperand(state.secondOperand);
	const fn = operatorMap[state.operator];
	state.result = fn(f, s);
	cb && cb(state.result);
}
const addDecimal = _ => addDigit('.');
const clear = _ => {
	state = {
		firstOperand: [],
		secondOperand: [],
		operator: null,
		currentOperand: null,
		result: 0
	};
	state.currentOperand = state.firstOperand;
	cb && cb(state.result);
};
const changeSign = _ => {
	if (state.currentOperand[0] === '-') {
		state.currentOperand = state.currentOperand.slice(1);
		cb && cb(getRealOperand(state.currentOperand));
	} else {
		state.currentOperand.unshift('-');
	}
};
const calcPercentage = _ => console.log('calcPercentage');
const setOperator = op => {
	state.operator = op;
	state.currentOperand = state.secondOperand;
}
const setCallback = callback => cb = callback;

clear();

const model = {
	addDigit,
	calculateResult,
	addDecimal,
	clear,
	changeSign,
	calcPercentage,
	setOperator,
	result: state.result,
	setCallback
};

export default model;