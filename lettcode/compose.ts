function compose(middleware: any[]) {
    // do to something
    let i = 0

    function dispose() {
        if (i >= middleware.length) return

        const next = () => { dispose() }
        const fn = middleware[i]
        i++
        fn(next)
    }
    dispose()

}

function middleware1(next: () => void) {
    console.log(1)
    next()
    console.log(2)
}

function middleware2(next: () => void) {
    console.log(3)
    next()
}

compose([middleware1, middleware2])

