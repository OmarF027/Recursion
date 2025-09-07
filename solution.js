// Fibonacci Iterativo
function fibs(n) {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
}

// Fibonacci Ricorsivo
function fibsRec(n) {
    console.log("This was printed recursively");
    
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const seq = fibsRec(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}

// Merge Sort Ricorsivo
function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test
console.log("Fibonacci Iterativo:", fibs(8));         // [0,1,1,2,3,5,8,13]
console.log("Fibonacci Ricorsivo:", fibsRec(8));      // [0,1,1,2,3,5,8,13]

console.log("Merge Sort Test 1:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0,1,1,2,3,5,8,13]
console.log("Merge Sort Test 2:", mergeSort([105, 79, 100, 110]));      // [79,100,105,110]
