function reverseWords(s: string): string {
    let i = s.length - 1
    let j
    const ans = []


    while (i >= 0) {
        if (s[i] === " ") {
            i--
            continue
        }

        j = i
        while (s[j] !== " " && s[j] !== undefined) {
            j--
            if (j < 0) {
                j++
                break;
            }
        }
        ans.push(s.slice(j, i + 1).trim())
        if (j === 0) break
        i = j
    }
    return ans.join(" ")
};