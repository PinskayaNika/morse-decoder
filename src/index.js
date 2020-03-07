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
  // write your solution here
    let len = 0;
    len = expr.length;
    //return len;
    let res = '';
    let count = 0;
    let sum = 0;
    let decodeRes = '';
    count = len / 10;
    let liter = '';
    let k = 0;
    //return count;
   // return expr;
    for (let i = 0; i < len; i++) {
    	/*if (expr[i] == '*') {
    		//sum = sum +1;
            //return sum;
            return i
        }*/
    	if(expr[i] == 1 && expr[i+1] == 0) {
        //return i;
        	res = res + '.';
            ///return res;
            i = i + 1;
        } else if(expr[i] == 1 && expr[i+1] == 1) {
        	res = res + '-';
            i = i + 1;
    	} else if (expr[i] == '*') {
        	
            //return i;
            res = res + ' ';
            i = i + 9;
        } else if (expr[i] == 0 && expr[i+1] == 0) {
        	
            //return i;
            res = res + '';
            i = i + 1;
        }
        if (i % 10 ==9){
        	res = res + '|';
        }
        //return res;
        //return decodeRes;
    }
    len = res.length;
    for(let j = 0; j < len; j++) {
        	k = res.indexOf("|", j);
            liter = res.substring(j,k);
            j = k;
        for (var key='' in MORSE_TABLE) {
    		if (key == liter) {
         		decodeRes = decodeRes + MORSE_TABLE[liter];
        	}
            
        //return decodeRes;
    	}
        if (liter == ' ') {
            	decodeRes = decodeRes + ' ';
            }
     }
	return decodeRes;
    //return sum;
    return res; //Morse
    //return decodeRes;
}

module.exports = {
    decode
}
