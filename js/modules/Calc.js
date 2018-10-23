export const data = {
    input: '',
    log: '',
    result: 0
};

export function getInput() {
    return data.input;
}

export function getLog() {
    return data.log;
}

export function updateInput(value) {
    data.input = data.input + value;
    console.log('the input (data.input) is now: ' + data.input + ' (string)');
}

export function updateLog(value) {
    data.log = data.log + value;
    console.log('the log (data.log) is now: ' + data.log + ' (string)');
}

export function backspaceInput() {
    data.input = data.input.slice(0, -1);
}

export function clearInputCE() {
    data.input = '';
    console.log('Input cleared!');
}

export function clearC() {
    data.input = '';
    data.log = '';
    console.log('Everyting cleared!');
}