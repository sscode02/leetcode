// const delay = wait => new Promise(r => setTimeout(r, wait))

// class People {
//     tasks: Array<() => void> = []
//     async run() {
//         while (this.tasks.length) {
//             const temp = this.tasks.shift() as () => void
//             await temp()
//         }

//     }

//     work(str) {
//         this.tasks.push(() => console.log(str))
//         this.run()
//         return this
//     }

//     sleep(wait) {
//         this.tasks.push(() => delay(wait))
//         this.run()
//         return this
//     }
// }

// new People().work('start').sleep(3000).work('end')


const delay = (wait: number) => new Promise(r => setTimeout(r, wait))

function people() {
    console.log('i am jacl')

    const tasks: Array<() => any> = []
    let isDoing: boolean = false
    const run = async () => {
        if (isDoing) return
        isDoing = true
        while (tasks.length) {
            const fn = tasks.shift() as () => any
            await fn()
        }
        isDoing = false
    }
    const timer = setTimeout(run)
    const res = {
        work() {
            tasks.push(() => console.log('work'))
            return this
        },
        eat() {
            tasks.push(() => console.log('eat'))
            run()
            return this
        },
        sleep(wait: number) {
            if (timer) clearTimeout(timer)
            tasks.push(() => {
                console.log('sleep 10')
                return delay(wait)
            })
            run()
            return this
        },
        sleepBefore(wait: number) {
            if (timer) clearTimeout(timer)
            tasks.unshift(() => {
                console.log('sleep 00000')
                return delay(wait)
            })
            run()
            return this
        }
    }
    return res
}

people().work().sleepBefore(3000).eat()