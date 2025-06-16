#include <iostream>
using namespace std;

long taumBday(int b, int w, int bc, int wc, int z) {
    // primeiro ve o preco normal
    long long bct = static_cast<long long>(b) * bc;
    long long wct = static_cast<long long>(w) * wc;

    // se a diferenca entre o valor absoluto das duas cores for maior que a taxa, vale a pena fazer a troca
    if (abs(bc - wc) > z) {

        //verifica se é para trocar as pretas
        if (bc < wc) {
            wct = static_cast<long long>(w) * bc;
            wct += static_cast<long long>(w) * z;
        }

        // verifica se é para trocar as brancas
        if (wc < bc) {
            bct = static_cast<long long>(b) * wc;
            bct += static_cast<long long>(b) * z;
        }
    }

    const long long tc = bct + wct;

    cout << tc << endl;
    return static_cast<long long>(tc);
}

int main() {
    // black and white gifts
    constexpr int b = 15242;
    constexpr int w = 95521;

    // coast of every gift
    constexpr int bc = 712721;
    constexpr int wc = 628729;

    // cost to convert any gift
    constexpr int z = 396706;

    taumBday(b, w, bc, wc, z);

    return 0;
}
