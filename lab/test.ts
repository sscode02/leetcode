const test = () => {
    let handler: any[] = []
    const addHandler = (item: any) => {
        handler.push(item)
        return () => {
            const index = handler.indexOf(item)
            console.log(index)
            if (index > -1) handler.splice(index, 1)
        }
    }

    const inputHandler = () => {
        console.log(handler)
    }

    return {
        addHandler,
        inputHandler
    }
}

const a = test()

a.addHandler(1)()
a.inputHandler()