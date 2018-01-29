/**
 * 深拷贝思路
 * 注意事项
 * 1. 对象类型需要判断Object还是Array(通过Object.prototype.toString.call(obj)的方式)
 * 2. 如何判断循环引用：引用内部的属性引用自身或者引用自身父级的情况下会出现循环引用
 * 3. 存在循环引用时如何处理：将开始循环的引用位置指向clone后的父级或自身就可保证内容clone且引用不同
 * 4. 不要将引用放入函数内操作，一旦函数内部将引用指向改变则无法改变传入的引用对象
 * @description 
 * @param 需要拷贝的参数，默认为对象或者数组
 */

var dist = {}

var deepClone = function (src, parent = null) {
    //console.log(dist)
    // 错误纠正
    src = src || {}
    temp = null
    let dist = objType(src) === "Object" ? {} : []
    let _parent = parent // 暂存上级的拷贝信息{ 父级原对象，父级拷贝对象，上上级拷贝信息 }

    while (_parent) {
        // 如果当前拷贝引用与父级对象引用相等，则返回copy后的引用，防止循环
        if (_parent.srcObj === src) {
            console.log("比较：", parent, _parent.distObj)
            return _parent.distObj
        }

        // 如果当前对象与父级对象未出现循环引用，则当前对象引用需要向上层一直比较，直到无上层引用
        _parent = _parent.parent

    }

    
    // 遍历src内部属性，
    for (var k in src) {
        if (src.hasOwnProperty(k)) {
            temp = src[k]
            // 判断属性类型
            if (typeof src[k] === "object") {
                console.log(k, temp)
                dist[k] = deepClone(temp, {
                    srcObj: src,
                    distObj: dist,
                    parent: parent,
                })
                console.log(dist[k])
            } else {
                dist[k] = temp
            }
        }
    }

    return dist

}

/**
 *  判断传入参数为何种类型
 * @returns e.g. "Array" or "Object"
 */
var objType = function (obj) {
    return Object.prototype.toString.call(obj).match(/(\w+)]$/)[1]
}

var srcTest = {
    age: 123
}

// haha引用自身父级造成循环引用
srcTest.haha = srcTest

var dist = deepClone(srcTest)
console.log(dist)

// console.log(DeepCopy(man));


module.exports = deepClone