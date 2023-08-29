function isSubsequence(s: string, t: string): boolean {
    let sum = 0
    for (let i of t) {
        if (i === s[sum]) sum++
        if (sum > s.length) return false
    }
    return sum === s.length
};
