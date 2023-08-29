const a: Record<number, number> = {}

function fib(n: number): number {
    if (n === 0) return 0
    if (n === 1) return 1
    if (a[n]) {
        return a[n]
    } else {
        a[n] = fib(n - 1) + fib(n - 2)
        return a[n]
    }

};
