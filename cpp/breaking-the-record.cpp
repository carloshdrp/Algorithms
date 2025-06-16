// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
#include <stdio.h>

int breakingRecords(int scores_count, int* scores) {
    int record_up = 0, record_down = 0, highest = 0, lowest = 0;

    for (int game = 0; game < scores_count; game ++) {
        if (game == 0) {
            highest = scores[0];
            lowest = scores[0];
        }

        if (scores[game] > highest) {
            highest = scores[game];
            record_up++;
        }

        if (scores[game] < lowest) {
            lowest = scores[game];
            record_down ++;
        }
    }

    int result[2] = {record_up, record_down};
    printf("%d %d", result[0], result[1]);

    return *result;
}

int main() {
    constexpr int scores_count = 10;
    int scores[scores_count] = {3, 4, 21, 36, 10, 28, 35, 5, 24, 42};

    breakingRecords(scores_count, scores);

    return 0;
}
