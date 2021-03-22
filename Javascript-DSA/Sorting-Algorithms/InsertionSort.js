//Premise- Build up the sort by gradually creating a larger left half which is always sorted.
// [5,3,4,1,2]
// [3,5,4,1,2]
// [3,4,5,1,2]
// [1,3,4,5,2]
// [1,2,3,4,5]
// Pseudocode -
//1. Start by picking the second element in array.
//2. Now compare the second element with the one before it and swap if necessary.
//3. Continue to the next element and if it is in the incorrect order,iterate through the sorted portion(left side) to place the element in the correct place.
//4. Repeat until the array is sorted.

function InsertionSort(arr) {
	let currentVal;
	for (let i = 1; i < arr.length; i++) {
		currentVal = arr[i];
		console.log(currentVal);
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
		console.log(arr);
	}
	return arr;
}

console.log(InsertionSort([37, 45, 29, 8, 36, 54, 68, 70, 69, -3, -10])); //=
