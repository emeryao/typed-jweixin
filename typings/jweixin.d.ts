interface Window {
    wx: Wechat.wx;
}

declare namespace Wechat {
    interface wx {
        config(configData: ConfigData): void;

        ready(callback: () => void): void;
        error(callback: (result?: any) => void): void;

        checkJsApi(param: CheckJsApiParam): void;

        onMenuShareTimeline(param: ShareData): void;
        onMenuShareAppMessage(param: MessageShareData): void;
        onMenuShareQQ(param: QQShareData): void;
        onMenuShareWeibo(param: QQShareData): void;
        onMenuShareQZone(param: QQShareData): void;

        startRecord(): void;
        stopRecord(callback: { success: (res: LocalResource) => void }): void;
        onVoiceRecordEnd(callback: { complete: (res: LocalResource) => void }): void;

        playVoice(param: LocalResource): void;
        pauseVoice(param: LocalResource): void;
        stopVoice(param: LocalResource): void;
        onVoicePlayEnd(callback: { success: (res: LocalResource) => void }): void;
        uploadVoice(param: UploadResource): void;
        downloadVoice(param: DownloadResource): void;
        translateVoice(param: TranslateData): void;

        chooseImage(param: ChooseImageData): void;
        previewImage(param: PreviewImageData): void;
        uploadImage(param: UploadResource): void;
        downloadImage(param: DownloadResource): void;

        getNetworkType(callback: { success: (res: NetworkResource) => void }): void;

        openLocation(locationData: LocationData): void;
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

        /**发起一个微信支付请求 */
        chooseWXPay(param: WXPayData): void;
    }

    class ConfigData {
        debug: boolean;
        appId: string;
        timestamp: number;
        nonceStr: string;
        signature: string;
        jsApiList: Array<string>;
    }

    class CheckJsApiParam {
        jsApiList: Array<string>;
        success: (result?: Object) => void;
    }

    class ShareData {
        title: string;
        link: string;
        imgUrl: string;
        success: () => void;
        cancel: () => void;
    }

    class MessageShareData extends ShareData {
        desc: string;
        type: string;
        dataUrl: string;
    }

    class QQShareData extends ShareData {
        desc: string;
    }

    class LocalResource {
        localId: string;
        localIds: Array<string>;
    }

    class ServerResource {
        serverId: string;
    }

    class UploadResource extends LocalResource {
        isShowProgressTips: number;
        success: (res: ServerResource) => void;
    }

    class DownloadResource extends ServerResource {
        isShowProgressTips: number;
        success: (res: LocalResource) => void;
    }

    class TranslateResource {
        translateResult: string;
    }

    class TranslateData extends LocalResource {
        isShowProgressTips: number;
        success: (res: TranslateResource) => void;
    }

    class ChooseImageData {
        count: number;
        sizeType: Array<string>;
        sourceType: Array<string>;
        success: (res: LocalResource) => void;
    }

    class PreviewImageData {
        current: string;
        urls: Array<string>;
    }

    class NetworkResource {
        /**
         * value should be one of 2g,3g,4g and wifi
         */
        networkType: string;
    }

    class LocationData {
        /**
         * 纬度,浮点数,范围为90 ~ -90
         */
        latitude: number;
        /**
         * 经度,浮点数,范围为180 ~ -180
         */
        longitude: number;
        /**
         * 位置名
         */
        name: string;
        /**
         * 地址详情说明
         */
        address: string;
        /**
         * 地图缩放级别,整型值,范围从1~28。默认为最大
         */
        scale: number;
        /**
         * 在查看位置界面底部显示的超链接,可点击跳转
         */
        infoUrl: string;
    }

    class LocationResource {
        /**
         * 纬度,浮点数,范围为90 ~ -90
         */
        latitude: number;
        /**
         * 经度,浮点数,范围为180 ~ -180
         */
        longitude: number;
        /**
         * 速度,以米/每秒计
         */
        speed: number;
        /**
         * 位置精度
         */
        accuracy: number;
    }

    class GetLocationParam {
        /**
         * 默认为wgs84的gps坐标,如果要返回直接给openLocation用的火星坐标,可传入'gcj02'
         */
        type: string;
        success: (res: LocationResource) => void;
    }

    class MenuItemData {
        menuList: Array<string>;
    }

    class QRCodeResource {
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
        cardList: Array<CardSpecific>;
    }


    class AddCardData {
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
        /**支付签名时间戳,注意微信jssdk中的所有使用timestamp字段均为小写
         * 但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符 
         */
        timestamp: number;
        /**支付签名随机串,不长于 32 位 */
        nonceStr: string;
        /**统一支付接口返回的prepay_id参数值,提交格式如:prepay_id=*** */
        package: string;
        /**签名方式，默认为'SHA1',使用新版支付需传入'MD5' */
        signType: string;
        /**支付签名 */
        paySign: string;
        /**支付成功后的回调函数 */
        success: (res: any) => void;
    }
}

declare var wx: Wechat.wx;