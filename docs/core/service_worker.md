## service worker 使用

##### service worker 与 页面通信
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