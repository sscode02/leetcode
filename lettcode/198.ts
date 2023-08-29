function rob(nums: number[]): number {
    let q = 0, p = 0, r = 0;
    for (let i = 0; i < nums.length; i++) {
        let current = Math.max(q + nums[i], p + nums[i])
        q = p
        p = r
        r = current
    }
    return Math.max(q, p, r)

};

console.log(rob([2, 4, 8, 9, 9, 3]))