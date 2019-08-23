const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let state;
const initialState = {
	firstOperand: [],
	secondOperand: [],
	operator: null,
	currentOperand: null
};

state = initialState;
state.currentOperand = state.firstOperand;

const addDigit = d => state.currentOperand.push(d);
const calculateResult = _ => console.log('calculateResult');
const addDecimal = _ => console.log('calculateResult');
const clear = _ => console.log('clear');
const changeSign = _ => console.log('changeSign');
const calcPercentage = _ => console.log('calcPercentage');
const setOperator = op => state.operator = op;
let result = 0;

const model = {
	result,
	addDigit,
	calculateResult,
	addDecimal,
	clear,
	changeSign,
	calcPercentage,
	setOperator
};

export default model;