// What is a Linked list?
// A DS that contains a head,tail and length property. It consists of nodes and each node has a value and a pointer to another node or null.
//
// Comparison with Arrays-
// - It does not have indexes.
// - It is connected via nodes with a next pointer.
// - Random access is not allowed.
// Main use comes in insertion and deletion as these operations are cheaper than an array on large pieces of data.

// Pushing value into a Linked list.
// Premise- piece of data- val
// Reference to next node- next

// Defining the node-

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// Defining the Singly Linked List class-

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	//Push pseudocode- 1. Function should accept a value.
	// 2. Create a new node using the value passed to the function.
	// 3. If there is no head property on the list, set the head and tail to be the newly created node.
	// 4. Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
	// 5. Increment the length by one.
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	//Pop- Remove the last node from the list.
	// Pseudocode- 1. If there are no nodes in the list, return undefined.
	// 2. Loop through the list until you reach the tail.
	// 3. Set the next property of the 2nd to last node to be null.
	// 4. Set the tail to be the 2nd to last node.
	// 5. Decrement the length of the list by 1.
	// 6. Return the value of the node removed.
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	// Shift- Remove a new node from the beginning of the linked list.
	// Pseudocode-1. If there are no nodes, return undefined.
	// 2. Store the current head property in a variable.
	// 3. Set the head property to be the current heads next property.
	// 4. Decrement the length by 1.
	// 5. Return the value of the node removed.
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}
	// Unshift- Adding a new node to the beginning.
	// Pseudocode- 1. Function should accept a value.
	// 2. Create a new node using the value passed.
	// 3. If there is no head property, set the head and tail to be the newly created node.
	// 4. Otherwise, set the newly created node's next property to be the current head property on the list.
	// 5. Set the head property on the list to be the newly created node.
	// 6. Increment the length of the list by 1.
	// 7. Return the linked list.
	unshift(val) {
		let newNode = new Node(val);
		if (!head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}
	// Get- Retrieving a node by it's position in the linked list.
	// Pseudocode- 1. The function should accept an index.
	// 2. If the index is less than zero or greater than or equal to the length of the list, return null.
	// 3. Loop through the list until you reach the index and return the node at that specific index.
	get() {}
}
