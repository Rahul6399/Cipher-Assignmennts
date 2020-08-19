//1.1
let min = (m) => {
    return m * 60;
  };
  console.log("In seconds: ", seconds(5));
//////////////////////////////////////////////////////////////
//1.2
let x = 67;
let y = 90;
function divide(x, y) {
  if ((x / y) % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Output:", divide(x, y));
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//2.1
let x = "b";
let y = ("big fat bubble");
function char_count (a, b) 
{
  let count = 0;
  for (let i = 0; i < b.length; i++)
   {
    if (b[i] == a) 
    {
      count += 1;
    }
  }
  return count;
};
console.log("Character Count  : ", char_count(x, y));
//////////////////////////////////////////////////////////////
//2.2
let number = 13;
addUp = (a) => {
  if (1 <= a <= 1000) {
    let add = 0;
    for (let b = a; b > 0; b--) {
      add += b;
    }
    return add;
  }
};
console.log("Total Sum = ", addUp(number));
//////////////////////////////////////////////////////////////
//2.3
let a = "karachi";
replaceVowel = (string) => {
  for (let x = 0; x < string.length; x++) {
    if (a[x] == "a" || "e" || "o" || "i" || "u") {
      string = string.replace("a", "1");
      string = string.replace("e", "2");
      string = string.replace("i", "3");
      string = string.replace("o", "4");
      string = string.replace("u", "5");
    }
  }
  return string;
};
console.log("Q3 Output: ", replaceVowel(a));
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//3.1
function spinWords(backward) {

  var sentence = "s";
  var separate = backward.split(" ");
  
  for (var i = 0; i < separate.length; i++) {
    if (sentence) sentence += ' ';
    if (separate[i].length >= 5) {
      sentence += separate[i].split("").reverse().join("");
    } else {
      sentence += separate[i];
    }
  }
  return sentence;
}

console.log(spinWords("word searches are super fun"));
/////////////////////////////////////////////////////////////
//3.2
function testJackpot(arr)
{
	let s = arr[0];
	let y = true;
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i] !== s)
        {
			y = false;
		}
	}
	return y;
}

 console.log(testJackpot(["@", "@", "@", "@"]));
 //console.log(testJackpot(["SS", "SS", "SS", "Ss"]));
/////////////////////////////////////////////////////////////
//3.3
let ar = ["John", "Taylor", "John", "Cena"];

function removeDups(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}

console.log( " After removing duplicates: ", removeDups(ar));
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//4.1
function realType(x){
	var ans = (Object.prototype.toString.call(x));
    return ans.substring(8).replace(']','');
}

console.log(realType(1));
 console.log(realType("a"));
console.log(realType(true));
 console.log(realType([]));
 console.log(realType(null));
///////////////////////////////////////////////////////////////
//4.2
function numInStr(arr){
	let n = [];
	for(let i=0; i<arr.length; i++){
		let x = arr[i];
		let flag = false;
		for(let j=0; j<x.length; j++){
			let y = x[j];
			if(!isNaN(y) && y !== " "){
				flag = true;
			}
		}
		if(flag){
			n.push(x);
		}
	}
	return n;
}

 console.log(numInStr(["1a", "a", "2b", "b"]));
//console.log(numInStr(["abc", "abc10"]));







