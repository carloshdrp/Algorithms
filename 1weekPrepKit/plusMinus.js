let arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    let sums = [0, 0, 0];

    arr.forEach((i) => {
        if (i > 0) {
            sums[0]++;
        } else if (i < 0) {
            sums[1]++;
        } else {
            sums[2]++;
        }
    });

    return sums.map((i) => (i / arr.length).toFixed(6));
}

plusMinus(arr).map((i) => console.log(i));
