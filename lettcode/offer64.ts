function sumNums(n: number): number {
    let sum = 0
    function recursion(n: number): number {
        sum += n
        return n && recursion(n - 1)
    }
    recursion(n)
    return sum
};

