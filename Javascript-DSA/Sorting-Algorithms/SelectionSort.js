//Premise: Instead of sorting large values first, smaller values are sorted into position.
//Pseudocode-
//1. Store the first element as the smallest value seen so far.
//2. Compare this element to the next element in the array until you find a smaller value.
//3. If a smaller number is found,designate that smaller number to be the new "minimum" and continue until the end of the array.
//4. If the "minimum" is not the value(index) you initially began with, swap the two values.
//5. Repeat this with the next element until the array is sorted.

function SelectionSort(arr) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			swap(arr, i, lowest);
		}
	}
	return arr;
}

console.log(SelectionSort([37, 45, 29, 8, 36, 54, 68, 70, 69, -3, -10])); //=
