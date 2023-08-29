import { diff } from './diff'
import { mountElement } from './mountElement'
import { unMountElement } from './unMountElement'

function patch(n1, n2, container) {
    if (!n1) {
        // 如果是第一次挂载 没有旧结点
        mountElement(n2, container)
        return
    }
    if (n1 && !n2) {
        // 新结点不存在 旧节点存在
        unMountElement(container)
    }

    if (n1 && n2) {
        diff(n1, n2)
    }
}

export {
    patch
}