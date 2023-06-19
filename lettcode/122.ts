function maxProfit(prices: number[]): number {
    let len = prices.length
    if (len < 2) return 0
    let cash = 0
    let hold = - prices[0]

    let precash = cash
    let prehold = hold

    for (let i = 1; i < len; i++) {
        cash = Math.max(precash, prehold + prices[i])
        hold = Math.max(prehold, precash - prices[i])

        precash = cash
        prehold = hold
    }

    return cash
};