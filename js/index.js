import UI from './uiAdapter';

window.onload = _ => {
	const ui = UI.parse({ dom: document.querySelector('div.calculator-wrapper')});
	console.log(ui);
}
