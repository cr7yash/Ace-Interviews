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
