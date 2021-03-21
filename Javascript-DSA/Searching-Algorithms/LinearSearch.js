// Scenario: User wants to search for a place, name etc. So we search through every value to match what we are searching
// Data provided- Unsorted array
//Big-O: O(n)
// Pseudocode-
// 1. Function accepts an array and value
// 2. Loop through array and check if the current array element is equal to the value.
// 3. If true, return index at which the element is found or return -1 if value is never found

function LinearSearch(arr, val) {
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		// console.log(arr[i]);
		if (arr[i] === val) {
			return i; //Return the index
		}
	}
	return -1; //If value is not found
}

LinearSearch([10, 15, 20, 25, 30], 15); //=
