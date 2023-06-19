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
    console.log(...arguments)
    console.log(this.name)
}


Function.prototype.mybind = function (context, ...arg) {
    const fn = this
    return function (...props) {
        fn.call(context, ...arg, ...props)
    }
}

foo.mybind({ name: 1 }, 3, 4, 5, 6).mybind({ name: 2 }, 7, 8, 9)()