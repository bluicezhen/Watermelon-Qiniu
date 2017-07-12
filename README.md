# Watermelon Qiniu

西瓜七牛 - 一个开发者友好的七牛云JS SDK

> 有任何问题，欢迎提交Issues，或发送邮件至 bluice.zhen@gmail.com。

## 简介

七牛本身的JS-SDK很难用，其他的七牛SDK也有多问题，主要是使用不够友好，于是我自己写了一个。鉴于七牛用户主要在中国，恕不提供英文文档。

**实现的功能：**

- 文件上传

**TODO List:**

- 获取文件（非公开）
- 指定上传地址

## 安装

```shell
npm i watermelon-qiniu
```

## 使用

### 文件上传

开发者需自己获取File对象以及Upload Key、Upload Token，Upload Url关于File对象的获取，建议参考MDN（[https://developer.mozilla.org/zh-CN/docs/Web/API/File](https://developer.mozilla.org/zh-CN/docs/Web/API/File)）。下面是一个不完整的例子。例子中使用了async/await语法糖，不能使用该语法糖的同学知道函数返回了一个Promise对象就好了。

> Upload Url的默认参数是 https://up-z2.qbox.me， 即华南地区的HTTPS
> 关于Upload URL，七牛的官方文档语焉不详，但基本是这样的：
> 华北（http://up-z1.qiniu.com | https://up-z1.qbox.me）
> 华南（http://up-z2.qiniu.com | https://up-z2.qbox.me）
> 北美（http://up-na0.qiniu.com | https://up-na0.qbox.me）
> 如果无法符合，请自行解决☺

```javascript
import qiniu from 'watermelon-qiniu';

/**
 * file: File对象
 * upload_key: 前端生成后端获取均可
 * upload_token： 后端获取
 */
async function upload (file, upload_key, upload_token) {
  try {
    await qiniu.upload(file, upload_key, upload_token);
  } catch (e) {
  	console.log('err', e);
  }
}
```
        // TODO: 支持使用不同的地址
      