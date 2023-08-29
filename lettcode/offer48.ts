function lengthOfLongestSubstring(s: string): number {
    if (s.length === 1) return 1

    let maxvalue = 0
    for (let i = 0; i < s.length; i++) {
        let temp = ""
        for (let j = i; j < s.length; j++) {
            if (temp.includes(s[j])) {
                break
            }
            temp += s[j]
        }
        maxvalue = Math.max(maxvalue, temp.length)

    }
    return maxvalue
};

console.log(lengthOfLongestSubstring("au"))