# j-loadjs
动态加载js，一般用来加载url形式的js,也可以用module方式.

```bash
npm i j-loadjs
```

```html
<script src="../index.js"></script>
```
或者
```js
const jLoadJSModules=require('j-loadjs');
```

```js

const module = await jLoadJSModules.loadJS('https://xxx.com/jt-design/dist/index.esm.js?2024', true);// 第二个参数为是否用module方式加载



```