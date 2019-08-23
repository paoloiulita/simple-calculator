import Calculator from './calculator';
import UI from './uiAdapter';

window.onload = _ => {
	const ui = UI.parse({ dom: document.querySelector('div.calculator-wrapper')});
	Calculator.create({ui});
}
