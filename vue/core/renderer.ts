import path from "path"
import { createAppAPI } from "./createAppAPI"

function baseCreateRender() {
    const render = (vnode, continter) => {
        patch(null, vnode, continter)
    }

    const patch = (n1, n2, container) => {
        const { type, shapeFlag } = n2

        switch (type) {
            default:
                if (shapeFlag & ShapeFlags.ELEMENT) {
                    console.log("处理 element");
                    processElement(n1, n2, container);
                } else if (shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
                    console.log("处理 component");
                    processComponent(n1, n2, container);
                }
        }
    }
    return {
        createApp: createAppAPI(render)
    }
}


function processComponent(n1, n2, container) {
    if (!n1) {
        mountComponent(n2, container);
    }
}

function mountComponent(initialVNode, container) {
    const instance = createInstance(initialVNode, container) //创建实例

    setupComponent(instance); // 加工实例

    setupRenderEffect(instance, initialVNode, container)
}



function processElement(n1, n2, container) { }
function createInstance(vnode, parent?: any) {
    const instance = {
        type: vnode.type,
        vnode,
        next: null, // 需要更新的 vnode，用于更新 component 类型的组件
        props: {},
        parent,
        provides: parent ? parent?.provides : {}, //  获取 parent 的 provides 作为当前组件的初始化值 这样就可以继承 parent.provides 的属性了
        proxy: null,
        isMounted: false,
        attrs: {}, // 存放 attrs 的数据
        slots: {}, // 存放插槽的数据
        ctx: {}, // context 对象
        setupState: {}, // 存储 setup 的返回值
        emit: () => { },
    };
}


function setupComponent(instance) {
    initProps()
    initSlots()

    setupStatefulComponent()

}

function initProps() { }
function initSlots() { }
function setupStatefulComponent() { }

function setupRenderEffect(instance, initialVNode, container) { }

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