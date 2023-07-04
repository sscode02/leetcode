import { reactive } from '../reactivity/reactiv'
import { effactWatch } from '../reactivity/effactWatch'
import { patch } from './patch/patch'
import { unMountElement } from './patch/unMountElement'

function createApp(componment) {
    const data = reactive(componment.data())
    //@ts-expect-error
    window.state = data

    const app = {
        mount(continter) {
            const rootElement: Element = document.querySelector(continter)
            effactWatch(() => {
                rootElement.innerHTML = ''
                const newVnode = componment.render(data)
                if (newVnode) {
                    //@ts-expect-error
                    patch(rootElement._vnode, newVnode, rootElement)
                } else {
                    if (continter._vnode) {
                        unMountElement(rootElement)
                    }
                }

                //@ts-expect-error
                rootElement._vnode = newVnode
            })
        }
    }
    return app
}

export {
    createApp
}
