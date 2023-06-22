const test = {
    name: 'ben',
    work() {
        console.log(this.name)
    }
}

// const a = test.work


function fakeBind(context, ...bound) {
    debugger
    const fn = this
    const handler = function (...bound2) {
        console.log(bound2)
        fn.call(context, ...bound, ...bound2)
        return fakeBind(context, ...bound, ...bound2)
    }
    return handler
}

Function.prototype.fakeBind = fakeBind


a.fakeBind({ name: 1 }).fakeBind({ name: 2 }).fakeBind({})()

// a.bind({ name: 1 }).bind({ name: 2 })()


// function test22() {

//     return function () {
//         console.log(1)
//         return test22()
//     }
// }