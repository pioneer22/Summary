---
title: 面试题
date: 2022-06-21
---

::: warning
防抖与节流
:::

### 防抖: 触发高频事件后 n 秒后函数只会执行一次, 如果 n 秒内高频事件再次触发，则会重新计算时间

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

### 节流: 高频事件触发，但是在 n 秒内只会执行一次，节流函数会稀释函数的执行效率

```js
function throttle(fn, delay) {
  let isExecute = true
  return function () {
    if (!isExecute) return
    isExecute = false
    let timer = setTimeout(() => {
      fn.apply(this, arguments)
      isExecute = true
      clearTimeout(timer)
    }, delay)
  }
}
```
