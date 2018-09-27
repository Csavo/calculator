var calcController = (function() {
    var data = {
        input: '',
        log: '',
        result: 0
    };
    
    return {
        getInput: function() {
            return data.input;
        },
        
        getLog: function() {
            return data.log;
        },
        
        updateInput: function(value) {
            data.input = data.input + value;
            console.log('the input (data.input) is now: ' + data.input + ' (string)');
        },
        
        updateLog: function(value) {
            data.log = data.log + value;
            console.log('the log (data.log) is now: ' + data.log + ' (string)');
        },
        
        backspaceInput: function() {
            data.input = data.input.slice(0, -1);
        },
        
        clearInputCE: function() {
            data.input = '';
            console.log('Input cleared!');
        },
        
        clearC: function() {
            data.input = '';
            data.log = '';
            console.log('Everyting cleared!');
        }
        
    };
    
})();

var uiController = (function() {
    
    var domStrings = {
        logValue: '.xlogx',
        inputValue: '.xinputx',
        opC: '#op-c',
        opCe: '#op-ce',
        opSquare: '#op-square',
        opSqrt: '#op-sqrt',
        opBrOpen: '#op-br-open',
        opBrClose: '#op-br-close',
        opBackspace: '#op-backspace',
        opDivide: '#op-divide',
        opMultiply: '#op-multiply',
        opSubstract: '#op-substract',
        opAdd: '#op-add',
        opNegative: '#op-negative',
        opDecimal: '#op-decimal',
        opEquals: '#op-equals',
        nr0: '#nr-0',
        nr1: '#nr-1',
        nr2: '#nr-2',
        nr3: '#nr-3',
        nr4: '#nr-4',
        nr5: '#nr-5',
        nr6: '#nr-6',
        nr7: '#nr-7',
        nr8: '#nr-8',
        nr9: '#nr-9'
    };
    
    return {
        getDomStrings: function() {
            return domStrings;
        },
        
        updateInput: function(input) {
            if (input === '') input = '0';
            document.querySelector(domStrings.inputValue).value = input;
        },
        
        updateLog: function(log) {
            document.querySelector(domStrings.logValue).innerHTML = log;
        }
    };
    
})();

var controller = (function(calcController, uiController) {
    
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
        var input = calcController.getInput();
        if (input.length < 10) { // set max characters
            if (typeof(value) === 'object') { // is mouse event
                if (this.dataset.value) {
                    if (this.dataset.value === '.') {
                        if (input.length === 0) {
                            calcController.updateInput('0.');
                        } else if (input.indexOf('.') === -1) {
                            calcController.updateInput(this.dataset.value);
                        }
                    } else if (this.dataset.value === '0') {
                        if (input.length !== 0) calcController.updateInput(this.dataset.value);
                    } else calcController.updateInput(this.dataset.value);
                } else if (this.dataset.backspace) { // is backspace button
                    calcController.backspaceInput();
                } else if (this.dataset.clear) { // is C button
                    calcController.clearC();
                } else if (this.dataset.clearentry) { // is CE button
                    calcController.clearInputCE();
                }
            } else if (typeof(value) === 'number') { // is keyCode
                if (value === 46) {
                    if (input.length === 0) {
                        calcController.updateInput('0.');
                    } else if (input.indexOf('.') === -1) {
                        calcController.updateInput(String.fromCharCode(value));
                    }
                } else if (value === 48) {
                    if (input.length !== 0) calcController.updateInput(String.fromCharCode(value));
                } else calcController.updateInput(String.fromCharCode(value));
            }
        } else if (this.dataset.backspace) {
            calcController.backspaceInput();
        } else if (this.dataset.clear) {
            calcController.clearC();
        } else if (this.dataset.clearentry) {
            calcController.clearInputCE();
        }
        input = calcController.getInput();
        uiController.updateInput(input);
    };
    
    return {
        init: function() {
            setUpEventListeners();
            uiController.updateInput(calcController.getInput());
            uiController.updateLog(calcController.getLog());
            console.log('Application started!');
        }
    };
    
})(calcController, uiController);

controller.init();