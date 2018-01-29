/**
 * 节流方法
 * @description 截流方法可确保只执行事件触发的最后一次操作，一般适用于某些可能被连续触发的事件(mousemove、scroll、)
 * @param method 需要进行节流的方法
 * @param context 由于setTimeout函数内部域为window，因此需要该函数进行修正
 */

var throttle = function(method, context) {
    // 最初执行时判断上次是否执行过，如果执行过则清除计时器，未执行则继续执行
    clearTimeout(method.tId)
    method.tId = setTimeout(function() {
        method.call(context)
    }, 500);
}