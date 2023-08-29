import { createVNode } from "./vnode"

export function createAppAPI(render) {
    return function createAppAPI(rootComponet) {
        const app = {
            mount(continter) {
                const vnode = createVNode(rootComponet)

                render(vnode, continter)
            }
        }
        return app
    }
}

