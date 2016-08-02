document.onload = () => {
    let configData: Wechat.ConfigData = new Wechat.ConfigData();
    configData.appId = 'appid';
    configData.nonceStr = 'nonceStr';
    configData.signature = 'signature';
    configData.timestamp = 1234567;
    wx.config(configData);
    wx.ready(() => {

    });
    wx.error((result) => {

    });

    wx.checkJsApi({
        jsApiList: new Array<string>(), success: (res) => {

        }
    });

    wx.stopRecord({
        success: (res) => {
            console.log(res.localId);
        }
    });

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

    let type: Wechat.NetworkResource = new Wechat.NetworkResource();

    let data: Wechat.LocationData = new Wechat.LocationData();

};