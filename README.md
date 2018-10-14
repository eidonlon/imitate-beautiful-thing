# imitate-beautiful-thing
Using Vue to imitate a app.

简介:这是一个使用vue全家桶做的一个app demo,纯粹学习而已。


##### 移动端扫描下方二维码看效果
![二维码](https://github.com/eidonlon/imitate-beautiful-thing/blob/master/static/images/link.png)

## 用到的技术

vue2 + vue-router + axios + webpack + express 

## 后台接口数据

​用express 搭建的后台，因为没有数据库，所使用的数据是读取的本地json 文件，数据采集的有限，所以都是重复利用的，看到刷新到重复数据不要惊讶，这不是bug  ​:scared:​  ]。



## 运行项目

``` bash
#先克隆项目
git clone https://github.com/eidonlon/imitate-beautiful-thing.git

#进入文件夹
cd imitate-beautiful-thing

#安装依赖
npm install

#运行
npm run dev

#请在chrome下调成手机模式预览
#另，项目打包[此处只打包了前端的代码，后台并没有一起被打包]
npm run build 
```

## 效果演示

线上效果请[戳这里](http://ddan.applinzi.com/#/);(在chrome下请调成手机模式预览)；

效果gif:

![效果](https://github.com/eidonlon/imitate-beautiful-thing/blob/master/static/images/demo.gif)



## 部分截图

首页

![home](https://github.com/eidonlon/imitate-beautiful-thing/blob/master/static/images/home.jpg)


作品

![menu](https://github.com/eidonlon/imitate-beautiful-thing/blob/master/static/images/02.jpg)


设计师

![music](https://github.com/eidonlon/imitate-beautiful-thing/blob/master/static/images/03.jpg)


我的

![read](https://github.com/eidonlon/imitate-beautiful-thing/blob/master/static/images/04.jpg)

详情

![read](https://github.com/eidonlon/imitate-beautiful-thing/blob/master/static/images/05.jpg)

**看到这里，给个star 吧。**


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


