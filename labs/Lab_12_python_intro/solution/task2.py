import heapq

def main(n, x):
    max_heap = []
    min_heap = []
    result = 0

    for i in range(n):
        heapq.heappush(max_heap, -x[i])
        heapq.heappush(min_heap, -heapq.heappop(max_heap))

        if len(min_heap) > len(max_heap):
            heapq.heappush(max_heap, -heapq.heappop(min_heap))
        result -= max_heap[0]
    return result

if __name__ == '__main__':
    n, x = int(input()), list(map(int, input().split()))
    print(main(n, x))