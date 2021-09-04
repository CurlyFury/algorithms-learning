const array = [5, 4, 32, 1, 44, 6, 87, 21, 10, 9, 5, 4, 6, 3, 7]

let count = 0

function linearSearch(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		count += 1
		if (array[i] === item) {
			return i
		}
	}
	return null
}

console.log(linearSearch(array, 1))
console.log(count)