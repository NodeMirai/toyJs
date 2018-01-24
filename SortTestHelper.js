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
    computeMethodTime(arr, method) {
        var start = new Date().getTime()
        method(arr)
        var end = new Date().getTime()
        //console.log(arr)
        return end - start
    }

}