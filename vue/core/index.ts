import { reactive } from '../reactivity/reactiv'
import { effactWatch } from '../reactivity/effactWatch'
import { mountVnode } from './mountVnode'
import { updateVnode } from './updateVnode'

function createApp(componment) {
    const data = reactive(componment.data())
    //@ts-expect-error
    window.state = data
    let oldVnode: Record<string, any>
    const app = {
        mount(continter) {
            const rootElement: Element = document.querySelector(continter)
            effactWatch(() => {
                rootElement.innerHTML = ''
                const newVnode = componment.render(data)

                if (!oldVnode) {
                    mountVnode(newVnode, rootElement)
                } else {
                    updateVnode(oldVnode, newVnode)
                }

                oldVnode = newVnode
            })
        }
    }
    return app
}

export {
    createApp
}

