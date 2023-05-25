/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        let l = i, r = i + 1
        if (nums[l] !== 0) continue
        while (r < nums.length) {
            if (nums[r]) {
                let now = nums[l]
                nums[l] = nums[r]
                nums[r] = now
                break;
            }
            r++
        }
    }

};
