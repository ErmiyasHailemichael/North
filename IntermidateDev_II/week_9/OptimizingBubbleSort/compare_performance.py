from bubble_sort import bubble_sort, bubble_sort_optimized

# Basic with pass counter
def bubble_sort_counted(arr):
    n = len(arr)
    passes = 0
    for i in range(n):
        passes += 1
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return passes

# Optimized with pass counter
def bubble_sort_optimized_counted(arr):
    n = len(arr)
    passes = 0
    for i in range(n):
        passes += 1
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return passes

def compare(label, arr):
    basic_passes    = bubble_sort_counted(arr.copy())
    optimized_passes = bubble_sort_optimized_counted(arr.copy())
    print(f"\n{label}")
    print(f"  Basic passes:     {basic_passes}")
    print(f"  Optimized passes: {optimized_passes}")
    if optimized_passes < basic_passes:
        print(f"  ✓ Saved {basic_passes - optimized_passes} pass(es)")
    else:
        print(f"  — No difference")

compare("Random Array",    [37, 27, 28, 67, 10, 59, 54, 15])
compare("Already Sorted",  [1, 2, 3, 4, 5, 6])
compare("Reverse Sorted",  [6, 5, 4, 3, 2, 1])
compare("All Identical",   [7, 7, 7, 7, 7])
compare("Empty Array",     [])
compare("Single Element",  [42])
