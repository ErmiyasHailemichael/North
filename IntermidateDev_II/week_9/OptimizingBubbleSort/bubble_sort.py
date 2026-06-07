# ============================================================
# Basic Bubble Sort
# ============================================================
def bubble_sort(arr):
    n = len(arr)

    # Outer loop: each pass moves the next largest element to its final position
    for i in range(n):

        # Inner loop: compare adjacent pairs
        # After each pass, the last i elements are already sorted
        for j in range(0, n - i - 1):

            # If left element is greater than right, swap them
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


# ============================================================
# Optimized Bubble Sort
# ============================================================
def bubble_sort_optimized(arr):
    n = len(arr)

    for i in range(n):
        swapped = False  # Track whether any swap happened this pass

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True  # Mark that a swap occurred

        # If no swaps happened, the array is already sorted — stop early
        if not swapped:
            break

    return arr
