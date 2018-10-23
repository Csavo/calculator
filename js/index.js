import * as calc from './modules/Calc.js';
import * as view from './modules/View.js';

var setUpEventListeners = function() {
    var buttons, buttonsArray;
    
    // Add event listeners to buttons
    buttons = document.querySelectorAll('.xbuttonx');
    buttonsArray = Array.prototype.slice.call(buttons);
    buttonsArray.forEach(function(current, index, array) {
        current.addEventListener('click', ctrlUpdateInput);
    });
    
    // Add event listener for keypress to the whole document
    document.addEventListener('keypress', function(event) {
        // numbers
        for (var i = 48; i <= 57; i++) {
            if (event.keyCode === i || event.which === i) {
                ctrlUpdateInput(event.keyCode);
            }
        }
        // multiply (*)
        if (event.keyCode === 42 || event.which === 42) {
            // do something
        }
        // add (+)
        if (event.keyCode === 43 || event.which === 43) {
            // do something
        }
        // substract (-)
        if (event.keyCode === 45 || event.which === 45) {
            // do something
        }
        // decimal (.)
        if (event.keyCode === 46 || event.which === 46) {
            ctrlUpdateInput(event.keyCode);
        }
        // divide (/)
        if (event.keyCode === 47 || event.which === 47) {
            // do something
        }
        // enter (=)
        if (event.keyCode === 13 || event.which === 13) {
            // do something
        }
    });
};

var ctrlUpdateInput = function(value) {
    var input = calc.getInput();
    if (input.length < 10) { // set max characters
        if (typeof(value) === 'object') { // is mouse event
            if (this.dataset.value) {
                if (this.dataset.value === '.') {
                    if (input.length === 0) {
                        calc.updateInput('0.');
                    } else if (input.indexOf('.') === -1) {
                        calc.updateInput(this.dataset.value);
                    }
                } else if (this.dataset.value === '0') {
                    if (input.length !== 0) calc.updateInput(this.dataset.value);
                } else calc.updateInput(this.dataset.value);
            } else if (this.dataset.backspace) { // is backspace button
                calc.backspaceInput();
            } else if (this.dataset.clear) { // is C button
                calc.clearC();
            } else if (this.dataset.clearentry) { // is CE button
                calc.clearInputCE();
            }
        } else if (typeof(value) === 'number') { // is keyCode
            if (value === 46) {
                if (input.length === 0) {
                    calc.updateInput('0.');
                } else if (input.indexOf('.') === -1) {
                    calc.updateInput(String.fromCharCode(value));
                }
            } else if (value === 48) {
                if (input.length !== 0) calc.updateInput(String.fromCharCode(value));
            } else calc.updateInput(String.fromCharCode(value));
        }
    } else if (this.dataset.backspace) {
        calc.backspaceInput();
    } else if (this.dataset.clear) {
        calc.clearC();
    } else if (this.dataset.clearentry) {
        calc.clearInputCE();
    }
    input = calc.getInput();
    view.updateInput(input);
};
    
function init() {
    setUpEventListeners();
    view.updateInput(calc.getInput());
    view.updateLog(calc.getLog());
    console.log('Application started!');
}

init();