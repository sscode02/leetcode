function maxValue(grid: number[][]): number {
    let m = grid.length, n = grid[0].length
    console.log(m, n)
    const porfit = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                porfit[i][j] = Math.max(porfit[i][j], porfit[i - 1][j])
            }
            if (j > 0) {
                porfit[i][j] = Math.max(porfit[i][j], porfit[i][j - 1])
            }
            porfit[i][j] += grid[i][j]
        }
    }
    return porfit[m - 1][n - 1]
};

console.log(maxValue([[1, 2, 5], [3, 2, 1]]))