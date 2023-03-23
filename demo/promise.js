// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
let p = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a > 0.5) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});
p.then(message => {
    console.log('This is in the then ' + message);
}).catch(message => {
    console.log('This is in the catch ' + message);
});

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        body: JSON.stringify(data),  // must match 'Content-Type' header
        cache: 'no-cache',           // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',  // include, same-origin, *omit
        mode: 'cors',                // no-cors, cors, *same-origin
        redirect: 'follow',          // manual, *follow, error
        referrer: 'no-referrer',     // *client, no-referrer
    })
    .then(response => response.json()) // parses response to JSON
}
postData('http://example.com/answer', {answer: 42})
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))

// fetch API: https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
fetch(url).then(res=>res.text()).then(data=>console.log(data));
fetch(url, {
    method: 'POST', // or 'PUT'
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(data) // data can be `string` or {object}!
}).then(res=>res.json()).then(data=>console.log(data)).catch(error=>console.error(error));
// 除非响应报文包含了正确CORS响应头: {'Access-Control-Allow-Origin': '*'}
fetch('https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS').then(res=>res.text()).then(data=>console.log(data));
fetch('https://cors-anywhere.herokuapp.com/www.google.com', {method:'get', Origin:null}).then(res=>res.text()).then(data=>console.log(data.substr(1,100)));
fetch('http://aruner.net/resources/access-control-with-get/', {method:'GET', headers:{'Origin':'http://arunranga.com'}});

fetch('example.zip')
.then((res) => {
    // 获取读取器
    const reader = res.body.getReader()
    const type = res.headers.get('Content-Type')
    const data = []

    return new Promise((resolve) => {
        // 读取所有数据
        function push() {
            reader.read().then(({done, value}) => {
                data.push(value)
                if (done) {
                    // 包装成 blob 对象并返回
                    resolve(new Blob(data, { type }))
                } else {
                    push()
                }
            })
        }
        push()
    })
})
.then(blob => {
    const url = URL.createObjectURL(blob)
    let a = document.createElement('a')
    a.download = 'example.zip'
    a.href = url
    document.body.appendChild(a)
    a.click()
    a.remove()
})
