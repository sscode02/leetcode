/**
 * 
 * @param oldVnode 
 * @param newVnode 
 * 
 * 在节点diff中有几种情况
 * 1. 新增节点需要mount 
 * 2. 删除点需要unmount
 * 3. 尽可能的复用 老节点
 */

function diff(oldVnode: any, newVnode: any) {
    console.log(oldVnode._el)
    patchText(oldVnode, newVnode)
    //在这里进行对比
    // console.log(oldVnode, newVnode)
}


// 双端比较算法

const oldArr = [
    {
        key: 1
    },
    {
        key: 2
    },
    {
        key: 3
    },
    {
        key: 4
    }, // index = 4
]
const newArr = [
    {
        key: 4 // 0
    },
    {
        key: 2
    },
    {
        key: 1
    },
    {
        key: 3
    },
]
/**
 * diff三种情况
 * 1. 节点相同 需要patch 
 * 2. 需要新增节点
 * 3. 需要卸载节点
 */

function diff1(oldVnode: any, newVnode: any) {
    const oldChild = [...oldVnode as any[]]
    const newChild = [...newVnode as any[]]


    let oldStartIndex = 0
    let newStartIndex = 0

    let oldEndIndex = oldChild.length - 1
    let newEndIndex = newChild.length - 1

    while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
        if (!oldChild[oldStartIndex]) {
            oldStartIndex++
            continue
        }
        if (!oldChild[oldEndIndex]) {
            oldEndIndex--
            continue
        }

        if (newChild[newStartIndex].key === oldChild[oldStartIndex].key) {
            // patchText(oldChild[oldStartIndex], newChild[newStartIndex])
            // 如果都是开始节点 只用patch
            patchElement()

            oldStartIndex++
            newStartIndex++
            continue
        }
        if (newChild[newEndIndex].key === oldChild[oldEndIndex].key) {
            // 如果都是结束节点 只用patch
            patchElement()
            oldEndIndex--
            newEndIndex--
            continue
        }
        if (newChild[newStartIndex].key === oldChild[oldEndIndex].key) {
            // 如果都是新节点开始  等于老节点的结尾 只用patch
            patchElement()
            // 就把老节点的结尾 放到老节点开始前面
            insert(oldChild[oldEndIndex], oldChild[oldStartIndex])

            newStartIndex++
            oldEndIndex--
            continue
        }
        if (newChild[newEndIndex].key === oldChild[oldEndIndex].key) {
            // oldChild[oldEndIndex] -> newEndIndex

            // 如果都是新节点结尾  等于老节点的开始 只用patch
            patchElement()
            // 就把老节点的开始放到 老节点后面
            insert(oldChild[oldStartIndex], oldChild[oldEndIndex].next)

            oldStartIndex++
            newEndIndex--
            continue
        }

        // 如果以上都不满足
        // 首先我要用新节点的第一个节点去老节点中查找
        const oldindex = oldChild.findIndex((oldV) => {
            oldV.key === newVnode[newStartIndex].key
        })

        // 如果找到了
        if (oldindex > 0) {
            patchElement()
            insert(oldChild[oldindex], oldChild[oldStartIndex])
            oldChild[oldindex] = undefined
        } else {
            //这里都没有找到说明是一个新节点 挂载到老节点前面
            mountElement1(newVnode[newStartIndex], oldChild[oldStartIndex])
        }
        newStartIndex++
    }

    /**
     * new 
     * <p>1</p>
     * <p>2</p>
     * 
     * old 
     * <p>2</p>
     */

    if (oldEndIndex < oldStartIndex && newStartIndex <= newEndIndex) {
        for (let i = newStartIndex; i < newEndIndex; i++) {
            // 插到老节点前面
            mountElement1(newChild[i], oldChild[oldStartIndex])
        }
    }



    /**
     * new 
     * <p>2</p>
     * 
     * old 
     * <p>1</p>
     * <p>2</p>
     */
    if (newEndIndex < newStartIndex && oldStartIndex <= oldEndIndex) {
        for (let i = oldStartIndex; i < oldEndIndex; i++) {
            // 卸载节点老节点
            unMountElement1(oldChild[oldStartIndex])
        }
    }

}
// 快速比较算法


function patchElement() { }
function insert(...bound) { }
function mountElement1(...bound) { }
function unMountElement1(...bound) { }

// patch 文本是否一致
function patchText(oldVnode: any, newVnode: any) {
    if (oldVnode.props.text !== newVnode.props.text) {
        console.log(oldVnode._el)
        // oldVnode._el.textContent = newVnode.props.text
    }
}


export {
    diff
}

diff1(oldArr, newArr)