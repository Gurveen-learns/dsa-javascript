// function reverse(str){
//     const len = str.length;
//     if(len === 1) return str;
//     return str[len-1].concat(reverse(str.slice(0, len-1)));
// }

function reverse(input) {
	let strArr = []

	function helper(str) {
		const len = str.length
		if (len === 0) return
		strArr.push(str[len - 1])
		helper(str.slice(0, len - 1))
	}
	helper(input)
	return strArr.join('')
}

console.log(reverse('abcdefg'))
