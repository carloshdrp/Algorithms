let a = [1, 2, 3, 4, 3, 2, 1];

function lonelyInteger(a) {
    let count = [];

    a.map((i, k) => {
        a.map((f) => {
            if (i === f) {
                count[k] !== undefined ? count[k]++ : (count[k] = 1);
            }
        });
    });

    let position = count.indexOf(count.filter((item) => item === 1)[0]);

    return a[position];
}

console.log(lonelyInteger(a));
