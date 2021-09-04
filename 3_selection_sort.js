const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 7, -5, 23, 35, 6, 32, -1]

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minIndex = i
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j
			}
		}
		let tmp = array[i]
		array[i] = array[minIndex]
		array[minIndex] = tmp
	}
	return array
}

console.log(selectionSort(arr))

