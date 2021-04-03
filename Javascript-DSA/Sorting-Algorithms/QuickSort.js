//Premise- Like merge sort, it exploits the fact that arrays of 0 or 1 element are always sorted.
// It works by selecting one element(pivot) and finding the index where the pivot should end up in the sorted array.
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

//Pivot helper function- Given an array, this helper function should designate an element as the pivot.
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot.
// The order of elements on either side of the pivot doesn't matter.
// The helper should do this in place. It should not create a new array.
// When complete, the helper should return the index of the pivot.

// Picking a pivot- The runtime of quick sort, depends on how one selects the pivot.
// Ideally, the pivot should be chosen so that it's roughly the median value in the dataset you are sorting.
// For simplicity, we'll always choose the pivot to be the first element. (Some consequences)

// Pivot helper pseudocode- Accept three arguments: an array, a start index and an end index.
// Grab the pivot from the start of the array.
// Store the current pivot index in a variable(This will keep track of where the pivot should end up)
// Loop through the array from the start until the end-
//  If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// Swap the starting element (pivot) with the pivot index.
// Return the pivot index.

function Pivot(arr, start = 0, end = arr.length + 1) {
	function swap(array, i, j) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	var pivot = arr[start];
	var swapIdx = start;

	for (var i = start + i; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3, 20]));

//Quicksort Pseudocode- Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index.
// Your base case occurs when you consider a subarray with less than 2 elements.

function QuickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		//left
		QuickSort(arr, left, pivotIndex - 1);
		//right
		QuickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(QuickSort([4, 8, 2, 1, 5, 7, 6, 3, 20]));
