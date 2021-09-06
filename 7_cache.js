function cacheFunction(fn) {
	const cache = []
	return function (n) {
		if (cache[n]) {
			console.log('From cache', cache[n])
			return cache[n]
		}
		let result = fn(n)
		cache[n] = result
		console.log('From function', result)
		return result
	}
}

function factorial(n) {
	let result = 1
	while (n != 1) {
		result *= n
		n -= 1
	}
	return result
}

const cacheFactorial = cacheFunction(factorial)

cacheFactorial(5)
cacheFactorial(4)
cacheFactorial(3)
cacheFactorial(1)
cacheFactorial(5)
cacheFactorial(3)
cacheFactorial(8)