// test 
let a1 = ref(1), a2 = ref(2)

let a3

function update() {
    a1.value
    console.log('第一层 嵌套')
    whenDepsChange(() => {
        // 依赖嵌套
        a2.value
        console.log('第二层 嵌套')
    })
}
/**  这里会发生什么
 *  1. 使用ref创建两个响应式的值 会被加入依赖
 * 
 * 

//这个函数会产生一个副作用简称作用effact a1和a2为该作用的的依赖  该作用为他依赖的订阅者

/**
 *  1. 当一个变量被读取的时候进行追踪
 *  2. 如果一个变量在当前运行的副作用被读取 就把当前副作用设为该变量的订阅者
 *  3. 当依赖的变量发生变化时 需要重新执行订阅该变量的副作用
*/

let activeEffact: any
const effactStack: any = []

function whenDepsChange(update: () => void) {
    const effact = () => {
        activeEffact = effact
        calumn(effact)
        effactStack.push(effact)
        update()
        effactStack.pop()
        //activeffact 会一直指向外层effact
        activeEffact = effactStack[effactStack.length - 1]
    }
    effact.deps = [] as any[]
    effact()
}

/**
 * weakMap(
 *  object -> new Map(
 *      key -> new Set(
 *          effact1,
 *          effact2
 *      )
 *   )
 * )
 * 1.使用weakmap 作为依赖存储 object -> new Map()
 * 2.使用map 作为key -> new set()
 * 3.使用set 来存储依赖
 */
const bucket = new WeakMap<any, Map<any, any>>()

function track(target: Record<string, any>, key: string) {
    if (!activeEffact) return
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)

    if (!deps) {
        // undefine 
        depsMap.set(key, (deps = new Set()))
    }

    deps.add(activeEffact)
    activeEffact.deps.push(deps)
}

function getSubscribersForProperty(target: Record<string, any>, key: string) {
    return bucket.get(target)!.get(key) // 返回target key 所有的副作用
}

function trigger(target: Record<string, any>, key: string) {
    const effacts = getSubscribersForProperty(target, key)
    const effactToRun = new Set() //防止循环

    /**
     * 防止递归调用 
     * 例：whenDepsChange(()=>a++)
     * 在这个例子中 a = a+1 在get a的值的时候会收集依赖
     * 在 设置a的时候会执行trigger  但是第一次副作用还没有执行完 page.60 
     */
    effacts && effacts.forEach((effact: any) => {
        if (effact !== activeEffact) {
            effactToRun.add(effact)
        }
    })

    effactToRun.forEach((effact: any) => effact())
}

/**
 * 1. 清除依赖（避免遗留的依赖）example: 
 * 例： a?b:0
 * 当a为true 的时候会把 收集b的副作用 但是a为false 但修改b会执行 遗留的副作用
 */
function calumn(effacts: () => void) {
    for (let i = 0; i < activeEffact.deps.length; i++) {
        const deps = activeEffact.deps[i]
        deps.delete(effacts)
    }
    activeEffact.deps.length = 0
}


function reactive(obj: Record<any, any>) {
    return new Proxy(obj, {
        get(target, key) {
            track(target, key as string) // 订阅该变量 
            return target[key as string]
        },
        set(target, key, value) {
            target[key as string] = value
            trigger(target, key as string) // 通知订阅者
            return true
        }
    }
    )
}

function ref(value: any) {
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

whenDepsChange(update)


