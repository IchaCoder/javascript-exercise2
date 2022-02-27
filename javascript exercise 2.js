/** @format */

// Test1: Reverse a string

function reverseString(str) {
	//    return str.split('').reverse().join('')

	///////////
	// let revString = "";
	// for(let i = str.length - 1; i >= 0; i--) {
	//     revString = revString + str[i];
	// }
	// return revString

	// let revString = "";
	// for(let i = 0; i <= str.length - 1; i++){
	//     revString = str[i] + revString
	// }
	// return revString

	// ///////////////////////
	// let revString = '';
	// for(let i of str){
	//     revString = i + revString
	// }
	// return revString;

	/////////////////
	// let revString = '';
	// str.split('').forEach(char => revString = char + revString)

	////////////////////////
	str.split("").reduce((revString, char) => {
		return char + revString;
	}, "");
}

reverseString("damn");

function isPalindrom(str) {
	// let revString = "";
	// str.split('').forEach(char => {
	//     revString = char + revString
	// })
	// return revString === str;
	///////////////
	let revString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		revString = revString + str[i];
	}
	return revString === str;
}

isPalindrom("racecar");

function reverseInt(int) {
	const revString = int.toString().split("").reverse().join("");
	return parseInt(revString);
	// or if there is a negative or any sign
	// return parseInt(revString) * Math.sign(int);
	// let revString = int.toString()
	// let newString = ''
	// for(let char of revString){
	//     newString = char + newString
	// }
	// return parseInt(newString)
}

reverseInt(2282);
// reverseInt(-2282)

function capitalizeLetters(str) {
	// const strArr = str.toLowerCase().split(' ')
	// for(let i = 0; i <= strArr.length - 1; i++) {
	//     strArr[i] = strArr[i].slice(0,1).toUpperCase() + strArr[i].slice(1,)
	// }
	// return strArr.join(' ');

	const strArr = str.toLowerCase().split(" ");
	const newstr = strArr.map((word) => {
		return word[0].toUpperCase() + word.substring(1);
	});
	console.log(newstr.join(" "));
}

capitalizeLetters("I love javascript");

function maxCharacter(str) {
	const array = str.split("").reduce((total, char) => {
		if (!total[char]) {
			total[char] = 1;
		} else {
			total[char] += 1;
		}
		console.log(total[char]);
		return total;
	}, {});

	const charMap = Object.values(array);

	let maxNum = 0;
	for (let i = 0; i <= 2; i++) {
		if (charMap[i] > maxNum) {
			maxNum = charMap[i];
		}
	}
	// console.log(maxNum);
	return maxNum;
}

maxCharacter("javaa");
