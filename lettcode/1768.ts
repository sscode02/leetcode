function mergeAlternately(word1: string, word2: string): string {
    let ans = ''
    let i = 0
    while(word1[i] || word2[i]) {
        if(word1[i]) ans+= word1[i]
        if(word2[i]) ans+= word2[i]
        i++
    }
    return ans
};


console.log(mergeAlternately('abc','ooo'))
