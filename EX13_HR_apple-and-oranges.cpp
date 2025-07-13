//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=false
// count apple and oranges inside a range s-t (c++11)
#include <iostream>
using namespace std;

void countApplesAndOranges(const int s, const int t, const int a, const int b, const vector<int>& apples, const vector<int>& oranges) {
    int appleInside = 0;
    int orangeInside = 0;

    for (const int& apple : apples) {
        if (const int applePosition = a + apple; applePosition >= s && applePosition <= t) {
            appleInside++;
        }
    }

    for (const int& orange : oranges) {
        if (const int orangePosition = b + orange; orangePosition >= s && orangePosition <= t) {
            orangeInside++;
        }
    }

    cout << appleInside << endl << orangeInside << endl;
}

int main() {
    // range of the house
    constexpr int s = 2;
    constexpr int t = 3;

    //a = point of apple tree
    //b = point of orange tree
    constexpr int a = 1;
    constexpr int b = 5;

    // quantity of apples and oranges respectively;
    const int m = 1;
    const int n = 1;

    // position from his respectively point (a or b)
    const vector<int> apples = {-2};
    const vector<int> oranges = {-1};

    countApplesAndOranges(s,t,a,b,apples,oranges);
    return 0;
}
