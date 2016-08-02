# WechatJSSDK.d.ts
TypeScript declaration file for Wexin JSSDK
## Usage
* Get the [declaration file](./typings/jweixin.d.ts) and copy/paste it under the `typings` folder
* Reference the `jweixin.d.ts` file by adding the following code to `typings/index.d.ts`
```xml
/// <reference path="./jweixin.d.ts" />
```
* Add the declaration file if there is a `file` property in the `tsconfig.json` like below
```json
 "files": [
    "typings/jweixin.d.ts"
    ]
```