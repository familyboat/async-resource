## 异步资源请求

### 引言

在构建前端业务逻辑时，总是需要和后端逻辑打交道（即异步资源请求）。  
通常，构建出良好的异步资源请求的处理逻辑，能够让用户用起来更舒心。因此，我想记录一下我对该话题的一些理解。

### 前情准备

要模拟异步资源请求，后端api接口必不可少。 
但该项目最终托管在github pages上，不存在后端服务，因此我将相应的资源写在json文件中。

后端资源以[persons.json](src/services/persons.json)为例：  
```json
[
  {
    "id": 1,
    "name": "jack",
    "age": 16
  },
  {
    "id": 2,
    "name": "rose",
    "age": 15
  }
]
```

前端异步请求persons.json的逻辑在[util.js](src/util.js)中：
```js
export const httpGet = async (url) => {
  await waitTime(Math.random() * 2000);
  const response = await fetch(url, {
    method: 'GET',
    mode: 'same-origin',
  });
  try {
    const persons = response.json();
    return persons;
  } catch (e) {
    throw new Error(e);
  }
}
```

### 真实模拟

真实模拟的逻辑在[App.js](src/App.js)中，具体呈现的效果[点击此处]()