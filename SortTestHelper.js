/**
 * 
 */

module.exports = {

    /**
     * 默认均为整数类型
     */
    generateRandomArray: function(n, rangeL, rangeR) {
        if (rangeL > rangeR) throw new Error("")
        var arr = []
        for (let i = 0; i < n; i++) {
            arr[i] = rangeL + Math.floor(Math.random()*(rangeR - rangeL))
        }
        return arr
    },

    /**
     * 测试算法在给定用例下的执行时间
     */
    computeMethodTime(arr, method, rangeL, rangeR) {
        console.log("arr:", arr)
        var start = new Date().getTime()
        method(arr, rangeL, rangeR)
        var end = new Date().getTime()
        console.log("target:", arr)
        return end - start
    }

}