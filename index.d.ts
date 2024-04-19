declare var window: Window & typeof globalThis;

export type jModule = {
    async loadJS(url: string, isModule=false): Promise<any>
};

export default jModule;

interface Window {
    jLoadJSModules: jModule;
}