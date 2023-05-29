
function longestPalindrome(s) {
    let max = 0
    let start = -1
    for (let i = 0; i < s.length; i++) {
        // bbbab
        let now = 1
        // let l = i - 1
        let l = i - 1 //1 
        while (s[i] === s[i + 1]) {
            now++
            // console.log(now, 'p')
            i++
        }
        let r = i + 1 //3 
        while (s[l] === s[r] && s[l] !== undefined) {
            // console.log(now)
            now += 2;
            l--;
            r++;
        }
        if (now > max) {
            max = now
            start = l + 1
        }
        console.log(now, i, l, r, max)
    }
    // console.log(start, start + max)
    return s.slice(start, start + max)
};

longestPalindrome('bbbab')