import { mountElement } from './mountElement'

function patch(n1, n2, container) {
    console.log(n1, n2)
    if (!n1) {
        mountElement(n2, container)
        return
    }




}

export {
    patch
}