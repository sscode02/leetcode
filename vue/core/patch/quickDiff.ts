
function diff(oldVnode, newVnode) {
    // 从前往后找相同节点
    const oldChild = oldVnode.children
    const newChild = newVnode.children

    let j = 0

    let oldV = oldChild[j]
    let newV = newChild[j]


    while (oldV.key === newV.key) {
        patch(oldV, newV)

        j++
        oldV = oldChild[j]
        newV = newChild[j]
    }


    // 从后往前找相同节点
    let oldEnd = oldChild.length - 1
    let newEnd = newChild.length - 1

    oldV = oldChild[oldEnd]
    newV = newChild[newEnd]

    while (oldV.key === newV.key) {
        patch(oldV, newV)

        oldEnd--
        newEnd--
        oldV = oldChild[oldEnd]
        newV = newChild[newEnd]
    }


    if (oldEnd < j && newEnd >= j) {
        //锚点 index
        const anchorIndex = newEnd + 1

        // 如果当前锚点index 大于newChild的长度 说明是追加 要不然就获取锚点
        const anchor = anchorIndex < newChild.length ? newChild[anchorIndex].el : null

        for (let i = j; j <= newEnd; j++) {
            patch(newChild[i], anchor) // anchor 为null的时候直接追加 不为空的时候追加到anchor 上面
        }
    }

    //  需要卸载
    if (newEnd < j && oldEnd >= j) {
        while (j >= oldEnd) {
            unMountElement(oldChild[j++])
        }
    }
}

/**
 *  1.发现可复用节点需要复用需要patch 新增 卸载 
 *  2.移动 
 */

function unMountElement(...bound) { }
function patch(...bound) {

}

/**
 * 1. 求一个source source 保存在新节点在 旧结点中位置 如果在旧结点中没有 设置为-1
 * 2. seq 为 最长递增子序列 的index   s指向seq的最后一个 判断 i ！== seq[s] 不等于就需要移动
 * 3. 相等就不需要移动
 */