### typeof instanceof 区别

1. typeof 主要用于获取原始值的类型
    比如 typeof 1 === number // true

2. instanceof 主要用于 检测一个object 是否是一个构造器的实例
    class foo{

    }

    const instanceFoo = new foo()
    
    intanceFoo instanceof foo //=> true

### symbol 

1. 为什需要symbol 
    可以防止object keys 重复   
    前面的声明的属性可能被后面给覆盖
    
    const obj ={
        a:1
    }
    
    obj.a = '1'
    在这里就会被更改

2. 使用
    const a = Symbol('test')
    const b = Symbol('test')
    a === b // false
    这里是生成了两个 symbol 

    const obj = {
        [a]: 1
    }
    如果需要修改的话
    obj[a] = '1'

3. 注意事项
    smybol 作为键名 不会被for in for of 给检索到
    只能被  hasownpropertysymbols 给检索到

     const obj = {
        [a]: 1
     }

    const symbols =  Object.hasOwnPropertySymbols(obj)
    
    symbols 是一个数组