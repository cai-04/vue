---
typora-root-url: ./vue学习笔记.assets
---

# vue学习笔记



## 一、学习教材

```
Vue.js 3 前端开发实战   ————————张益珲
```

[github仓库地址](https://github.com/cai-04/vue)

[gitee仓库地址](https://gitee.com/Q0-3-0-8-_q-s-jQ/vue)

## 二、第一章 从前端基础到Vue.js 3

### 2.1HTML

标签是HTML语言中非常重要的一部分，标签成对出现。

**HTML 中的基础标签**

#### 2.1.1等级h标签

base.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>基础标签应用</title>
</head>
<body>
    <!-- 这里是注释的内容 -->
    <h1 align = "center">1级标题</h1>
    <h2>2级标题</h2>
    <h3>3级标题</h3>
    <h4>4级标题</h4>
    <h5>5级标题</h5>
    <h6>6级标题</h6>
</body>
</html>
```

#### 2.1.2p标签、a标签、img标签

p标签：段落

a标签：超链接跳转

img标签：图片。img标签包裹在div标签中是因为img是一个行内元素，如果我们想让图片单独另起一行展示，则需要使用div标签包裹。

```html
    <p>这里是一个段落</p>
    <p>这里是一个段落</p>
    <a href="https://www.baidu.com">跳转到百度</a>
    <div><img src="demo.png" alt="图片" width="400px"></div>
```

#### 2.1.3标签中的属性

```apl
tagName = "value"
```

### 2.2css

#### 选择器

css代码的语法规则主要由两部分构成：选择器和声明语句。

##### 2.2.1通用选择器

使用“*”来定义通用选择器，通用选择器的意义是对所有元素生效。

selector.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS选择器</title>
    <style>
        * {
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
</body>
</html>
```

##### 2.2.2标签选择器

通过标签名对此标签对应的所有元素的样式进行设置。

```html
 p {
            color:red;
   }    
```

##### 2.2.3类选择器

类选择器需要集合标签的class属性进行使用，我们可以在标签中添加class属性来为其设置一个类名，类选择器会将所有设置对应类名的元素选中，类选择器的使用格式为：“.className”。

##### 2.2.4id选择器

id选择器会通过标签的id属性进行选择，其使用格式为“#idName”。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS选择器</title>
    <style>
        * {
            font-size: 18px;
            font-weight: bold;
        }
        p {
            color:red;
        }
        .p2 {
            color: green;
        }
        #p3 {
            color:blue;
        }
    </style>
</head>
<body>
    <h1>这里是标题</h1>
    <p>这里是段落一</p>
    <p class="p2">这里是段落二</p>
    <p id="p3">这里是段落三</p>
    <a>这里是超链接</a> 
</body>
</html>
```

##### 2.3.5css组合和嵌套

```html
 <div><p>div中嵌套的p</p></div>
```

后代选择器

```html
 div p {
            color: cyan;
        }
```

组合:“，”分隔

```html
.p2, #p3 {
            font-style: italic;
        }
```

#### 样式

##### 2.3.1元素的背景设置

| 属性名              | 意义                   | 可配置值                                                     |
| ------------------- | ---------------------- | ------------------------------------------------------------ |
| background-color    | 设置元素背景颜色       | 这个属性可以接收任意合法的颜色值                             |
| background-image    | 设置元素的背景图片     | 图片素材的URL                                                |
| background-repeat   | 设置背景图片的填充方式 | repeat-x:水平方向上重复 <br />repeat-y:垂直方向上重复<br />no-repeat:图片背景不进行重复平铺 |
| background-position | 设置图片背景的定位方式 | 可以设置为相关定位的枚举值，如top、center等，也可以设置为长度值 |

##### 2.3.2元素的文本配置

html标签：

```html
<div class="text">文本配置属性 HelloWorld</div>
```

css设置

```html
.text {
            text-indent: 100px;
            text-align: right;
            word-spacing: 20px;
            letter-spacing: 10px;
            text-transform: uppercase;
            text-decoration: underline;
        }
```

##### 2.3.3边框与边距

html标签：

```html
<div class="border">设置元素的边框</div>
```

css设置

```html
.border {
            border-style: solid;
            border-width: 4px;
            border-color: red;
        }
```

![](https://github.com/cai-04/vue/blob/main/image/041809322094614.png)

可以通过css的height和width属性控制元素的宽度和高度，padding相关的属性可以设置元素的内边距，可以使用padding-left、padding-right、padding-top和padding-bottom控制四个方向上的内边距。margin相关的属性用来控制元素的外边距，使用margin-left、margin-right、margin-top和margin-bottom控制四个方向上的外边距。

html标签：

```html
<span class="sp1">sp1</span>
<span class="sp2">sp2</span>
<span class="sp3">sp3</span>
<span class="sp4">sp4</span>
```

css设置

```html
.sp1 {
            background-color: red;
            color: white;
            padding-right: 30px;
        }
.sp2 {
            background-color: blue;
            color: white;
            padding-left: 30px;
        }
.sp3 {
            background-color: green;
            color: white;
            margin-left: 30px;
        }
.sp4 {
            background-color: indigo;
            color: white;
            margin-right: 30px;
        }
```

### 2.3JavaScript入门

javascript能动态改变html组件的内容。

js.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var count = 0
        function clickFunc() {
            document.getElementById("h1").innerText = `${++count}`
        }
    </script>
</head>
<body>
    <div style="text-align: center;">    
        <h1 id="h1" style="font-size: 40px;">数值:0</h1>
        <button style="font-size: 30px; background-color: burlywood;" onclick="clickFunc()">点击</button>
    </div>
</body>
</html>
```

html可以直接内嵌css样式表，为其设置style属性即可，内嵌的样式表要比外嵌的样式表优先级更高。onclick属性：执行clickFunc函数。

