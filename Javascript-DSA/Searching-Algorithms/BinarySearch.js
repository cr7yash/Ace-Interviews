//Rather eliminate one element at a time, we can eliminate half of the elements at a time.
//It only works on SORTED ARRAYS. Idea behind is to use divide and conquer method.
// Pseudocode -
// 1. Function accepts a sorted arraya and value
// 2. Create a start pointer(Left) and an end pointer(Right)
// 3. While the start pointer comes before the end pointer-
//     - Create a pointer in the middle
//     - If you find the value you want, return the index
//     - If the value is too small, move the left pointer up
//     - If the value is too large, move the right pointer down
// 4. If you don't find the value,return -1

function BinarySearch(arr, val) {
	let leftPtr = 0;
	let rightPtr = arr.length - 1;
	let middle = Math.floor((leftPtr + rightPtr) / 2);

	while (arr[middle] !== val && leftPtr <= rightPtr) {
		if (val < arr[middle]) {
			rightPtr = middle - 1;
		} else {
			leftPtr = middle + 1;
		}
		middle = Math.floor((leftPtr + rightPtr) / 2);
	}
	return arr[middle] === val ? middle : -1;
}
console.log(
	BinarySearch(
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		11
	)
);
