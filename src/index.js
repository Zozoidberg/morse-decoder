const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    decodeString = ''
    morseCode = ''
    for (let i = 0; i + 10 <= expr.length; i+=10) {
        for (let j = 0; j < 10; j+=2) {
            if (expr[i + j] + expr[i + j + 1] === '10')
                morseCode += '.'
            else if (expr[i+ j] + expr[i+ j + 1] === '11')
                morseCode += '-'
        }
        if (morseCode === '')
            decodeString += ' '
        else 
            decodeString += MORSE_TABLE[morseCode]
        morseCode = ''
    }
    return decodeString
}

module.exports = {
    decode
}