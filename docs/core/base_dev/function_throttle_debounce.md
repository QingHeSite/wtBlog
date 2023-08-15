---
title: '函数的防抖和节流'
permalink: '/core/function_throttle_debounce/'
---

### 函数的防抖和节流
- 一般在高频率执行函数的情况下会使用防抖和节流以减少函数的执行次数

### 什么是防抖(debounce)
- 是指函数从上一次被调用后,延迟n秒后再次执行,如果在n秒内被触发,则重新计时
```js
const debounce = function(fn,delay) {
        let timmer = null
        return function(){
            const args = arguments
            const _this = this
            if(timmer) {
                clearTimeout(timmer)
            }
            timmer = setTimeout(function() {
                fn.apply(_this, args)
            }, delay)
        }
    }
```
### 什么是节流(throttle)
- 指在n秒内最多执行fn一次的函数, 减少函数执行的频率
```js
const throttle = function(fn,delay) {
        let pre = 0
        return function(){
            console.log(delay);
            let nowTiem = Date.now()
            if(nowTiem - pre > delay){
                fn.apply(this,arguments)
                pre = Date.now()
            }
        }
    }
```