//   exmple  solution 
// add(1,2,3,4) equit solution(add,1,2,3,4) or solution(add,1,2,__,4)(3)
// [1,2,__]  => [ __,3] [4]

const __ = Symbol('test')

function add(q1, q2, q3, q4) {
    return q1 + q2 + q3 + q4
}

// 1.解决函数柯里化
// 2.处理占位符

// function solution(func, ...bound) {
//     const handler = function (...bound2) {
//         if (bound2.length === 0) {
//             // 把后面的symbol 去掉
//             const temp = []

//             for (let i = 0; i < bound.length; i++) {
//                 if (bound[i] === __) break
//                 temp.push(bound[i])
//             }
//             return func(...temp)
//         }
//         return solution(func, ...solutionSymbol(bound, bound2))
//     }

//     return handler
// }

function solutionSymbol(bound, bound2) {
    const temp = [...bound]
    const temp1 = [...bound2]
    //处理__ [1,2,__,4][3] => [1,2,3]
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== __) continue
        for (let j = 0; j < temp1.length; j++) {
            if (temp1[j] !== __) {
                temp[i] = temp1[j]
                temp1[j] = __
                break
            }
        }
    }
    return [...temp, ...temp1]
}


// console.log(solution(add, 1, 2, 3, 4)())


//1 _  _ _ _ _ / _ 2  func(...bound)


const solution = (func, ...bound) => {

    const handler = (...bound2) => {
        return solution(func, ...solutionSymbol(bound, bound2))
    }

    const temp = bound.filter(i => i !== __)
    const result = func(...temp)
    if (!isNaN(result)) return result
    // 这里执行
    return handler
}

console.log(solution(add, 1, 2, 3, 4))