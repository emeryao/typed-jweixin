interface Window {
    wx: Wechat.wx;
}

declare namespace Wechat {
    interface wx {
        /**注入权限验证配置 */
        config(configData: ConfigData): void;

        /**
         * 处理成功验证
         * config信息验证后会执行ready方法
         * 所有接口调用都必须在config接口获得结果之后
         * config是一个客户端的异步操作
         * 所以如果需要在页面加载时就调用相关接口
         * 则须把相关接口放在ready函数中调用来确保正确执行
         * 对于用户触发时才调用的接口,则可以直接调用,不需要放在ready函数中
         */
        ready(callback: () => void): void;
        /**
         * 处理失败验证
         * config信息验证失败会执行error函数
         * 如签名过期导致验证失败
         * 具体错误信息可以打开config的debug模式查看
         * 也可以在返回的res参数中查看,对于SPA可以在这里更新签名
         */
        error(callback: (result?: any) => void): void;

        /**判断当前客户端版本是否支持指定JS接口 */
        checkJsApi(param: CheckJsApiData): void;

        /**获取"分享到朋友圈"按钮点击状态及自定义分享内容 */
        onMenuShareTimeline(param: ShareData): void;
        /**获取"分享给朋友"按钮点击状态及自定义分享内容 */
        onMenuShareAppMessage(param: MessageShareData): void;
        /**获取"分享到QQ"按钮点击状态及自定义分享内容 */
        onMenuShareQQ(param: QQShareData): void;
        /**获取"分享到腾讯微博"按钮点击状态及自定义分享内容 */
        onMenuShareWeibo(param: QQShareData): void;
        /**获取"分享到QQ空间"按钮点击状态及自定义分享内容 */
        onMenuShareQZone(param: QQShareData): void;

        /**开始录音 */
        startRecord(): void;
        /**停止录音 */
        stopRecord(callback: { success: (res?: LocalResource) => void }): void;
        /**
         * 监听录音自动停止
         * 录音时间超过一分钟没有停止的时候会执行 complete 回调
         */
        onVoiceRecordEnd(callback: { complete: (res?: LocalResource) => void }): void;
        /**播放语音 */
        playVoice(param: LocalResource): void;
        /**暂停播放 */
        pauseVoice(param: LocalResource): void;
        /**停止播放 */
        stopVoice(param: LocalResource): void;
        /**监听语音播放完毕 */
        onVoicePlayEnd(callback: { success: (res?: LocalResource) => void }): void;
        /**上传语音 */
        uploadVoice(param: UploadResource): void;
        /**下载语音 */
        downloadVoice(param: DownloadResource): void;
        /**识别音频并返回识别结果 */
        translateVoice(param: TranslateData): void;

        /**拍照或从手机相册中选图 */
        chooseImage(param: ChooseImageData): void;
        /**预览图片 */
        previewImage(param: PreviewImageData): void;
        /**上传图片 */
        uploadImage(param: UploadResource): void;
        /**下载图片 */
        downloadImage(param: DownloadResource): void;

        /**获取网络状态 */
        getNetworkType(callback: { success: (res?: NetworkResource) => void }): void;

        /**使用微信内置地图查看位置 */
        openLocation(locationData: LocationData): void;
        /**获取地理位置 */
        getLocation(param: GetLocationParam): void;

        /**隐藏右上角菜单 */
        hideOptionMenu(): void;
        /**显示右上角菜单 */
        showOptionMenu(): void;
        /**关闭当前网页窗口 */
        closeWindow(): void;
        /**
         * 批量隐藏功能按钮
         * @param data 要隐藏的菜单项,只能隐藏"传播类"和"保护类"按钮
         */
        hideMenuItems(param: MenuItemData): void;
        /**
         * 批量显示功能按钮
         * @param param 要显示的菜单项
         */
        showMenuItems(param: MenuItemData): void;
        /**隐藏所有非基础按钮 */
        hideAllNonBaseMenuItem(): void;
        /**显示所有功能按钮 */
        showAllNonBaseMenuItem(): void;

        /**调起微信扫一扫 */
        scanQRCode(param: ScanQRCodeData): void;

        /**跳转微信商品页 */
        openProductSpecificView(data: ProductSpecific): void;

        /**批量添加卡券 */
        addCard(param: AddCardData): void;
        /**拉取适用卡券列表并获取用户选择信息 */
        chooseCard(param: ChooseCardData): void;
        /**查看微信卡包中的卡券 */
        openCard(data: CardResource): void;
        /**核销后再次赠送卡券 */
        consumeAndShareCard(data: CardResource): void;

        /**发起一个微信支付请求 */
        chooseWXPay(param: WXPayData): void;

