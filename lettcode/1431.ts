function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // 找到最大值
    const max = Math.max(...candies)
    return candies.map(i => i + extraCandies >= max)
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))