**Document 对象方法**

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [close()](https://www.w3school.com.cn/jsref/met_doc_close.asp) | 关闭用 document.open() 方法打开的输出流，并显示选定的数据。  |
| [getElementById()](https://www.w3school.com.cn/jsref/met_doc_getelementbyid.asp) | 返回对拥有指定 id 的第一个对象的引用。                       |
| [getElementsByName()](https://www.w3school.com.cn/jsref/met_doc_getelementsbyname.asp) | 返回带有指定名称的对象集合。                                 |
| [getElementsByTagName()](https://www.w3school.com.cn/jsref/met_doc_getelementsbytagname.asp) | 返回带有指定标签名的对象集合。                               |
| [open()](https://www.w3school.com.cn/jsref/met_doc_open.asp) | 打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。 |
| [write()](https://www.w3school.com.cn/jsref/met_doc_write.asp) | 向文档写 HTML 表达式 或 JavaScript 代码。                    |
| [writeln()](https://www.w3school.com.cn/jsref/met_doc_writeln.asp) | 等同于 write() 方法，不同的是在每个表达式之后写一个换行符。  |

**Document 对象属性**

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| body                                                         | 提供对 <body> 元素的直接访问。对于定义了框架集的文档，该属性引用最外层的 <frameset>。 |
| [cookie](https://www.w3school.com.cn/jsref/prop_doc_cookie.asp) | 设置或返回与当前文档有关的所有 cookie。                      |
| [domain](https://www.w3school.com.cn/jsref/prop_doc_domain.asp) | 返回当前文档的域名。                                         |
| [lastModified](https://www.w3school.com.cn/jsref/prop_doc_lastmodified.asp) | 返回文档被最后修改的日期和时间。                             |
| [referrer](https://www.w3school.com.cn/jsref/prop_doc_referrer.asp) | 返回载入当前文档的文档的 URL。                               |
| [title](https://www.w3school.com.cn/jsref/prop_doc_title.asp) | 返回当前文档的标题。                                         |
| [URL](https://www.w3school.com.cn/jsref/prop_doc_url.asp)    | 返回当前文档的 URL。                                         |

**Document 对象集合**

| 集合                                                         | 描述                                     |
| :----------------------------------------------------------- | :--------------------------------------- |
| [all]                                                        | 提供对文档中所有 HTML 元素的访问。       |
| [anchors[\]](https://www.w3school.com.cn/jsref/coll_doc_anchors.asp) | 返回对文档中所有 Anchor 对象的引用。     |
| [applets]                                                    | 返回对文档中所有 Applet 对象的引用。     |
| [forms[\]](https://www.w3school.com.cn/jsref/coll_doc_forms.asp) | 返回对文档中所有 Form 对象引用。         |
| [images[\]](https://www.w3school.com.cn/jsref/coll_doc_images.asp) | 返回对文档中所有 Image 对象引用。        |
| [links[\]](https://www.w3school.com.cn/jsref/coll_doc_links.asp) | 返回对文档中所有 Area 和 Link 对象引用。 |

javascript对标签元素属性修改。

HTML标签：

```html
 <div id="img" style="visibility: visible;">
            <img src="demo.png" width="200px">
</div>
```

JavaScript代码：

```html
<script>
        var count = 0
        function clickFunc() {
            document.getElementById("h1").innerText = `${++count}`
            document.getElementById("img").style.visibility = count % 2 == 0 ? "visible" : "hidden"
        }
    </script>
```

#### 2.3.1javascript语法

###### 2.3.1.1变量的定义

```html
var a = 100 // 定义变量a 其存储的值为数值100
        var b = "HelloWorld" // 定义变量b 其存储的值为字符串
        var c = {
            name:"abc"
        } // 定义键值对变量 c
        var d = [1, 2, 3,] // 定义列表变量d
        var e = false // 定义布尔变量e
```

###### 2.3.2表达式

```html
var m = 1 + 1 // 算数运算
        var n = 10 > 5 // 比较运算
        var o = false && false // 逻辑运算
        var p = 1 << 1 // 位运算
```

###### 2.3.3函数的定义与调用

函数是程序的功能单元。有两种方式一种是使用function关键字，另一种是使用箭头函数

```html
function func1(param) {
            console.log("执行了func1函数" + param);
        }

        var func2 = (param) => {
            console.log("执行了func2函数" + param);
        }

        func1("hello")
        func2("world")
```

###### 2.3.4条件分支语句

```html
var i = 0
        var j = 1
        if (i > j) {
            console.log("i > j")
        } else if (i == j) {
            console.log("i == j")
        } else {
            console.log("i < j")
        }
```

```html
var u = 0
        switch (u) {
            case 0:
                console.log("0")
                break
            case 1:
                console.log("1")
                break
            default:
                console.log("-")
        }
```

###### 2.3.5循环语句

```
var v = 10
        while (v > 0) {
            v -= 1
            console.log(v)
        }
        for(v = 0 ; v < 10; v ++) {
            console.log(v)
        }
```

### 2.4渐进式开发框架Vue

##### 2.4.1第一个Vue应用

vue  CDN引入

```
 <script src="https://unpkg.com/vue@next"></script>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue3 Demo</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div style="text-align: center;" id="Application">
        <h1>{{ count }}</h1>
        <button v-on:click="clickButton">点击</button>
    </div>
    <script>
        // 定义一个Vue组件, 名为App
        const App = {
            // 定义组件中的数据
            data() {
                return {
                    // 目前我们只用到count数据
                    count:0
                }
            },
            // 定义组件中的函数
            methods: {
                // 实现点击按钮的方法
                clickButton() {
                    this.count = this.count + 1
                }
            }
        }
        // 将Vue组件绑定到页面上id为Application的元素上
        Vue.createApp(App).mount("#Application")
    </script>
</body>
</html>
```

data方法：返回组件所需要的数据

methods属性：定义组件所需要的方法函数

##### 2.4.2实现一个简单的用户登录页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <script src="https://unpkg.com/vue@next"></script>
    <title>vue3 demo</title>
</head>
<body>
    <div id="Application" style="text-align: center;">
    <h1>{{title}}</h1>
    <div v-if="noLogin">账号:<input v-model="userName" type="text" /></div>
    <div v-if="noLogin">密码:<input v-model="password" type="password" /></div>
    <div v-on:click="click" style="border-radius: 30px;width: 100px;margin: 20px auto;color: white;background-color: blue;">{{buttonTitle}}</div>
    </div>
</body>
<script>
    const App = {
        data () {
            return {
                title:"欢迎您：未登录",
                noLogin:true,
                userName:"",
                password:"",
                buttonTitle:"登录"
            }
        },
        methods: {
            click() {
                if (this.noLogin) {
                    this.login()
                } else {
                    this.logout()
                }
            },
            //登录
            login() {
                // 判断账号、密码是否为空
                if (this.userName.length >0 && this.password.length >0) {
                    //登陆提示后刷新页面
                    alert(`userName:${this.userName} password:${this.password}`)
                    this.noLogin = false
                    this.title = `欢迎您:${this.userName}`
                    this.buttonTitle = "注销"
                    this.userName = ""
                    this.password = ""
                } else {
                    alert("请输入账号密码")
                }
            },
            //登出
            logout() {
                //清空登陆数据
                this.noLogin = true
                this.title = `欢迎您:未登录`
                this.buttonTitle = "登录"
            }
        }
    }
    Vue.createApp(App).mount("#Application")
</script>
</html>
```

```
功能：
1.登录页面要有标题，用来提示用户当前的登陆状态
2.在未登录时，需要有两个输入框供用户输入账号、密码和进行登陆操作
3.在登陆完成后，输入框需要隐藏，需要提供按钮让用户登出
```

注意事项：

```html
alert(`userName:${this.userName} password:${this.password}`)
this.title = `欢迎您:${this.userName}`
this.title = `欢迎您:未登录`
这三行代码的单引号为“`”而不是“'”这属于模板插值下一章会讲，当成语法就好
还有就是乱码问题：以vscode为例一定要把字符编码设置成UTF-8
```

## 三、第二章Vue模板应用

### 3.1模板基础

#### 3.1.1模板插值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/vue@next"></script>
    <title>模板插值</title>
</head>
<body>
    <div id="Application" style="text-align: center;">
    <h1>这里是模板的内容：{{count}}次点击</h1>
    <button v-on:click="clickButton">按钮</button>
    </div>
</body>
<script>
    //定义一个vue组件，名为APP
    const App ={
        //定义组件中的数据
        data () {
            return {
                //目前我们只用到count数据
                count:0
            }
        },
        //定义组件中的函数
        methods: {
            //实现单击按钮的方法
            clickButton() {
                this.count = this.count +1
            }
        }
    }
    //将vue组件绑定到页面上id为Application的元素上
    Vue.createApp(App).mount("#Application")
</script>
</html>
```

在HTML的标签中使用{{}}可以进行变量插值。

v-once指令：组件在进行变量插值时只会插一次。即渲染后就无法改变了。

v-html指令：HTML代码插值

v-bind指令：标签属性插值

```html
<h1 v-once>这里是模板的内容：{{count}}次点击</h1>


data() {
	return {
		count:0,
		countHTML:"<span style='color:red;'>0</span>span></span>"
}
}
<h1 v-once>这里是模板的内容：{{countHTML}}次点击</h1>


<h1>这里是模板的内容：<span v-html="countHTML"></span>次点击</h1>

<h1 v-bind:id="id1">这里是模板的内容：{{count}}次点击</h1>
css:
#h1 {
	color:red;
}
data() {
	return {
		count:0,
		countHTML:"<span style='color:red;'>0</span>span></span>",
		id1:"h1"
}
}
```

#### 3.1.2模板指令

v-if：选择渲染指令，设置为布尔值true时，当前标签元素才会被渲染。

对于可以添加参数的指令，参数和指令使用冒号进行分隔，指令的参数本身也可以是动态的。

```html
    <div id="Application" style="text-align: center;">
    <h1 v-if="show">标题</h1>
    </div>
</body>
<script>
    //定义一个vue组件，名为APP
    const App ={
        //定义组件中的数据
        data () {
            return {
                //目前我们只用到count数据
                show:false
            }
        }     
    }
    //将vue组件绑定到页面上id为Application的元素上
    Vue.createApp(App).mount("#Application")
</script>

v-bind:style
v-on:click

#h1 {
	color:red;
}
.h1 {
	color:blue
}
<h1 v-bind:[prop]="name" v-if="show">标题</h1>
 //定义一个vue组件，名为APP
    const App ={
        //定义组件中的数据
        data () {
            return {
                //目前我们只用到count数据
                show:true,
				prop:"class",
				name:"h1"
            }
        }     
    }
```

v-modle：属性绑定

```html
<input v-modle.trim="content"></input>
```

指令缩写：例如：

```vue
v-bind:id=“id” --> :id="id"
v-on:click="myFunc" --> @click="myFunc"
```

### 3.2条件渲染

#### 3.2.1使用v-if指令进行条件渲染

只有当变量或表达式值为真时才会被渲染。v-if可以与v-else结合使用。v-if与v-else之间可以插入任意个v-else-if来实现多分支渲染逻辑。

```vue
<h1 v-if="show">标题</h1>
<h1>hello</h1>
<p v-else>如果不显示标题就显示段落</p>

<h1 v-if="mark == 100">满分</h1>
<h1 v-else-if="mark > 60">及格</h1>
<h1 v-else>不及格</h1>
```

v-if指令必须添加到一个HTML元素上，如果我们需要使用条件同时控制多个标签元素的渲染

（1）使用div标签

```html
<div v-if="show">
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
        </div>
```

（2）使用template标签

```html
 <template v-if="show">
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
        </template>
```

通常，更推荐使用方法二分组的方式来控制一组元素的条件渲染逻辑，HTML渲染元素，div元素本身也会被渲染，二template不会渲染标签本身

#### 3.2.2使用v-show指令进行渲染

v-show：用法与v-if类似但是不支持template模板，也不能和v-else结合使用。

v-if其实才是真正意义上的条件渲染，其在条件变换过程中，组件内部的事件监听器都会正常执行，子组件也会正常地被销毁或重建。同时v-if采取的是懒加载的方式进行渲染，如果初始条件为假，则关于这个组件的任何渲染工作都不会进行，直到其绑定的条件为真时，才会真正开始渲染此元素。

v-show指令的渲染逻辑只是一种视觉上的渲染，实际上无论v-show指令设置的条件是真是假，当前元素都会被渲染，v-show指令只是简单的通过切换CSS样式中的display属性来展示效果。

```vue
<h1 v-if="show">v-if标题在这里</h1>
        <h1 v-show="show">v-show标题在这里</h1>
```

### 3.3循环渲染

#### 3.3.1v-for指令的使用方法

v-for指令：将一个数组中的数据渲染为列表视图。

item:列表中被迭代出的元素名，list:列表变量本身

index索引值从0开始

<ol></ol>：有序列表

```html
<body>
    <div id="Application">
        <ul>
            <template v-for="(item,index) in handle(list)">
                <div>{{index + "." + item.name}}</div>
                <div>{{item.num}}</div>
            </template>
        </ul>
        <ol>
            <li v-for="(value,key,index) in preson" :key="index">
                {{key}}:{{value}}
            </li>
        </ol>
        <button @click="click">
            逆序
        </button>
    </div>
    <script>
        // 定义一个Vue组件, 名为App
        const App = {
            data() {
                return {
                    list:[
                        {
                            name: "珲少",
                            num: "151xxxxxxxx"
                        },
                        {
                            name: "Jaki",
                            num: "151xxxxxxxx"
                        },
                        {
                            name: "Lucy",
                            num: "151xxxxxxxx"
                        },
                        {
                            name: "Monki",
                            num: "151xxxxxxxx"
                        },
                        {
                            name: "Bei",
                            num: "151xxxxxxxx"
                        }
                    ],
                    preson: {
                        name: "珲少",
                        age: "00",
                        num: "151xxxxxxxx",
                        emali: "xxxx@xx.com"
                    }
                }
            },
            methods: {
                click() {
                    this.list.reverse()
                },
                handle(l) {
                    return l.filter(obj => obj.name != "珲少")
                }
            }
        }
        Vue.createApp(App).mount("#Application") 
    </script>
</body>
```

#### 3.3.2v-for指令的高级用法

v-for对列表进行循环渲染后实际上就实现了对这个数据对象的绑定

```
push() //向列表尾部追加一个元素
pop() //删除列表尾部的一个元素
shift() //向列表头部插入一个元素
unshift() //删除列表头部的一个元素
splice() //对列表进行分割操作
sotr() //对列表进行排序操作
reverse() //向列表进行逆序
```

### 3.4实现代办任务列表应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>待办任务列表</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="Application">
    <!--输入框元素，用来新建待办任务-->
    <form @submit.prevent="addTask">
    <span>新建任务</span>
    <input v-model="taskText"
    placeholder="请输入任务..."
    />
    <button>添加</button>
</form>
<!--有序列表，使用v-for来构建-->
<ol>
    <li v-for="(item,index) in todos">
        {{item}}
        <button @click="remove(index)">删除任务</button>0
    <hr/>
    </li>
</ol>
</div>
</body>
<script>
    const App = {
        data () {
            return {
                //待办任务列表数据
                todos:[],
                //当前输入的待办任务
                taskText:""
            }
        },
        methods: {
            //添加一条待办任务
            addTask() {
                //判断输入框是否为空
                if (this.taskText.length == 0) {
                    alert("请输入任务")
                    return
                }
                this.todos.push(this.taskText)
                this.taskText = ""
            },
            //删除一条待办任务
            remove(index) {
                this.todos.splice(index,1)
            }
        }
    }
    Vue.createApp(App).mount("#Application")
</script>
</html>
```

## 四、第三章Vue组件的属性和方法

### 4.1属性与方法基础

#### 4.1.1属性基础

属性数据存储在$data对象中

```html
 // 定义组件
        const App = {
            data() {
                return {
                    count:0,
                }
            }
 // 创建组件并获取到组件实例
        let instance = Vue.createApp(App).mount("#Application") 
        // 可以获取到组件中的data数据
        console.log(instance.count)
        // 可以获取到组件中的data数据
        console.log(instance.$data.count)
```

#### 4.1.2方法基础

组件的方法被定义到methods选项中（使用this关键字）

```html
 methods: {
                add() {
                    this.count ++
                },
                typeFunc() {
                    return this.count > 10 ? "大" : "小"
                }
            }
console.log(instance.count)
```

### 4.2计算属性和侦听器

#### 4.2.1计算属性

存储属性：存储值

计算属性：通过一些计算逻辑来实时维护当前属性的值

vue组件的computed选项

```vue
// 定义组件
        const App = {
            data() {
                return {
                    count:0,
                }
            },
            computed: {
                type() {
                        return this.count > 10 ? "大" : "小"
                    }
            },
            methods: {
                add() {
                    this.count ++
                },
            }
        }
        // 创建组件并获取到组件实例
        let instance = Vue.createApp(App).mount("#Application") 
        console.log(instance.type)
```

#### 4.2.2使用计算属性还是函数

函数实现：

```vue
<div id="Application">
    <div>
        {{typeFunc()}}
    </div>
    <button @click="add">
        Add
    </button>
</div>

// 定义组件
        const App = {
            data() {
                return {
                    count:0,
                }
            },
            computed: {
                type() {
                        return this.count > 10 ? "大" : "小"
                    }
            },
            methods: {
                add() {
                    this.count ++
                },
			 typeFunc() {
                    return this.count > 10 ? "大" : "小"
                }
            }
        }
```

函数方式与计算属性方式得到的结果一致

计算属性是基于其所依赖的存储属性的值的变化而重新计算的，计算完成后，其结果会被缓存，下次访问计算属性时，只要其所依赖的属性没有变化，其内的逻辑代码就不会重复执行。

函数：每次访问都会重新执行函数内的逻辑代码得到结果。

#### 4.2.3计算属性的赋值

存储属性主要用来数据的读取，计算属性通常只用来取值，不会用来存值，我们可以使用复制运算来修改属性值

。

get方法：计算属性默认提供的取值方法

set方法：存数据方法

```html
 computed: {
                type: {
                    get() {
                        return this.count > 10 ? "大" : "小"
                    },
                    set(newValue) {
                        if (newValue == "大") {
                            this.count = 11
                        } else {
                            this.count = 0
                        }
                    }
                }
            }

		let instance = Vue.createApp(App).mount("#Application") 
        console.log(instance.count)
        console.log(instance.type)
        instance.type = "大"
        console.log(instance.count)
```

get,set方法实现哪个就只能做对应的操作。

#### 4.2.4属性侦听器

属性侦听器可以方便地监听某个属性的变化

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="Application">
        <input v-model="searchText" />
    </div>
</body>
<script>
    const App = {
        data () {
            return {
                searchText:""
            }
        },
        watch: {
            searchText(oldValue,newValue) {
                if (newValue.length >10)
                alert("文本太长了")
            }
        }
    }
    Vue.createApp(App).mount("#Application")
</script>
</html>
```

### 4.3进行函数限流

网页上的某个按钮当用户单机后会从后端服务器进行数据请求，在数据请求回来之前，用户额外的单机是无效的且消耗性能的。

网页中某个按钮会导致页面的更新，我们需要限制用户对其频繁的进行操作。

#### 4.3.1手动实现一个限流函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>限流函数</title>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://unpag.com/lodash@4.17.20/lodash.min.js"></script>
</head>
<body>
    <div id="Application">
        <button @click="click">按钮</button>
    </div>
</body>
<script>
    // const App = {
    //     data () {
    //         return {
    //             throttle:false
    //         }
    //     },
        //methods: {
            // click() {
            //     if (!this.throttle) {
            //     console.log(Date())
            // } else {
            //     return
            // }
            // this.throttle = true
            // setTimeout(() => {
            //     this.throttle = false
            // },2000);

//         }
//     }
// }
// var throttle = false
//             function throttleTool(callback,timeout) {
//                 if (!throttle) {
//                     callback()
//                 } else {
//                     return
//                 }
//                 throttle = true
//                 setTimeout(() => {
//                 this.throttle = false
//             },timeout);
//             }
//     const App = {
//         methods: {
//             click() {
//             throttleTool(() => {
//                 console.log(Date())
//             },2000);
//         }
//     }
// }
Vue.createApp(App).mount("#Application")
</script>
</html>
```

2秒执行一次进行限流

#### 4.3.2使用Lodash库进行函数限流

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。其提供了大量的数组、对象、字符串等边界的操作方法，使开发者可以更加简单的使用JavaScript来编程。

Lodash库中提供了debounce函数来进行方法的调用限流，要使用它，首先需要引入Lodash库，

```
<script src="https://unpag.com/lodash@4.17.20/lodash.min.js"></script><script src="lodash.js"></script>
```

```html
const App = {
        methods: {
            click: _.debounce(function() {
                console.log(Date())
            },2000)
        }
    }

```

### 4.4表单数据的双向绑定

#### 4.4.1文本输入框

v-modle双向绑定

#### 4.4.2多行文本输入区域

textarea标签

textarea元素只能通过v-modle指令的方式来设置内容，不能直接在标签内插入文本

```html
正确示范：
<textarea v-modle:"textarea"></textarea>
<p style="white-space: pre-line;">多行文本内容</p>

错误示范：
<textarea v-modle:"testarea">{{text}}</textarea>
```

#### 4.4.3复选框与单选框

HTML中的input标签的类型设置为checkbox时，就是以复选框的形式渲染，使用v-modle指令进行数据绑定，可以直接将其绑定为布尔值

```html
<input type="checkbox" v-modle="checkbox"/>
<p>{{checkbox}}</p>
```

通过数组属性的绑定来获取每个复选框是否被选中

```html
<input type="checkbox" value="足球" v-model="checkList"/>足球
        <input type="checkbox" value="篮球" v-model="checkList"/>篮球
        <input type="checkbox" value="排球" v-model="checkList"/>排球
        <p>{{checkList}}</p>
```

```html
<input type="radio" value="男" v-model="sex"/>男
        <input type="radio" value="女" v-model="sex"/>女
        <p>{{sex}}</p>
```

#### 4.4.4选择列表

HTML中使用select标签来定义选择列表

单选的选择列表可以将其直接绑定到Vue组件的一个属性上

多选的选择列表可以将其绑定到数组属性上

```html
<select v-model="select">
            <option>男</option>
            <option>女</option>
        </select>
        <p>{{select}}</p>
```

```html
<select v-model="selectList" multiple>
            <option>足球</option>
            <option>篮球</option>
            <option>排球</option>
        </select>
        <p>{{selectList}}</p>
```

#### 4.4.5两个常用的修饰符

lazy修饰符：类似于属性的懒加载。当我们使用v-modle指令对文本输入框进行绑定时，每当输入框中的文本发生变化时，其都会同步修改对应的属性的值

场景：只有当用户完成输入。即输入框失去焦点后，段落中才会同步到输入框中最终的文本数据

```html
<input v-model.lazy="textField"/>
        <p>文本输入框内容:{{textField}}</p>
```

trime修饰符：将绑定的文本数据的首尾空格去掉

```html
<input v-model.trim="textField"/>
        <p>文本输入框内容:{{textField}}</p>
```

### 4.5样式绑定

可以通过HTML元素的class属性、Id属性或直接使用标签名来进行CSS样式绑定

常用class的方式进行样式绑定

#### 4.5.1为HTML标签绑定Class属性

v-bind指令：可以直接对class属性进行数据绑定，但如果将绑定的值设置为一个对象，设置的对象中可以指定class样式是否被选用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class绑定</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        .red {
            color:red
        }
        .blue {
            color:blue
        }
    </style>
</head>
<body>
    <div id="Application">
        <div :class="[blue:isBlue,red:idRed]">
            示例文案
        </div>
    </div>
    <script>
        const App = {
            data() {
               return {
                    isBlue:true,
                    isRed:false,
                }
            }
        }
        Vue.createApp(App).mount("#Application") 
    </script>
</body>
</html>
```

div元素的class值会根据isBlue和isRed属性的值而改变

设置为一个Vue组件中的数据对象

```html
 <div :class="style">
            示例文案
        </div>

 const App = {
            data() {
               return {
			style:{
                    isBlue:true,
                    isRed:false,
                }
            }
        }
}
```

更多的时候将样式对象作为计算属性返回

```html
 <div :class="{color:textColor,fontSize:textFont}">
            示例文案
        </div>

 const App = {
            data() {
               return {
                    redClass:"red",
                    fontClass:"font",
                }
            }
        }
```

#### 4.5.2绑定内联样式

直接通过HTML元素的style属性来设置样式，style属性直接通过JavaScript对象来设置样式，直接在其内部使用Vue属性

```html
<div :style="{color:textColor,fontSize:textFont}">
            示例文案
        </div>

const App = {
            data() {
               return {
                    textColor:'green',
                    textFont:'50px'
                }
            }
        }
```

外部定义的CSS属性在命名时，多采用“-”符号进行连接（font-size）

内联的CSS中属性的命名采用的是驼峰命名法（fontSize）

内联style支持直接绑定对象属性，直接绑定对象属性在实际开发中更加常用，使用计算属性来承载样式对象可以十分方便地进行动态样式更新

### 4.6实现一个完整的用户注册页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户注册</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        .container {
            margin:0 auto;
            margin-top: 70px;
            text-align: center;
            width: 300px;
        } 
        .subTitle {
            color:gray;
            font-size: 14px;
        }  
        .title {
            font-size: 45px;  
        }
        .input {
            width: 90%;
        }
        .inputContainer {
            text-align: left;
            margin-bottom: 20px;
        }
        .subContainer {
            text-align: left;
        }
        .field {
            font-size: 14px;
        }
        .input {
            border-radius: 6px;
            height: 25px;
            margin-top: 10px;
            border-color: silver;
            border-style: solid;
            background-color: cornsilk;
        }
        .tip {
            margin-top: 5px;
            font-size: 12px;
            color: gray;
        }
        .setting {
            font-size: 9px;
            color: black;
        }
        .label {
            font-size: 12px;
            margin-left: 5px;
            height: 20px;
            vertical-align:middle;
        }
        .checkbox {
            height: 20px;
            vertical-align:middle;
        }
        .btn {
            border-radius: 10px;
            height: 40px;
            width: 300px;
            margin-top: 30px;
            background-color: deepskyblue;
            border-color: blue;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container" id="Application">
        <div class="container">
            <div class="subTitle">加入我们，一起创造美好世界</div>
            <h1 class="title">创建你的账号</h1>
            <div v-for="(item, index) in fields" class="inputContainer">
                <div class="field">{{item.title}} <span v-if="item.required" style="color: red;">*</span></div>
                <input v-model="item.model" class="input" :type="item.type" />
                <div class="tip" v-if="index == 2">请确认密码程度需要大于6位</div>
            </div>
            <div class="subContainer">
                <div class="setting">偏好设置</div>
                <input v-model="receiveMsg" class="checkbox" type="checkbox" /><label class="label">接收更新邮件</label>
            </div>
            <button @click="createAccount" class="btn">创建账号</button>
        </div>
    </div>
    <script>
        const App = {
            data() {
                return {
                    fields:[
                        {
                            title:"用户名",
                            required:true,
                            type:"text",
                            model:""
                        },{
                            title:"邮箱地址",
                            required:false,
                            type:"text",
                            model:""
                        },{
                            title:"密码",
                            required:true,
                            type:"password",
                            model:""
                        }
                    ],
                    receiveMsg:false
                }
            },
            computed:{
                name: {
                    get() {
                        return this.fields[0].model
                    },
                    set(value){
                        this.fields[0].model = value
                    }
                },
                email: {
                    get() {
                        return this.fields[1].model
                    },
                    set(value){
                        this.fields[1].model = value
                    }
                },
                password: {
                    get() {
                        return this.fields[2].model
                    },
                    set(value){
                        this.fields[2].model = value
                    }
                }
            },
            methods:{
                emailCheck() {
                    var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
                    if (!verify.test(this.email)) {
                        return false
                    } else {
                        return true
                    }
                },
                createAccount() {
                    if (this.name.length == 0) {
                        alert("请输入用户名")
                        return
                    } else if (this.password.length <= 6) {
                        alert("密码设置需要大于6位字符")
                        return
                    } else if (this.email.length > 0 && !this.emailCheck(this.email)) {
                        alert("请输入正确的邮箱")
                        return
                    }
                    alert("注册成功")
                    console.log(`name:${this.name}\npassword:${this.password}\nemail:${this.email}\nreceiveMsg:${this.receiveMsg}`)
                }
            }
        }
        Vue.createApp(App).mount("#Application") 
    </script>
</body>
</html>
```

还是注意符号问题。

通过配置输入框filed对象来实现动态数据绑定

## 五、第四章处理用户交互

### 5.1事件的监听与处理

v-on指令（通常使用@符号代替）用来为DOM事件绑定监听

#### 5.1.1事件监听示例

使用@click直接绑定单击事件方法。也可以直接将要执行的逻辑代码放入@click赋值的地方

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件绑定</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="Application">
       <div>点击次数:{{count}}</div>
       <button @click="click">点击</button>       
    </div>
    <script>
        const App = {
            data() {
               return {
                   count:0
               }
            },
            methods: {
                click() { 
                    this.count += 1
                },
                }
            }
        }
        Vue.createApp(App).mount("#Application") 
    </script>
</body>
</html>
```

```html
<button @click="this.count += 1">点击</button>     
```

绑定函数处理事件

```html
click(event) { 
               console.log(event)
			   this.count += 1
                }
```

通过函数的参数控制自定义DOM元素绑定执行事件的函数

```html
click(step) { 
			   this.count += step
                },
```

进行事件绑定时，内联处理设置函数的参数

```html
<button @click="click(2)">点击</button>
```

```html
click(step,event) { 
               console.log(event)
			   this.count += step
                }
```

```html
<button @click="click(2,$event)">点击</button>
```

#### 5.1.2多事件处理

对于同一个用户交互事件，需要调用多个方法进行处理

绑定事件时都要采用内联调用的方式绑定

```html
 methods: {
                click(step) { 
                    this.count += step
                },
                log(event) {
                    console.log(event)
                }
            }
```

```html
<button @click="click(2), log($event)">点击</button>
```

#### 5.1.3事件修饰符

页面上触发了一个单击事件时，事件首先会从父组件开始依次传递到子组件（事件捕获），事件传递到最上层的子组件时，还会逆向的再进行一轮传递，从子组件依次向下传递（事件冒泡）

Vue中使用@click的方式绑定事件，默认监听的是DOM事件的冒泡阶段，子————->父

```html
<div @click="click1" style="border:solid red">
            外层
           <div @click="click2" style="border:solid red">
               中层
               <div @click="click3" style="border:solid red">
                   点击
               </div>
           </div>
       </div>


 methods: {
                click(step) { 
                    this.count += step
                },
                log(event) {
                    console.log(event)
                },
                click1() {
                    console.log("外层")
                },
                click2() {
                    console.log("中层")
                },
                click3() {
                    console.log("内层")
                }
            }
```

监听捕获阶段

capture修饰符：将监听事件的实际设置为捕获阶段

```html
<div @click.capture"="click1 style="border:solid red">
            外层
           <div @click.capture"="click2" style="border:solid red">
               中层
               <div @click.capture="click3" style="border:solid red">
                   点击
               </div>
           </div>
       </div>
```

捕获事件触发点顺序与冒泡事件相反

用户单击内层组件只触发内层组件绑定的方法，用户单击外层组件只触发外层组件绑定的方法

stop修饰符：阻止事件传递

```html
 <div @click.stop="click1" style="border:solid red">
            外层
           <div @click.stop="click2" style="border:solid red">
               中层
               <div @click.stop.once="click3" style="border:solid red">
                   点击
               </div>
           </div>
       </div>
```

常用修饰符

| 事件修饰符 | 作用                                         |
| ---------- | -------------------------------------------- |
| stop       | 阻止事件传递                                 |
| capture    | 监听捕获场景的事件                           |
| once       | 只触发一次事件                               |
| self       | 当事件对象的target属性是当前组件时才触发事件 |
| Prevent    | 禁止默认的事件                               |
| passive    | 不禁止默认的事件                             |

事件修饰符可以串联使用

```html
//1.阻止事件传递2.控制只触发一次的事件
<div @click.stop.once="click3" style="border:solid red">
    点击
</div>
```

### 5.2Vue中的事件类型

v-on指令：1.普通HTML元素的事件绑定（支持所有的原生的DOM事件）2.自定义的Vue组件进行事件绑定（支持自定义事件）

#### 5.2.1常用事件类型

| 事件      | 意义                                                         | 可用的元素                |
| --------- | ------------------------------------------------------------ | ------------------------- |
| click     | 单击事件，当组件被单击时触发                                 | 大部分HTML元素            |
| dbclick   | 双击事件，当组件被双击时触发                                 | 大部分HTML元素            |
| focus     | 获取焦点事件，例如输入框开启编辑模式时触发                   | input、select、textarea等 |
| blur      | 失去焦点事件，例如输入框结束编辑模式时触发                   | input、select、textarea等 |
| change    | 元素内容改变事件，输入框结束后输入后，如果内容有变化，会触发此事件 | input、select、textarea等 |
| select    | 元素内容选中事件，输入框中的文本被选中时会触发此事件         | input、select、textarea等 |
| mousedown | 鼠标按键被按下事件                                           | 大部分HTML元素            |
| mouseup   | 鼠标按键抬起事件                                             | 大部分HTML元素            |
| mousemove | 鼠标在组件内移动事件                                         | 大部分HTML元素            |
| mouseout  | 鼠标移出组件时触发                                           | 大部分HTML元素            |
| mouseover | 鼠标移入组件时触发                                           | 大部分HTML元素            |
| Keydown   | 键盘按键被按下                                               | HTML中所有表单元素        |
| Keyup     | 键盘按键被抬起                                               | HTML中所有表单元素        |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件类型</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="Application">
       <div @click.left="click">单击事件</div>
       <div @dblclick="dblclick">双击事件</div>
       <input @focus="focus" @blur="blur" @change="change" @select="select"></input>
       <div @mousedown.ctrl.exact="mousedown">鼠标按下</div>
       <div @mouseup="mouseup">鼠标抬起</div>
       <div @mousemove="mousemove">鼠标移动</div>
       <div @mouseout="mouseout" @mouseover="mouseover">鼠标移入移出</div>
       <input @keydown="keydown" @keyup"keyup"></input>
    </div>
    <script>
        const App = {
            methods: {
                click(){
                    console.log("单击事件");
                },
                dblclick(){
                    console.log("双击事件");
                },
                focus(){
                    console.log("获取焦点")
                },
                blur(){
                    console.log("失去焦点")
                },
                change(){
                    console.log("内容改变")
                },
                select(){
                    console.log("文本选中")
                },
                mousedown(){
                    console.log("鼠标按键按下")
                },
                mouseup(){
                    console.log("鼠标按键抬起")
                },
                mousemove(){
                    console.log("鼠标移动")
                },
                mouseout(){
                    console.log("鼠标移出")
                },
                mouseover(){
                    console.log("鼠标移入")
                },
                keydown(){
                    console.log("键盘按键按下")
                },
                keyup(){
                    console.log("键盘按键抬起")
                }
            }
        }
        Vue.createApp(App).mount("#Application") 
    </script>
</body>
</html>
```

#### 5.2.2按键修饰符

对某个按键进行监听，使用Event对象 

```html
keyup(event){
                    console.log("键盘按键抬起")
                    if (event.key == 'Enter') {
                        console.log("回车键被点击")
                    }
                }
```

按键修饰符实现对某个按键监听

```html
<input @keydown="keydown" @keyup.alt.enter="keyup"></input>
```

Event属性采用大写字母驼峰法（Enter、PageDown）

按键修饰符命名：中画线驼峰法（enter、page-down）

特殊的系统按键修饰符（配合其他键盘或鼠标进行使用）

* ctrl
* alt
* shift
* meta

意义：只有当用户按下这些健，对应的键盘或鼠标事件才触发(当用户按下其他键不影响)



```html
//用户按下Ctrl健的同时，再按下鼠标才会触发绑定的事件函数
<div @mousedown.ctrl="mousedown">鼠标按下</div>
//用户按下Alt同时，再按下回车键才会触发绑定的事件函数
<input @mousedown.alt.enter="keyup"></input>
```

精准进行按键修饰：exact修饰符

```html
//用户按下Shift+Ctrl+鼠标左健的组合方式进行操作时不会再触发事件函数
<div @mousedown.ctrl.exact="mousedown">鼠标按下</div>
```

meta:系统修饰健在不同的键盘上表示不同的按键，在Mac键盘上表示Command健，在Windows系统上对应Windows徽标键

3个常用的鼠标按键修饰符（通常左键选择，右键配置）

- left
- right
- middle

```html
//按了鼠标左键才会触发事件
<div @click.left="click">单击事件</div>
```

### 5.3随鼠标移动的小球

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>圆球游戏</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .container {
            margin: 0;
            padding: 0;
            position: absolute;
            width: 440px;
            height: 440px;
            background-color: blanchedalmond;
            display: inline;
        }
        .ball {
            position:absolute;
            width: 60px;
            height: 60px;
            left:100px;
            top:100px;
            background-color: red;
            border-radius: 30px;
            z-index:100
        }
    </style>
</head>
<body>
    <div id="Application">
        <div class="container" @mousemove.stop="move">
            <div class="ball" :style="{left: offsetX+'px', top:offsetY+'px'}">
            </div>
        </div>
    </div>
    <script>
        const App = {
            data() {
               return {
                    offsetX:0,
                    offsetY:0
               }
            },
            methods: {
               move(event) {
                   if (event.clientX + 30 > 440) {
                        this.offsetX = 440 - 60
                   } else if (event.clientX - 30 < 0) {
                        this.offsetX = 0
                   } else {
                        this.offsetX = event.clientX - 30
                   }
                   if (event.clientY + 30 > 440) {
                        this.offsetY = 440 - 60
                   } else if (event.clientY - 30 < 0) {
                        this.offsetY = 0
                   } else {
                        this.offsetY = event.clientY - 30
                   }
               }
            }
        }
        Vue.createApp(App).mount("#Application") 
    </script>
</body>
</html>
```

Event事件对象中有很多与坐标相关的属性

| X坐标   | Y坐标   | 意义                                       |
| ------- | ------- | ------------------------------------------ |
| clientX | clientY | 鼠标位置相对当前body容器可视区域的横纵坐标 |
| pageX   | pageY   | 鼠标位置相对整个页面的横纵坐标             |
| screenX | screenY | 鼠标位置相对设备屏幕的横纵坐标             |
| offsetX | offsetY | 鼠标位置相对父容器的横纵坐标               |
| x       | y       | 与screenX和screenY意义一样                 |

### 5.4弹球游戏

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>圆球游戏</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .container {
            position: relative;
            margin: 0 auto;
            width: 440px;
            height: 440px;
            background-color: blanchedalmond;
        }
        .ball {
            position:absolute;
            width: 30px;
            height: 30px;
            left:0px;
            top:0px;
            background-color:orange;
            border-radius: 30px;
        }
        .board {
            position:absolute;
            left: 0;
            bottom: 0;
            height: 10px;
            width: 80px;
            border-radius: 5px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="Application">
        <!-- 游戏区域 -->
        <div class="container">
            <!-- 底部挡板 -->
            <div class="board" :style="{left: boardX + 'px'}"></div>
            <!-- 弹球 -->
            <div class="ball" :style="{left: ballX+'px', top: ballY+'px'}"></div>
            <!-- 游戏结束提示 -->
            <h1 v-if="fail" style="text-align: center;">游戏失败</h1>
        </div>
    </div>
    <script>
        const App = {
            data() {
               return {
                    // 控制挡板位置
                    boardX:0,
                    // 控制弹球位置
                    ballX:0,
                    ballY:0,
                    // 控制弹球移动速度
                    rateX:0.1,
                    rateY:0.1,
                    // 控制结束游戏提示的展示
                    fail:false
               }
            },
            // 组件生命周期函数，组件加载时会调用
            mounted() {
                // 添加键盘事件
                this.enterKeyup();
                // 随机弹球的运动速度和方向
                this.rateX = (Math.random() + 0.1)
                this.rateY = (Math.random() + 0.1)
                // 开启计数器，控制弹球移动
                this.timer = setInterval(()=>{
                    // 到达右侧边缘进行反弹
                    if (this.ballX + this.rateX  >= 440 - 30) {
                        this.rateX *= -1
                    }
                    // 到达左侧边缘进行反弹
                    if (this.ballX + this.rateX <= 0) {
                        this.rateX *= -1
                    }
                    // 到达上侧边缘进行反弹
                    if (this.ballY + this.rateY <= 0) {
                        this.rateY *= -1
                    }
                    this.ballX += this.rateX
                    this.ballY += this.rateY
                    // 失败判定
                    if (this.ballY >= 440 - 30 - 10) {
                        // 挡板接住了弹球，进行反弹
                        if (this.boardX <= this.ballX + 30 && this.boardX + 80 >= this.ballX) {
                            this.rateY *= -1
                        } else {
                        // 没有接住弹球，游戏结束
                            clearInterval(this.timer)
                            this.fail = true
                        }
                    }
                },2)
            },
            methods: {
                // 控制挡板移动
                keydown(event){
                    if (event.key == "ArrowLeft") {
                        if (this.boardX  > 10) {
                            this.boardX -= 20
                        } 
                    } else if (event.key == "ArrowRight") {
                        if (this.boardX  < 440 - 80) {
                            this.boardX += 20
                        } 
                    }
                },
                enterKeyup() {
                    document.addEventListener("keydown", this.keydown);
                }
            }
        }
        Vue.createApp(App).mount("#Application") 
    </script>
</body>
</html>
```

## 六、第五章组件基础

### 6.1关于Vue应用与组件

面向对象开发，一个网页甚至一个网站在Vue中被抽象为一个应用程序。一个应用程序中可以定义和使用很多个组件，但是需要配置一个根组件，当应用程序被挂载渲染到页面时，此根组件会作为起点元素进行渲染

#### 6.1.1Vue应用的数据配置选项

createApp：创建一个Vue应用

data：全局数据

props：接收父组件传递的数据

computed：组件的计算属性

methods：组件中使用到的方法（不要使用箭头函数定义，会影响this关键字的指向）

watch：对组建属性的变化添加监听函数

```html
const App = Vue.createApp({})

 const appData = {
                count:0
        }
        const App = Vue.createApp({
            data(){
                return appData
            }
})

computed: {
                countString: {
                    get(){
                        return this.count + "次"
                    }
                }
            }

 methods:{
                click(){
                    this.count += 1
                }
            }

watch:{
                    count(value, oldValue) {
                        console.log(value, oldValue)
                    }
            }

 methods:{
                click(){
                    this.data.count += 1
                },
				countChange(value,oldValue)
				    console.log(value, oldValue)
				}
            },
            watch:{
             count:"countChange"
            }
```

#### 6.1.2定义组件

mount方法：绑定到指定的HTML元素上

应用实例可以使用computed方法定义组件

```html
 <script>
        const App = Vue.createApp({})
        const alertComponent = {
            data(){
                return {
                    msg:"警示框提示",
                    count:0
                }
            },

            methods:{
               click(){
                    alert(this.msg + this.count++)  
                }
            },
            template:`<div><button @click="click">按钮</button></div>`
        }
        App.component("my-alert", alertComponent)
        App.mount("#Application") 
    </script>
```

自定义的组件

```html
<div id="Application">
        <my-alert></my-alert>
        <my-alert></my-alert>
    </div>
```

my-alert组件只能在Application挂载到标签内使用

```html
//失效
<div id="Application">
    </div>
        <my-alert></my-alert>
        <my-alert></my-alert>
```

### 6.2组件中的数据与事件传递

#### 6.2.1为组件添加外部属性

通过属性控制内部行为

props：定义的属性是提供给外部进行设置使用（外部属性）,定义自定义组件内的外部属性

template模板中可以用访问data属性一样来访问定义的外部属性

```html
const alertComponent = {
            data(){
                return {
                    msg:"警示框提示",
                    count:0
                }
            },

            methods:{
               click(){
                    alert(this.msg + this.count++)  
                }
            },
            props:["title"],
            template:`<div><button @click="click">{{title}}</button></div>`
        }
```

```html
<my-alert title="按钮1"></my-alert>
<my-alert title="按钮2"></my-alert>
```

#### 6.2.2处理组件事件

$emit方法传递事件

```html
 <div id="Application">
        <my-alert @myclick="appfunc" title="按钮1"></my-input>
     	<my-alert title="按钮2"></my-alert>
    </div>
    <script>
        const App = Vue.createApp({
            methods:{
                appfunc() {
                    console.log('点击了解自定义组件')
                }
            }
        })
        const alertComponent = {
            props:["title"],
            template:`<div><button @click="$emit('myclick')">{{title}}</button></div>`
        }
        App.component("my-alert", alertComponent)
        App.mount("#Application") 
    </script>
```

将状态作为参数传递

```html
 <div id="Application">
        <my-alert @myclick="appfunc" title="按钮1"></my-input>
     	<my-alert @myclick="appfunc" title="按钮2"></my-input>
    </div>
    <script>
        const App = Vue.createApp({
            methods:{
                appfunc(param) {
                    console.log('点击了解自定义组件-' + param)
                }
            }
        })
        const alertComponent = {
            props:["title"],
            template:`<div><button @click="$emit('myclick',title)">{{title}}</button></div>`
        }
        App.component("my-alert", alertComponent)
        App.mount("#Application") 
    </script>
```

在传递事件前，子组件还有一些内部逻辑需要处理，在子组件中包装一个方法，在方法内调用$emit进行事件传递

```html
 <div id="Application">
        <my-alert @myclick="appfunc" title="按钮1"></my-input>
     	<my-alert @myclick="appfunc" title="按钮2"></my-input>
    </div>
    <script>
        const App = Vue.createApp({
            methods:{
                appfunc(param) {
                    console.log('点击了解自定义组件-' + param)
                }
            }
        })
        const alertComponent = {
            props:["title"],
             methods:{
                click() {
                    console.log("组件内部的逻辑")
                    this.$emit('myclick',this.title)
                }
            },
            template:`<div><button @click="click">{{title}}</button></div>`
        }
        App.component("my-alert", alertComponent)
        App.mount("#Application") 
    </script>
```

#### 6.2.3在组件上使用v-modle指令

v-bind指令：控制输入框的内容

v-on:input指令：监听输入框输入事件

当输入框输入内容变化时，手动通过action函数更新inputText属性（实现双向绑定）

```html
 <div id="Application">
        <my-input v-model="inputText"></my-input>
        <div>{{inputText}}</div>
        <button @click="this.inputText = ''">清空</button>
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    inputText:""
                }
            },
        })
        const inputComponent = {
            props:["modelValue"],
            methods:{
                action(event){
                    this.$emit('update:modelValue', event.target.value)  
                }
            },
            template:`<div><span>输入框：</span><input :value="modelValue" @input="action"/></div>`
        }
        App.component("my-input", inputComponent)
        App.mount("#Application") 
    </script>
```

所有支持v-modle指令的组件中默认都会提供一个名为modleValue的属性，当组件内部的内容变化后向外传递的事件为update:modleValue，并且在事件传递时会将内容组件作为参数进行传递

### 6.3自定义组件的插槽

插槽：HTML起始标签与结束标签中间的部分，比如div标签，其内部的插槽位置既可以放置要显示的文案，又可以嵌套放置其他标签

```html
<div>
    文案部分
</div>
<div>
    <button>
        按钮
    </button>
</div>
```

插槽作用：将组件内部的元素抽离到外部进行实现，开发体现：容器类型的自定义组件

#### 6.3.1组件插槽的基本用法

自定义组件支持插槽：使用slot标签指定插槽位置

```html
<body>
    <div id="Application">
        <my-container></my-container>
    </div>
    <script>
        const App = Vue.createApp({
        })
        const containerComponent = {
            template:`<div style="border-style:solid;border-color:red;border-width:10px">
                    <slot></slot>
                </div>`
        }
        App.component("my-container", containerComponent)
        App.mount("#Application") 
    </script>
</body>
```

可以为插槽添加默认的内容，当组件使用时如果没有设置插槽内容，会自动渲染默认的内容,而组件如果使用时设置了插槽的内容，默认的内容就不会被渲染了

```html
 <div id="Application">
        <my-container></my-container>
    </div>
    <script>
        const App = Vue.createApp({
        })
        const containerComponent = {
            template:`<div style="border-style:solid;border-color:red;border-width:10px">
                    <slot>插槽的默认内容</slot>
                </div>`
        }
        App.component("my-container", containerComponent)
        App.mount("#Application") 
    </script>
```

#### 6.3.2多具名插槽的用法

具名插槽：为插槽设置一个具体的名称，在使用组件时可以通过插槽的名称来设置插槽的内容。

name属性设置插槽具体的名称

一个组件需要支持多个插槽时需要使用具名插槽

使用此组件时要使用template标签包装插槽内容（template标签通过v-slot指定与其对应的插槽位置）

```html
<div id="Application">
        <my-container2>
            <template v-slot:header>
                <h1>这里是头部元素</h1>
            </template>
        
            <template v-slot:main>
                <p>内容部分</p>
                <p>内容部分</p>
            </template>
        
            <template v-slot:footer>
                <p>这里是尾部元素</p>
            </template>
        </my-container2>
    </div>
    <script>
        const App = Vue.createApp({
        })
        const container2Component = {
            template:`<div>
                    <slot name="header"></slot>
                    <hr/>
                    <slot name="main"></slot>
                    <hr/>
                    <slot name="footer"></slot>
                </div>`
        }
        App.component("my-container2", container2Component)
        const containerComponent = {
            template:`<div style="border-style:solid;border-color:red; border-width:10px">
                    <slot>插槽的默认内容</slot>
                </div>`
        }
        App.component("my-container", containerComponent)
        App.mount("#Application") 
    </script>
```

插槽缩写：#(v-slot:)

```html
<template #header>
                <h1>这里是头部元素</h1>
            </template>
        
            <template #main>
                <p>内容部分</p>
                <p>内容部分</p>
            </template>
        
            <template #footer>
                <p>这里是尾部元素</p>
            </template>
```

### 6.4动态组件的简单应用

component标签：通过is属性指定要渲染的组件名称（page属性变化，component所渲染的组件也动态变化）

component：全局组件

全局定义的模板命名不能重复

```html
<div id="Application">
        <input type="radio" value="page1" v-model="page"/>页面1
        <input type="radio" value="page2" v-model="page"/>页面2
        <component :is="page"></component>
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    page:"page1"
                }
            }
        })
        const page1 = {
            template:`<div style="color:red">
                    页面组件1
                </div>`
        }
        const page2 = {
            template:`<div style="color:blue">
                    页面组件2
                </div>`
        }
        App.component("page1", page1)
        App.component("page2", page2)
        App.mount("#Application") 
    </script>
```

### 6.5开发一款小巧的开关按钮组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue开关组件</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="Application">
        <my-switch @switch-change="change1" switch-style="mini" background-color="green" border-color="green" color="blue"></my-switch>
        <div>开关状态:{{state1}}</div>
        <br/>
        <my-switch @switch-change="change2" switch-style="normal" background-color="blue" border-color="blue" color="red"></my-switch>
        <div>开关状态:{{state2}}</div>
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    state1:"关",
                    state2:"关"
                }
            },
            methods:{
                change1(isOpen){
                    this.state1 = isOpen ? "开" : "关"
                },
                change2(isOpen){
                    this.state2 = isOpen ? "开" : "关"
                },
            }
        })

        const switchComponent = {
            // 定义的外部属性
            props:["switchStyle", "borderColor", "backgroundColor", "color"],
            // 内部属性，控制开关状态
            data() {
                return {
                    isOpen:false,
                    left:'0px'
                }
            },
            // 通过计算属性来设置CSS样式
            computed: {
                cssStyleBG:{
                    get() {
                        if (this.switchStyle == "mini") {
                            return `position: relative; border-color: ${this.borderColor}; border-width: 2px; border-style: solid;width:55px; height: 30px;border-radius: 30px; background-color: ${this.isOpen ? this.backgroundColor:'white'};`
                        } else {
                            return `position: relative; border-color: ${this.borderColor}; border-width: 2px; border-style: solid;width:55px; height: 30px;border-radius: 10px; background-color: ${this.isOpen ? this.backgroundColor:'white'};`
                        }
                    }
                },
                cssStyleBtn:{
                    get() {
                        if (this.switchStyle == "mini") {
                            return `position: absolute; width: 30px; height: 30px; left:${this.left}; border-radius: 50%; background-color: ${this.color};`
                        } else {
                            return `position: absolute; width: 30px; height: 30px; left:${this.left}; border-radius: 8px; background-color: ${this.color};`
                        }
                    }
                }
            },
            // 组件状态切换方法
            methods: {
                click() {
                    this.isOpen = !this.isOpen
                    this.left = this.isOpen ? '25px' : '0px'
                    this.$emit('switchChange', this.isOpen)
                }
            },
            template:`
                <div :style="cssStyleBG" @click="click">
                    <div :style="cssStyleBtn"></div>
                </div>
            `
        }
        App.component("my-switch", switchComponent)
        App.mount("#Application") 
    </script>
</body>
</html>
```

## 七、第六章组件进阶

### 7.1组件的生命周期与高级配置

生命周期：组件从创建到销毁的过程

生命周期钩子：组件生命周期的节点会被定义为一系列方法

#### 7.1.1生命周期方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue组件生命周期</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="Application"> 
    </div>
    <script>
        const root = {
            beforeCreate () {
                console.log("组件即将创建前")
            },
            created () {
                console.log("组件创建完成")
            },
            beforeMount () {
                console.log("组件被即将挂载前")
            },
            mounted () {
                console.log("组件挂载完成")
            },
            beforeUpdate () {
                console.log("组件即将更新前")
            },
            updated () {
                console.log("组件更新完成")
            },
            activated () {
                console.log("被缓存的组件激活时调用")
            },
            deactivated () {
                console.log("被缓存的组件停用时调用")
            },
            beforeUnmount() {
                console.log("组件即将被卸载前调用")
            },
            unmounted() {
                console.log("组件被卸载后调用")
            },
            errorCaptured(error, instance, info) {
                console.log("捕获到来自子组件的异常时调用")
            },
            renderTracked(event) {
                console.log("虚拟DOM重新渲染时调用")
            },
            renderTriggered(event) {
                console.log("虚拟DOM被触发渲染时调用")
            }
        }
        const App = Vue.createApp(root)
        App.mount("#Application") 
    </script>
</body>
</html>
```

根组件页面渲染过程只执行了组件的创建和挂载过程，并没有执行卸载过程

组件如果是v-if控制其渲染，则当其渲染状态切换时，组件会进行交替的挂载和卸载动作

```html
 <div id="Application">
        <sub-com v-if="show"></sub-com>
        <button @click="changeShow">测试</button>
    </div>
    <script>
        const sub = {
            beforeCreate () {
                console.log("组件即将创建前")
            },
            created () {
                console.log("组件创建完成")
            },
            beforeMount () {
                console.log("组件被即将挂载前")
            },
            mounted () {
                console.log("组件挂载完成")
            },
            beforeUnmount() {
                console.log("组件即将被卸载前调用")
            },
            unmounted() {
                console.log("组件被卸载后调用")
            }
        }
        const App = Vue.createApp({
            data(){
                return {
                    show:false
                }
            },
            methods: {
                changeShow(){
                    this.show = !this.show
                }
            }
        })
        App.component("sub-com", sub)
        App.mount("#Application") 
    </script>
```

```html
 <div id="Application">
        <sub-com v-if="show">
            {{content}}
        </sub-com>
        <button @click="changeShow">测试</button>
    </div>
    <script>
        const sub = {
            beforeUpdate () {
                console.log("组件即将更新前")
            },
            updated () {
                console.log("组件更新完成")
            },
            renderTracked(event) {
                console.log("虚拟DOM重新渲染时调用")
            },
            renderTriggered(event) {
                console.log("虚拟DOM被触发渲染时调用")
            },
            template:`
                <div>
                    <slot></slot>
                </div>
            `
        }
        const App = Vue.createApp({
            data(){
                return {
                    content:0
                }
            },
            methods: {
                changeShow(){
                    this.content += 1
                }
            }
        })
        App.component("sub-com", sub)
        App.mount("#Application") 
    </script>
```

#### 7.1.2应用的全局配置选项

Vue.createApp创建一个Vue应用实例，内部封装了一个config对象，我们可以通过它的一些全局配置项来进行配置。

常用的配置项：异常与警告捕获配置和全局属性配置

使用自定义的函数对抛出的异常和警告进行处理

```html
const App = Vue.createApp({})
        App.config.errorHandler = (err, vm, info) => {
            // 捕获运行中产生的异常
            // err参数是错误对象 info为具体的错误信息
        }
        App.config.warnHandler = (msg, vm, trace) => {
            // 捕获运行中产生的警告
            // msg是警告信息 trace是组件的关系回溯
        }
```

全局数据：globalProperties全局属性对象进行配置

```html
const App = Vue.createApp({})
        // 配置全局数据
        App.config.globalProperties = {
            version:"1.0.0"
        }
        const sub = {
            mounted () {
                // 在任意组件的任意地方都可以通过this直接访问全局数据
                console.log(this.version)
            }
        }
```

#### 7.1.3组件的注册方式

- 全局注册：component方法注册的组件都是

```html
 <div id="Application">
        <comp1></comp1>
    </div>
    <script>
        const App = Vue.createApp({})
        const comp1 = {
            template:`
                <div>
                    组件1
                    <comp2></comp2>
                </div>
            `
        }
         const comp2 = {
            template:`
                <div>
                    组件2
                </div>
            `
        }
        
        App.component("comp1", comp1)
        App.component("comp2", comp2)
        App.mount("#Application") 
    </script>
```



- 局部注册：一个复杂的组件内部可能由许多子组件组成，这些子组件本身不需要暴露到父组件外面

```html
 <div id="Application">
        <comp1></comp1>
    </div>
    <script>
        const App = Vue.createApp({})
        const comp2 = {
            template:`
                <div>
                    组件2
                </div>
            `
        }
        const comp1 = {
            components:{
                'comp2':comp2
            },
            template:`
                <div>
                    组件1
                    <comp2></comp2>
                </div>
            `
        }
        
        App.component("comp1", comp1)
        App.mount("#Application") 
    </script>
```

comp2组件只能在comp1组件内部使用

### 7.2组件Props属性的高级用法

Props：组件的外部属性

#### 7.2.1对Props属性进行验证

```html
<div id="Application">
        <comp1 :count="5"></comp1>
    </div>
    <script>
        const App = Vue.createApp({})
        const comp1 = {
            props:["count"],   
            data(){
                return {
                    thisCount:0
                }
            },
            methods:{
                click(){
                    this.thisCount += 1
                }
            },
            computed: {
                innerCount:{
                    get(){
                        return this.count + this.thisCount
                    }
                }
            },
            template:`
                <button @click="click">点击</button>
                <div>计数:{{innerCount}}</div>
            `
        }
        App.component("comp1", comp1)
        App.mount("#Application") 
    </script>
```

外部传递数值类型到组件内部时必须使用v-bind指令，直接使用HTML属性设置的方式会将传递的数据作为字符串传递

调用组件也可能会传递非数值类型的数据

```html
//HTML
<comp1 count="5"></comp1>
//非数值类型：结果异常
<comp1 :count="{}"></comp1>
```

Props进行约束显示地指定类型

```html
props:{
	count:{
	//定义此属性的类型为数值类型
	type:Number,
	//设置此属性是否必传
	required:false,
	//设置默认值
	default:10
	}
}
```

开发建议：所有的props都采用对象的方式定义，显示地设置其类型、默认值等（1.安全2.为开发者提供了组件的参数使用文档）

```html
//只指定属性的类型
props:{
	//数值类型
	count:Number,
	//字符串类型
	count2:String,
	//布尔值类型
	count3:Boolean,
	//数组类型
	count4:Array,
	//对象类型
	count5:Object,
	//函数类型
	coun6t:Function
}

//一个属性有多种类型
props:{
	//指定属性类型为字符串或数值
	param:[String,Number]
}

//默认值的获取方式复杂，可以将其定义为函数类型，函数的执行结果会被当做当前属性的默认值
props:{
	count:{
		default:function() {
			return 10
}
}
}

//props自定义验证
 props:{   
                count: {
                    validator: function(value) {
                        if (typeof(value) != 'number' || value <= 10) {
                            return false
                        }
                        return true
                    }
                }
            }
```

#### 7.2.2Props的只读属性

Props只读，在组件内部无法修改Props属性的值

```html
props:{   
                count: {
                    validator: function(value) {
                        if (typeof(value) != 'number' || value <= 10) {
                            return false
                        }
                        return true
                    }
                }
            },
            methods:{
                click(){
                    this.thisCount += 1
                }
            },
```

Props的只读属性是Vue单向数据流特性的一种体现，所有的外部Props只允许父组件的数据流动到子组件中，而子组件的数据不允许流向父组件

Props如果只是设置组件某些属性的初始值，可以使用计算属性桥接，也可以将外部属性的初始值映射到组件的内部属性上

```html
props:{   
                count: {
                    validator: function(value) {
                        if (typeof(value) != 'number' || value <= 10) {
                            return false
                        }
                        return true
                    }
                }
            },
            data(){
                return {
                    thisCount:this.count
                }
            }
```

#### 7.2.3组件数据注入

数据注入：组件间数据传递方式

父组件需要传递数据到子组件

```html
 <div id="Application">
        <my-list :count="5">
        </my-list>
    </div>
    <script>
        const App = Vue.createApp({})
        const listCom = {
            props:{   
                count: Number
            },
            template:`
                <div style="border:red solid 10px;">
                    <my-item v-for="i in this.count" :index="i"></my-item>
                </div>
            `
        }
        const itemCom = {
            props: {
                listCount:Number,
                index:Number
            },
            template:`
                <div style="border:blue solid 10px;">
                <my-label :list-count="this.listCount" :index="this.index"></my-label>
        </div>
            `
        }
        const labelCom = {
            props: {
                listCount:Number,
                index:Number
            },
            template:`
                <div>{{index}}/{{this.listCount}}</div>
            `
        }
        App.component("my-list", listCom)
        App.component("my-item", itemCom)
        App.component("my-label", labelCom)
        App.mount("#Application") 
    </script>
```

焦点：my-label组件中需要使用my-list组件中的count属性，要通过my-item组件中的数据才能顺利进行传递

如果组件的嵌套层数变多，数据传递就会变复杂

数据注入解决跨层级数据传递

父组件可以向所有子组件传递数据，不论在层结构上此子组件的层级有多深

即my-label组件跳过my-list组件直接使用my-list组件中提供的数据

数据注入配置项：

- provide：提供数据的父组件（提供数据）
- inject：子组件（获取数据）

```html
 const listCom = {
            props:{   
                count: Number
            },
            provide(){
                return {
                    listCount:this.count
                }
            },
            template:`
                <div style="border:red solid 10px;">
                    <my-item v-for="i in this.count" :index="i"></my-item>
                </div>
            `
        }
        const itemCom = {
            props: {
                index:Number
            },
            template:`
                <div style="border:blue solid 10px;"><my-label :index="this.index"></my-label></div>
            `
        }
        const labelCom = {
            props: {
                index:Number
            },
            inject:['listCount'],
            template:`
                <div>{{index}}/{{this.listCount}}</div>
            `
        }
```

说明：数据注入：父组件不需要了解哪些子组件要使用这些数据，子组件也无须关心使用的数据从哪里来，

所以说代码的可控性降低了，开发中切不可滥用

### 7.3组件Mixin技术

复用性

#### 7.3.1使用Mixin来定义组件

```html
    <div id="Application">
        <my-com></my-com>
        <my-com1 title="组件1"></my-com1>
        <my-com2 title="组件2"></my-com2>
        <my-com3 title="组件3"></my-com3>
    </div>
    <script>
        const App = Vue.createApp({})
        const com1 = {
            props:['title'],
            template:`
                <div style="border:red solid 2px;">
                    {{title}}
                </div>
            `
        }
        const com2 = {
            template:`
                <div style="border:blue solid 2px;">
                    {{title}}
                </div>
            `
        }
        const com3 = {
            template:`
                <div style="border:green solid 2px;">
                    {{title}}
                </div>
            `
        }
        App.component("my-com1", com1)
        App.component("my-com2", com2)
        App.component("my-com3", com3)
        App.mount("#Application") 
    </script>
```

title：外部属性

抽离作为独立的“功能模块”

```html
const App = Vue.createApp({})
const myMixin = {
	props:['title']
}
        const com1 = {
			mixins:[myMixin],
            template:`
                <div style="border:red solid 2px;">
                    {{title}}
                </div>
            `
        }
        const com2 = {
			mixins:[myMixin],
            template:`
                <div style="border:blue solid 2px;">
                    {{title}}
                </div>
            `
        }
        const com3 = {
			mixins:[myMixin],
            template:`
                <div style="border:green solid 2px;">
                    {{title}}
                </div>
            `
        }
```

“继承”：定义一个混入对象，混入对象可以包含任意的组件定义选项，此对象被混入组件时，组件会将混入对象中提供的选项引入当前组件内部

#### 7.3.2Mixin选项的合并

混入对象与组件中定义了相同的选项，Vue可以非常智能的对这些选项进行合并。不冲突的配置将完整合并，冲突的配置会以组件中自己的配置为准

```html
const myMixin ={
            data() {
                return {
                    a:"a",
                    b:"b",
                    c:"c"
                }
            }
}
const com = {
mixins:[myMixin],
            data(){
                return {
                    d:"D"
                }
            },
// 组件被创建后会调用，用来测试混入的数据情况
            created() {
                // a,b,c,d都存在
                console.log(this.$data)
            }
}
```

混入对象定义了组件的属性数据，包含a、b和c共3个属性，组件本身定义了d属性，最终组件在使用时，其内部的属性会包含a、b、c和d

属性的定义有冲突会以组件内部定义的为准

```html
const myMixin ={
props:['title'],
            data() {
                return {
                    a:"a",
                    b:"b",
                    c:"c"
                }
            }
}
const com = {
mixins:[myMixin],
            data(){
                return {
                    c:"C"
                }
            },
// 组件被创建后会调用，用来测试混入的数据情况
            created() {
                // 属性c的值为“C”
                console.log(this.$data)
            }
}
```

生命周期的配置项的混入与属性类的配置项混入不同：

不重名的生命周期函数会被完整混入组件

重名的生命周期函数被混入组件时，在函数触发时，会先触发Mixin对象中的实现，再触发组件内部的实现（子类对父类方法的重写）

```html
const myMixin ={
            mounted () {
                console.log("Mixin对象mounted")
            }
        }
        const com = {
            mounted () {
                console.log("组件本身mounted")
            }
        }
```

#### 7.3.3进行全局Mixin

```html
const App = Vue.createApp({})
        App.mixin({
            mounted () {
                console.log("Mixin对象mounted")
            }
        })      
```

### 7.4使用自定义组件

#### 7.4.1认识自定义组件

directive方法注册全局的自定义指令

getfocus：指令名称，使用时加v-前缀

自定义组件支持：mounted生命周期方法，beforeMount、beforeUpdate、updated、beforeUnmount和unmounted生命周期方法

```html
<div id="Application">
        <input v-getfocus />
    </div>
    <script>
        const App = Vue.createApp({})
        App.directive('getfocus', {
            // 当被绑定此指令的元素被挂在时调用
            mounted (element) {
                console.log("组件获得了焦点")
                element.focus()
            }
        })
        App.mount("#Application") 
            </script>
```

局部注册自定义指令

```html
const sub ={
	directives:{
		//组件内部的自定义组件
		getfocus:{
			mounted(el) {
				el.focus()
}
}
},
mounted() {
	//组件挂载
	console.log(this.version)
}
}
App.component("sub-com",sub)
```

#### 7.4.2自定义指令的参数

设置的数据通过param对象传递到指令中实现的生命周期方法

设置的值1被绑定到param对象的value属性上，指令设置的custom参数被绑定到param对象的arg属性上

```html
 <div id="Application">
        <input v-getfocus:custom="1" />
    </div>
    <script>
        const App = Vue.createApp({})
        App.directive('getfocus', {
            // 当被绑定此指令的元素被挂在时调用
            mounted (element, param) {
                if (param.value == "1") {
                    element.focus()
                }
                // 将打印 参数:custom
                console.log("参数:" + param.arg) 
            }
        })
        App.mount("#Application") 
    </script>
```

指令设置的值，允许直接设置为JavaScriptduix

```html
 <input v-getfocus:custom="{a:1, b:2}" />
```

### 7.5使用组件的Teleport功能开发全局弹窗

Vue3的新功能，Teleport功能，开发者可以将相关的行为的逻辑和UI封装到同一个组件中，提高代码的聚合性

```html
 <div id="Application">
            <my-alert></my-alert>
    </div>
    <script>
        const App = Vue.createApp({})
        App.component("my-alert",{
            template:`
                <div>
                    <button @click="show = true">弹出弹窗</button>    
                </div>
                <div v-if="show" style="text-align: center;padding:20px; position:absolute;top: 30%; left:30%; width:40%; border:black solid 2px; background-color:white">
                    <h3>弹窗</h3> 
                    <button @click="show = false">隐藏弹窗</button>      
                </div>
            `,
            data(){
                return {
                    show:false
                }
            }
        })
        App.mount("#Application") 
    </script>
```

我们在其他的组件内部使用此组件时，可能会有问题

将当前组件放入一个外部的元素内

```html
<div id="Application">
        <div style="position: absolute; width: 50px;">
            <my-alert></my-alert>
        </div>
    </div>
```

为了避免这种由于组件树结构的改变而影响组件内元素的布局的问题：

- 将触发事件的按钮与全局的弹窗分成两个组件编写，保证全局弹窗组件挂载在body标签下，但这样会使相关的组件逻辑被分散在不同的地方，不易于后期维护
- 使用Teleport

组件模板中的某些元素只能挂载在指定的标签下，可以使用Teleport指定

理解为：将次部分元素“传送”到指令的标签下

指定全局弹窗只挂载在body元素下

```html
 App.component("my-alert",{
            template:`
                <div>
                    <button @click="show = true">弹出弹窗</button>    
                </div>
                <teleport to="body">
                <div v-if="show" style="text-align: center;padding:20px; position:absolute;top: 30%; left:30%; width:40%; border:black solid 2px; background-color:white">
                    <h3>弹窗</h3> 
                    <button @click="show = false">隐藏弹窗</button>      
                </div>
                </teleport>
            `,
            data(){
                return {
                    show:false
                }
            }
        })
```

## 八、第七章Vue响应式编程

响应式特性：通过数据绑定的方式将变量的值渲染到页面中，当变量发生变化时，页面对应的元素也会更新。

### 8.1响应式编程的原理及在Vue中的应用

#### 8.1.1手动追踪变量的变化

两次sum:3,sum未响应式改变

```html
 <script>
       let a =1;
       let b =2;
       console.log(sum);
       a = 3;
       b = 4;
       console.log(sum);
    </script>
```

响应式要监听sum变量值的子变量的变化，要监听变量a和变量b的变化

JavaScript使用Proxy对原对象进行包装，实现对对象属性设置和获取的监听

Proxy对象初始化时需要传入一个要包装的对象和对应的处理器，处理器可以定义get和set方法，创建新代理对象的用法和原对象完全一致，只是在对其内部属性进行获取或设置时，都会被处理器中定义的get或set方法拦截

```html
    <script>
        // 数据对象
        let a = {
            value:1
        };
        let b = {
            value:2
        };
        // 数据变量的处理器，当数据发生变化时，调用触发器刷新
        handleA = {
            get(target,prop) {
                console.log(`获取A：${prop}的值`)
             	return target[prop]
                },
            set(target, key, value) {
               console.log(`设置A：${key}的值${value}`)
            }
        }
        handleB = {
            get(target,prop) {
                console.log(`获取B：${prop}的值`)
             	return target[prop]
                },
            set(target, key, value) {
               console.log(`设置B：${key}的值${value}`)
            }
        }
        // 进行对象的代理包装
        let pa = new Proxy(a, handleA)
        let pb = new Proxy(b, handleB)
        let sum = pa.value + pb.balue;
        pa.value = 3;
        pb.value = 4;
    </script>
```





```html
 <script>
        // 数据对象
        let a = {
            value:1
        };
        let b = {
            value:2
        };
        // 定义触发器，用来刷新数据
        let trigger = null;
        // 数据变量的处理器，当数据发生变化时，调用触发器刷新
        handleA = {
          set(target, key, value) {
            target[key] = value
            if (trigger) {
              trigger()
            } 
            }
        }
        handleB = {
            set(target, key, value) {
                target[key] = value
                if (trigger) {
                    trigger()
                }
            }
        }
        // 进行对象的代理包装
        let pa = new Proxy(a, handleA)
        let pb = new Proxy(b, handleB)
        let sum = 0;
        // 实现触发器逻辑
        trigger = () => {
            sum = pa.value + pb.value;
        };
        trigger();
        console.log(sum);
        pa.value = 3;
        pb.value = 4;
        console.log(sum);
    </script>
```

#### 8.1.2Vue中的响应式对象

setup方法可以在组件被创建前定义组件需要的数据和函数

```html
<body>
    <div id="Application">     
    </div>
    <script>   
        const App = Vue.createApp({
            setup () {
                //数据
                let myData = {
                    value:0
                }
                //按钮的单击方法
                function click() {
                    myData.value += 1
                    console.log(myData.value)
                }
                //将数据返回
                return {
                    myData,
                    click
                }
            },
            template:`
                <h1>测试数据：{{myData.value}}</h1>
                <button @click="click">点击</button>
            `
        })
        App.mount("#Application") 
    </script>
</body>
```

myData对象是自己定义的普通JavaScript对象，本身没有响应式

常规使用的data方法返回的数据不同，data方法返回的数据会被默认保存成Proxy对象，从而获得响应式

Vue3提供了reactive方法来解决

```html
setup () {
                let myData = Vue.reactive({
                    value:0
                })
                function click() {
                    myData.value += 1
                    console.log(myData.value)
                }
                return {
                    myData,
                    click
                }
            }
```

#### 8.1.3独立的响应式值Ref的应用

ref方法定义响应式独立值，ref方法会完成对象的包装

myObject会自动包装对象，定义的value属性为原始值

```html
<script>   
        const App = Vue.createApp({
            setup () {
                let myObject = Vue.ref(0)
                function click() {
                    value.value += 1
                    console.log(myObject.value)
                }
                //返回的数据myObject在模板中使用时已经是独立值
                return {
                    myObject,
                    click
                }
            },
            template:`
                <h1>测试数据：{{myObject}}</h1>
                <button @click="click">点击</button>
            `
        })
        App.mount("#Application") 
    </script>
```

使用ref方法创建了响应式对象后，在setup方法内要修改数据，需要对myObject中的value属性值进行修改，value属性值是Vue内部生成的，对于setup方法导出的数据来说，我们在模板中使用的myObject数据已经是最终的独立值，可以直接使用

在模板中使用setup返回的使用ref定义的数据时，数据对象会被自动展开

Vue提供了一个toRefs的方法支持响应式对象的解构赋值

解构赋值:JavaScript语法，可以直接将JavaScript对象中的属性进行解构，从而直接赋值给变量使用

```html
<div id="Application">     
    </div>
<script>   
        const App = Vue.createApp({
            setup () {
                let myObject = Vue.reactive({
                    value:0
                })
                let { value } = myObject
                function click() {
                    value.value += 1
                    console.log(value)
                }
                return {
                    value,
                    click
                }
            },
            template:`
                <h1>测试数据：{{value}}</h1>
                <button @click="click">点击</button>
            `
        })
        App.mount("#Application") 
    </script>
```

value变量失去了响应式，修改是无法同步的，解构

Vue会自动将解构的数据转换成ref对象变量，在setup方法中使用时，要使用其内部包装的value属性

```html
<div id="Application">     
    </div>
    <script>   
        const App = Vue.createApp({
            setup () {
                let myObject = Vue.reactive({
                    value:0
                })
                let { value } = Vue.toRefs(myObject)
                function click() {
                    value.value += 1
                    console.log(value.value)
                }
                return {
                    value,
                    click
                }
            },
            template:`
                <h1>测试数据：{{value}}</h1>
                <button @click="click">点击</button>
            `
        })
        App.mount("#Application") 
    </script>
```

### 8.2响应式的计算与监听

computed方法：定义计算变量

#### 8.2.1关于计算变量

```html
 <div id="Application">     
    </div>
    <script>   
        const App = Vue.createApp({
            setup () {
                let a = 1;
                let b = 2;
                let sum = a + b;
                function click() {
                    a += 1;
                    b += 2;
                    console.log(a)
                    console.log(b)
                }
                return {
                    sum,
                    click
                }
            },
            template:`
                <h1>测试数据：{{sum}}</h1>
                <button @click="click">点击</button>
            `
        })
        App.mount("#Application") 
    </script>
```

无效

```html
 				let a = Vue.ref(1);
                let b = Vue.ref(2);
                let sum = Vue.computed(()=>{
                        return a.value + b.value
                });
                function click() {
                    a.value += 1;
                    b.value += 2;
                }
```

计算变量也支持被赋值

```html
setup () {
                let a = Vue.ref(1);
                let b = Vue.ref(2);
                let sum = Vue.computed({
                    set (value){
                        a.value = value
                        b.value = value
                    },
                    get () {
                        return a.value + b.value
                    }
                });
                function click() {
                    a.value += 1;
                    b.value += 2;
                    if (sum.value > 10) {
                        sum.value = 0
                    } 
                }
                return {
                    sum,
                    click
                }
            }
```

#### 8.2.2监听响应式变量

Vue3中，watchEffect方法自动对其内部用到的响应式变量进行变化监听

由于其原理是在组件初始化时对所有依赖进行搜集，因此在使用时无须手动指定要监听的对象

调用watchEffect方法，会立即执行传入的函数参数，并会追踪其内部的响应式变量，在其变更时再次调用此函数参数

```html
const App = Vue.createApp({
            setup () {
                let a = Vue.ref(1);
                Vue.watchEffect(()=>{
                    console.log("变量a变化了")
                    console.log(a.value)
                })
                a.value = 2;
				return {
					a
				}
            }
        })
```

watchEffect在setup方法中被调用后，会和当前组件的生命周期绑定在一起，组件卸载时会自动停止监听，手动停止监听如下：

```html
const App = Vue.createApp({
            setup () {
                let a = Vue.ref(1);
				let stop = Vue.watchEffect(()=> {
                    console.log("变量a变化了")
                    console.log(a.value)
                })
                a.value = 2;
				//手动停止监听
				stop();
				a.value = 3;
				return {
					a
				}
            }
        })
```

watch方法：与watchEffect方法类似，watch方法精准监听指定的响应式数据的变化

```html
<script>   
        const App = Vue.createApp({
            setup () {
                let a = Vue.reactive({
                    data:0
                });
                let b = Vue.ref(0);
                Vue.watch([()=>{
                    // 监听a对象的data属性变化
                    return a.data
                },(value,old)=>{
                    // 新值和旧值都可以获取到
                    console.log(value, old)
                })
                a.data = 1;
                Vue.watch(b,(value,old)=> {
                    console.log(value, old)
                })
                b.value = 3;
            }
        })
        App.mount("#Application") 
    </script>
```

watch方法比watchEffect方法更强大的地方在于可以分别获取到变化前的值和变化后的值，十分方便的做一些与值的比较相关的业务逻辑，watch方法也支持监听多个数据源

```html
 setup () {
                let a = Vue.reactive({
                    data:0
                });
                let b = Vue.ref(0);
                Vue.watch([()=>{
                    // 监听a对象的data属性变化
                    return a.data
                },b], ([valueA, valueB], [oldA, oldB])=>{
                    // 新值和旧值都可以获取到
                    console.log(valueA, oldA)
                    console.log(valueB, oldB)
                })
                a.data = 1;
                b.value = 3;
            }
```

### 8.3组合式API的应用

#### 8.3.1关于setup方法

setup方法Vue3新增方法。

setup方法是组合式API功能的入口方法，如果使用组合式API模式进行开发，逻辑代码都要编写在setup方法中。

setup方法会在组件创建之前被执行，即对应组件的生命周期方法beforeCreate方法调用之前被执行。由于setup方法特殊的执行时机，除了可以访问组件的传参外部属性props之外，在其内部我们不能使用this来引用组件的其他属性，在setup方法的最后，我们可以将定义的组件所需要的数据、函数等内容暴露给组件的其他选项（比如：生命周期函数、业务方法、计算属性等）

setup方法：

- props：组件使用时设置的外部参数，其是响应式的，

- context：一个JavaScript对象，可用的属性有attrs、slots和emit



```html
<div id="Application"> 
        <com name="组件名"></com>    
    </div>
    <script>   
        const App = Vue.createApp({})
        App.component("com",{
            setup (props, context) {
                console.log(props.name)
                //属性
                console.log(context.attrs)
                //插槽
                console.log(context.slots)
                //触发事件
                console.log(context.emit)
            },
            props: {
                name: String,
            }
        })
        App.mount("#Application") 
    </script>
```

setup方法的最后可以返回一个JavaScript对象，此对象包装的数据可以在组件的其他选项中使用，也可以直接用于HTML模板中。

```html
 App.component("com",{
            setup (props, context) {
                let data = "setup的数据";
                return {
					data
				}
            },
            props: {
                name: String,
            },
            template:`
            <div>{{data}}</div>
            `
        })
```

不使用template模板，直接使用setup方法来返回一个渲染函数，当组件将要被展示时，会使用此渲染函数进行渲染

```html
 App.component("com",{
            setup (props, context) {
                let data = "setup的数据"; 
                return () => Vue.h('div', [data])
            },
            props: {
                name: String,
            }
        })
```

在setup方法中不要使用this关键字，setup方法中的this与当前组件实例并不是同一对象

#### 8.3.2在setup方法中定义生命周期行为

setup方法本身可以定义组件的生命周期方法

| 组件原生命周期定义方法 | setup中的生命周期定义方法 |
| ---------------------- | ------------------------- |
| beforeMount            | onBeforeMount             |
| mounted                | onMounted                 |
| beforeUpdate           | onBeforeUpdate            |
| updated                | onUpdated                 |
| beforeUnmount          | onBeforeUnmount           |
| unmounted              | onUnmounted               |
| errorCaptured          | onErrorCaptured           |
| renderTracked          | onRenderTracked           |
| renderTriggered        | onRenderTriggered         |

实际上表中是去掉了beforeCreate和created两个生命周期方法，因为从逻辑上来说，setup方法的执行时机与这两个生命周期方法的执行时机基本是一致的

在setup方法中定义组件生命周期的方法

```html
 App.component("com",{
            setup (props, context) {
                let data = "setup的数据";
				//设置的函数参数的调用时机与mounted一样
                Vue.onMounted(()=>{
                    console.log("setup定义的mounted")
                })
                return () => Vue.h('div', [data])
            },
            props: {
                name: String,
            },
            mounted() {
                console.log("组件内定义的mounted")
            }
        })
```

如果组件和setup方法中都定义了同样的生命周期方法，他们之间并不会冲突。在实际调用时，会先调用setup方法中定义的，再调用组件内部定义的。

### 8.4实现支持搜索和筛选的用户列表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户列表</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        .container {
            margin: 50px;
        }
        .content {
            margin: 20px;
        }
    </style>
</head>
<body>
    <div id="Application">
        <div class="container">
            <div class="content">
                <input type="radio" :value="-1" v-model="sexFliter"/>全部
                <input type="radio" :value="0" v-model="sexFliter"/>男
                <input type="radio" :value="1" v-model="sexFliter"/>女
            </div>
            <div class="content">搜索：<input type="text" v-model="searchKey" /></div>
            <div class="content">
                <table border="1" width="300px">
                    <tr>
                      <th>姓名</th>
                      <th>性别</th>
                    </tr>
                    <tr v-for="(data, index) in showDatas">
                      <td>{{data.name}}</td>
                      <td>{{data.sex == 0 ? '男' : '女'}}</td>
                    </tr>
                    </table>
            </div>
        </div>
    </div>
    <script>
        let mock = [
            {
                name:"小王",
                sex:0
            },{
                name:"小红",
                sex:1
            },{
                name:"小李",
                sex:1
            },{
                name:"小张",
                sex:0
            }
        ]
        const App = Vue.createApp({
            data(){
                return {
                    sexFliter:-1,
                    showDatas:[],
                    searchKey:""
                }
            },
            mounted () {
                // 模拟请求过程
                setTimeout(this.queryAllData, 3000);
            },
            methods: {
                queryAllData() {
                    this.showDatas = mock
                },
                fliterData() {
                    this.searchKey = ""
                    if (this.sexFliter == -1) {
                        this.showDatas = mock
                    } else  {
                        this.showDatas = mock.filter((data)=>{
                            return data.sex == this.sexFliter
                        })
                    }
                },
                searchData() {
                    this.sexFliter = -1
                    if (this.searchKey.length == 0) {
                        this.showDatas = mock
                    } else  {
                        this.showDatas = mock.filter((data)=>{
                            return data.name.search(this.searchKey) != -1 
                        })
                    }
                },
            },
            watch: {
                sexFliter(oldValue, newValue) {
                    this.fliterData()
                },
                searchKey(oldValue, newValue) {
                    this.searchData()
                }
            }
            
        })
        
        App.mount("#Application") 
    </script>
</body>
</html>
```

## 九、第八章动画

### 9.1使用CSS3创建动画

CSS3本身支持非常丰富的动画效果。组件的过渡、渐变、移动、翻转等都可以添加动画效果。

CSS3动画核心是定义keyframes或transition。keyframes定义了动画的行为，比如对于颜色渐变的动画，需要定义起始颜色和终止颜色，浏览器会自动帮助我们计算其间的所有中间态来执行动画。当组件的CSS属性发生变化时，使用translation来定义其过渡动画的属性。

#### 9.1.1transition过渡动画

CSS中定义的demo-ani类指定了transition属性，这个属性中可以设置要过渡的属性以及动画时间

```html
<style>
        .demo {
            width: 100px;
            height: 100px;
            background-color: red;
        }
        .demo-ani {
            width: 200px;
            height: 200px;
            background-color: blue;
            transition: width 2s, height 2s,background-color 2s;
        }
    </style>
    <div id="Application">  
        <div :class="cls" @click="run">

        </div>   
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    cls:"demo"
                }
            },
            methods: {
                run() {
                    if (this.cls == "demo") {
                        this.cls = "demo-ani"
                    } else {
                        this.cls = "demo"
                    }
                }
            }
        })
        App.mount("#Application") 
    </script>
```

逐条属性对动画效果进行设置

- transition-property：设置动画的属性
- transition-duration：设置动画的执行时长
- transition-timing-function：设置动画的执行方式
- linear：以线性的方式执行
- transition-delay：延时设置

```html
 .demo {
            width: 100px;
            height: 100px;
            background-color: red;
            transition-property: width, height, background-color;
            transition-duration: 1s;
            transition-timing-function: linear;
            transition-delay: 2s;
        }
```

#### 9.1.2keyframes动画

transition动画适合创建简单的过渡效果，CSS3中支持使用transition属性来配置更加复杂的动画效果。

animation属性根据keyframes配置执行基于关键帧的动画效果

keyframes用来定义动画的名称和每个关键帧的状态，对于每个状态，将其定义为一个关键帧，在关键帧中可以定义元素的各种渲染属性，比如宽和高、位置、颜色等。

```html
<style>
        @keyframes animation1 {
            0% {
                background-color: red;
                width: 100px;
                height: 100px;
            }
            25% {
                background-color: orchid;
                width: 200px;
                height: 200px;
            }
            75% {
                background-color: green;
                width: 150px;
                height: 150px;
            }
            100% {
                background-color: blue;
                width: 200px;
                height: 200px;
            }
        }
        .demo {
            width: 100px;
            height: 100px;
            background-color: red;

            
        }
        .demo-ani {
            animation:animation1 4s linear;
            width: 200px;
            height: 200px;
            background-color: blue;
        }
    </style>
    <div id="Application">  
        <div :class="cls" @click="run">

        </div>   
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    cls:"demo"
                }
            },
            methods: {
                run() {
                    if (this.cls == "demo") {
                        this.cls = "demo-ani"
                    } else {
                        this.cls = "demo"
                    }
                }
            }
        })
        App.mount("#Application") 
    </script>
```

在定义keyframes时，如果只关心起始状态和终止状态

```html
 @keyframes animation1 {
	from{
                background-color: red;
                width: 100px;
                height: 100px;
            }
     to {
                background-color: blue;
                width: 200px;
                height: 200px;
            }
        }
```

定义好keyframes关键帧，在编写CSS样式代码时可以使用animation属性为其指定动画效果

```
 .demo-ani {
            /* 设置关键帧动画名称 */
            animation-name: animation1;
            /* 设置动画时长 */
            animation-duration: 3s;
            /* 设置动画播放方式：渐入渐出 */
            animation-timing-function: ease-in-out;
            /* 设置动画播放的方向 */
            animation-direction: alternate;
            /* 设置动画播放的次数 */
            animation-iteration-count: infinite;
            /* 设置动画的播放状态 */
            animation-play-state: running;
            /* 设置播放动画的延迟时间 */
            animation-delay: 1s;
            /* 设置动画播放结束应用到元素的样式 */
            animation-fill-mode:forwards;
            width: 200px;
            height: 200px;
            background-color: blue;
        }
```

### 9.2使用JavaScript的方式实现动画效果

动画的本质是将元素的变化以渐进的方式完成

setInterval方法开启一个定时器，每10毫秒执行一次回调函数。当动画结束后，要使用clearInterval方法将对应的定时器停止。

```html
 <div id="Application">  
        <div :style="{backgroundColor: 'blue', width: width + 'px', height:height + 'px'}" @click="run">
        </div>   
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    width:100,
                    height:100,
                    timer:null
                }
            },
            methods: {
                run() {
                    this.timer = setInterval(this.animation, 10)
                },
                animation() {
                    if (this.width == 200) {
                        clearInterval(this.timer)
                        return
                    } else {
                        this.width += 1
                        this.height += 1
                    }
                }
            }
        })
        App.mount("#Application") 
    </script>
