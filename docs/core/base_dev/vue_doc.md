---
title: 'Vue'
permalink: '/core/vue_doc/'
---


## 生命周期修改
`beforeDestory` 修改为 `beforeUnmount`
`destoryed` 修改为 `unmounted`

#### 注意事项
##### 1.0 this问题
> 在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在 data property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。

## 路由守卫
全局钩子
- `router.beforEach` 在路由变化前调用,钩子是异步函数,路由需要等钩子函数返回结果才会进行下一步,需要执行`next`函数.
    可在此阶段处理权限校验,数据验证等.

    守卫方法参数
    - `to`代表要进入的路由
    - `from`代表当前要离开的路由

    返回值
    - `false`
    - 路由地址

    也可传入第三个参数`next`,逻辑顺序内只能调用一次

- `router.beforResolve`在所有组件守卫和路由组件被解析后,在导航被确认之前调用

- `router.afterEach` 全局后置钩子,

路由独享守卫
直接在路由配置上定义钩子函数
- `beforeEnter` 从不同的路由导航进入时触发

组件独享守卫
- `beforeRouterEnter` 导航被确认前调用,此时无法使用`this`, 需要在`next`传入回掉使用`vm`实例
