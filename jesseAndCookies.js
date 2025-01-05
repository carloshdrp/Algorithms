// https://www.hackerrank.com/challenges/one-week-preparation-kit-jesse-and-cookies/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-six
// Calcula a quantidade de operações para que a doçura seja maior que k ou retorna -1
let arr = [2, 7, 3, 6, 4, 6];
let k = 9;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  heapifyDown(index) {
    let smallest = index;
    const leftChild = this.getLeftChildIndex(index);
    const rightChild = this.getRightChildIndex(index);

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] < this.heap[smallest]
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[smallest]
    ) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function iterationsCount(k, A) {
  const minHeap = new MinHeap();

  for (let cookie of A) {
    minHeap.insert(cookie);
  }

  let operations = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < k) {
    const least = minHeap.remove();
    const secondLeast = minHeap.remove();

    const newCookie = least + 2 * secondLeast;
    minHeap.insert(newCookie);

    operations++;
  }

  return minHeap.peek() >= k ? operations : -1;
}

console.log(iterationsCount(k, arr));
