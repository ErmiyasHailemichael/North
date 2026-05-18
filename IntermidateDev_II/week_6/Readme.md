# Patient Record Merger — Linked List Assignment

## Background

HealthMerge Inc. recently acquired CarePlus. Both companies store patient records
as sorted linked lists, ordered by SSN. This module merges both lists into a single
sorted list without losing any records.

---

## Problem Statement

Given the heads of two sorted linked lists (sorted by SSN), merge them into one
sorted linked list. If the same SSN appears in both lists, keep both records.

---

## Project Structure

```
portfolio-app/
├── patient_linked_list.py      # Node, LinkedList, and merge function
├── test_patient_linked_list.py # Unit tests (normal + edge cases)
└── README.md                   # This file
```

---

## How It Works

### Node structure

Each patient record is a node with:
- `ssn`  — Social Security Number (used for sorting)
- `age`  — Patient age
- `name` — Patient full name
- `next` — Pointer to the next node

### Merge algorithm

1. Use a **dummy head node** so we never have to handle an empty result list
2. Use **two pointers** — one walking each list
3. At each step, compare SSNs and attach the smaller node to the result
4. When one list runs out, attach the remainder of the other list directly

```python
def merge_sorted_lists(l1, l2):
    dummy   = Node(0, 0, "dummy")
    current = dummy
    p1, p2  = l1.head, l2.head

    while p1 is not None and p2 is not None:
        if p1.ssn <= p2.ssn:
            current.next = p1
            p1 = p1.next
        else:
            current.next = p2
            p2 = p2.next
        current = current.next

    current.next = p1 if p1 else p2

    merged      = LinkedList()
    merged.head = dummy.next
    return merged
```

---

## Clarifying Questions

Before coding, the following questions were considered:

1. Are both lists guaranteed to be sorted before being passed in? **Yes**
2. Can either list be empty? **Yes — handled**
3. What if the same SSN appears in both lists? **Keep both records**
4. Should we create new nodes or reuse existing ones? **Reuse existing nodes**
5. What is returned if both lists are empty? **An empty LinkedList**
6. Is SSN stored as a string or integer? **Integer**

---

## Complexity Analysis

| Metric | Value    | Explanation                                      |
|--------|----------|--------------------------------------------------|
| Time   | O(n + m) | Each node is visited exactly once                |
| Space  | O(1)     | No new nodes created — only 3 pointer variables  |

### Why O(1) space?
We relink existing nodes instead of copying data. The only extra memory used
is the dummy node and three pointer variables, regardless of list size.

### Can we do better?
- **Time** — No. We must visit every node at least once to guarantee correct order.
- **Space** — This is already optimal. A naive approach copying data would use O(n + m) space.

---

## Diagrams

### Input lists

```
HealthMerge:  101(Alice) -> 203(Bob)   -> 340(Carol) -> null
CarePlus:     115(David) -> 203(Eve)   -> 410(Frank) -> null
```

### Merge process (step by step)

```
Compare 101 vs 115 → pick 101 (Alice)    result: 101
Compare 115 vs 203 → pick 115 (David)   result: 101 -> 115
Compare 203 vs 203 → pick 203 (Bob)     result: 101 -> 115 -> 203
Compare 203 vs 203 → pick 203 (Eve)     result: 101 -> 115 -> 203 -> 203
Compare 340 vs 410 → pick 340 (Carol)   result: 101 -> 115 -> 203 -> 203 -> 340
List 1 exhausted  → attach rest of L2   result: 101 -> 115 -> 203 -> 203 -> 340 -> 410
```

### Final merged output

```
101(Alice) -> 115(David) -> 203(Bob) -> 203(Eve) -> 340(Carol) -> 410(Frank) -> null
```

---

## Test Cases

### Normal cases

| Test | Description |
|------|-------------|
| `test_same_length_lists` | Both lists same length, no duplicate SSNs |
| `test_different_length_lists` | List 1 longer than List 2 |
| `test_duplicate_ssns_both_kept` | SSN 203 in both lists — both records kept |

### Edge cases

| Test | Description |
|------|-------------|
| `test_both_lists_empty` | Two empty lists → returns empty list |
| `test_one_list_empty` | One empty list → returns the other unchanged |
| `test_single_node_each` | One node per list — smallest SSN lands first |
| `test_one_list_single_node` | Single node with highest SSN lands at the end |
| `test_merged_list_is_sorted` | General ascending order check across both lists |

---

## Running the Tests

```bash
# Install pytest if needed
pip install pytest

# Run all tests
python -m pytest test_patient_linked_list.py -v
```

Expected output:
```
test_patient_linked_list.py::TestMergeSortedLists::test_both_lists_empty         PASSED
test_patient_linked_list.py::TestMergeSortedLists::test_different_length_lists   PASSED
test_patient_linked_list.py::TestMergeSortedLists::test_duplicate_ssns_both_kept PASSED
test_patient_linked_list.py::TestMergeSortedLists::test_merged_list_is_sorted    PASSED
test_patient_linked_list.py::TestMergeSortedLists::test_one_list_empty           PASSED
test_patient_linked_list.py::TestMergeSortedLists::test_one_list_single_node     PASSED
test_patient_linked_list.py::TestMergeSortedLists::test_same_length_lists        PASSED
test_patient_linked_list.py::TestMergeSortedLists::test_single_node_each         PASSED

8 passed
```

---

## Setup

```bash
# Clone the repo
git clone https://github.com/ErmiyasHailemichael/North.git

# Navigate to the assignment
cd North/IntermidateDev_II/portfolio-app

# Run the tests
python -m pytest test_patient_linked_list.py -v
```

---

## Key Concepts Demonstrated

- Singly linked list structure (Node + LinkedList classes)
- Two-pointer merge technique
- Dummy head node pattern
- Edge case handling (empty lists, single nodes, duplicates)
- Unit testing with Python's `unittest` framework