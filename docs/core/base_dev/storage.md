---
permalink: '/core/storage/'
---

### Cookie设置之后无法删除的情况的解决方法

- 在设置`cookie`的时候,对`cookie`设置一些选项,如`path`或者`domain`,在删除`cookie`的时候如不指定当初设置`path`或`domain`就会导致无法删除,所以在删除`cookie`的时候也需要指定在设置时的`path`或`path`	
- 在设置`cookie`是使用了默认的`path`或`domain`,那么在删除时直接使用`key`即可
- `cookie`操作推荐`js-cookie`插件
- `js-cookie`在设置有效期的时候`expires`使用的是天数
