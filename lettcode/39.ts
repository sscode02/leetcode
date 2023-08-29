function combinationSum(candidates: number[], target: number): number[][] {
    let result: number[][] = []
    let temp: any[] = []

    function solution(value: number) {
        if (value < 0) return
        if (value === 0) {
            const temp1 = [...temp]
            temp1.sort((a, b) => a - b);
            if (result.findIndex(x => x.toString() === temp1.toString()) === -1)
                result.push([...temp1])
            return
        }

        for (let i = 0; i < candidates.length; i++) {
            temp.push(candidates[i])
            solution(value - candidates[i])
            temp.pop()
        }
    }

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            temp.push(candidates[i])
            solution(target - candidates[i])
            temp.pop()
        }
    }

    return result
};

