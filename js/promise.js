let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if ( a == 2 ) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});


// fetch API
fetch('https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS').then((res)=>res.text()).then(data=>console.log(data));
fetch('https://cors-anywhere.herokuapp.com/www.google.com', {method:'get', Origin:null}).then(res=>res.text()).then(data=>console.log(data.substr(1,100)));