        /**开启查找周边ibeacon设备 */
        startSearchBeacons(param: BeaconData): void;
        /**关闭查找周边ibeacon设备 */
        stopSearchBeacons(callback: { complete: (res?: any) => void }): void;
        /**监听周边ibeacon设备 */
        onSearchBeacons(callback: { complete: (argv?: any) => void }): void;

        /**创建企业会话 */
        openEnterpriseChat(param: EnterpriseChatData): void;

        /**发起获取收货地址共享接口 */
        openAddress(param: WXAddressParamsData, successCallback?, failCallback?): void;    }

    class ConfigData {
        /**
         * 开启调试模式
         * 调用的所有api的返回值会在客户端alert出来
         * 若要查看传入的参数
         * 可以在pc端打开
         * 参数信息会通过log打出
         * 仅在pc端时才会打印
         */
        debug: boolean;
        /**必填,公众号的唯一标识 */
        appId: string;
        /**必填,生成签名的时间戳 */
        timestamp: number;
        /**必填,生成签名的随机串 */
        nonceStr: string;
        /**必填,签名 */
        signature: string;
        /**必填,需要使用的JS接口列表 */
        jsApiList: Array<string>;
    }

    interface CheckResult {
        /**
         * 以键值对的形式返回,可用的api值true,不可用为false
         * 如: {"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
         */
        checkResult: Object;
        errMsg: string;
    }

    class CheckJsApiData {
        /**需要检测的JS接口列表 */
        jsApiList: Array<string>;
        success: (result?: CheckResult) => void;
    }

    class ShareData {
        /**分享标题 */
        title: string;
        /**分享链接 */
        link: string;
        /**分享图标 */
        imgUrl: string;
        /**用户确认分享后执行的回调函数 */
        success: () => void;
        /**用户取消分享后执行的回调函数 */
        cancel: () => void;
    }

    class MessageShareData extends ShareData {
        /**分享描述 */
        desc: string;
        /** 分享类型:music,video或link,不填默认为link */
        type: string;
        /**如果type是music或video,则要提供数据链接,默认为空 */
        dataUrl: string;
    }

    class QQShareData extends ShareData {
        /**分享描述 */
        desc: string;
    }

    class LocalResource {
        /**需要播放的音频的本地ID,由stopRecord接口获得 */
        localId: string;
        /**选定照片的本地ID列表,localId可以作为img标签的src属性显示图片 */
        localIds: Array<string>;
    }

    class ServerResource {
        /**需要下载的音频的服务器端ID,由uploadVoice接口获得 */
        serverId: string;
    }

    class UploadResource extends LocalResource {
        /**默认为1,显示进度提示 */
        isShowProgressTips: number;
        success: (res?: ServerResource) => void;
    }

    class DownloadResource extends ServerResource {
        /**默认为1,显示进度提示 */
        isShowProgressTips: number;
        success: (res?: LocalResource) => void;
    }

    class TranslateResource {
        /**语音识别的结果 */
        translateResult: string;
    }

    class TranslateData extends LocalResource {
        /**默认为1,显示进度提示 */
        isShowProgressTips: number;
        success: (res?: TranslateResource) => void;
    }

    class ChooseImageData {
        /**默认9 */
        count: number;
        /**['original', 'compressed'],可以指定是原图还是压缩图,默认二者都有 */
        sizeType: Array<string>;
        /**['album', 'camera'],可以指定来源是相册还是相机,默认二者都有 */
        sourceType: Array<string>;
        success: (res?: LocalResource) => void;
    }

    class PreviewImageData {
        /**当前显示图片的http链接 */
        current: string;
        /**需要预览的图片http链接列表 */
        urls: Array<string>;
    }

    class NetworkResource {
        /**
         * value should be one of 2g,3g,4g and wifi
         */
        networkType: string;
    }

    class LocationData {
        /**纬度,浮点数,范围为90 ~ -90 */
        latitude: number;
        /**经度,浮点数,范围为180 ~ -180 */
        longitude: number;
        /**位置名 */
        name: string;
        /**地址详情说明 */
        address: string;
        /**地图缩放级别,整型值,范围从1~28,默认为最大 */
        scale: number;
        /**在查看位置界面底部显示的超链接,可点击跳转 */
        infoUrl: string;
    }

    interface LocationResource {
        /**纬度,浮点数,范围为90 ~ -90 */
        latitude: number;
        /**经度,浮点数,范围为180 ~ -180 */
        longitude: number;
        /**速度,以米/每秒计 */
        speed: number;
        /**位置精度 */
        accuracy: number;
    }

    class GetLocationParam {
        /**
         * 默认为wgs84的gps坐标
         * 如果要返回直接给openLocation用的火星坐标,可传入'gcj02'
         */
        type: string;
        success: (res: LocationResource) => void;
    }