```

### 9.3Vue过渡动画

Vue组件在页面插入、移除或者更新的时候都可以附带转场效果，即可以展示过渡动画

#### 9.3.1定义过渡动画

Vue过渡动画的核心：CSS类实现，Vue帮助我们在组件的不同生命周期自动切换不同的CSS类

Vue中默认提供了一个名为transition的内置组件，可以用来包装要展示过渡动画的组件。transition组件的name属性用来设置要执行的动画名称，Vue中约定了一系列CSS类名规则来定义各个过渡过程中的组件状态

核心：6个特殊的CSS类

```html
 <style>
       .ani-enter-from {
                width: 0px;
                height: 0px;
                background-color: red;
            }
        .ani-enter-active {
         transition:width 2s,height 2s,background-color 2s;
     }
        .ani-enter-to {
                width: 100px;
                height: 100px;
                background-color: blue;
            }
        }
        .ani-leave-from {
                width: 100px;
                height: 100px;
                background-color: blue;
            }
         .ani-leave-active {
         transition:width 2s,height 2s,background-color 3s;
     }
         .ani-leave-to {
                width: 0px;
                height: 0px;
                background-color: red;
            }      
    </style>
    <div id="Application">  
        <button @click="click">显示/隐藏</button>
        <transition name="ani">
            <div v-if="show">
            </div>   
        </transition>
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    show:false
                }
            },
            methods:{
                click(){
                    this.show = !this.show
                }
            }
        })
        App.mount("#Application") 
    </script>
