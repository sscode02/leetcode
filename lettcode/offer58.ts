function reverseWords(s: string): string {
    const words = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue

        let j = i
        while (j < s.length) {
            if (s[j] === " ") {
                words.push(s.slice(i, j))
                i = j
                break
            }
            if (s[j + 1] === undefined) {
                words.push(s.slice(i, j + 1))
                i = j
                break
            }
            j++
        }
    }
    return words.reverse().join(" ")
};

console.log(reverseWords("1 "))