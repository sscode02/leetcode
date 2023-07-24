let activeEffact: ReactiveEffact | undefined
let shouldTrack = true

export class ReactiveEffact<T = any> {

    active = true
    deps: any[] = []

    constructor(
        public fn: () => T,
        public scheduler: EffectScheduler | null = null
    ) { }


    run() {
        if (this.active) {
            return this.fn()
        }

        activeEffact = this
        shouldTrack = true

        return this.fn()
    }
}



export type EffectScheduler = (...args: any[]) => any