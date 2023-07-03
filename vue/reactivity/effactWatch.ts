

let activeEffact: any
const effactStack: any = []

function effactWatch(effactFn: () => void, options?: Record<any, any>) {
    const effact = () => {
        activeEffact = effact
        calumn(effact)
        effactStack.push(effact)
        effactFn()
        effactStack.pop()
        //activeffact 会一直指向外层effact
        activeEffact = effactStack[effactStack.length - 1]
    }
    effact.deps = [] as any[]
    effact.options = options
    effact()
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
    const effactToRun = new Set() //防止递归循环

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

    effactToRun.forEach((effact: any) => {
        if (effact?.options?.scheduler) {
            effact.options.scheduler(effact)
        } else {
            effact()
        }
    })
}

export {
    track,
    trigger,
    effactWatch
}