## PWA & service worker 使用

### PWA应用
#### PWA 是什么
PWA（Progressive Web App）是一种理念，使用多种技术来增强web app的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。

#### service worker 与 页面通信
page-js(向sw发送数据)
```js
// 发送
 navigator.serviceWorker.controller.postMessage('value')
 //监听接收
 navigator.serviceWorker.addEventListener('message', function(e) {
    console.log('page-message-from-sw',e)
    var csvUrl = URL.createObjectURL(e.data.message);
    link.href = csvUrl;
    link.download = 'v.png';
    link.click();
  })
```
sw-js (监听接收数据)
```js
self.addEventListener('message', async function(e) {
    const promise = self.clients.matchAll().then(function(clients) {
        let senderId = e.source ? e.source.id : 'unknow'
        clients.forEach(client => {
            if (senderId === client.id) {
                //发送数据到page
                client.postMessage({
                    client: senderId,
                    message: imgRes
                })
                return
            } else {
            }
        })
    })
    // e.waitUntil(promise)
})
```