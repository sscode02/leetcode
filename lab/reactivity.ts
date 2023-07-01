let a1 = ref(1)
let a2 = ref(2)

let a3

function update() {
    a3 = a1.value + a2.value
}

//这个函数会产生一个副作用简称作用effact a1和a2为该作用的的依赖  该作用为他依赖的订阅者

/**
 *  1. 当一个变量被读取的时候进行追踪
 *  2. 如果一个变量在当前运行的副作用被读取 就把当前副作用设为该变量的订阅者
 *  3. 当依赖的变量发生变化时 需要重新执行订阅该变量的副作用
*/

let activeEffact

function whenDepsChange(update) {
    const effact = () => {
        activeEffact = effact
        update()
        activeEffact = null
    }
    effact()
}
function getSubscribersForProperty(target, key) {
    return new Set<any>()
}

whenDepsChange(update)

// 订阅函数
function track(target, key) {
    if (activeEffact) {
        const effact = getSubscribersForProperty(target, key)
        effact.add(activeEffact)
    }
}
function trigger(target, key) {
    const effacts = getSubscribersForProperty(target, key)
    effacts.forEach((effact) => effact())
}

function reactive(obj) {
    return new Proxy(obj, {
        get(target, key) {
            track(target, key) // 订阅该变量 
            return target[key]
        },
        set(target, key, value) {
            target[key] = value
            trigger(target, key) // 通知订阅者
            return true
        }
    }
    )
}

function ref(value) {
    const refObject = {
        get value() {
            track(refObject, value)
            return value
        },
        set value(newValue) {
            trigger(refObject, value)
            value = newValue
        }
    }

    return refObject
}

document.body.innerHTML = a3

const monster1 = { eyeCount: 4 };

export { }