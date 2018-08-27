
function isValid(s) {
	// e.g. {a: 2, b: 2, c: 3....} 
    let charMap = {};
	// char of
    for (const c of s){
		// prop in
        if (c in charMap){
            charMap[c]++; //
        } else {
            charMap[c] = 1; //
        }
    }

	// e.g. {2: how_many_2, 3: how_many_3, ..} 
    let freqMap = {};
	// prop in 
    for (const k in charMap){
        const freq = charMap[k];
        if (freq in freqMap){
            freqMap[freq]++;
        } else {
            freqMap[freq] = 1;
        }
    }

	// test
	console.log('--');
	console.log(charMap);
	console.log(freqMap);
	console.log(Object.keys(freqMap));
	console.log(Object.entries(freqMap));

	// object.keys in array
    if (Object.keys(freqMap).length === 1){
        return 'YES';
    } else if (Object.keys(freqMap).length === 2){
		// [ [ '2', 7 ], [ '3', 1 ] ]
		// e.g. 2 is key, 7 is val
        const entries = Object.entries(freqMap);

		console.log(entries);

		if (
			parseInt(entries[1][1]) == 1 &&
			parseInt(entries[0][0]) + 1 == parseInt(entries[1][0])
		){
            return 'YES';
        } 
		else if(
			parseInt(entries[0][1])  == 1 &&
            parseInt(entries[0][0]) + 1 == parseInt(entries[1][0]) 
		) {
			return 'YES';
		} 
		else if(
			parseInt(entries[1][1])  == 1 &&
            parseInt(entries[0][0]) > parseInt(entries[1][0])	
		) {
			return 'YES';
		}
		else if(
            parseInt(entries[0][1])  == 1 &&
            parseInt(entries[0][0]) < parseInt(entries[1][0])
        ) {
            return 'YES';
        }
    }

    return 'NO';
}

//let s = 'abcdefghhgfedecba';
let s = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
let out = isValid(s);
console.log(out);

