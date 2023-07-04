import { diff } from './diff'
function updateVnode(oldVnode, newVnode) {
    const diffVndoe = diff(oldVnode, newVnode)
}

export {
    updateVnode
}

