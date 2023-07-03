function h(tag, props, children) {
    const div = document.createElement(tag)
    div.innerHTML = props.text
    if (typeof props.text === 'string') {

    } else {
        // todo if text is object. should foreach 
    }
    //  child string : <div>1<div>
    //  child array  : [h(1),ht(2)]

    if (typeof children === 'string') {

    } else {

    }

    return div
}

export {
    h
}