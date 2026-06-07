import random
from bubble_sort import bubble_sort, bubble_sort_optimized

# Helper to run both versions and print results
def run_test(label, arr):
    basic = bubble_sort(arr.copy())
    optimized = bubble_sort_optimized(arr.copy())
    print(f"\n{label}")
    print(f"  Input:     {arr}")
    print(f"  Basic:     {basic}")
    print(f"  Optimized: {optimized}")

# 1. Random array
run_test("Random Array", [random.randint(1, 100) for _ in range(8)])

# 2. Already sorted (best case)
run_test("Already Sorted", [1, 2, 3, 4, 5, 6])

# 3. Reverse sorted (worst case)
run_test("Reverse Sorted", [6, 5, 4, 3, 2, 1])

# 4. All identical elements
run_test("All Identical", [7, 7, 7, 7, 7])

# 5. Empty array
run_test("Empty Array", [])

# 6. Single element
run_test("Single Element", [42])
