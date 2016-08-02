document.onload = () => {
    wx.config(new Wechat.ConfigData());
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


    let type: Wechat.NetworkResource = new Wechat.NetworkResource();

    let data: Wechat.LocationData = new Wechat.LocationData();

};