---
permalink: '/core/vue_doc/'
---

## vue 3.0

#### 生命周期修改
`beforeDestory` 修改为 `beforeUnmount`
`destoryed` 修改为 `unmounted`

#### 注意事项
##### 1.0 this问题
> 在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在 data property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。
