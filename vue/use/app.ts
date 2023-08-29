import { h } from '../core/vnode/h'

export default {
    data() {
        return {
            state: 3,
            state1: 4,
            state2: 5,
            state3: 6,
            state4: 7,
        }
    },
    render(cxt) {
        return h('div', {}, [
            h('div', { text: cxt.state1 }, null),
            h('div', { text: cxt.state2 }, null),
            h('div', { text: cxt.state3 }, null),
            h('div', { text: cxt.state4 }, null),
        ])
    }
}


// temlate -> render