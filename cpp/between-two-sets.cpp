//https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem
//https://mentor404.notion.site/Between-Two-Sets-2132892a679080dcbbc5e809f5ca2775

#include <iostream>
using namespace std;

int calcular_mdc(int a, int b) {
    while (b != 0) {
        const int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int calcular_mmc (const int a, const int b) {
    return (a*b)/calcular_mdc(a,b);
}

int main() {
    int a[2] = {2,4};
    int b[3] = {16, 32, 96};
    int mmc_a = 1, mdc_b = b[0];
    int count = 0;

    for(const int num : a) {
        mmc_a = calcular_mmc(mmc_a, num);
    }

    for(int i = 1; i < size(b) ; i++) {
        mdc_b = calcular_mdc(mdc_b, b[i]);
    }

    cout << "MMC do conjunto A:" << mmc_a << '\n';
    cout << "MDC do conjunto B:" << mdc_b << '\n';

    int multiplo = mmc_a;
    while (multiplo <= mdc_b) {
        if (mdc_b % multiplo == 0) count ++;
        multiplo += mmc_a;
    }

    cout << "Resultado: " << count;
}