const solve = (A) => {
    let xor = 0
    for (let i = 0; i < A.length; i++) {
        xor = xor ^ A[i]
    }
    let pos = 0

    for (pos = 0; pos < 31; pos++) {
        if ((xor & (1 << pos)) > 0) {
            break;
        }
    }

    let xor1 = 0
    let xor2 = 0

    for (let i = 0; i < A.length; i++) {
        if ((A[i] & (1 << pos)) === 0) {
            xor1 = xor1 ^ A[i]
        } else {
            xor2 = xor2 ^ A[i]
        }
    }

    return[Math.min(xor1, xor2), Math.max(xor1, xor2)]
}

let A = [1, 2, 3, 1, 2, 4]
console.log("This is the solve(A)", solve(A));
