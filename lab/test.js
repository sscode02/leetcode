var a = 1

function b() {
    var a = 3
    console.log(a)
    console.log(this.a)
}

b()