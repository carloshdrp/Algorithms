//https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem

#include <iostream>
using namespace std;

int main()
{
    long long sum = 0;
    int n;
    cout << "Digite o valor de n: ";
    cin >> n;

    for (int i = 1; i < n ; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }

    cout << "Soma final: " << sum << '\n';
    return 0;
}