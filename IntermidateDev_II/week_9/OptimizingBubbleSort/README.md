# Bubble Sort — Exploring and Optimizing

## Overview
This project implements, tests, and analyzes the Bubble Sort algorithm in Python.
It includes a basic version and an optimized version with an early-exit mechanism.

## Files
| File | Description |
|------|-------------|
| `bubble_sort.py` | Basic and optimized Bubble Sort implementations |
| `test_bubble_sort.py` | Six test cases covering all input scenarios |
| `compare_performance.py` | Pass counter comparison between both versions |
| `BubbleSort_Final_Report.pdf` | Full written report with analysis |

## How to Run

### Run Tests
```bash
python test_bubble_sort.py
```

### Run Performance Comparison
```bash
python compare_performance.py
```

## Results Summary
| Scenario | Basic Passes | Optimized Passes |
|----------|-------------|-----------------|
| Random Array | 8 | 7 |
| Already Sorted | 6 | 1 |
| Reverse Sorted | 6 | 6 |
| All Identical | 5 | 1 |
| Empty Array | 0 | 0 |
| Single Element | 1 | 1 |

## Complexity
| Case | Big O | Why |
|------|-------|-----|
| Best | O(n) | Already sorted — one pass, zero swaps, stops early |
| Average | O(n²) | Most passes need comparisons and swaps |
| Worst | O(n²) | Reverse sorted — every element bubbles all the way |

Space complexity is O(1) — sorts in-place, no extra memory needed.
