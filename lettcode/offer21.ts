function exchange(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        let j = i
        if (nums[i] % 2 === 0) {
            while (j < nums.length) {
                if (nums[j] % 2 !== 0) {
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break;
                }
                j++
            }
        }
    }
    return nums
};

console.log(exchange([2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1]))