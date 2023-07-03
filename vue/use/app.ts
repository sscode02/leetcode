import { h } from '../core/h'

export default {
    data() {
        return {
            state: 2
        }
    },
    render(cxt) {
        return h('div', { text: cxt.state }, null)
    }
}


// temlate -> render