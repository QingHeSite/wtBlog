---
permalink: '/core/drag/'
---

## 获取拖拽文件

```html
<div 
@drop.prevent.stop="dropInp" 
@dragenter="inpDragenter" 
@dragover="inpDragOver"
@dragleave="inpDragLeave"></div>

```
```js
dropInp( e ) {
        this.maskInp1 = false
        const fileList = e.dataTransfer.files;
        this.handleChangeImgs({target: {files: [...fileList]}})
      } 
inpDragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}
inpDragOver(e) {
      e.stopPropagation();
      e.preventDefault();
    }
inpDragLeave() {
    // 消除蒙层等样式
      this.maskInp1 = false
    }
```