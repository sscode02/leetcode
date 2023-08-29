function people() {
    console.log('i am something')
    const queue: Array<() => void> = []

    function implement() {
        while (queue.length !== 0) {
            const temp = queue.shift() as () => void
            temp()
        }
    }

    const timer = setTimeout(() => {
        implement()
    })

    return {
        work() {
            queue.push(function () {
                console.log('work')
            })
            return this
        },
        sleep() {
            clearTimeout(timer)
            implement()
            console.log('sleep')

            setTimeout(() => {
                implement()
            }, 2000)
            return this
        },
        sleepBefore() {
            clearTimeout(timer)
            console.log('sleep before')
            setTimeout(() => {
                implement()
            }, 2000)
            return this
        },
        eat() {
            queue.push(() => {
                console.log('eat')
            })
            return this
        }
    }
}

// people().work().sleepBefore().eat()
people().sleep().work()

