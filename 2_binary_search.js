const array = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

let count = 0

function binarySearch(arr, item) {
	let start = 0
	let end = arr.length
	let middle
	let found = false
	let position = -1

	while (found === false && start <= end) {
		middle = Math.floor((start + end) / 2)
		if (arr[middle] === item) {
			found = true
			position = middle
			return position
		}
		if (item < arr[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
	}
}

console.log('Binary:', binarySearch(array, 15))


function recursiveBinarySearch(arr, item, start, end) {
	middle = Math.floor((start + end) / 2)
	if (item === arr[middle]) {
		return middle
	}
	if (item < arr[middle]) {
		return recursiveBinarySearch(arr, item, start, middle - 1)
	} else {
		return recursiveBinarySearch(arr, item, middle + 1, end)
	}
}

console.log('Recursive binary:', recursiveBinarySearch(array, 16, 0, array.length))