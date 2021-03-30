//Premise- To make algorithms execute faster and efficiently we need to move on with complex sorting algorithms.
// Merge sort- is a combination of two things- merging and sorting
// Exploits the fact that arrays of 0 or 1 element are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

//[8,4,34,56,23,5,10]
//[8,4,34] [56] [23,5,10] Sorting
//[4,8,34] [56] [5,10,23]  Merging
//[4,8,34,56] [5,10,23]
//[4,5,8,10,23,34,56] Final result

// We start by writing our merge function-
//Pseudocode- 1. Create an empty array, look at the smallest values in each input array.
// 2. While there are still values not looked at-
//     - If the value in first array is smaller than the value in second array, push the value in the first array into our results and move on to the next value in first array.
//     - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
//     - Once we exhaust one array, push in all the remaining values from the other array.

function MergeArrays(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
		while (i < arr1.length) {
			results.push(arr1[i]);
			i++;
		}
		while (j < arr2.length) {
			results.push(arr2[j]);
			j++;
		}
	}
	return results;
}

//Merge sort Pseudocode-
// 1. Break up the array into halves until you have arrays that are empty or have one element.
// 2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
// 3. Once the array has been merged back together, return the merged(and sorted) array.

function MergeSort(arr) {
	if (arr.length <= 1) return arr;

	let mid = Math.floor(arr.length / 2);
	let left = MergeSort(arr.slice(0, mid));
	let right = MergeSort(arr.slice(mid));

	return MergeArrays(left, right);
}

console.log(MergeSort([8, 4, 34, 56, 23, 5, 10])); //=
