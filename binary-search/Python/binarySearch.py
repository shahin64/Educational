A = [1, 3, 5, 6, 8, 9, 13, 24, 56, 78]

def binarySearch(array, value):
    low = 0
    high = len(array)
    while(low <= high):
        mid = (low + high) // 2
        if array[mid] == value:
            return True
        elif array[mid] > value:
            high = mid - 1
        else:
            low = mid + 1
    return False


print(binarySearch(A, 24))
print(binarySearch(A, 34))