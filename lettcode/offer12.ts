function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;

    function check(i: number, j: number, k: number): boolean {
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[k]) return false
        if (k === word.length - 1) return true
        const temp = board[i][j]
        board[i][j] = ""

        let res = check(i + 1, j, k + 1) || check(i, j + 1, k + 1) || check(i - 1, j, k + 1) || check(i, j - 1, k + 1)
        board[i][j] = temp
        return res
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (check(i, j, 0)) {
                return true
            }
        }
    }

    return false
};


