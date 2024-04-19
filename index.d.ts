declare var window: Window & typeof globalThis;

export type jModule = {
    /**
     * 加载远程js
     * @param url JS的地址
     * @param isModule 是否用模块的方式加载，默认false
     */
    loadJS(url: string, isModule?: boolean): Promise<any>
};

export default jModule;

interface Window {
    jLoadJSModules: jModule;
}