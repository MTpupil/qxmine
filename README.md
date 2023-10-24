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

> 持久化数据
```javascript

$.getdata(‘chavy’) // 读取持久化数据 (string格式)
$.setdata(string, ‘chavy’) // 写入持久化数据 (string格式)
$.getjson(‘chavy’, default_value<String, Object>) // 读取持久化数据 (object格式),当读取失败后返回默认值
$.setjson(object, ‘chavy’) // 写入持久化数据 (object格式)

```

# LICENSE
Copyright (c) 2023 MTpupil
