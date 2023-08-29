function solution() {
    if (arguments.length === 1) return arguments[0]
    const set = new Set()

    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[1]?.includes(arguments[0][i])) set.add(arguments[0][i])
    }
    console.log([...set])
    for (let i = 2; i < arguments.length; i++) {
        const temp = [...set]
        for (let j = 0; j < temp.length; i++) {
            if (!arguments[i]?.includes(temp[j])) temp.splice(j, 1)

        }
        if (temp.length === 0) return []
    }
}

console.log(solution([3], [4, 3], [3])) 