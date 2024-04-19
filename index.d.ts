declare var window: Window & typeof globalThis;

export class jModuleType {
    /**
     * 加载远程js
     * @param url JS的地址
     * @param isModule 是否用模块的方式加载，默认false
     */
    static loadJS(url: string, isModule?: boolean): Promise<any>
}

export default jModuleType;

interface Window {
    jLoadJSModules: jModuleType;
}