    class MenuItemData {
        /**
         * * 基本类
         *  * 举报: "menuItem:exposeArticle"
         *  * 调整字体: "menuItem:setFont"
         *  * 日间模式: "menuItem:dayMode"
         *  * 夜间模式: "menuItem:nightMode"
         *  * 刷新: "menuItem:refresh"
         *  * 查看公众号（已添加）: "menuItem:profile"
         *  * 查看公众号（未添加）: "menuItem:addContact"
         * * 传播类
         *  * 发送给朋友: "menuItem:share:appMessage"
         *  * 分享到朋友圈: "menuItem:share:timeline"
         *  * 分享到QQ: "menuItem:share:qq"
         *  * 分享到Weibo: "menuItem:share:weiboApp"
         *  * 收藏: "menuItem:favorite"
         *  * 分享到FB: "menuItem:share:facebook"
         *  * 分享到 QQ 空间: "menuItem:share:QZone"
         * * 保护类
         *  * 编辑标签: "menuItem:editTag"
         *  * 删除: "menuItem:delete"
         *  * 复制链接: "menuItem:copyUrl"
         *  * 原网页: "menuItem:originPage"
         *  * 阅读模式: "menuItem:readMode"
         *  * 在QQ浏览器中打开: "menuItem:openWithQQBrowser"
         *  * 在Safari中打开: "menuItem:openWithSafari"
         *  * 邮件: "menuItem:share:email"
         *  * 一些特殊公众号: "menuItem:share:brand"
         */
        menuList: Array<string>;
    }

    interface QRCodeResource {
        /**当needResult 为 1 时,扫码返回的结果 */
        resultStr: string;
    }

    class ScanQRCodeData {
        /**默认为0,扫描结果由微信处理,1则直接返回扫描结果 */
        needResult: number;
        /**["qrCode","barCode"],可以指定扫二维码还是一维码,默认二者都有 */
        scanType: Array<string>;
        success: (res: QRCodeResource) => void;
    }

    class ProductSpecific {
        /**商品id */
        productId: string;
        /**0:默认值,普通商品详情页,1:扫一扫商品详情页,2:小店商品详情页 */
        viewType: string;
    }

    class CardSpecific {
        cardId: string;
        cardExt: string;
    }

    class CardResource {
        /**卡券列表 */
        cardList: Array<CardSpecific>;
    }

    class AddCardData {
        /**需要添加的卡券列表 */
        cardList: Array<CardSpecific>;
        success: (res: CardResource) => void;
    }

    class ChooseCardData {
        /**门店Id */
        shopId: string;
        /**卡券类型 */
        cardType: string;
        /**卡券Id */
        cardId: string;
        /**卡券签名时间戳 */
        timestamp: number;
        /**卡券签名随机串 */
        nonceStr: string;
        /** 签名方式,默认'SHA1' */
        signType: string;
        /**卡券签名 */
        cardSign: string;
        /**用户选中的卡券列表信息 */
        success: (res: CardResource) => void;
    }

    class WXPayData {
        /**
         * 支付签名时间戳,注意微信jssdk中的所有使用timestamp字段均为小写
         * 但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
         */
        timestamp: number;
        /**支付签名随机串,不长于 32 位 */
        nonceStr: string;
        /**统一支付接口返回的prepay_id参数值,提交格式如:prepay_id=*** */
        package: string;
        /**签名方式,默认为'SHA1',使用新版支付需传入'MD5' */
        signType: string;
        /**支付签名 */
        paySign: string;
        /**支付成功后的回调函数 */
        success: (res: any) => void;
    }

    class BeaconData {
        /**摇周边的业务ticket,系统自动添加在摇出来的页面链接后面 */
        ticket: string;
        /**开启查找完成后的回调函数 */
        complete: (argv: any) => void;
    }

    interface EnterpriseChatError {
        errMsg: string;
    }

    class EnterpriseChatData {
        /**
         * 必填,参与会话的成员列表
         * 格式为userid1;userid2;...
         * 用分号隔开,最大限制为1000个
         * userid单个时为单聊,多个时为群聊。
         */
        userIds: string;
        /**
         * 必填,会话名称
         * 单聊时该参数传入空字符串""即可
         */
        groupName: string;
        success: (res?: any) => void;
        fail: (res?: EnterpriseChatError) => void;
    }

    class WXAddressParamsData {
        appId: string;
        scope: "jsapi_address";
        signType: "sha1";
        addrSign: string;
        timeStamp: "";
        nonceStr: string
    }

    class WXAddressData {
        err_msg: "edit_address：fail"|"edit_address：ok";
        username: string;
        telNumber: string;
        addressPostalCode: string;
        proviceFirstStageName: string;
        addressCitySecondStageName: string;
        addressCountiesThirdStageName: string;
        addressDetailInfo: string;
        nationalCode: string
    }
}

declare var wx: Wechat.wx;
