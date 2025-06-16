#include <stdio.h>

int main () {
    const int scores[] = {3, 4, 21, 36, 10, 28, 35, 5, 24, 42};
    const int tamanho = sizeof(scores) / sizeof(scores[0]);

    int melhor = scores[0];
    int pior = scores[0];

    int count_pior = 0;
    int count_melhor = 0;

    for (int i = 1; i < tamanho; i++){

        if (melhor < scores[i]) {
            melhor = scores[i];
            count_melhor++;
        }
        if (pior > scores[i]) {
            pior = scores[i];
            count_pior++;
        }
    }

    printf("%d %d", count_melhor, count_pior);

    return 0;
}