# typed-jweixin
[TypeScript](http://www.typescriptlang.org/index.html) [declaration file](http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html) for Wexin JSSDK

## About
* Based on Weixin JSSDK and it's [documentation](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)
* Written with **[VS Code](https://code.visualstudio.com/)**

## Install
* With [`typings`](https://github.com/typings/typings) installed  

    ```batch
    typings install global~jweixin -SG
    ```  
    Or  
    ```batch
    typings install github:Emeryao/typed-jweixin -SG
    ```
* Or find the declaration [file](./jweixin.d.ts) and include it to your project

* Then start coding with the power of **[IntelliSense](https://code.visualstudio.com/#meet-intellisense)** of VS Code

## Sample Code
* Config
```typescript
let configData: Wechat.ConfigData = {};
configData.appId = 'appid';
configData.nonceStr = 'nonceStr';
configData.signature = 'signature';
configData.timestamp = 1234567;
wx.config(configData);
```
* Share Timeline
```typescript
let shareData: Wechat.ShareData = {};
shareData.imgUrl = 'imgUrl';
shareData.link = 'link';
shareData.title = 'title';
shareData.success = () => {
    console.log('share successed');
};
shareData.cancel = () => {
    console.log('cancelled');
}
wx.onMenuShareTimeline(shareData);
```

## Contributors
> Thanks for your contributions

[@Emeryao](https://github.com/Emeryao)  
[@neoblackcap](https://github.com/neoblackcap)

## Last Update
`2016.11.10`
