
function isValid(s) {

    let charMap = {};
    for (const c of s){
        if (c in charMap){
            charMap[c]++;
        } else {
            charMap[c] = 1;
        }
    }

    let freqMap = {};
    for (const k in charMap){
        const freq = charMap[k];
        if (freq in freqMap){
            freqMap[freq]++;
        } else {
            freqMap[freq] = 1;
        }
    }

    if (Object.keys(freqMap).length === 1){
        return 'YES';
    } else if (Object.keys(freqMap).length === 2){
        const entries = Object.entries(freqMap);
        // check if the outlier frequency number only occurs once
        //      and is exactly one less than the other frequency
        if (entries[1][1] === 1 && entries[1][0] < entries[0][0]){
            return 'YES';
        } else if (entries[0][1] === 1 && entries[0][0] < entries[1][0]){
            return 'YES';
        }
    }
    return 'NO';
}


let s = 'abcdefghhgfedecba';
let out = isValid(s);
console.log(out);

