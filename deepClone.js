/**
 * 深拷贝思路
 * @description 
 * @param 需要拷贝的参数，默认为对象或者数组
 */

var dist = {}

var deepClone = function(src, dist) {

    // 错误纠正
    src = src || {}

    // 遍历src内部属性，
    for (var k in src) {
        if (src.hasOwnProperty(k)) {
            // 判断属性类型
            if (typeof src[k] === "object") {
                // 判断src[k]具体是什么类型，然后给dist[k]赋默认值
                dist[k] = objType(src[k]) === "object" ? {}: []
                deepClone(src[k], dist[k])
            } else {
                dist[k] = src[k]
            }
        }
    }

}

/**
 *  判断传入参数为何种类型
 * @returns e.g. "Array" or "Object"
 */
var objType = function(obj) {
    return Object.prototype.toString.call(obj).match(/(\w+)]$/)
}

var srcTest = {
    name: "123",
    arr: [ 
        { hehe: "hehe" },
        "2",
    ],
    obj: {
        age: 123
    }
}

var dist = {}

deepClone(srcTest, dist)
console.log(dist)