// console.log(this) // this is undefine

// const obj = {
//     name: 'ben',
//     getname() {
//         console.log(this.name)
//     }
// }

// const getName = obj.getname

// obj.getname()
// getName()

function foo() {
    console.log()
    console.log(this.name)
}


Function.prototype.mybind = function (context, ...arg) {
    const fn = this
    return function (...props) {
        fn.call(context, ...arg, ...props)
    }
}

foo.mybind({ name: 1 }).mybind({ name: 2 })()