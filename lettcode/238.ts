// function productExceptSelf(nums: number[]): number[] {
//     const l = [], r = [], ans = []
//     l[0] = 1
//     r[nums.length - 1] = 1

//     for (let i = 0; i < nums.length; i++) {
//         l[i] = l[i - 1] * nums[i - 1] //  2 
//         if (!i) l[i] = 1
//     }
//     for (let i = nums.length - 1; i >= 0; i--) {
//         r[i] = r[i + 1] * nums[i + 1]
//         if (i === nums.length - 1) r[nums.length - 1] = 1
//     }

//     for (let i = 0; i < nums.length; i++) {
//         ans[i] = l[i] * r[i]
//     }

//     return ans
// };

// 方法二
function productExceptSelf(nums: number[]): number[] {
    const l = [], ans = []
    l[0] = 1
    let r = 1

    for (let i = 0; i < nums.length; i++) {
        l[i] = l[i - 1] * nums[i - 1] //  2 
        if (!i) l[i] = 1
    }


    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = l[i] * r
        r *= nums[i]
    }
    console.log(ans)
    return ans
};

productExceptSelf([1, 2, 3, 4])