function increasingTriplet(nums: number[]): boolean {
    // return nums.some((current, index) => nums[index - 1] < current && nums[index + 1] > current)
    const min_l: any = []
    let max_r: any = nums.at(-1)

    for (let i = 0; i < nums.length; i++) {
        min_l[i] = Math.min(min_l[i - 1], nums[i])
        if (i === 0) min_l[i] = nums[i]
    }

    for (let i = nums.length - 2; i > 0; i--) {
        if (min_l[i] < nums[i] && nums[i] < max_r) {
            return true
        }
        max_r = Math.max(max_r, nums[i])
    }
    return false
}
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
