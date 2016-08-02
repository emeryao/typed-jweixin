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
}

declare var wx: Wechat.wx;