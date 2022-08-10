---
title: 面试题
date: 2022-06-21
---

::: warning
**防抖与节流**
:::

### 防抖: 触发高频事件后 n 秒后函数只会执行一次, 如果 n 秒内高频事件再次触发，则会重新计算时间(固定的时间内, 事件只允许发生一次)

```js
function debounce(fn, delay) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
```

### 节流: 高频事件触发，但是在 n 秒内只会执行一次，节流函数会稀释函数的执行效率(一定时间内的多次合为一次)

```js
// 应用场景: 提交表单, 高频监听事件
function throttle(fn, delay) {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}
```

::: warning
**函数柯里化**
:::

```js
例：
function currying() {
  // 数组方法依赖于内部是this数据来执行
  let args = Array.prototype.slice.call(arguments)
  const inner = function inner() {
    args.push(...arguments)
    return inner
  }

  // inner函数toString改不了, 改一个计算原始数据类型的方式
  inner.__proto__[Symbol.toPrimitive] = function () {
    return args.reduce((acc, e, i) => {
      return acc + e
    }, 0)
  }
  return inner
}

调用：
let curry = currying(1, 2, 3)(4, 5)(7, 8, 9);
转换类型即可获得计算结果：
curry - 0;
curry + '';
```

::: warning
**ajax 失败重连**
:::

```js
times: 尝试次数
delay: 延迟时间
function retry(fn, times = 0, delay = 0) {
  return new Promise((resolve, reject) => {
    const inner = async function inner() {
      try {
        const result = await fn()
        resolve(result) // 成功
      } catch (e) {
        if (times-- <= 0) {
          reject(e) // 彻底失败
        } else {
          setTimeout(() => {
            inner()
          }, delay)
        }
      }
    }
    inner()
  })
}

调用：
retry(func, 5, 1000 ).then(res=>{}).catch(e=>{})
```
