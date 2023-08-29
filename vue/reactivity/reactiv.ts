import { track, trigger } from './effactWatch'

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

export {
    reactive
} 