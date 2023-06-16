// 可以引⼊的库和版本相关请参考 “环境说明”
// 请通过输出方法打印代码运行结果，“运行”后在控制台查看输出信息
// function main（）入口函数请勿修改，以防执行失败

const __ = Symbol('PLACEHOLDER');

function placeholder(fn: (...args: any[]) => any, ...bound: any[]): (...args: any[]) => any {
    // show me your code
    //过滤掉占位符
    const temp = bound.filter(i => i !== '__')

    function helper(...bound2: any[]) {
        if (bound2.length === 0) return fn(...temp)
        return placeholder(fn, ...temp, ...bound2)
    }

    return helper;
}

/**
  1. 获取fn 的参数
  2. 忽略占位符
**/

// declare const require: any;

function main() {
    const assert = require('assert');

    function dot(x1: number, y1: number, x2: number, y2: number) {
        return x1 * x2 + y1 * y2;
    }

    assert.deepStrictEqual(typeof placeholder(dot, 2, __, __, 4), 'function');
    assert.deepStrictEqual(placeholder(dot, 10, __, 10, __)(2, 3), dot(10, 2, 10, 3));
    // assert.deepStrictEqual(placeholder(dot, __, __, __, 5)(4, __, 2)(__)(3), dot(4, 3, 2, 5));
    // assert.deepStrictEqual(placeholder(dot, 3)(__, __)(4, __, 2)(3), dot(3, 4, 3, 2));
    // assert.deepStrictEqual(placeholder(dot)(3, __, __, 4)(5, 6), dot(3, 5, 6, 4));
    // assert.deepStrictEqual(placeholder(dot, 3, 4, 5, 3)(), dot(3, 4, 5, 3));
    console.log('PASSED!');
}

main()
