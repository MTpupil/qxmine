# MTpupil（Quantumult X Repo）
---
- [MTpupil（Quantumult X Repo）](#mtpupilquantumult-x-repo)
    - [简介](#简介)
    - [code snippet](#code——snippet)
        - [quantumult x](#quantumult-x)
        - [boxjs](#boxjs)
- [LICENSE](#license)
---
## 简介

> 此仓库用于存储Quantumult X相关脚本，具体内容有分流（Filter）、重写（rewrite）、任务（task）。同时包含[BoxJs](Https://github.com/chavyleung/scripts)项目的相关内容，以及一个小型的图标库。

## code snippet

### quantumult x

```javascript 

```

### boxjs

> Http请求
  * 支持方法: get, post, put, delete, head, options, patch
```javascript
    let option = {
        url: "http://www.example.com/", // URL，必须
        headers: { // 请求头，可选
            "Accept": "*/*",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/605.1.15",
            "Content-Type": "application/json; charset=utf-8"
            ""
        },
        body: `auth_key=1234567&source_lang=EN&target_lang=ZH` // 请求体，POST等方法必须，字符串或对象
    }
    let result = $.get(URL<String> or options<Object>, callback(error, response, data)) // 不支持异步
    let result = $.post(URL<String> or options<Object>, callback(error, response, data)) // 不支持异步
    ……

    let result = await $.http.get(URL<String> or options<Object>).then(callback(response))
    let result = await $.http.post(URL<String> or options<Object>).then(response => response.body)
    let result = await $.http.put(URL<String> or options<Object>).then(response => {
        $.log(JSON.stringify(response.headers));
        return response.body
    })
    ……
```

> 持久化数据
```javascript
    $.getdata(‘chavy’) // 读取持久化数据 (string格式)
    $.setdata(string, ‘chavy’) // 写入持久化数据 (string格式)
    $.getjson(‘chavy’, default_value<String, Object>) // 读取持久化数据 (object格式),当读取失败后返回默认值
    $.setjson(object, ‘chavy’) // 写入持久化数据 (object格式)

```

# LICENSE
Copyright (c) 2023 MTpupil
