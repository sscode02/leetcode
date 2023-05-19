function trap(height: number[]): number {
    let i = 0
    let ans = 0
    while (i < height.length) {
        let j = i + 1;
        let sum = 0

        while (height[j] < height[i]) {
            sum = sum + height[i] - height[j]
            j++
        }
        if (j === height.length) {
            i++
        } else {
            ans += sum
            i = j
        }
    }


    return ans
};
//[5,4,1,2]
console.log(trap([4, 2, 3]))