```

transition组件的name属性设置动画名称后，当组件被插入页面被移除时，其会自动寻找以此动画名称开头的CSS类

- x表示定义的过渡动画名称

- x-enter-from类在组件即将被插入页面时被添加到组件上（组件的初始状态），元素被插入页面后此类会马上被移除
- x-enter-to类在组件被插入页面后立即被添加，此时x-enter-from类会被移除（组件过渡的最终状态）
- x-enter-active类在组件的整个插入过渡动画中都会被添加，直到组件的过渡动画结束后才会被移除。可以在这个类中定义组件过渡动画的时长、方式、延迟等。
- x-leave-from与x-enter-from相对应，在组件即将被移除时此类会被添加。定义移除组件时过渡动画的起始状态
- x-leave-to则对应的用来设置移除组件动画的终止状态
- x-leave-active类在组件的整个移除过渡动画中都会被添加，直到组件的过渡动画结束后才会被移除。定义组件的过渡动画的时长、方式、延迟等

```html
x-enter-from
x-enter-active
x-enter-to
x-leave-from
x-leave-active
x-leave-to
```

6种特殊的CSS类最终都会被移除，当动画执行完成后，组件的样式并不会保留，更常见的做法是在组件本身绑定一个最终状态的样式类

```html
<transition name="ani">
            <div v-if="show" class="demo">
            </div>   
        </transition>

