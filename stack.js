/**
 * 将中缀表达式转换为后缀表达式
 * 将中缀表达式转换为后缀表达式遵循以下步骤：
 *
 * 初始化两个栈：运算符栈opStack存储中间结果的栈tempStack;
 * 从左至右扫描中缀表达式；
 * 遇到操作数时，将其压入tempStack;
 * 遇到运算符时，需要比较其与opStack栈顶运算符的优先级：
 * 如果opStack为空，或栈顶运算符为左括号’(‘，则直接将此运算符压入opStack中；
 * 否则，如果优先级比栈顶运算符的高，也直接将运算符压入opStack;
 * 否则，将opStack栈顶的运算符弹出并压入tempStack中，再次转入步骤4中与opStack中新的栈顶运算符进行比较；
 * 遇到括号时：
 * 如果是左括号’(‘，则直接压入opStack;
 * 如果是右括号’)’，则依次弹出opStack栈顶的运算符，并压入tempStack中，直到遇到左括号为止，此时将这一对括号丢弃；
 * 重复步骤2~5，直到表达式的最右边；
 * 将opStack中剩余的运算符依次弹出并压入tempStack；
 * 依次弹出tempStack中的元素保存到result中，然后将result逆序，所得的式子就是中缀表达式转换所得的后缀表达式。
 * @param {string} expression "1+2*3-4/2+(5+1)-4"
 */
function transBackExpression(expression) {

  let opStack = [],
    tempStack = []

  // 将expression字符串中根据操作符与操作数进行分组
  let expressStack = expression.match(/\d+|\D/g)

  // 扫描表达式
  for (let i = 0; i < expressStack.length; i++) {
    let w = expressStack[i]
    if (/\d+/.test(w)) {
      // 操作数
      tempStack.push(w)
    } else if (w === ")") {

      //console.log('遇到右括号')
      let length = opStack.length
        // 依次弹出opStack栈顶的运算符，并压入tempStack中，直到遇到左括号为止，此时将这一对括号丢弃
      for (let k = 0; k < length; k++) {
        let top = opStack.pop()
        if (top != "(") {
          tempStack.push(top)
        } else {
          opStack.pop()
          break
        }
      }
    } else {
      let length = opStack.length
      for (let j = length; j >= 0; j--) {

        let top = opStack[j]
          // 操作符时判断opStack栈顶与当前优先级
        if (top === void 0 || top === "(" || operatePriority[w] > operatePriority[top]) {
          opStack.push(w)
          break
        } else {
          tempStack.push(opStack.pop())
          continue
        }

      }

    }

  }

  let top = opStack.pop()
  while (top) {
    tempStack.push(top)
    top = opStack.pop()
  }

  return tempStack
}

const operatePriority = {
  "(": 3,
  ")": 3,
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
}

console.log(transBackExpression("1+2*3-4/2+(5+1)-4"))

/**
 * 后缀表达式计算
 */
/* function computeBackExpression(backexpression) {
  let tempStack = []
  for (let i = 0; i < backexpression.length; i++) {
    let item = backexpression[i]
    if (/\d+/.test(item)) {
      tempStack.push(item)
    } else {
      let sec = tempStack.pop()
      let first = tempStack.pop()
      tempStack.push(eval(sec + item + first))
    }
  }
  return tempStack
}

console.log(computeBackExpression(transBackExpression("1+2*3-4/2+(5+1)-4"))) */