export declare class Stream {
    addEventListener: any;
    audio: boolean;
    audioEnabled: boolean;
    audioLevelHelper: any;
    aux_stream: any;
    close: any;
    disableAudio: any;
    disableVideo: any;
    dispatchEvent: any;
    dispatchSocketEvent: any;
    dispatcher: any;
    enableAudio: any;
    enableVideo: any;
    getAttributes: any;
    getAudioLevel: any;
    getId: any;
    getStats: any;
    hasAudio: any;
    hasScreen: any;
    hasVideo: any;
    init: any;
    initialized: boolean;
    isAudioOn: any;
    isVideoOn: any;
    local: boolean;
    lowStream: any;
    mirror: boolean;
    muteAudio: any;
    muteVideo: any;
    on: any;
    onClose: any;
    params: {
        streamID: number;
        audio: boolean;
        cameraId: string;
        microphoneId: string;
        video: boolean;
    };
    play: any;
    player: any;
    removeEventListener: any;
    screen: boolean;
    screenAttributes: {
        width: number;
        height: number;
        maxFr: number;
        minFr: number;
    };
    setScreenProfile: any;
    setVideoBitRate: any;
    setVideoFrameRate: any;
    setVideoProfile: any;
    setVideoProfileCustom: any;
    setVideoProfileCustomPlus: any;
    setVideoResolution: any;
    stop: any;
    streamLanyl: any;
    streamId: number;
    unmuteAudio: any;
    unmuteVideo: any;
    url: any;
    video: boolean;
    videoEnabled: boolean;
    videoHeight: number;
    videoSize: Array<number>;
    videoWidth: number;
}