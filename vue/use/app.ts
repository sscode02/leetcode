import { h } from '../core/vnode/h'

export default {
    data() {
        return {
            state: 3
        }
    },
    render(cxt) {
        return h('div', { text: cxt.state }, [
            h('div', { text: cxt.state }, null),
            h('div', { text: cxt.state }, null),
            h('div', { text: cxt.state }, null),
            h('div', { text: cxt.state }, null),
        ])
    }
}


// temlate -> render