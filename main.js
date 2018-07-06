! function () {
  window.jQuery = function () {}
  //这里只模仿构造jquery的ajax方法
  window.jQuery.ajax = function ({method, path, body}) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest()
      request.open(method, path)
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300) {
            resolve.call(undefined, request.responseText)
          } else if (request.status >= 400) {
            reject.call(undefined, request)
          }
        }
      }
      request.send(body)
    })

  }
  window.$ = window.jQuery

  function successFn(responseText) {
    console.log("请求成功")
    console.log(responseText)
    let text = responseText
    let obj = window.JSON.parse(text)
    console.log(obj.qikke.name)
  }

  function failFn(request) {
    console.log('请求失败')
    console.log(request)
  }

  //点击按钮发送请求
  myButton.onclick = function () {
    console
    $.ajax({
      method: 'POST',
      path: '/xxx',
      body: 'name="abc"?age=18'
    }).then(successFn, failFn)
  }
}()