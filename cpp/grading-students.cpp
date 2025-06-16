// https://www.hackerrank.com/challenges/grading/
// arredondamento de notas (c++11)
#include <iostream>
#include <vector>
using namespace std;

vector<int> gradingStudents(vector<int> grades) {
    vector<int> result(grades.size());

    // std::transform = map
    // []() função lambda
    std::transform(grades.begin(), grades.end(), result.begin(),
        [](int grade) {
            int nextMultiple = (grade / 5 + 1 ) * 5;
            return (nextMultiple - grade < 3 && grade >= 38)
            ? nextMultiple
            : grade;
        }
    );
    return result;
}

int main() {
    vector<int> grades = {73, 67, 38, 33};
    vector<int> result = gradingStudents(grades);

    for(const int& value : result) {
        std::cout << value << " ";
    }
    std::cout << std::endl;

    return 0;
}
