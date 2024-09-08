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
  
#### Omit<Type, Keys>
通过从 Type 中选择所有属性然后删除 Keys（字符串字面或字符串字面的并集）来构造一个类型。与 Pick 相反。
```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```
