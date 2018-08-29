document.onload = () => {
    let configData: Wechat.ConfigData = {};
    configData.appId = 'appid';
    configData.nonceStr = 'nonceStr';
    configData.signature = 'signature';
    configData.timestamp = 1234567;
    wx.config(configData);
    wx.ready(() => {
        console.log('wx.ready');
    });
    wx.error((result) => {
        console.log('wx.error');
    });

    wx.checkJsApi({
        jsApiList: new Array<string>(),
        success: (res) => {
            console.log('wx.checkJsApi');
        },
    });

    wx.stopRecord({
        success: (res) => {
            console.log(res.localId);
        },
    });

    let shareData: Wechat.ShareData = {};
    shareData.imgUrl = 'imgUrl';
    shareData.link = 'link';
    shareData.title = 'title';
    shareData.success = () => {
        console.log('share successed');
    };
    shareData.cancel = () => {
        console.log('cancelled');
    };

    wx.onMenuShareTimeline(shareData);

    let type: Wechat.NetworkResource = {};

    let data: Wechat.LocationData = {};

    let chatData: Wechat.EnterpriseChatData = {};
    chatData.fail = (res) => {
        if (res.errMsg.indexOf('function not exist') > -1) {
            alert('版本过低请升级');
        }
    };

    wx.openEnterpriseChat(chatData);

};
