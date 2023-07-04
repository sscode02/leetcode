// return -> vnode

function h(tag: string, props: any, children: any) {
    const vnode: Record<string, any> = {
        tag,
        props,
        children
    }
    return vnode

}

export {
    h
}
