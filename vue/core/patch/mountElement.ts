
function mountElement(vnode, container) {
    container.append(createElement(vnode))
}

export {
    mountElement
}

function createElement(vnode) {
    const div = document.createElement(vnode.tag)
    div.innerText = vnode.props.text
    if (Array.isArray(vnode.children)) {
        vnode.children.forEach(v => {
            div.append(createElement(v))
        });
    }

    return div
}