.demo {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
```

使用animation的关键帧方式定义动画

```html
 <style>
        @keyframes keyframe-in {
            from {
                width: 0px;
                height: 0px;
                background-color: red;
            }
            to {
                width: 100px;
                height: 100px;
                background-color: blue;
            }
        }
        @keyframes keyframe-out {
            from {
                width: 100px;
                height: 100px;
                background-color: blue;
            }
            to {
                width: 0px;
                height: 0px;
                background-color: red;
            }
        }       
        .demo {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
        .ani-enter-from {
            width: 0px;
            height: 0px;
            background-color: red;
        }
        .ani-enter-active {
            animation: keyframe-in 3s;
        }
        .ani-enter-to {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
        .ani-leave-from {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
        .ani-leave-active {
            animation: keyframe-out 3s;
        }
        .ani-leave-to {
            width: 0px;
            height: 0px;
            background-color: red;
        }
    </style>
```

#### 9.3.2设置动画过程种的监听回调

对于组件的加载或卸载过程，有一系列的生命周期函数会被调用

Vue中的转场动画也可以注册一系列的函数来对其过程进行监听

```html
<transition name="ani"
@before-enter="beforeEnter"
@enter="enter"            
@after-enter="afterEnter"             
@enter-cancelled="enterCancelled"             
@before-leave="beforeLeave"             
@leave="leave"
@after-leave="afterLeave"             
@leave-cancelled="leaveCancelled"  >           
             <div v-if="show" class="demo"></div>          
</transition>


methods:{
//组件插入过渡开始前
beforeEnter(el) {
	console.log("beforeEnter")
},
//组件插入过渡开始
enter(el,done) {
	console.log("enter")
},
//组件插入过渡后
afterEnter(el) {
	console.log("afterEnter")
},
//组件插入过渡取消
enterCancelled(el) {
	console.log("enterCancelled")
},
//组件移除过渡开始前
beforeLeave(el) {
	console.log("beforeLeave")
},
//组件移除过渡开始
leave(el,done) {
	console.log("leave")
},
//组件移除过渡后
afterLeave(el) {
	console.log("afterLeave")
},
//组件移除过渡取消
leaveCancelled(el) {
	console.log("leaveCancelled")
}
}
```

有了回调函数，可以在组件过渡动画过程中实现复杂的业务逻辑，也可以通过JavaScript来自定义过渡动画

自定义过渡动画：需要将transition组件的CSS属性关掉

```html
<div id="Application"> 
    	<button @click="click">显示/隐藏</button>
    	<transition name="ani" :css="false">
    		<div v-show="show" class="demo">    
            </div>
    </transition> 
    </div>
```

enter和leave函数除了会将当前元素作为参数外，还有一个函数类型的done参数，如果我们将transition组件的CSS属性关闭，决定使用JavaScript来实现自定义的过渡动画，这两个方法中的done函数最后必须被手动调用，否则过渡动画会立即完成

#### 9.3.3多个组件的过渡动画

Vue中的transition组件支持同时包装多个互斥的子组件元素，从而实现多组件的过渡效果

```html
<style>      
        .demo {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
        .demo2 {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
        .ani-enter-from {
            width: 0px;
            height: 0px;
            background-color: red;
        }
        .ani-enter-active {
            transition: width 3s, height 3s, background-color 3s;
        }
        .ani-enter-to {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
        .ani-leave-from {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
        .ani-leave-active {
            transition: width 3s, height 3s, background-color 3s;
        }
        .ani-leave-to {
            width: 0px;
            height: 0px;
            background-color: red;
        }
    </style>
    <div id="Application">  
        <button @click="click">显示/隐藏</button>
        <transition name="ani">
            <div v-if="show" class="demo">
            </div>   
            <div v-else class="demo2">
            </div>   
        </transition>
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    show:false
                }
            },
            methods:{
                click(){
                    this.show = !this.show
                }
            }
        })
        App.mount("#Application") 
    </script>
```

默认：插入和移除动画会同步进行。

我们需要移除动画执行完成后再执行插入动画，需要对transition组件的mode属性进行设置，设置为out-in时，就会先执行移除动画，再执行插入动画；设置为in-out时，会先执行插入动画，再执行移除动画

```html
<transition name="ani" mode="in-out">
            <div v-if="show" class="demo">
            </div>   
            <div v-else class="demo2">
            </div>   
        </transition>
```

#### 9.3.4列表过渡动画

再Vue中通常使用v-for指令来动态构建列表视图

使用transition-group组件可以非常方便地实现列表元素变动的动画效果

```html
 <style>      
        .list-enter-active,
        .list-leave-active {
            transition: all 1s ease;
        }

        .list-enter-from,
        .list-leave-to {
            opacity: 0;
        }
    </style>
    <div id="Application">  
        <button @click="click">添加元素</button>
        <transition-group name="list">
            <div v-for="item in items" :key="item">
            元素：{{ item }}
            </div>
        </transition-group>
    </div>
    <script>
        const App = Vue.createApp({
            data(){
                return {
                    items:[1,2,3,4,5]
                }
            },
            methods:{
                click() {
                    this.items.push(this.items[this.items.length-1] + 1)
            }
          }
        })
        App.mount("#Application") 
    </script>
```

增加元素：以渐进动画的方式插入

transition-group组件实现列表动画，与transition类似，首先需要定义动画所需的CSS类

使用列表动画，列表中的每一个元素都需要有一个唯一的key值

删除功能：

```html
dele() {
                    if(this.items.length > 0) {
                        this.items.pop()
                    }
                }
```

列表元素的排序过程也使用动画过渡，只需要额外定义一个v-mode类型的特殊动画

```html
.list-move {
            transition: transform 1s ease;
        }
```

### 9.4优化用户列表页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户列表</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        .container {
            margin: 50px;
        }
        .content {
            margin: 20px;
        }
        .tab {
            width: 300px;
            position: absolute;
        }
        .item {
            border: gray 1px solid;
            width: 148px;
            text-align: center;
            transition: all 0.8s ease;
            display: inline-block;
        }
        .list-enter-active {
            transition: all 1s ease;
        }

        .list-enter-from,
        .list-leave-to {
            opacity: 0;
        }

        .list-move {
            transition: transform 1s ease;
        }
        .list-leave-active {
            position: absolute;
            transition: all 1s ease;
        }
    </style>
</head>
<body>
    <div id="Application">
    </div>
    <script>
        let mock = [
            {
                name:"小王",
                sex:0
            },{
                name:"小红",
                sex:1
            },{
                name:"小李",
                sex:1
            },{
                name:"小张",
                sex:0
            }
        ]
        const App = Vue.createApp({
            setup() {
                // 用户列表
                const showDatas = Vue.ref([])
                const queryAllData = () => {
                    // 模拟请求过程
                    setTimeout(()=>{
                        showDatas.value = mock
                    }, 3000);
                }
                // 组件挂载是请求数据
                Vue.onMounted(queryAllData)

                let sexFliter = Vue.ref(-1)
                let searchKey = Vue.ref("")
                let fliterData = () => {
                    searchKey.value = ""
                    if (sexFliter.value == -1) {
                        showDatas.value = mock
                    } else  {
                        showDatas.value = mock.filter((data)=>{
                            return data.sex == sexFliter.value
                        })
                    }
                }
                searchData = () => {
                    sexFliter.value = -1
                    if (searchKey.value.length == 0) {
                        showDatas.value = mock
                    } else  {
                        showDatas.value = mock.filter((data)=>{
                            return data.name.search(searchKey.value) != -1 
                        })
                    }
                }
                // 添加侦听
                Vue.watch(sexFliter, fliterData)
                Vue.watch(searchKey, searchData)

                return {
                    showDatas,
                    searchKey,
                    sexFliter
                }
            },
            template: `
            <div class="container">
                <div class="content">
                    <input type="radio" :value="-1" v-model="sexFliter"/>全部
                    <input type="radio" :value="0" v-model="sexFliter"/>男
                    <input type="radio" :value="1" v-model="sexFliter"/>女
                </div>
                <div class="content">搜索：<input type="text" v-model="searchKey" /></div>
                <div class="content">
                    <div class="tab" width="300px">
                        <div>
                        <div class="item">姓名</div>
                        <div class="item">性别</div>
                        </div>
                        <transition-group name="list">
                            <div v-for="(data, index) in showDatas" :key="data.name">
                            <div class="item">{{data.name}}</div>
                            <div class="item">{{data.sex == 0 ? '男' : '女'}}</div>
                            </div>
                        </transition-group>
                    </div>
                </div>
            </div>
            `
        })
        App.mount("#Application") 
    </script>
</body>
</html>
```

## 十、第九章构建工具Vue CLI的使用

Vue本身是一个渐进式的前端Web开发框架，其允许我们只在项目中的部分页面中使用Vue进行研发，也允许我们仅仅使用Vue中的部分功能来进行项目开发，但是如果你的目标是完成一个风格统一、可扩展性强的现代化Web单页面应用，那么使用Vue提供的一整套完整的流程进行开发是适合的。

Vue CLI就是这样一个基于Vue进行快速项目开发的工具。

### 10.1Vue CLI工具入门

Vue CLI是一个帮助开发者快速创建和开发Vu项目的工具，其核心功能是提供可交互式的项目脚手架和运行时的服务依赖。

#### 10.1.1Vue CLI的安装

Vue CLI是一个需要全局安装的NPM包， 安装VueCLI的前提是设备已经安装 了Node.js环境

Node.js官网(https://nodejs.org)

Node.js官网会自动根据当前设备的系统类型推荐需要下载的软件，选择当前新的稳定版本进行下载即可

安装Node.js环境后，即可在终端使用npm相关指令来安装软件包。在终端输入如下指令以检查Node.js环境是否正确安装完成：

```
node -v
```

执行上面的命令后，只要终端输出了版本号信息，就表明Node.js已经安装成功

下面使用npm安装Vue CLI工具。在终端输入如下命令并执行：

```
npm install -g @vue/cli
```

由于有很多依赖包需要下载因此安装过程可能会持续一段时间，耐心等待即可。需要注意，如果在安装过程中终端输出了如下异常错误信息：

```
Unhandled rejection Error:EACCES:permission denied
```

这是因为当前操作系统登录的用户权限不足，使用如下命令重新安装即可：

```
sudo npm install -g @vue/cli
```

可以使用如下命令检查Vue CLI工具是否安装成动

```
vue  --version
```

如果终端正确输出了工具的版本号，则表明已经安装成功。之后，如果官方的Vue CLI工具有升级，在终端使用如下命令即可进行升级：

```
npm update -g @vue/cli
```

#### 10.1.2快速创建项目

在终端执行如下命令来创建Vue项目工程：注意创建的项目名称必须是小写

```
vue create hello-world
```

其中hello-word是我们要创建的工程名称，Vue CLI工具本身是有交互性的，执行上面的命令后，终端会输出如下信息询问我们是否需要替换资源地址：

```
Your connection to the default yarn registry seems to be slow.
Use https://registry.npm.taobao.org for faster installation?
```

输入Y表示同意，之后继续创建工程，之后终端还会询问一系列的配置问题，都选择默认的选项即可。一路回车就可以

完成所有的初始配置工作后，稍等片刻，Vue CLI即可创建一个Vu项目模板工程。

Vue CLI工具也可以使用可交互的图形化页面创建工程。

在终端输入如下命令即可在测览器中打开一个Vue工程管理工具页面：

```
vue ui
```

在页面中可以创建项目、导入项目或对已经有的项目进行管理。

创建一个项目，单击创建项目按钮，之后需要对项目的详情进行完善

在详情设置页面中，需要填写项目的名称，选择项目所在的目录位置，选择项目包管理器以及进行Git等相关配置。完成后，进行下一步选择项目的预设。

可以选择Default preset(Vue 3)这套项目预设。之后单击“创建项目”按钮，页面即可进入项目创建过程，需要稍等片刻，创建完成后可以进入对应的目录查看，使用图形化页面创建的项目与使用终端命令创建的项目结构是一样的。
　　使用命令的方式创建的管理项目与使用图形化页面的方式创建的管理项目的功能是一样的，可以根据自己的习惯来进行选择。总体来说，使用命令的方式更加便捷，而使用图形化页面的方式更加直观。

### 10.2 Vue CLI项目模板工程

前面我们使用Vue CLI工具创建了一个完整的Vue项目工程。其实项目工程的创建只是Vue CLI工具链中的一部分，在安装Vue CLI时，也同步安装了vue-cli-service工具，其提供了Vue项目的代码检查、编译、服务部署等功能。

#### 10.2.1模板工程的目录结构

通过观察Vue CLI创建的工程目录，可以发现其中主要包含3个文件夹和5个独立文件。我们先看这5个独立文件：

- .gitignore文件。
- babel.config.js文件
- package.json文件。
- README.md文件。
- yarn.lock文件。

gitignore是一个隐藏文件，用来配置Git版本管理工具需要忽略的文件或文件夹，在创建工程时，其默认会配置好，将一些依赖、编译产物、log日志等文件忽略，我们不需要修改。

babel.config.js是Babel工具的配置文件，Babel本身是一个JavaScript编译器，其会将ES6版本的代码转换成向后兼容的JavaScript代码，这个文件我们一般也无须修改。

package.json是一个相对比较重要的文件，其中存储的是一个JSON对象数据，用来配置当前的项目名称、版本号、脚本命令以及模块依赖等。当我们需要向项目中添加额外的依赖时，其就会被记录到这个文件默认的模板工程中

README.md是一个MarkDown格式的文件，其中记录了项目的编译和调试方式。我们也可以将项目的介绍编写在这个文件中

最后，yarn.lock文件记录了YARN包管理器安装的依赖版本信息，我们无须关心

了解了这些独立文件的意义及用法，再来看一下默认生成的3个文件夹：

- node modules

- public
- src

其中，node moudles文件下存放的是NPM安装的依赖模块，这个文件夹默认会被Git版本管理工具忽略，对于其中的文件，我们也不需要手动添加或修改。

public文件夹正如其命名一样，用来放置一些公有的资源文件，例如网页用到的图标、静态的HTML文件等。

src是一个重要的文件夹，核心功能代码文件都放在这个文件夹下，在默认的模板工程中，这个文件夹下还有两个子文件夹：assets和components。assets存放资源文件，compone存放组件文件。

我们按照页面的加载流程来看一下src文件下默认生成的几个文件:

main.js是应用程序的入口文件
你可能有些疑惑，main.js文件中怎么只有组件创建和挂载的相关逻辑，并没有对应的HTML代码，那么组件是挂载到哪里的呢？其实前面我们已经介绍过了，在public文件夹下会包含为index.html的文件，它就是网页的入口文件

man.js中定义的根组件将被挂载到id为“app”的div标签上。

回到main.js文件，其中导入了一个名为App的组件作为根组件，可以看到，项目工程中有一个名为App.vue的文件，这其实使用了Vue单文件组件的定义方法，即将组件定义在单独的文件中，以便于开发和维护文件中的内容

#### 10.2.2运行Vue项目工程

运行Vue模板项目非常简单，首先打开终端，进入当前Vue项目的工程目录，执行如下命令即可：

```
npm run serve
```

之后，进行Vue项目工程的编译，并在本机启动一个开发服务器，若终端输出如下信息，则表明项目已经运行完成：

```
DONE Compiled successfully in 3168ms           7:29:53PM
App running at:
-Local:http://localhost:8080/
-letwork:http://192.168.26.96:8080/
Note that the development build is not optimized.
To create a production build,run yarn build.
```

之后，在浏览器中输入如下地址，便会打开当前的Vue项目页面

当然，其实运行vue项目的除了npm命令，还有cnpm、pnpm、yarn等。yarn和npm一般使用较多。

默认情况下，Vue项目要运行在8080端口上。我们也可以手动指定端口

```
npm run serve -- --port 9000
```

当启动了开发服务器后，其默认附带了热重载模块，即我们只需要在修改代码之后进行保存，网页就会自动进行更新。你可以尝试修修改App.vue文件中HelloWord组件的msg参数，之后保存，可以看到浏览器页面中的标题也会自动进行更新。

使用Vue CLI中的图形化界面可以更加方便和直观地对Vue项目进行编译和运行，从Vue CLI图形化网页工具中进入对应的项目，单击页面中的“运行”按钮即可

### 10.3在项日中使用依赖

在Vue项目开发中，额外插件的使用必不可少。

Vue CLI创建的工程使用的是基于插件的架构。通过查看package.json文件，可以发现在开发环境下，其默认安装了需要的工具依赖，主要用来进行代码编译、服务运行和代码检查等。安装依赖包依然使用npm相关命令，例如需要安装vue-axios依赖，可以在项目工程目录下执行如下命令：

```
npm install --seve axios vue-axios
```

需要注意，如果安装过程中出现权限问题，则需要在命令前添加sudo再执行。安装完成后，可以看到package.json文件会自动进行更新

其实不止package.json文件会更新，在node_moudles文片夹下也会新增axios和vue-axios相关的模块文件。

也可以使用图形化工具进行依赖的管理，在项目管理器的依赖管理板块下，可以查看到当前项目安装的依赖有哪些、版本如何，也可以直接在其中进行插件的安装和卸载

可以尝试在图形化工具中进行组件的卸载，单击页面中的“安装依赖”按钮。可以在所有可用的依赖中进行搜索，选择自己需要的进行安装

### 10.4工程构建

开发完一个Vu项目后，需要将其构建成可发布的代码产品。Vue CLI提供了对应的工具链来实现这些功能。

在Vue工程目录下执行如下命令，可以直接将项目代码编译构建成生产包：

```
npm run build
```

构建过程可能需要一段时间、构建完成后，在工程的根目录下将会生成一个名为dist的文件夹，这个文件夹就是我们要发布的软件包，可以看到，这个文件夹下包含一个名为index.html的文件，它是项目的入口文件，除此之外，还包含一些静态资源与CSS、JavaScript等相关文件，这些文件中的代码都是被压缩后的。

当然，也可以使用图形化的管理工具来构建工程

需要注意，我们不添加任何参数进行构建会按照一些默认的规则进行，例如构建完成后的目标文件将生成在dist文件夹中，默认的构建环境是生产环境(开发环境的依赖不会被添加)。在构建时，也可以对一些构建参数进行配置。

### 10.5新一代前端构建工具Vite

Vite是一个追求极致的构建速度的Vue项目构建工具，就是快！

#### 10.5.1Vite与Vue CLI的比较

Vue CLI非常适合大型商业项目的开发，它是构建大型Vue项目不可或缺的工具，Vue CLI主要包括工程脚手架、带热重载模块的开发服务器、插件系统、用户界面等功能。

与VueCLI类似，Vite也是一个提供项目脚手架和开发服务器的构建工具。

不同的是，Vite不是基于Webpack的，它有一套自己的开发服务器，并且Vite本身并不像Vue CLI那样功能完善且强大，它只专注于提供基本构建的功能和开发服务器。因此，Vite更加小巧迅捷，其开发服务器比基于Webpack的开发服务器快10倍左右，这对开发者来说太重要了，开发服务器的响应速度会直接影响开发者的编程体验和开发效率。

对于非常大型的项目来说，可能会有成千上万个JavaScript模块，这时构建效率的速度差异就会非常明显。

虽然Vite在“速度”上无疑比Vue CLI快很多，但其没有用户界面，也没有提供插件管理系统，对于初学者来说并不友好。在实际项目开发中，到底是要使用VueCLI还是使用Vite并没有一定的标准，按需选择就好。
#### 10.5.2体验Vite构建工具

在创建基于Vite脚手架的Vue项目前，首先要确保我们所使用的Node.js版本大于12.0.0。在终端执行如下指令可以查看当前使用的Node.js的版本：

```
node -v
```

如果终端输出的Node.js版本号并不大于12.0.0，则有两种处理方式，一种是直接从Node.js的官网下载新的Node.js软件，安装新版本即可，官网地址如下：
Node.js官网(https://nodejs.org)
　　另一种方式是使用NVM来管理Node.js的版本，NVM可以在安装的多个版本的Node.js间任意选择需要使用的，非常方便。关于NVM的安装本人博客

[使用nvm实现多个Node.js版本之间切换](https://blog.csdn.net/cai_4/article/details/128658390)　　

确认当前使用的Node.js版本符合要求后，在终端执行如下指令来创建Vue项目工程：

```
npm init @vitejs/app
```

之后需要一步一步渐进式地来选择一些配置项。首先需要输入工程名和包名，例如可以取名为viteDemo，之后选择要使用的框架，Vite不止支持构建Vue项目，也支持构建基于React等框架的项目，这里选择Vue即可。
　　项目创建完成后，可以看到生成的工程目录结构。

从目录结构上看，Vite创建的工程与Vue CLI创建的工程十分类似，其中差别在于package.json文件。

在工程目录下执行npm run dev(第一次执行前别忘记先执行npm install指令安装依赖)即可开启开发服务器，执行npm run build即可进行打包操作。

## 十一、第十章基于Vue3的UI组件库——Element Plus

### 11.1Element Plus入门

#### 11.1.1Element Plus的安装与使用

CDN引入(单文件)

```
<!-- 引入Vue -->
<script src="https://unpkg.com/vue@next"></script>
<!-- 引入样式 --><!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css">
<!-- 引入组件库 -->
<!-- <script src="https://unpkg.com/element-plus/lib/index.full.js"></script> -->
<!-- import JavaScript -->
<script src="https://unpkg.com/element-plus"></script>
```

修改JavaScript代码挂载Element Plus相关的功能

```js
let instance = Vue.createApp(App)
instance.use(ElementPlus)
instance.mount("#Application")
```

项目npm安装Element Plus

```
npm install element-plus  --save
```

package.json依赖

```
"dependencies": {
    "core-js": "^3.6.5",
    "element-plus": "^1.0.2-beta.46",
    "vue": "^3.0.0"
  },
```

#### 11.1.2Element Plus的学习

这一部分主要是一些样式引入，这里不具体参数，可以跟源代码研究学习

[Element Plus组件库](https://element-plus.gitee.io/zh-CN/component/button.html)

源码

```vue
<template>
  <div id="div">
    <div id="div">
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </div>
    <div id="div">
      <el-button type="primary">常规按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div id="div">
      <el-button type="primary" :plain="true">描边</el-button>
      <el-button type="primary" :round="true">圆角</el-button>
      <el-button type="primary" :circle="true">圆形</el-button>
      <el-button type="primary" :disable="true">禁用</el-button>
      <el-button type="primary" :loading="true">加载</el-button>
    </div>
    <div id="div">
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">图标在前</el-button>
      <el-button type="primary"
        >图标在后<i class="el-icon-upload el-icon--right"></i
      ></el-button>
    </div>
    <div id="div">
      <el-tag>普通标签</el-tag>
      <span style="margin: 10px"></span>
      <el-tag :hit="true">描边标签</el-tag>
      <span style="margin: 10px"></span>
      <el-tag color="purple">紫色背景标签</el-tag>
    </div>

    <div id="div">
      <template v-for="(tag, index) in tags" :key="tag">
        <el-tag :closable="true" @close="closeTag(index)">{{ tag }}</el-tag>
        <span style="padding: 10px"></span>
      </template>
      <el-input
        style="width: 90px"
        v-if="show"
        v-model="inputValue"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
        size="small"
      >
      </el-input>
      <el-button size="small" v-else @click="showInput">新建标签 +</el-button>
    </div>

    <div id="div">
      <el-check-tag :checked="true">足球</el-check-tag>
      <span style="padding: 10px"></span>
      <el-check-tag :checked="false">篮球</el-check-tag>
    </div>

    <div id="div">
      <el-empty description="设置空态图的描述文案" :image-size="400"></el-empty>
      <el-empty>
        <!-- image具名插槽用来替换默认的图片部分 -->
        <template v-slot:image>
          <div>这里是自定义图片位置</div>
        </template>
        <!-- description具名插槽用来替换默认的描述部分 -->
        <template v-slot:description>
          <h3>自定义描述内容</h3>
        </template>
        <!-- 默认的插槽用来在空态图的尾部追加内容 -->
        <el-button>看看其他内容</el-button>
      </el-empty>
    </div>

    <div id="div" style="textalign: left">
      <el-skeleton :rows="1" :animated="true" :loading="loading">
        <h1>这里是真实的页面元素</h1>
        <p>{{ msg }}</p>
      </el-skeleton>
    </div>

    <div id="div" style="textalign: left">
      <el-skeleton :animated="true">
        <template #template>
          <!-- 定义标题骨架 -->
          <el-skeleton-item
            variant="h1"
            style="width: 100px; height: 30px; padding: 0"
          />
          <!-- 定义图片骨架 -->
          <el-skeleton-item
            variant="image"
            style="width: 240px; height: 240px; padding: 0"
          />
          <!-- 定义段落骨架 -->
          <el-skeleton-item
            variant="p"
            style="width: 30%; padding: 0; margin-top: 20px"
          />
          <el-skeleton-item variant="p" style="width: 90%; padding: 0" />
          <el-skeleton-item variant="p" style="width: 90%; padding: 0" />
        </template>
      </el-skeleton>
    </div>
    <el-image style="width: 500px" src="http://huishao.cc/img/head-img.png">
      <template #placeholder>
        <h1>加载中...</h1>
      </template>
      <template #error>
        <h1>加载失败</h1>
      </template>
    </el-image>
  </div>

  <div id="div">
    <!-- 使用文本类型的头像 -->
    <el-avatar style="margin: 20px">用户</el-avatar>
    <!-- 使用图标类型的头像 -->
    <el-avatar style="margin: 20px" icon="el-icon-user-solid"></el-avatar>
    <!-- 使用图片类型的头像 -->
    <el-avatar
      style="margin: 20px"
      :size="100"
      src="http://huishao.cc/img/avatar.jpg"
    ></el-avatar>
    <el-avatar
      style="margin: 20px"
      src="http://huishao.cc/img/avatar.jpg"
    ></el-avatar>
    <el-avatar
      style="margin: 20px"
      shape="square"
      src="http://huishao.cc/img/avatar.jpg"
    ></el-avatar>
  </div>

  <div id="div">
    <el-radio-group v-model="radio">
      <el-radio label="1">选项1</el-radio>
      <el-radio label="2">选项2</el-radio>
      <el-radio label="3">选项3</el-radio>
      <el-radio label="4">选项4</el-radio>
    </el-radio-group>
  </div>
  <div id="div">
    <el-radio-group v-model="city">
      <el-radio-button label="1">北京</el-radio-button>
      <el-radio-button label="2">上海</el-radio-button>
      <el-radio-button label="3">广州</el-radio-button>
      <el-radio-button label="4">深圳</el-radio-button>
    </el-radio-group>
  </div>
  <div id="div">
    <el-checkbox-group v-model="checkBox" :min="1" :max="3">
      <el-checkbox label="1">A</el-checkbox>
      <el-checkbox label="2">B</el-checkbox>
      <el-checkbox label="3">C</el-checkbox>
      <el-checkbox label="4">D</el-checkbox>
    </el-checkbox-group>
  </div>

  <div style="margin: 40px">
    <el-input
      v-model="value"
      placeholder="请输入内容"
      :disabled="false"
      :show-password="true"
      :clearable="true"
      prefix-icon="el-icon-search"
      type="text"
    ></el-input>
  </div>

  <div style="margin: 40px">
    <el-input v-model="value" type="text">
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </el-input>
  </div>

  <div style="margin-top: 240px">
    <el-autocomplete
      v-model="value"
      :fetch-suggestions="queryData"
      placeholder="请输入内容"
      @select="selected"
      :highlight-first-item="true"
    ></el-autocomplete>
  </div>

  <div id="div">
    <el-input-number
      :min="1"
      :max="10"
      :step="1"
      v-model="num"
    ></el-input-number>
  </div>

  <div>
    <el-select :multiple="true" :clearable="true" v-model="value">
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :value="item.value"
          :label="item.label"
          :key="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>
  </div>

  <div style="margin-top: 500px">
    <el-cascader
      v-model="value"
      :options="datas"
      :props="{ expandTrigger: 'hover' }"
    ></el-cascader>
  </div>

  <div id="div">
    <el-switch
      v-model="switch1"
      active-text="会员"
      inactive-text="非会员"
      active-color="#00FF00"
      inactive-color="#FF0000"
    ></el-switch>
  </div>
  <div id="div">
    <el-switch
      v-model="switch2"
      active-text="加载中"
      :loading="true"
    ></el-switch>
  </div>
  <div id="div">
    <el-switch
      v-model="switch3"
      inactive-text="禁用"
      :disabled="true"
    ></el-switch>
  </div>

  <div style="margin: 40px">
    <el-slider
      v-model="sliderValue"
      :format-tooltip="format"
      :step="10"
      :show-stops="true"
      :show-input="true"
      :range="true"
    ></el-slider>
  </div>

  <div style="padding: 40px">
    <el-slider v-model="sliderValue" :marks="marks"></el-slider>
  </div>

  <div>
    <el-time-picker
      :is-range="true"
      v-model="time"
      range-separator="~"
      :arrow-control="true"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
    >
    </el-time-picker>
  </div>

  <div style="margin-top: 500px">
    <el-date-picker
      v-model="date"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      >>
    </el-date-picker>
  </div>

  <div style="margin-top: 300px">
    <el-color-picker :show-alpha="true" v-model="color"></el-color-picker>
  </div>

  <div id="div">
    <el-alert title="成功提示的文案" type="success"> </el-alert>
    <br />
    <el-alert title="消息提示的文案" type="info"> </el-alert>
    <br />
    <el-alert title="警告提示的文案" type="warning"> </el-alert>
    <br />
    <el-alert title="错误提示的文案" type="error"> </el-alert>
  </div>

  <div>
    <el-button @click="popTip">弹出信息提示</el-button>
  </div>

  <div style="margin-top: 400px">
    <el-button @click="popAlert">弹出信息提示</el-button>
  </div>

  <div style="margin-top: 20px">
    <el-button @click="notify">弹出信息提示</el-button>
  </div>

  <div id="div">
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="subject" label="科目"></el-table-column>
    </el-table>
  </div>

  <div id="div" style="margin-bottom:200px">
    <el-menu mode="horizontal">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template #title>广场</template>
        <el-menu-item index="2-1">音乐</el-menu-item>
        <el-menu-item index="2-2">视频</el-menu-item>
        <el-menu-item index="2-3">游戏</el-menu-item>
        <el-submenu index="2-4">
          <template #title>体育</template>
          <el-menu-item index="2-4-1">篮球</el-menu-item>
          <el-menu-item index="2-4-2">足球</el-menu-item>
          <el-menu-item index="2-4-3">排球</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" :disabled="true">个人中心</el-menu-item>
      <el-menu-item index="4">设置</el-menu-item>
    </el-menu>
  </div>

  <div style="margin:100px">
    <el-tabs type="border-card">
      <el-tab-pane label="页面1" name="1">页面1</el-tab-pane>
      <el-tab-pane label="页面2" name="2">页面2</el-tab-pane>
      <el-tab-pane label="页面3" name="3">页面3</el-tab-pane>
      <el-tab-pane label="页面4" name="4">页面4</el-tab-pane>
    </el-tabs>
  </div>

  <div style="margin:300px">
    <el-button @click="drawer = true" type="primary">
      点我打开抽屉
    </el-button>
  </div>
  <el-drawer
    title="抽屉面板的标题"
    v-model="drawer"
    direction="ltr">
    抽屉面板的内容
  </el-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer:false,
      tableData: [
        {
          name: "小王",
          age: 29,
          subject: "Java",
        },
        {
          name: "小李",
          age: 30,
          subject: "C++",
        },
        {
          name: "小张",
          age: 28,
          subject: "JavaScript",
        },
      ],
      color: "",
      date: 0,
      time: 0,
      marks: {
        0: "起点",
        50: "半程啦！",
        90: {
          style: {
            color: "#ff0000",
          },
          label: "就到终点啦",
        },
      },
      sliderValue: 0,
      switch1: false,
      switch2: true,
      switch3: false,
      tags: ["男装", "女装", "帽子", "鞋子"],
      show: false,
      inputValue: "",
      msg: "",
      loading: true,
      radio: "0",
      city: "1",
      checkBox: [],
      value: "",
      num: 1,
      options: [
        {
          label: "球类",
          options: [
            {
              value: "选项1",
              label: "足球",
            },
            {
              value: "选项2",
              label: "篮球",
              disabled: true,
            },
            {
              value: "选项3",
              label: "排球",
            },
            {
              value: "选项4",
              label: "乒乓球",
            },
          ],
        },
        {
          label: "休闲",
          options: [
            {
              value: "选项5",
              label: "散步",
            },
            {
              value: "选项6",
              label: "游泳",
            },
          ],
        },
      ],
      datas: [
        {
          value: "父1",
          label: "运动",
          children: [
            {
              value: "子1",
              label: "足球",
            },
            {
              value: "子2",
              label: "篮球",
            },
          ],
        },
        {
          value: "父2",
          label: "休闲",
          children: [
            {
              value: "子1",
              label: "游戏",
            },
            {
              value: "子2",
              label: "魔方",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    setTimeout(this.getData, 3000);
  },
  methods: {
    notify() {
      this.$notify({
        title: "通知标题",
        message: "通知内容",
        type: "success",
        duration: "30000",
        position: "top-right",
      });
    },
    popAlert() {
      this.$msgbox({
        title: "提示",
        message: "详细的提示内容",
        type: "warning",
        showCancelButton: true,
        showConfirmButton: true,
        showInput: true,
      });
    },
    popTip() {
      this.$message({
        message: "提示内容",
        type: "warning",
      });
    },
    closeTag(index) {
      this.tags.splice(index, 1);
    },
    showInput() {
      this.show = true;
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.tags.push(inputValue);
      }
      this.show = false;
      this.inputValue = "";
    },
    getData() {
      this.msg = "这里是请求到的数据";
      this.loading = false;
    },
    queryData(queryString, callback) {
      let array = [];
      if (queryString.length > 0) {
        array.push({ value: queryString });
      }
      array.push(
        ...[
          { value: "衣服" },
          { value: "裤子" },
          { value: "帽子" },
          { value: "鞋子" },
        ]
      );
      callback(array);
    },
    selected(obj) {
      alert(obj.value);
    },
    format(value) {
      return `${value}%`;
    },
  },
};
</script>
<style scoped>
#div {
  padding: 40px;
}
</style>
```

### 11.2如何在一个Vue CLI项目中运行vue文件

场景：在components文件夹下写了几个vue小demo，怎么在项目运行起来看到效果呢？这里以我的为例，我在components文件夹下有两个vue demo一个是element plus的一些样式实现，另一个是基于vue axios的天气预报demo

#### 11.2.1依赖，运行项目就不说了

#### 11.2.2修改App.vue

```vue
<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld

  }
}
</script>
```

说明：首先要在App.vue引入你的vue文件，比如：

```
import HelloWorld from './components/HelloWorld.vue'
```



```
import Weather from './components/Weather.vue';
```

这里像HelloWorld，Weather就是你给组件起的名字，可以随便起，之后挂载组件用

然后，要在

```
<template></template>
```

模板底下挂载你的组件，即

```
<template>
  <HelloWorld />
</template>

或者


<!-- <template>
  <Weather />
</template>
```

当然使用自定义组件也可以

然后*export default*定义如下：

```
export default {
  name: 'App',
  components: {
    HelloWorld

  }
}


或者
export default {
  name: 'App',
  components: {
    Weather
  }
}
```

name默认的不用动，在components下写上你给组件起的名称即可

然后，启动项目

![](https://github.com/cai-04/vue/blob/main/image/image-20230119170111934.png)



![](https://github.com/cai-04/vue/blob/main/image/image-20230119170145633.png)



看到效果已经正常显示了。

## 十二、基于Vue的网络框架——vue-axios的应用

### 12.1使用vue-axios请求天气数据

#### 12.1.1使用互联网上免费的数据服务

[“聚合数据”](https://www.juhe.cn)

申请一个天气预报的API

![](https://github.com/cai-04/vue/blob/main/image/image-20230118112343802.png)

使用他提供的API[工具测试](https://www.juhe.cn/box/index/id/73)

![](https://github.com/cai-04/vue/blob/main/image/image-20230118112611231.png)

填写城市

```
请求地址：http://apis.juhe.cn/simpleWeather/query
请求参数：city=%E5%A4%AA%E5%8E%9F&key=3775825b******9463fa61
请求方式：GET
Header： 
   Content-Type：application/x-www-form-urlencoded
   
   
{
	"reason":"查询成功!",
	"result":{
		"city":"太原",
		"realtime":{
			"temperature":"-5",
			"humidity":"44",
			"info":"晴",
			"wid":"00",
			"direct":"东南风",
			"power":"2级",
			"aqi":"144"
		},
		"future":[
			{
				"date":"2023-01-18",
				"temperature":"-10\/2℃",
				"weather":"晴",
				"wid":{
					"day":"00",
					"night":"00"
				},
				"direct":"西南风"
			},
			{
				"date":"2023-01-19",
				"temperature":"-14\/1℃",
				"weather":"晴",
				"wid":{
					"day":"00",
					"night":"00"
				},
				"direct":"西北风"
			},
			{
				"date":"2023-01-20",
				"temperature":"-13\/0℃",
				"weather":"晴",
				"wid":{
					"day":"00",
					"night":"00"
				},
				"direct":"南风"
			},
			{
				"date":"2023-01-21",
				"temperature":"-11\/5℃",
				"weather":"晴",
				"wid":{
					"day":"00",
					"night":"00"
				},
				"direct":"西风转西南风"
			},
			{
				"date":"2023-01-22",
				"temperature":"-16\/1℃",
				"weather":"晴",
				"wid":{
					"day":"00",
					"night":"00"
				},
				"direct":"西北风转西南风"
			}
		]
	},
	"error_code":0
}
```

参数key:应用的key值

city:要查询城市的名称（urlencode编码）

#### 12.1.2使用vue-axios进行数据请求

axios本身是一个基于promise的HTTP客户端工具

安装vue-axios模块

```
npm install --save axios vue-axios
```

检查package.json文件依赖是否成功写入

在main.js文件中进行导入和注册

```js
// 导入vue-axios木块
import VueAxios from 'vue-axios'
import axios from 'axios';
// 导入我们自定义的根组件
import App from './App.vue'
// 挂载根组件
const app = createApp(App)
// 注册根组件
app.use(VueAxios, axios)
app.mount('#app')
```

请求测试：

```vue
methods: {
        requestData() {
            let city = encodeURI(this.city)
            let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503****`
            this.axios.get(api).then((response)=>{
                console.log(response)
            })
        }
```

产生了跨域请求，会请求失败

解决：更改全局配置（vue.config.js）

```js
module.exports = {
  devServer: {
    proxy: {
      // 对以/myApi开头的请求进行代理
      '/myApi': {
        // 将请求目标指定到接口服务地址
        target: 'http://apis.juhe.cn/',
        // 设置允许跨域
        changeOrigin: true,
        // 设置非https请求
        secure:false,
        // 重写路径，将/myApi即之前的内容清除
        pathRewrite:{
					'^/myApi':''  
				}
      }
    }
  }
}
```

```vue
methods() {
        requestData() {
            let city = "**"
            let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503****`
            this.axios.get("/myApi" + api).then((response)=>{
                console.log(response.data)
            })
        }
```

将请求的API接口前的地址强制替换成了字符串“/myApi”，这样请求就能进入我们配置的代理逻辑中。

发起请求时，需要将城市进行URL编码

使用vue-axios进行数据的请求非常简单，在组件内部直接使用this.axios.get方法即可发起GET请求

this.axios.post方法发起POST请求

方法会返回Promise对象

### 12.2vue-axios实用功能介绍

#### 12.2.1通过配置的方式进行数据i请求

vue-axios提供了许多快捷的请求方法

GET请求

```
axios.get(url[, config])
```

- url参数：请求的接口
- config参数：选填，用来配置请求的额外选项

```
//快捷发起POST请求，data设置请求的参数
axios.post(url[, data[, config]])
//快捷发起DELETE请求
axios.delete(url[, config])
//快捷发起HEAD请求
axios.head(url[, config])
//快捷发起OPTIONS请求
axios.options(url[, config])
//跨界发起PUT请求
axios.put(url[, data[, config]])
//快捷发起PATCH请求
axios.patch(url[, data[, config]])
```

自己配置时使用方法与使用快捷方法一致，在配置时必须设置请求的method方法

```vue
let city = "太原"
city = encodeURL(city)
            let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503****`
            this.axios({
				method:'get',
				url:"/myApi" + api,
}).then((response)=>{
                console.log(response.data)
            })
```

在同一个项目中使用的请求很多配置都是相同的，可以创建一个新的axios请求示例，之后所有的请求都使用这个实例来发起，实力本身的配置会与快捷方法的配置合并

```vue
//统一配置URL前缀、超时时间和自定义的header
const instance =this. axios.create({
	baseURL:'/myApi',
	timeout: 1000,
	headers {'X-Custom-Header': 'custom'}
});
let city = "太原"
city = encodeURL(city)
            let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503****`
            instance.get(api).then((response)=>{
                console.log(response.data)
            })
```

让某些配置作用于所有请求，需要重设axios的默认配置，可以使用axios的defaults属性进行配置

```vue
this.axios.defaults.baseURL='/myApi'
let city = "**"
city = encodeURL(city)
            let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503****`
            this.axios.get(api).then((response)=>{
                console.log(response.data)
            })
```

对请求配置进行合并时，会按照一定的优先级顺序，

```
axios默认配置 < defaults属性配置 < 请求时的config参数配置
```

#### 12.2.2请求的配置与响应数据结构

配置对象对请求进行配置

配置对象可配置的参数

| 参数              | 意义                                     | 值                                                           |
| ----------------- | ---------------------------------------- | ------------------------------------------------------------ |
| url               | 设置请求的接口URL                        | 字符串                                                       |
| method            | 设置请求方法                             | 字符串， 默认为'get'                                         |
| baseURL           | 设置请求的接口前缀， 会拼接在URL之前     | 字符串                                                       |
| transformRequest  | 用来拦截请求，在发起请求前进行数据的修改 | 函数， 此函数会传入data、headers两个参数， 将修改后的data进行返回即可 |
| transformResponse | 用来拦截请求回执，在收到请求回执后会调用 | 函数， 此函数会传入data作为参数， 将修改后的data进行返回即可 |
| headers           | 自定义请求头数                           | 对象                                                         |
| paramsSerializer  | 自定义参数的序列化方法                   | 函数                                                         |
| data              | 设置请求要发送的数据                     | 字符、对象、数组等                                           |
| timeout           | 设置请求的超时时间                       | 数值，单位为毫秒，若设置为0则永不超时                        |
| withCredentials   | 设置跨域请求时是否需要凭证               | 布尔值                                                       |
| auth              | 设置用户信息                             | 对象                                                         |
| responseType      | 设置响应数据的数据类型                   | 字符串， 默认为'json'                                        |
| responseEncoding  | 设置响应数据的编码方式                   | 字符串，默认为'utf8'                                         |
| maxContentLength  | 设置允许响应的最大字节数                 | 数值                                                         |
| maxBodyLength     | 设置请求内容的最大字节数                 | 数值                                                         |
| validateStatus    | 自定义请求结束的状态是成功还是失败       | 函数，会传入请求到的status状态码作为参数，需要返回布尔值决定请求是否成功 |

当一个请求被发出后，axios会返回一个Promise对象，通过Promise对象可以异步地等待数据返回，axios返回到数据是一个包装好的对象

| 属性       | 意义                       | 值     |
| ---------- | -------------------------- | ------ |
| data       | 接口服务返回的响应数据     | 对象   |
| status     | 接口服务返回的HTTP状态码   | 数值   |
| statusText | 接口服务返回的HTTP状态信息 | 字符串 |
| headers    | 响应头数据                 | 对象   |
| config     | axios 设置的请求配置信息   | 对象   |
| request    | 请求实例                   | 对象   |

#### 12.2.3拦截器的使用

拦截器：允许开发者在请求发起前或请求完成后进行拦截

例如：在请求发起前需要激活页面的Loading特效，在请求完成后移除Loading特效，同时如果请求到结果是异常的，需要进行一个弹窗提示

开始前拦截

```
this.axios.interceptors.request.use((config)=>{
	alert("请求将要开始")
	return config
},(error)=>{
	alert("请求出现错误")
	return Promise.reject(error)
})
this.axios.get(api).then((response)=>{
                console.log(response.data)
})
```

开始后拦截

```
this.axios.interceptors.response.use((response)=>{
	alert(response.status)
	return response
},(error)=>{
	alert("请求出现错误")
	return Promise.reject(error)
})
```

对响应数据进行修改，将修改后的数据返回给请求调用处使用

请求拦截器添加是和axios请求实例绑定的，后续此实例发起的请求都会被拦截器拦截，但是可以使用如下方式在不需要拦截器的时候将其移除

```
let i = this.axios.interceptors.request.use((config)=>{
	alert("请求将要开始")
	return config
},(error)=>{
	alert("请求出现错误")
	return Promise.reject(error)
})
this.axios.interceptors.request.eject(i)
```

### 12.3实现一个天气预报应用

```vue
<template>
    <el-container class="container">
        <el-header>
            <el-input placeholder="请输入" class="input" v-model="city">
                <template #prepend>城市名：</template>
            </el-input>
        </el-header>
        <el-main class="main">
            <div class="today">
                今天：
                <span>{{this.todayData.weather ?? this.plc}} {{this.todayData.temperature ?? this.plc}}</span>
                <span style="margin-left:20px">{{this.todayData.direct ?? this.plc}}</span>
                <span style="margin-left:100px">{{this.todayData.date}}</span>
            </div>
            <div class="real">
                <span class="temp">{{this.realtime.temperature ?? this.plc}}°</span>
                <span class="realInfo">{{this.realtime.info ?? this.plc}}</span>
                <span class="realInfo" style="margin-left:20px">{{this.realtime.direct ?? this.plc}}</span>
                <span class="realInfo" style="margin-left:20px">{{this.realtime.power ?? this.plc}}</span>
            </div>
            <div class="real">
                <span class="realInfo">空气质量：{{this.realtime.aqi ?? this.plc}}°</span>
                <span class="realInfo" style="margin-left:20px">湿度：{{this.realtime.humidity ?? this.plc}}</span>
            </div>
            <div class="future">
                <div class="header">5日天气预报</div>
                <el-table :data="futureData" style="margin-top:30px">
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="temperature" label="温度"></el-table-column>
                    <el-table-column prop="weather" label="天气"></el-table-column>
                    <el-table-column prop="direct" label="风向"></el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    mounted () {
        this.axios.defaults.baseURL = '/myApi'
        this.requestData()
    },
    data() {
        return {
            city:"上海",
            weatherData:{},
            todayData:{},
            plc:"暂无数据",
            realtime:{},
            futureData:[]
        }
    },
    watch: {
        city() {
            this.requestData()
        }
    },
    methods: {
        requestData() {
            let city = encodeURI(this.city)
            let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503bbfe`
            this.axios.get(api).then((response)=>{
                this.weatherData = response.data
                this.todayData = this.weatherData.result.future[0]
                this.realtime = this.weatherData.result.realtime
                this.futureData = this.weatherData.result.future
                console.log(response.data)
            })
        }
    }
}
</script>

<style>

.container {
    background: linear-gradient(rgb(13, 104, 188), rgb(54, 131, 195));
}

.input {
    width: 300px;
    margin-top: 20px;
}

.today {
    font-size: 20px;
    color: white;
}

.temp {
    font-size: 79px;
    color: white;
}

.realInfo {
    color: white;
}

.future {
    margin-top: 40px;
}

.header {
    color: white;
    font-size: 27px;
}

</style>
```

## 十三、第十二章Vue路由管理

　　Vue路由是用来管理页面切换或跳转的一种方式。Vue十分适合用来创建单页面应用。所谓单页面应用，不是指“只有一个用户页面”的应用，而是从开发角度上讲的一种架构方式，单页面只有一个主应用入口，通过组件的切换来渲染不同的功能页面。当然，对于组件切换，我们可以借助Vue的动态组件功能，但其管理起来非常麻烦，且不易维护。幸运的是，Vue有配套的路由管理方案——Vue Router,使得我们可以更加自然地进行功能页面的管理。

### 13.1Vue Router的安装与简单使用

#### 13.1.1Vue Router的安装

CDN方式

```
https://unpkg.com/vue-router@4
```

NPM方式(Vue CLI)

```
npm insatll vue-router@4 -s
```

版本本书为4.x.x

package.json

```js
 "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0",
    "vue-router": "^4.0.10"
  }
```



#### 13.1.2一个简单的Vue Router使用示例

路由的作用：页面管理

实际应用中：将定义好的Vue组件绑定到指定的路由，然后通过路由指定在何时或何处渲染这个组件

```vue
<template>
  <h1>示例页面1</h1>
</template>

<script>
export default {
};
</script>
```



```vue
<template>
    <h1>示例页面2</h1>
</template>

<script>
export default {

};
</script>
```



修改App.vue

router-link组件是一个自定义的链接组件，它比a标签强大很多，其允许在不重新加载页面的情况下更改页面的URL。

router-view用来渲染与当前URL对应的组件，我们可以将其放在任何位置。例如：带顶部导航栏的应用，其页面主体部分就可以放置router-view组件，通过导航栏上按钮的切换来替换内容组件

```vue
<template>
   <h1>HelloWorld</h1>
	<p>
        <!-- route-link是路由跳转组件，用to来指定要跳转的路由-->
        <router-link to="/demo1">页面1</router-link>
        <br/>
        <router-link to="/demo2">页面2</router-link>
    </p>
		 <!-- route-view是路由的页面出口，路由匹配到的组件会渲染在此-->
		<router-view></router-view>
</template>

<script>

export default {
 name: 'App',
 components: {
     
 }
    
  
}
</script>
```

修改main.js

```js
// 导入vue框架中的createApp方法
import { createApp } from 'vue'
// 导入Vue Router模块
import { createRouter, createWebHashHistory } from 'vue-router'
// 导入我们自定义的根组件
import App from './App.vue'

import Demo1 from './components/Demo1.vue'
import Demo2 from './components/Demo2.vue'

// 挂载根组件
const app = createApp(App)
// 定义路由
const routes = [
    {
      path: '/demo1', component: Demo1,
    },
    {
      path: '/demo2', component: Demo2,
    },
  ]
// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
//注册路由
app.use(router)
//进行应用挂载
app.mount('#app')
```

### 13.2带参数的动态路由

不同的路由可以匹配到不同的组件，从而实现页面的切换

将同一类型的路由匹配到同一个组件，通过路由的参数来控制组件的渲染

#### 13.2.1路由参数匹配

$route属性获取全局的路由对象，路由定义的参数可以在此对象的params属性中获取到

```vue
<template>
    <h1>姓名:{{$route.params.username}}</h1>
    <h2>id:{{$route.params.id}}</h2>
</template>
<script>
export default {
};
</script>
```

定义路由的路径path时，使用冒号来标记参数（username，id都是路由参数）

main.js

```js
 const routes = [
   {
     path: '/user/:username/:id', component: User
   }
   ]
```

以下路径会被自动匹配

“小王”会被解析到路由的username属性

“8888”会被解析到路由的id属性

```
/user/小王/8888
```

```
http://localhost:port/#/user/小王/8888
```

在使用带参数的路由时，对应相同组件的路由在进行导航切换时，相同的组件并不会被销毁再创建

页面切换时，组件的生命周期方法都不会被再次调用，如果需要通过路由参数来请求数据，之后渲染页面需要特别注意，不能在生命周期方法中进行数据请求逻辑。例如，修改App.vue组件的模板代码如下：

```vue
<template>
   <h1>HelloWorld</h1>
	<p>
        <!-- route-link是路由跳转组件，用to来指定要跳转的路由-->
        <router-link to="/user/小王/8888">小王</router-link>
        <br/>
        <router-link to="/user/小李/6666">小李</router-link>
    </p>
		 <!-- route-view是路由的页面出口，路由匹配到的组件会渲染在此-->
		<router-view></router-view>
</template>
```

修改User.vue

```vue
<template>
    <h1>姓名:{{$route.params.username}}</h1>
    <h2>id:{{$route.params.id}}</h2>
</template>
<script>
export default {
    mounted() {
        alert(`组件加载，请求数据。路由参数为name:${this.$route.params.username} id:${this.$route.params.id}`)
    }
};
</script>
```

User组件中显示的用户名称和用户编号都会实时地刷新，但是alert弹窗只有在User组件第一次加载时才会弹出，后续不会再弹出。

对于这种场景，我们可以采用导航守卫的方式来处理，每次路由参数有更新，都会回调守卫函数。修改User.vue组件中的JavaScript代码如下：

```js
export default {
   beforeRouteUpdate(to,from) {
       console.log(to,from)
       alert(`组件加载，请求数据。路由参数为name:${this.$route.params.username} id:${this.$route.params.id}`)
    }
};
```

当同一个路由的参数发生变化时， 也会有alert弹出提示。

beforeRouteUpdate函数在路由将要更新时会调用，其会传入两个参数， to是更新后的路由对象，from是更新前的路由对象。

#### 13.2.2路由匹配的语法规则

路由参数匹配，Vue Router允许参数内部使用正则表达式来进行匹配

```vue
<template>
	<h1>用户中心</h1>
    <h1>姓名:{{$route.params.username}}</h1>  
</template>
<script>
</script>
```



```vue
<template>
    <h1>用户设置</h1>
    <h2>id:{{$route.params.id}}</h2>
</template>
<script>
</script>
```

将User组件作为用户中心页面来使用，UserSetting组件作为用户设置页面来使用

- 用户中心页面：用户名参数
- 用户设置页面：用户编号参数

```js
 const routes = [
   {
     path: '/user/:username', component: User
   },
   {
     path: '/user/:id', component: UserSetting
   }
   ]
```

无法访问用户设置页面，因为所有符合UserSetting组件的路由规则同时也符合User组件

解决：加一个静态的前缀路径

```js
const routes = [
   {
     path: '/user/info/:username', component: User
   },
   {
     path: '/user/setting/:id', component: UserSetting
   }
   ]
```

解决2：用户中心页面与用户设置页面所需要参数的类型有明显差异，用户编号必须是数值，用户名不能是纯数字

正则约束来实现不同类型的参数匹配到对应的路由组件

“/user/小王”匹配到User组件

“/user/6666”匹配到UserSetting组件

正则表达式：“*”可以用来匹配0个或多个，“+”可以用来匹配1个或多个

```
 const routes = [
   {
     path: '/user/:username', component: User
   },
   {
     path: '/user/:id(\\d+)', component: UserSetting
   }
   ]
```

在路由定义时使用这两个符号可以实现多级参数

```vue
<template>
    <h1>类别</h1>
    <h2>{{$route.params.cat}}</h2>
</template>
<script>
</script>
```

main.js

```js
import Category from './components/Category.vue'
{ path: '/category/:cat*', component: Category }
```

采用多级匹配的方法来定义路由时，路由中传递参数会自动转换成一个数组

例如：路由“/category/一级/二级/三级”，cat参数为一个数组，其数据为[“一级”,”二级”,”三级”]

参数可选传递，例如用户中心页面，传了用户名参数时，其需要渲染登陆后的用户中心状态，没有传用户名参数时，其可能需要渲染未登录时的状态

username参数定义为可选

```js
{ path: '/user/:username?', component: User }
```

#### 13.2.3路由的嵌套

真正渲染路由的地方只有一个：<router-view></router-view>，即顶级路由

子组件的路由需求由Vue Router提供的嵌套路由技术实现

```vue
<template>
    <h1>好友列表</h1>
    <h1>好友人数：{{$route.params.count}}</h1>
</template>
<script>
</script>
```

这个组件只在用户中心使用，将其作为一个子路由定义

```vue
<template>
    <h1>中户中心</h1>
    <h1>姓名：{{$route.params.username}}</h1>
    <router-view></router-view>
</template>
<script>
</script>
```

User组件由路由管理，在User组件内部再使用<router-view></router-view>标签定义的是二级路由的页面出口

```js
import Friends from './components/Friends.vue'

const routes = [
  {
    path: '/user/:username?',
    component: User,
    children: [
      {
        path: 'friends/:count',
        component: Friends
      }
    ]
  }
]
```

之前在定义路由时都只使用了path和component属性，其实每个路由对象本身也可以定义子路由对象。理论上讲，可以根据自己的需要来定义路由嵌套的层数，通过路由的嵌套，可以更好地对路由进行分层管理。

代码实例

```
/user/小王/friends/6
```

### 13.3页面导航

导航本身是指页面间的跳转和切换。

router-link组件就是一种导航组件。我们可以设置其属性to来指定要执行的路由。

#### 13.3.1使用路由方法

当我们成功向Vue应用注册路由后，在任何Vue实例中，都可以通过$route属性访问路由对象通过调用路由对象的push方法可以向history栈中添加一个新的记录。也就是说，用户可以通过浏览器的返回按钮返回上一个路由的URL。

```vue
<template>
   <h1>HelloWorld</h1>
	<p>
        <el-button type="primary" @click="toUser">用户中心</el-button>
        <router-view></router-view>
    </p>
<script>
export default {
  methods:{
    toUser() {
        this.$route.push({
            path:"/user/小王"
        })
    }
  }
}    
    </script>
</template>
```

使用按钮组件代替之前的router-link组件，在按钮的单击方法中进行路由的跳转操作。

push方法可以接收一个对象，对象中通过path属性配置其URL路径。push方法也支持直接传入一个字符串作为URL路径

```js
this.$router.push("/user/小王")
```

也可以通过路由名加参数的方式让VueRouter自动生成URL,要使用这种方法进行路由跳转，在定义路由的时候需要对路由进行命名　

```js
const routes =[
  {
　　path: '/user/: username?',
　　name: 'user',
　　component:User
　}
] 
```

进行路由跳转：

```js
this.$router.push({
　　name: 'user',
　　params:{
　　username:'小王'
  }
  })
```

路由查询参数，可以通过query属性进行设置　

```js
//会被处理成/user?name=xixi
　　this.$router.push({
　　path: '/user',
　　query:{
　　name:'xixi'
　　}
　})
```

在调用push方法配置路由对象时，如果设置了path属性，则params属性会被自动忽略。

push方法本身也会返回一个Promise对象，可以用其来处理路由跳转成功之后的逻辑　　

```js
this.Srouter.push({
　　name:'user',
　　params: {
　　username:'小王'
　　}
　　}).then()=>{
　　this.$message({
　　message:"跳转成功",
　　type:"success",
　　});
　　})
```

#### 13.3.2导航历史控制

使用router-link组件或push方法切换页面时，新的路由实际上会被放入history导航栈中，用户可以灵活地使用浏览器的前进和后退功能在导航栈路由中进行切换。

不希望导航栈中的路由增加，这时可以配置replace参数或直接调用replace方法来进行路由跳转，这种方式跳转的页面会直接替换当前的页面,即跳转前页面的路由从导航栈中删除。　

```js
this.$router.push({
　　path: '/user/小王',
　　replace:true
})
this.$router.replace({
　　path:'/user/小王'
})
```

Vue Router提供了另一个方法让我们可以灵活地选择跳转到导航栈中的某个位置　　

```js
//跳转到后1个记录
this.$router.go(1)
//跳转到后3个记录
this.$router.go(3)
//跳转到前1个记录
this,$router.go(-1)
```

### 13.4关于路由的命名

在定义路由时，除了path之外，还可以设置name属性，name属性为路由提供了名称,使用名称进行路由切换比直接使用path进行切换有很明显的优势:避免硬编码URL、可以自动处理参数的编码等。

#### 13.4.1使用名称进行路由切换

与使用path路径进行路由切换类似。router-link组件和push方法都可以根据名称进行路由切换。

```js
this.$router.push({
　　name: 'user',
　　params:{
　　username:"小王"
   }
})
```

　　使用router-link组件切换的示例如下：

```vue
　<router-link :to="{ name: 'user', params: { username:'小王’}}">小王</router-link>
```

#### 13.4.2路由视图命名

路由视图命名是指对router-view组件进行命名.

router-view组件用来定义路由组件的出口,路由支持嵌套，router-view可以进行嵌套。通过嵌套，允许Vue应用中出现多个router-view组件。

需要同级地展示多个路由视图，例如顶部导航区和主内容区两部分都需要使用路由组件，这时候就需要同级地使用router-view组件，要定义同级的每个router-view要展示的组件，可以对其进行命名。

```vue
<template>
　　<el-container>
　　  <el-header height="80px">
　　    <router-view name="topBar"></router-view>
　　  </el-header>
　　<el-main>
　　  <router-view name="main"></router-view>
　　</el-main>
　</el-container>
</template>
```

　　在mian.js文件设置如下：

```js
　const routes =[
　　path: '/home/:username/:id',
　　components: {
　　topBar: User,
　　main: UserSetting
     }
   }
]
```

之前定义路由时,一个路径只对应一个组件,其实也可以通过I components来设置一组组件,components需要设为一个对象，其中的键表示页面中路由视图的名称，值为要渲染的组件。在上面的例子中，页面的头部会被渲染为User组件，主体部分会被渲染为UserSetting组件
　　对于没有命名的router-view组件，其名字会被默认分配为default,如果编写组件模板如下：

```vue
<template>
　　<el-container>
　　  <el-header height=80px">
　　    <router-view name="topBar"></router-view>
　　  </el-header>
　　<el-main>
　　  <router-view</router-view>
　　</el-main>
　</el-container>
</template>
```

　　使用如下方式定义路由效果是一样的：
　　

```js
const routes =[
{
　　path: '/home/:username/:id',
　　components:{
　　	topBar: User,
　　	default:Usersetting
       }
     }
]
```

在嵌套的子路由中，也可以使用视图命名路由，对于结构复杂的页面，可以先将其按照模块进行拆分，梳理清晰路由的组织关系再进行开发。

#### 13.4.3使用别名

别名提供了一种路由路径映射的方式，也就是说我们可以自由地将组件映射到一个任意的路径上，而不用受到嵌套结构的限制。

```js
const routes = [
　　{ path: '/user/:id(\\d+)', component:UserSetting, alias: '/setting/:id' }
  ]
```

```
http:/localhost:8080/#/setting/6666/
http:/localhost:8080/#/user/6666/
```

需要注意，别名和重定向并不完全一样，别名不会改变用户在浏览器中输入的路径本身，对于多级嵌套的路由来说，可以使用别名在路径上对其进行简化。如果原路由有参数配置，一定要注意别名也需要对应地包含这些参数。在为路由配置别名时，alias属性可以直接设置为别名字符串，也可以设置为数组同时配置一组别名，例如：

```js
const routes = [
　　{ path: '/user/:id(\\d+)', component: UserSetting, alias: ['/setting/:id','/s/:id']}
  ]
```

#### 13.4.4路由重定向

重定向也是通过路由配置来完成的，与别名的区别在于，重定向会将当前路由映射到另一个路由上，页面的URL会产生改变。例如当用户访问路由'/d/1'时，需要页面渲染'/demo1路由对应的组件

采用静态的方式配置路由重定向

```js
const routes =[
　　{ path: '/demol', component: Demo1 },
　　{ path: '/d/1', redirect: '/demo1'},
]
```

redirectt也支持配置为对象,设置对象的name属性可以直接指定命名路由,例如:

```js
　const routes =[
　　{ path: '/demol', component: Demo1, name: 'Demo'},
　　{ path: '/d/1', redirect: {name : 'Demo'}}
  ]
```

在实际开发中，更多时候会采用动态的方式配置重定向，例如对于需要用户登录才能访问的页面，当未登录的用户访问此路由时，我们自动将其重定向到登录页面

```js
const routes =[
　　{ path: '/demol', component: Demol, name: 'Demo'},
　　{ path: '/demo2', component: Demo2 }
　　{ path: '/d', redirect: to => {
　　console.log(to)  //to是路由对象
　　//随机数模拟登录状态
　　let login = Math. random() > 0.5
　　if(login)(
　　return  {  path:'/demo1'  }
　　}  else  {
　　return  {  path:'/demo2'  }
	}
     }
  }
]
```

### 13.5关于路由传参

在进行路由跳转时，可以通过参数的传递来进行后续的逻辑处理。在组件内部,之前使用$route.params的方式来获取路由传递的参数，这种方式虽然可行，但组件与路由紧紧地耦合在了一起，并不利于组件的复用性。

路由的另一种传参方式——使用属性的方式进行参数传递。

```vue
<template>
　　<h1>用户设置</h1>
　　<h2>id:{$route.params.id}}</h2>
</template>
<script>
</script>
```

由于之前在组件的模板内部使用了$route属性，这导致此组件的通用性大大降低，首先将其所有耦合路由的地方去除掉
```vue
<template>
　　<h1>用户设置</h1>
　　<h2>id:{{id}}</h2>
</template>
<script>
　　export default {
　　props:[
　　'id'
　　]
  }
</script>
```

　　现在，UserSetting组件能够通过外传递的属性来做内部逻辑，后面需要做的只是将路由的传参映射到外部属性上。Vue Router默认支持这一功能。

路由配置方式

在定义路由时，将props设置为true，则路由中传递的参数会自动映射到组件定义的外部属性

```js
const routes = [
　　{ path: '/user/:id(\\d+)', component: UserSetting, props:true }
 ]
```

对于有多个页面出口的同级命名视图，我们需要对每个视图的props单独进行设置　

```js
const routes =[
　　{
　　path: '/home/:username/:id',
　　components: {
　　  topBar: User,
　　  default: UserSetting,
  },
　　props: {topBar:true, default:true}
  }
]
```

如果组件内部需要的参数与路由本身并没有直接关系，也可以将props设置为对象，此时props设置的数据将原样传递给组件的外部属性

此时路由中的参数将被弃用，组件中获取到的id属性值将固定为“000”。

```js
const routes = [
　　{ path: '/user/:id(\\d+)', component: UserSetting, props:{id:'000'} },
 ]
```

props还有一种更强大的使用方式，可以直接将其设置为一个函数，函数中返回要传递到组件的外部属性对象，这种方式动态性很好

```js
const routes =[
　　{ path: '/user/:id(\\d+)', component: UserSetting, props:route => {
      return{
　　		id:route.params.id,
　　		other: 'other'
      }
  }}
 ]
```

### 13.6路由导航守卫

导航守卫的主要作用是在进行路由跳转时决定通过此次跳转或拒绝此次跳转。在Vue Router中有多种方式来定义导航守卫。

#### 13.6.1定义全局的导航守卫

在main.js文件中,我们使用createRouter方法来创建路由实例,此路由实例可以使用beforeEach方法来注册全局的前置导航守卫,之后当触发导航跳转时,都会被此导航守卫捕获,示例如下:

当注册的beforeEach方法返回的是布尔值时，其用来决定是否允许此次导航跳转，所有的路由跳转都将被禁止。

```js
const router = createRouter({
　　history: createWebHashHistory(),
　　routes: routes  //我们定义的路由配置对象
　　router.beforeEach((to, from) => {
　　console.log(to)  //将要跳转到的路由对象
　　console.log(from)  //当前将要离开的路由对象
　　return false  //返回true表示允许此次跳转，返回false表示禁止此次跳转
})
    app.use(router)
```

更多时候，我们会在beforeEach方法中返回一个路由配置对象来决定要跳转的页面，这种方式更加灵活.

例如可以将登录态校验的逻辑放在全局的前置守卫中处理

```js
const routes = [
　　{ path: '/user/:id(\\d+)',name:'setting', component:UserSetting,props:true },
　　]
　　const router = createRouter({
　　history: createWebHashHistory(),
　　routes: routes  //我们定义的路由配置对象
  })
　　router,beforeEach((to,from)=> {
　　console.log(to)  //将要跳转到的路由对象
　　console.log(from)  //当前将要离开的路由对象
　　if ( to.name != 'setting') {  //防止无限循环
　　return {name:'setting', params:{id:"000"} }  //返回要跳转到的路由
  }
})
```

与定义全局前置守卫类似，也可以注册全局的导航后置回调。与前置守卫不同的是，后置回调不会改变导航本身，但是其对页面的分析和监控十分有用。示例如下：

```js
const router = createRouter({
　　history: createWebHashHistory(),
　　routes: routes  //我们定义的路由配置对象
　　router.afterEach(to, from, failure)=> {
　　console.log("跳转结束")
　　console.log(to)
　　console.log(from)
    console.log(failure)
})
```

　路由实例的afterEach方法中设置的回调函数除了接收to和from参数外，还会接收一个failure参数,通过它开发者可以对导航的异常信息进行记录。

#### 　　13.6.2为特定的路由注册导航守卫

如果只有特定的场景需要在页面跳转过程中实现相关逻辑，也可以为指定的路由注册导航守卫。

有两种注册方式:

- 一种是在配置路由时进行定义，

- 另一种是在组件中进行定义。

在对导航进行配置时，可以直接为其设置beforeEnter属性，示例如下：

当用户访问“/demo1”路由对应的组件时都会被拒绝掉。需要注意，beforeEnter设置的守卫只有在进入路由时会触发，路由的参数变化并不会触发此守卫。

```js
const routes = [
　{
     path: '/demol', component: Demol, name: 'Demo', beforeEnter: router =>{
         console.log(router)
　　		return false
     }
 }
]
```


　　在编写组件时，也可以实现一些方法来为组件定制守卫函数，示例代码如下：

```vue
<template>
　　<h1>示例页面1</h1>
</template>
<script>
export default {
　　beforeRouteEnter(to, from) {
　　console.log(to, from, "前置守卫");
　　return true;
      },
　　beforeRouteUpdate(to, from)(
　　console.log(to, from, "路由参数有更新时的守卫");
      }, 
　　beforeRouteLeave(to, from)(
　　console.log(to, from, "离页面");
    },
};
</script>
```

beforeRouteEnter是组件的导航前置守卫，在通过路由将要切换到当前组件时被调用,在这个函数中,可以做拦截操作,也可以做重定向操作,需要注意此方法只有在第一次切换此组件时会被调用，路由参数的变化不会重复调用此方法。beforeRouteUpdate方法在当前路由发生变化时会被调用，例如路由参数的变化等都可以在此方法中捕获到。beforeRouteLeave方法会在将要离开当前页面时被调用。还有一点需要特别注意，在beforeRouteEnter方法中不能使用this来获取当前组件实例，因为在导航守卫确认通过前，新的组件还没有被创建。

如果一定要在导航被确认时使用当前组件实例处理一些逻辑，可以通过next参数注册回调方法，示例如下：

```
beforeRouteEnter(to, from, next) {
　　console.log(to, from, "前置守卫");
　　next((w) => {
　　  console.log(w);  //w为当前组件实例
　　});
　　return true;
　}
```

当前置守卫确认了此次跳转后，next参数注册的回调方法会被执行，并且会将当前组件的实例_作为参数传入。在beforeRouteUpdate和beforeRouteLeave方法中可以直接使用this关键字来获取当前组件实例，无须额外的操作。
　　下面来总结Vue Router导航跳转的全过程。

1. 第1步：导航被触发，可以通过router-link组件触发，也可以通过$router.push或直接改变URL触发。
2. 第2步：在将要失活的组件中调用beforeRouteLeave守卫函数。
3. 第3步：调用全局注册的beforeEach守卫。
4. 第4步：如果当前使用的组件没有变化，调用组件内的beforeRouteUpdate守卫。
5. 第5步：调用在定义路由时配置的beforeEnter守卫函数。
6. 第6步：解析异步路由组件。
7. 第7步：在被激活的组件中调用beforeRouteEnter守卫。
8. 第8步：导航被确认。
9. 第9步：调用全局注册的afterEach守卫。
10. 第10步：触发DOM更新，页面进行更新。
11. 第11步：调用组件的beforeRouteEnter函数汇总next参数注册的回调函数。

### 13.7动态路由

截至目前，我们所有使用到的路由都是采用静态配置的方式定义的，即先在main.is中完成路由的配置，再在项目中使用。但某些情况下，可能需要在运行的过程中动态添加或删除路由，VuRouter中也提供了方法支持动态地对路由进行操作。

#### 13.7.1态添加与删除路由

在Vue Router中，动态操作路由的方法主要有两个：addRoute和removeRoute, addRoute用来动态添加一条路由，对应的removeRoute用来动态删除一条路由。

```vue
<template>
　　<h1>示例页面1</h1>
　　<el-button type="primary" @click="click">跳转Demo2</el-button>
</template>
<script>
import Demo2 from "./Demo2. vue";
export default {
　　created() {
　　  console.log(this);
　　  this.$router.addRoute({
　　    path: "/demo2",
　　    component: Demo2,
    });
  },
　　methods: {
　　click() {
　　this.$router.push("/demo2");
  },
  },
};
</script>
```

我们在Demo1组件中布局了一个按钮元素，在Demo1组件创建完成后，使用addRoute方法动态添加了一条路由，当单击页面上的按钮时，切换到Demo2组件。

修改main.js文件中配置路由的部分：

如果直接在浏览器中访问“/demo2”页面会报错，因为此时注册的路由列表中并没有此项路由记录,但是如果先访问“/demo1"页面,再单击页面上的按钮进行路由跳转,则能够正常跳转。

```js
const router = createRouter({
　　history: createWebHashHistory(),
　　routes: [
　　{
　　path: '/demo1', component: Demo1,
    }
  ]
})
```

在下面几种场景下会触发路由的删除。

1.当使用addRoute方法动态添加路由时，如果添加了重名的路由，旧的会被删除，例如：

路径为“/demo”的路由将会被删除。

```js
this.$router.addRoute({
　　path: "/demo2",
　　component: Demo2,
　　name:"Demo2"
});
　　this.$router.addRoute({
　　path:"/d2",
　　component:Demo2,
　　name:"Demo2" 
  });
```

 在调用addRoute方法时,它其实会返回一个删除回调,我们也可以通过此删除回调来直接删除所添加的路由

```js
　　let call = this.$router.addRoute({
　　path: "/demo2",
　　component: Demo2,
　　name: "Demo2",
  });
　　//直接移除此路由
　　call();
```

另外，对于已经命名的路由，也可以通过名称来对路由进行删除，示例如下：

```js
this.$router.addRoute({
　　path: "/demo2",
　　component: Demo2,
　　name: "Demo2",
});
　　this.$router.removeRoute("Demo2");
```

需要注意，当路由被删除时，其所有的别名和子路由也会同步被删除。在VueRouter中，还提供了方法来获取现有的路由，例如：

- hasRouter方法用来检查当前已经注册的路由中是否包含某个路由
- getRoutes方法用来获取包含所有路由的列表

```js
console.log(this.$router.hasRoute("Demo2"));
console.log(this.$router.getRoutes());
```

## 十四、第十三章Vue状态管理

Vue框架本身就有状态管理的能力，在开发Vue应用页面时，视图上渲染的数据就是通过状态来驱动的。

基于Vue的状态管理框架Vuex,Vuex是一个专为Vue定制的状态管理模块，其集中式地存储和管理应用的所有组件的状态，使这些状态数据可以按照我们预期的方式变化。
　　当然，并非所有Vue应用的开发都需要使用Vuex来进行状态管理，对于小型的、简单的Vue应用，我们使用Vue自身的状态管理功能就已经足够，但是对于复杂度高、组件繁多的Vue应用，组件间的交互会使得状态的管理变得困难，这时就需要Vuex的帮助了。

### 14.1认识 Vuex框架

Vuex采用集中的方式管理所有组件的状态，相较于“集中式”而言，Vue本身对状态的管理是“独立式”的,即每个组件只负责维护自身的状态。

#### 14.1.1关于状态管理

修改App.vue

```vue
<template>
　　<HelloWorld />
</template>
import HelloWorld from './components/HelloWorld.vue'
<script>
export default {
　　name:'App',
　　components: {
　　HelloWorld
  }
}
</script>
```

修改HelloWorld.vue文件如下：
```vue
<template>
　　<h1>计器{{ count }}</h1>
　　<button @click="increment">增加</button>
</template>
<script>
export default{
　　data() {
　　  return {
　　    count:0
　　}
  },
　　methods: {
　　  increment(){
　　    this.count++
    }
  }
}
</script>
```

页面上渲染了一个按钮组件和一个文本标题，当用户单击按钮时，标题上显示的计数会自增。

在Vue应用中，组件状态的管理由如下几部分组成：
　　<ol>1.状态数据</ol>

　　状态数据是指data函数中返回的数据，这些数据自带响应性，由其来对视图的展现进行驱动

<ol>2.视图</ol>

　　视图是指template里面定义的视图模板，其通过声明的方式将状态映射到视图上。

　　<ol>3.动作</ol>

　动作是指会引起状态变化的行为，即上面代码methods选项中定义的方法，这些方法用来改变状态数据，状态数据的改动最终驱动视图的刷新
　　上面3部分的协同工作就是Vue状态管理的核心。总体来看，在这个状态管理模式中，数据的向是单向的、私有的。由视图触发动作，由动作改变状态，由状态驱动视图。
![](https://github.com/cai-04/vue/blob/main/image/u%3D197751472%2C274421958%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPG.jpeg)
　　单向数据流这种状态管理模式非常简洁，对于组件不多的简单Vue应用来说，这种模式非常高效，但是对于多组件复杂交互的场景，使用这种方式进行状态管理就会比较困难。我们来思考下面两种状况：

　　<ul>(1)有多个组件依赖于同一个状态。</ul>

　　<ul>(2)多个组件都可能触发动作变更一个状态。</ul>

对于状况(1)，使用上面所述的状态管理方法很难实现，对于嵌套的多个组件，我们还可以通过传值的方式来传递状态，但是对于平级的多个组件，共享同一个状态是非常困难的。
　　对于状况(2)，不同的组件若要更改同一个状态，最直接的方式是将触发动作交给上层，对于多层嵌套的组件，则需要一层一层地向上传递事件，在最上层统一处理状态的更改，这会使代码的维护难度大大增加。
　　Vuex就是基于这种应用场景产生的，在Vuex中，可以将需要组件间共享的状态抽取出来，以一个全局的单例模式进行管理。在这种模式下，视图无论在视图树中的哪个位置，都可以直接获取这些共享的状态，也可以直接触发修改动作来动态改变这些共享的状态。

#### 14.1.2安装与体验Vuex

NPM方式

```
npm install vuex@next --save
```

在安装过程中，如果有权限相关的错误产生，可以在命令前添加sudo。

在package.json文件中看到相关的依赖配置以及所安装的Vuex的版本

```json
　"dependencies": {
　　"core-js":"^3.6.5",
　　"vue":"^3.0.0",
　　"vuex":"^4.0.2"
 }
```

　　

```vue
<template>
　　<h1>计数器2:{{count}}</h1>
　　<button @click="increment">增加</buttor>
</template>
<script>
export default {
　　data() {
　　  return  {
　　    count:0
　　}
  },
　　methods: {
　　increment() {
　　this.count ++
  }
  }
}
</script>
```

修改App.vue文件如下：
```vue
<template>
　　<HelloWorld />
　　<HelloWorld2 />
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
export default {
	name:'App',
　　components: {
　　HelloWorld,
　　HelloWorld2
　　}
　　}
</script>
```

此时，这两个计数器组件是相互独立的，即单击第1个按钮只会增加第1个计数器的值，单击第2个按钮只会增加第2个计数器的值。如果需要让这两个计数器共享一个状态，且同时操作此状态，则需要Vuex出马。

Vuex框架的核心是store,即仓库。简单理解，store本身就是一个容器，其内存储和管理的应用中需要多组件共享的状态。Vuex中的store非常强大，其中存储的状态是响应式的，若store中的状态数据发生变化，其会自动反映到对应的组件视图上。并且，store中的状态数据并不允许开发者直接进行修改，改变store中状态数据的唯一办法是提交mutation操作，通过这样严格的管理，可以更加方便地追踪每一个状态的变化过程，帮助我们进行应用的调试。

在main.js文件中编写如下代码：　　

```js
import { createApp } from 'vue'
import App from '. /App. vue'
//引入 createStore方法
import { createStore ) from 'vuex'
//创建应用实例
const app= createApp(App)
//创建Vuex仓库store实例
const store = createStore({
　　//定义要共享的状态数据
　　state() {
　　  return {
　　    count:0
    }
  },
　　//定义修改状态的方法
　　mutations: {
　　increment(state) {
　　state.count ++
  }
  }
})
    //注入Vuex的store
　　app.use(store)
　　//挂载应用
　　app.mount('#app')
```

之后就可以在组件中共享count状态了，并且通过提交increment操作来修改此状态。

修改HelloWorld与HelloWorld2组件代码

```vue
<template>
　　<h1>计数器1:{{ this.$store.state.count }}</h1>
　　<button @click="increment">增加</button>
</template>
<script>
export default {
　　methods: {
　　  increment(){
　　    this. $store. commit('increment')
　　}
　　}
}
</script>
```

在组件中使用$store属性可以直接获取到store实例，此实例的state属性中存储着所有共享的状态数据，且是响应式的，可以直接绑定到组件的视图进行使用。当需要对状态进行修改时，需要调用store实例的commit方法来提交变更操作，在这个方法中直接传入要执行更改操作的方法名即可。

### 14.2 Vuex中的一些核心概念

Vuex中的5个核心概念：state、getter、mutation、action和module。

#### 14.2.1 Vuex状态 state

状态实际上就是应用中组件需要共享的数据。在Vuex中采用单一状态树来存储状态数据，也就是说我们的数据源是唯一的。在任何组件中，都可以使用如下方式来获取任何一个状态树中的数据：

```
this.$store.state
```

当组件中所使用的状态数据非常多时，这种写法就会显得比较烦

我们也可以使用Vuex中提供的mapState方法来将其直接映射成组件的计算属性进行使用。由于状态数据本身具有响应性，此将其映射为计算属性后也具有响应性，使用计算属性和直接使用状态数据并无不同。

```vue
<template>
　　<h1>计数器1：{ count }</h1>
　　<button @click="increment">增加</button>
</template>
<script>
import {mapState} from 'vuex'
export default {
　　methods:{
　　  increment() {
　　    this.$store.commit('increment')
    }
  },
　　computed: mapState(['count'])
}
</script>
```

如果组件使用的计算属性的名字与store中定义的状态名字不一致，也可以在mapState中传入对象来进行配置
```vue
<template>
　　<h1>计数器1：{{ countData2 }}</h1>
　　<button @click="increment">增加</button>
</template>
<script>
import {mapState} from 'vuex'
export default {
　　methods: {
　　  increment() {
　　     this.$store. commit('increment')
    }
  },
　　computed: mapstate({
　　//通过字符串映射
　　countData: 'count',
　　//通过函数映射
　　countData2(state) {
　　return state.count
　　}
  })
}
</script>
```

虽然使用Vuex管理状态非常方便，但是这并不意味着需要将组件所有使用到的数据都放在store中，这会使store仓库变得巨大且容易产生冲突。

对于些完全是组件内部使用的数据，还是应该将其定义为局部的状态。

#### 14.2.2 Vuex中的Getter方法

在Vue中，计算属性实际上就是Getter方法，当我们需要将数据处理过再进行使用时，就可以使用计算属性。对于Vuex来说，借助mapState方法，可以方便地将状态映射为计算属性，从而增加一些所需的业务逻辑。

但是如果有些计算属性是通用的，或者这些计算属性也是多组件共享的，此时在这些组件中都实现一遍这些计算方法就显得非常多余。

Vuex允许我们在定义store实例时添加一些仓库本身的计算属性，即Getter方法。
　　修改store定义

```js
const store = createStore({
//定义要共享的状态数据
　　state() {
　　  return {
　　    count:0
    }
  },
　　//定义修改状态的方法
　　mutations: {
　　 increment(state) {
　　    state.count ++
   }
  },
　　getters: {
　　countText (state) {
　　return state.count + "次"
  }
  }
})
```

Getter方法本身也是具有响应性的，当其内部使用的状态发生改变时，其也会触发所绑定组件的更新。

在组件中使用store的Getter数据方法

```vue
<template>
　　<h1>计数器1：{{this.$store.getters.countText }}</h1>
　　<button @click="increment">增加</buttor>
</template>
```

Getter方法中也支持参数的传递，需要让其返回一个函数，在组件对其进行使用时非常灵活

例如修改countText方法

```
　getters: {
　　countText (state) {
　　return (s)=>1 {
　　return state.count + s
　　}
　　}
}
```

通过如下方式对其进行使用即可：

```
this.$store.getters.countText("次")
```

对于Geter方法，Vuex中也提供了一个方法用来将其映射到组件内部的计算属性中

```vue
<template>
　<h1>计数器1：{{ countText("次") }}</h1>
　<button @click="increment">增加</button>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
　　methods: {
　　  increment(){
　　    this.$store.commit('increment')
    }
  },
　　computed: mapGetters([
　　"countText"
　　])
</script>
```

#### 14.2.3Vuex中的Mutation

在Vuex中，修改store中的某个状态数据的唯一方法是提交Mutation。

只需要将数据变动的行为封装成函数，配置在store实例的mutations选项中即可。

Mutation来触发计数器数据的自增

```
mutations: {
　　increment(state)(
　　//变更状态
　　state.count++
　　}
　　}
```

在需要触发此Mutation时，需要调用store实例的commit方法进行提交，其中使用函数名标明要提交的具体修改指令

```
this.$store.commit('increment')
```

在调用commit方法提交修改的时候，也支持传递通参数

```
mutations: {
　　increment(state,n) {
　　  state.count += n
　　  }
　　  }
```

提交修改

```
this.$store.commit('increment', 2)
```

计数器的自增步长已经变成了2。

虽然Mutation方法中参数的类型是任意的，但是我们最好使用对象来作为参数，这样做可以很方便地进行多参数的传递，也支持采用对象的方式进行Mutation方法的提交。　

```
mutations: {
　　increment(state,payload) {
　　  state.count += payload.count
　　  }
　　  }
```

之后，就可以使用如下风格的代码来进行状态修改的提交了：

type表示要调用的修改状态的方法名，其他的属性即要传递的参数。

```
this.$store.commit({
	type:'increment',
	count:2
	})
```

#### 14.2.4 Vuex中的 Action

修改store仓库中的状态数据，需要通过提交Mutable来实现。但是Mutation有一个很严重的问题：其定义的方法必须是同步的，即只能同步地对数据进行修改。在实际开发中，并非所有修改数据的场景都是同步的，例如从网络请求获取数据，之后刷新页面。

当然，也可以将异步的操作放到组件内部处理，异步操作结束后再提交修改到store仓库，但这样可能会使本来可以复用的代码要在多个组件中分别编写一遍。

Vuex中提供了Action来处理这种场景。

Action与Mutation类似，不同的是，Action并不会直接修改状态数据，而是对Mutation进行包装通过提交Mutation来实现状态的改变。这样在Action定义的方法中，允许我们包含任意的一步操作。
　　修改store实例的定义

```js
const store = createStore((
　　state() {
　　  return  {
　　    count: 0
    }
 },
　　mutations: {
　　  increment(state, payload) {
　　    state.count += payload.count
    }
  },
　　actions: {
　　  asyncIncrement(context, payload) {
        　setTimeout((） =>{
　　			context.commit('increment', payload)
　　},3000);
                    }
  }
})
```

actions中定义的asyncIncrement方法实际上是异步的，其中延迟了3秒才进行状态数据的修改。并且，Action本身是可以接收参数的，其第一个参数是默认的，是与store实例有着相同方法和属性的context上下文对象；第二个参数是自定义参数，由开发者定义，这与Mutation的用法类似。

在组件中使用Action时，需要通过store实例对象的dispatch方法来触发

```
this.$store.dispatch('asyncIncrement',{
　　count:2
　　})
```

对于Action来说，其允许进行异步操作，但是并不是说其必须进行异步操作。在Action中也可以定义同步的方法，只是在这种场景下，其与Mutation的功能完全一样。

#### 14.2.5 Vuex中的Module

Module是Vuex进行模块化编程的一种方式。

在定义store仓库时，无论是其中的状态，还是Mutation和Action行为，都是共享的，可以将其理解为通过store单例来统一管理。
　　在这种情形下，所有的状态都会集中到同一个对象中，虽然使用起来并没有什么问题，但是过于复杂的对象会使阅读和维护变得困难。为了解决此问题，Vuex中引入了Module模块的概念。
　　Vuex允许我们将store分割成模块，每个模块拥有自己的state、mutations、actions、getters，甚至可以嵌套拥有自己的子模块。
　　首先修改main.js文件如下：

创建两个模块，两个模块中分别定义了不同的状态和Mutation方法。

```js
//创建应用实例
const app = createApp(App)
//创建模块
const modulel = {
　　state() {
　　  return {
　　    count1:7
    }
  },
　　mutations: {
　　 increment1(state, payload) {
　　     state.count1 += payload.count
　　}
  }
}
const module2 = {
　　state() {
　　  return {
        count2:0
　　}
  },
　　mutations: {
　　  increment2(state, payload) {
　　    state.count2 += payload.count
    }
  }
}
//创建Vuex仓库store实例
const store = createStore({
　　modules: {
　　  helloWorld1:module1,
　　  helloWorld2:module2
  }
})
//注入Vuex的store
app.use(store)
```


在使用时，提交Mutation的方式和之前并没有什么不同，在使用状态数据时，则需要区分模块

```vue
<template>
　　<h1>计数器1:{{ this.$store.state.helloWorld1.count1 }}</hl>
    <button @click="increment">增加</button>
</template>
<script>
export default {
　　methods: {
　　  increment() {
　　    this.$store.commit({
　　      type: 'increment1',
　　      count:2
      })
    }
  }
}
</script>
```


```vue
<template>
　　<h1>计数器2:{{ this.$store.state.helloWorld2.count2 }}</hl>
    <button @click="increment">增加</button>
</template>
<script>
export default {
　　methods: {
　　  increment() {
　　    this.$store.commit({
　　      type: 'increment2',
　　      count:2
      })
    }
  }
}
</script>
```

两个组件各使用各自模块内部的状态数据，进行状态修改时，使用的也是各自模块内部的Motation方法，这两个组件从逻辑上实现了模块的分离。
　　Vuex模块化的本意是store进行拆分和隔离。目前虽然模块中的状态数据四节进行了隔离，但是实际上Mutation依然是共用的，在触发Mutation的时候，也没有进行模块的区分，如果需要更高的封装度与复用性，可以开启模块的命名空间功能，这样模块内部的Getter、Action以及Mutation都会根据模块的嵌套路径进行命名，实际上实现了模块间的完全隔离.

```js
const modulel = {
　　namespaced: true,
　　state() {
　　  return {
　　    count1:7
    }
  },
　　mutations: {
　　  increment1(state, payload) {
　　    state.count1 += payload.count
const module2 = {
　　namespaced: true,
　　state() {
　　  return  {
　　     count2:0
    }
  },
　　mutations: {
　　  increment2(state, payload, root) {
　　    state.count2 += payload.count
　　    root.state.helloWorldl.count += payload. count
    }
  }
}
```

　这两个模块在命名空间上实现了分离，需要通过如下方式进行使用：　

```
this.$store.commit({
　　type:'helloWorld1/increment1',
　　count:2
　　})
this.$store.commit({
　　type:'helloWorld2/increment2',
　　count:2
　　})
```

Vuex中的Module还有一个非常实用的功能，其支持动态注册，这样在编写代码时，我们可以根据实际需要决定是否新增一个Vuex的store模块。要进行模块的动态注册，直接调用store实例的registerModule即可

```js
const module2 = {
　　namespaced: true,
　　  state()  {
　　    return  {  
　　       count2:0
      }
    },
　　mutations: {
　　  increment2(state, payload, root) {
　　    state.count2 += payload.count
　　    root.state.helloWorld1.count += payload.count
    }
  }
}
//创建Vuex仓库store实例
const store = createStore({
})
//动态进行模块的注册
store.registerModule('helloWorld2', module2)
```


理论部分至此结束！

## 十五、vs code关于vue的一些插件

Vue Language Features (Volar)

TypeScript Vue Plugin (Volar)：Vue语法检查

VueHelper：vue的一些代码提示

ESLint：代码检查

Live Preview：html文件及时预览

vscode-element-helper：element的一些代码提示
