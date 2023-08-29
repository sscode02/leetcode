import { track, trigger } from './effactWatch'

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

export {
    ref
} 