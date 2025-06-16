// https://www.hackerrank.com/challenges/beautiful-triplets/problem
#include <stdio.h>

int main() {
  int d = 3, arr_count = 0;
  const int n = 7;
  int arr[n] = {1,2,4,5,7,8,10};

  for (const int i : arr) {
    for (const int j+1 : arr) {
      for (const int k : arr) {
        if ((arr[j] - arr[i] == d) && (arr[k] - arr[j] == d)) {
          printf("%d, %d, %d \n", i, j, k);
        }
      }
    }
  }

  return 0;
}