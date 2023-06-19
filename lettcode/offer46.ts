function translateNum(num: number): number {
    let q = 0, p = 0, r = 1
    const s = num.toString()
    for (let i = 0; i < s.length; i++) {
        q = p
        p = r
        r = 0
        r += p
        if (i === 0) continue

        const x = Number(s.substring(i - 1, i + 1))
        if (x <= 25 && x >= 10) {
            r += q
        }
    }

    return r
};

// function translateNum(num: number): number {
//     const s = num.toString()
//     const memo = {}

//     return solution(s, s.length, memo)
// };

// function solution(s: string, index: number, memo: Record<number, number>): number {
//     if (index === 0 || index === 1) return 1
//     const x = Number(s.substring(index - 2, index))
//     console.log(x)
//     if (!memo[index]) {
//         if (x <= 25 && x >= 10) {
//             memo[index] = solution(s, index - 1, memo) + solution(s, index - 2, memo)
//         } else {
//             memo[index] = solution(s, index - 1, memo)
//         }
//     }


//     return memo[index]
// }

console.log(translateNum(12258))
