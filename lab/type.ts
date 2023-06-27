type StrictConsumer<T> = <U extends T>(value: T extends U ? T : never) => void

interface Parent {
    name: string
}

interface Child extends Parent {
    age: number
}

const a1: StrictConsumer<Parent> = () => { }

a1({ name: '1' })

const c = { name: '1', age: 3 }

a1(c)