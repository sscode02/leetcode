export function createVNode(type, props?: any, children?: any) {
    return createBaseVnode(type, props, children)
}


function createBaseVnode(type, props?: any, children?: any) {
    const vnode = {
        el: null,
        component: null,
        key: props?.key,
        type,
        props: props || {},
        children,
        shapeFlag: getShapeFlag(type)
    }

    // 基于 children 再次设置 shapeFlag
    if (Array.isArray(children)) {
        vnode.shapeFlag |= ShapeFlags.ARRAY_CHILDREN;
    } else if (typeof children === "string") {
        vnode.shapeFlag |= ShapeFlags.TEXT_CHILDREN;
    }

    return vnode
}

function getShapeFlag(type) {
    return typeof type === "string" ? ShapeFlags.ELEMENT : ShapeFlags.STATEFUL_COMPONENT;
}

// 组件的类型
export const enum ShapeFlags {
    // 最后要渲染的 element 类型
    ELEMENT = 1,
    // 组件类型
    STATEFUL_COMPONENT = 1 << 2,
    // vnode 的 children 为 string 类型
    TEXT_CHILDREN = 1 << 3,
    // vnode 的 children 为数组类型
    ARRAY_CHILDREN = 1 << 4,
    // vnode 的 children 为 slots 类型
    SLOTS_CHILDREN = 1 << 5
}
