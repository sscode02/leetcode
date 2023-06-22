const tree: Record<string, readonly string[]> = {
    "A": ["C", "D"],
    "D": ["B"],
    "B": ["E"],
    "E": ["C", "F"]
}

// function sortDendecy(tree: Record<string, readonly string[]>): string[] {
//     solutionDepend("A")
//     return []
// }

// function main() {
//     console.log(sortDendecy(tree))
// }
const result: string[] = []

function solutionDepend(dep: string) {
    if (!result.includes(dep)) {
        result.push(dep)
    } else {
        const index = result.findIndex((i) => dep === i)
        result.splice(index, 1)
        result.push(dep)
    }

    if (!tree[dep]) return
    for (let i = 0; i < tree[dep].length; i++) {
        solutionDepend(tree[dep][i])
    }
}

solutionDepend("A")

console.log(result)