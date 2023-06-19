function permutation(s: string): string[] {
    const res: Array<string> = []
    const map = new Array(s.length).fill(0)
    const a: Record<string, string> = {}

    function backtraking(i: number, arr: string[]) {
        if (i >= s.length || map[i] === 1) {
            return
        }
        map[i] = 1
        arr.push(s[i])

        for (let j = 0; j < s.length; j++) {
            backtraking(j, arr)
        }
        if (arr.length === s.length && !res.includes(arr.join(""))) {
            res.push(arr.join(""))
        }
        arr.pop()
        map[i] = 0
    }
    for (let i = 0; i < s.length; i++) {
        backtraking(i, [])
    }
    return res
};

console.log(permutation('aab'))