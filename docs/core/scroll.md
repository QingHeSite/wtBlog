---
permalink: '/core/scroll/'
---

## 子元素滚动结束带动父元素滚动问题
- 解决子元素滚动结束后会带动父元素滚动
- 这是浏览器的默认行为,以下是基于jq的扩展
- [参考文章张鑫旭](https://www.zhangxinxu.com/wordpress/2015/12/element-scroll-prevent-parent-element-scroll-js/)
```js
$.fn.scrollUnique = function() {
    return $(this).each(function() {
        var eventType = 'mousewheel';
        // 火狐是DOMMouseScroll事件
        if (document.mozHidden !== undefined) {
            eventType = 'DOMMouseScroll';
        }
        $(this).on(eventType, function(event) {
            // 一些数据
            var scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = this.clientHeight;

            var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        

            if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                this.scrollTop = delta > 0? 0: scrollHeight;
                // 向上滚 || 向下滚
                event.preventDefault();
            }        
        });
    });	
};
//调用方法
//选择器为滚动盒子
$().scrollUnique();
```
但是,仅仅需要这一个功能就载入jq,始终是不划算的,所以简单修改后,去除jq
```ts
            const scrollUnique = (function () {
                var eventType = 'mousewheel';
                if ((document as any).mozHidden !== undefined) {
                    eventType = 'DOMMouseScroll';
                }
                return function (ele) {
                    ele.addEventListener(eventType,function (event) {
                        var scrollTop = this.scrollTop,
                            scrollHeight = this.scrollHeight,
                            height = this.clientHeight;
                        var delta = (event.wheelDelta) ? event.wheelDelta : -(event.wheelDelta || 0);

                        if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                            // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                            this.scrollTop = delta > 0 ? 0 : scrollHeight;
                            // 向上滚 || 向下滚
                            event.preventDefault();
                        }
                    })
                }
            })()
            const eleScrollList = document.querySelectorAll('#msg-cont .__panel')

            eleScrollList.forEach(ele => {
                scrollUnique(ele)
            })
```