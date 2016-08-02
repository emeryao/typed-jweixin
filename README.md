# WechatJSSDK.d.ts
[TypeScript](http://www.typescriptlang.org/index.html) [declaration file](http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html) for Wexin JSSDK

## About
* Based on Weixin JSSDK and it's [document](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)
* Written with **[VS Code](https://code.visualstudio.com/)**

## Usage
* Get the [declaration file](./typings/jweixin.d.ts) and copy/paste it under the `typings` folder
* Reference the `jweixin.d.ts` file by adding the following code to `typings/index.d.ts`
```xml
/// <reference path="./jweixin.d.ts" />
```
* Add the declaration file **if** there is a `file` property in the `tsconfig.json` like below
```json
 "files": [
    "typings/jweixin.d.ts"
    ]
```
* Then start coding with the power of **[IntelliSense](https://code.visualstudio.com/#meet-intellisense)** of VS Code

## Sample Code
* Config
```typescript
let configData: Wechat.ConfigData = new Wechat.ConfigData();
configData.appId = 'appid';
configData.nonceStr = 'nonceStr';
configData.signature = 'signature';
configData.timestamp = 1234567;
wx.config(configData);
```
* Share Timeline
```typescript
let shareData: Wechat.ShareData = new Wechat.ShareData();
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