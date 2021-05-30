---
permalink: '/core/typescript/'
---

# Typescript
### type和interface有什么区别
#### 相同点
---
- 都可以描述一个对象或函数

#### 不同点
---
- type可以声明基本类型,元组,联合类型
- interface可以而type不可以
    ```
    interface可以进行声明合并
    interface cat {
     name: string
     age: number
    }
    interface cat {
     color: string
    }

    那么cat接口为
    cat {
     name: string
     age: number
     color: string
    }
    ```
  