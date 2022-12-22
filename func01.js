function add() {
    let sum = 0;
    for (const item of arguments) {
        sum += item;
    }
    console.log(sum);
    return sum;
}

add(2,3,4,5);
