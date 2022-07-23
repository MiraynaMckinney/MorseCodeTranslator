const english = document.getElementById("english");
var conversion = {
    'a':'.-',
    'b':'-...',
    'c':'-.-.',
    'd':'-..',
    'e':'.',
    'f':'..-.',
    'g':'--.',
    'h':'....',
    'i':'..',
    'j':'.---',
    'k':'-.-',
    'l':'.-..',
    'm':'--',
    'n':'-.',
    'o':'---',
    'p':'.--.',
    'q':'--.-',
    'r':'.-.',
    's':'...',
    't':'-',
    'u':'..-',
    'v':'...-',
    'w':'.--',
    'x':'-..-',
    'y':'-.--',
    'z':'--..',
    '1':'.----',
    '2':'..---',
    '3':'...--',
    '4':'....-',
    '5':'.....',
    '6':'-....',
    '7':'--...',
    '8':'---..',
    '9':'----.',
    '0':'-----'
}
english.oninput = function translate(){
    const morse = document.getElementById("morsecode");
    morse.value = english.value;

    var chars = english.value.split('');
    for (let i=0; i<chars.length; i++){
        let char = chars[i].toLowerCase();
        if( chars[i].toUpperCase() != char ){
            chars[i] = conversion[char];
        }
        else if (chars[i] in conversion){
            chars[i] = conversion[chars[i]];
        }
        else{
            continue;
        }

    }
    morse.value = chars.join(' ')
};

