function defaultValue(x, y, z = 7) {
    return x + y + z;
}

const sum = defaultValue(10, 5);
console.log(sum);