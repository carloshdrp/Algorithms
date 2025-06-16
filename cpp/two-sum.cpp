// https://leetcode.com/problems/two-sum/
#include <iostream>
#include <vector>
using namespace std;

vector<int> solution (vector<int> nums, int target) {
    for(int i = 0; i < nums.size(); i++ ) {

        for(int j = i+1; j < nums.size(); j++) {
            const int sum = nums[i] + nums[j];

            if(sum == target) {
                vector<int> positions = {i, j};

                for(const int& position : positions) {
                    cout << position << endl;
                }

                return positions;
            }
        }
    }
    return nums;
}

int main (){
    const vector<int> nums = {2, 7, 11, 15};
    const int target = 9;

    solution(nums, target);

    return 0;
}
