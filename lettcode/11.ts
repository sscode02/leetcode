function maxArea(height: number[]): number {
    let l = 0, r = height.length - 1
    let ans = 0
    while (r > l) {
        ans = Math.max(ans, (r - l) * Math.min(height[l], height[r]))
        if (height[r] <= height[l]) {
            r--
        } else {
            l++
        }
    }
    return ans
};
//max 
// 本质确定两个端点 确定中间的数量最大值

console.log(maxArea([5, 2, 12, 1, 5, 3, 4, 11, 9, 4]))