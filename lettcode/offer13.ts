function movingCount(m: number, n: number, k: number): number { // 1 2 1
    const map = new Array(n).fill(0).map(() => new Array(m).fill(0))
    let maxValue = 0

    function dfs(row: number, col: number) {
        if (row < 0 || row >= m || col < 0 || col >= n || map[col][row] === 1) return
        if (addBit(row) + addBit(col) > k) return

        maxValue++
        map[col][row] = 1
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }

    dfs(0, 0)
    return maxValue
};


function addBit(a: number) {
    let r = 0;
    while (a > 10) {
        let rest = a % 10;
        r += rest;
        a = (a - rest) / 10
    }
    r += (a > 9 ? 1 : a);
    return r;
}
