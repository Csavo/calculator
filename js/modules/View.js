export const domStrings = {
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
    
export function getDomStrings() {
    return domStrings;
}

export function updateInput(input) {
    if (input === '') input = '0';
    document.querySelector(domStrings.inputValue).value = input;
}

export function updateLog(log) {
    document.querySelector(domStrings.logValue).innerHTML = log;
}