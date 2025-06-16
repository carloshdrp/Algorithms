// https://www.hackerrank.com/challenges/staircase/
// Criar uma escada com #
#include <iostream>
using namespace std;

void staircase(int n) {
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n-(i+1); j++){
            std::cout << " ";
        }

        for(int j = 0; j < n-(n-(i+1)); j++){
            std::cout << "#";
        }

        std::cout << std::endl;
    }
}

int main() {
    int n = 6;

    staircase(n);
    return 0;
}
