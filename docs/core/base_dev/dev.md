---
title: '组件开发'
description: '前端虚拟瀑布流开发,提升网页滚动性能'
permalink: '/core/base_dev/dev/'
sidebarDepth: 2
meta:
	- name: keywords
	  content: 虚拟瀑布流,前端瀑布流开发,前端组件开发,前端性能优化
---

## 组件开发 

### Masonry
- create生命周期内计算所有item位置
- 计算步骤
	1. 创建列高度数组`colHeight` -- `calColumn` => `容器宽度/gridItem`得到列数,
	2. 遍历计算每个grid位置
	3. 找出高度最小的一列`_findLowestCol` ,返回`col` ,属性`height`, `findIndex`
	4. 计算x坐标,`col.findIndex * ( configs.gridWidth + configs.gapX )`
	5. 计算y坐标,`colHeight[col.findIndex]`
	6. 同时算好此列高度(加上当前grid高度),`colHeight[col.findIndex] = y + height + configs.gapY `
	7. 返回组成新的rendererItem
    	```js
       rendererItem =  {   
            x: Math.round ( x ),   
            y: Math.round ( y ),  
            width: Math.round ( width ), 
            height: Math.round ( height ),  
            free: false,  
            order: order,   
            data: item
        }
        ```
        
 - 位置全部计算完,接下来处理客户端只渲染可视元素
 - 重点 setView, isItemNeedDraw

``` js
// isItemNeedDraw函数逻辑,
const result = itemBottom >= startY && itemTop <= endY && itemRight >= 
startX && itemLeft <= endX ;

view.y = 0
view.height= 990 === window.innerHeight
distance = 200
const startY = view.y - distance  === 200 (根据滚动距离y计算出)
const endY = view.y + view.height + distance  === 1190(根据滚动距离y计算出,向下滚动, 值变大) 
```
  

### 小程序开发
