const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 7, -5, 23, 35, 6, 32, -1]

function bubbleSort(arr) {
	for (let i = 0; i <= arr.length; i++) {
		for (let j = 0; j <= arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let tmp = arr[j + 1]
				arr[j + 1] = arr[j]
				arr[j] = tmp
			}
		}
	}
	return arr
}

console.log(bubbleSort(arr))