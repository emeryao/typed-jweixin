# typed-jweixin
[TypeScript](http://www.typescriptlang.org/index.html) [declaration file](http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html) for Wexin JSSDK

[![NPM](https://nodei.co/npm/typed-jweixin.png?downloads=true&stars=true)](https://nodei.co/npm/typed-jweixin/)

[![PR Welcome](https://img.shields.io/badge/PR-welcome-blue.svg?longCache=true&style=for-the-badge)](https://github.com/Emeryao/typed-jweixin/pulls)
![npm type definitions](https://img.shields.io/npm/types/chalk.svg?style=for-the-badge)

## About
* Based on [Weixin JSSDK](http://res.wx.qq.com/open/js/jweixin-1.2.0.js) and it's [documentation](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)
* Written using **[VS Code](https://code.visualstudio.com/)**

## Install
* With [`npm`](https://www.npmjs.com/) installed  
    ```sh
    $ npm install typed-jweixin --save-dev
    ```
* With [`typings`](https://github.com/typings/typings) installed  
    ```sh
    $ typings install github:Emeryao/typed-jweixin -SG
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

* for **`Angular`**  
    projects created with `ng new` have a `./src/tsconfig.app.json` with default content 
    ```json
    {
        "extends": "../tsconfig.json",
        "compilerOptions": {
            "outDir": "../out-tsc/app",
            "types": []
        },
        "exclude": []
    }
    ```
    the line of `"types":[]` should be **removed** to make the declaration file work

## Contributors
> Thanks for your contributions

[@Emeryao](https://github.com/Emeryao)  
[@neoblackcap](https://github.com/neoblackcap)

## Last Update
`2018.08.30`
