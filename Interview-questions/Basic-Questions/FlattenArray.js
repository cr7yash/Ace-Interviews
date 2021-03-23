// Concept here is very simple, in our flattenArray function we will iterate through each item in an array and check if it is an array using native Array.isArray function.

// If item is an array, we will iteratively call flattenArray function and concat it to to results
// If item is not an array we will push item in the results array

function FlattenArray(arr) {
	let results = [];
	for (let i = 0; i < arr.length; i++) {
		//console.log(arr[i])
		if (Array.isArray(arr[i])) {
			results = results.concat(FlattenArray(arr[i]));
		} else {
			results.push(arr[i]);
		}
	}
	return results;
}

console.log(FlattenArray([2, 3, [4, 5, 6, [7], 8], 9]));
