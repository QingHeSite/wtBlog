## js 文件下载
特点
- 可自定义进度条(需返回content-length)
- 可判断是否下载成功
```js
var xhr = new XMLHttpRequest();
var link = document.createElement('a');
    xhr.open('GET', 'http://127.0.0.1:8083/1.png')
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = "blob";
    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            console.log('loaded',event.loaded);
            console.log('total',event.total);      }
    };
    xhr.onload = function (oEvent) {
        console.log(oEvent);
        console.log(xhr.status);
        console.log(xhr.response);
        if (xhr.readyState === 4 && xhr.status === 200) {
            var isBlob = xhr.response instanceof Blob;
            var blob = new Blob([xhr.response], {type: 'jpeg/png'});
            var csvUrl = URL.createObjectURL(blob);
            link.href = csvUrl;
            link.download = 'v.png';
            link.click();    
            //需要释放,防止内存泄漏
            URL.revokeObjectURL(csvUrl)
        }
    }
    xhr.send();
```