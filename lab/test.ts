const effacts = new Set<any>()

let a1 = ref(1)

let a2 = a1.value

a1.value = 10


function update() {
    a2 = a1.value
}

console.log(a2)


function ref(value: number | string) {
    const refObject = {
        get value() {
            effacts.add(update)
            return value
        },
        set value(newValue) {
            value = newValue
            effacts.forEach(effact => effact())
        }
    }
    return refObject
}

functio rea
