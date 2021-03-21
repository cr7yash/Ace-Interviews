// Premise: Sort values based on a condition. So here bubble sort compares the value to the adjacent one and then on the basis of(lower or greater) swap places with the value at a particular index.
// Values bubble to the top
// Pseudocode:
// 1. Start looping from a variable called i at the end of the array towards the beginning.
// 2. Start an inner loop with a variable called j from the beginning until i-1.
// 3. if arr[j] is greater than arr[j+1],swap those two values.
// 4. Return the sorted array.

function BubbleSort(arr) {
	//Swap values
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; //=
	};
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(BubbleSort(37, 45, 29, 8, 36, 54, 68, 70, 69, -3, -10)); //=
