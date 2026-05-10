// Node definition
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Helper: build a linked list from an array
function buildList(arr) {
  if (!arr.length) return null;
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper: reverse a linked list starting at a given node
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// Helper: find the middle node using fast/slow pointers
function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

/**
 * isHealthRecordSymmetric
 * Determines whether a singly linked list of health metrics
 * forms a palindrome (symmetric pattern).
 *
 * Time complexity:  O(n)
 * Space complexity: O(1)
 *
 * @param {Node} head - Head of the linked list
 * @returns {boolean} true if symmetric, false otherwise
 */
function isHealthRecordSymmetric(head) {
  // Edge case: empty list or single node is always symmetric
  if (!head || !head.next) return true;

  // Step 1: Find the middle of the list
  const middle = findMiddle(head);

  // Step 2: Reverse the second half
  let secondHalfHead = reverseList(middle.next);

  // Step 3: Compare first half and reversed second half
  let left = head;
  let right = secondHalfHead;
  let isSymmetric = true;

  while (right) {
    if (left.value !== right.value) {
      isSymmetric = false;
      break;
    }
    left = left.next;
    right = right.next;
  }

  // Step 4: Restore the list (re-reverse the second half)
  middle.next = reverseList(secondHalfHead);

  return isSymmetric;
}

module.exports = { Node, buildList, isHealthRecordSymmetric };
