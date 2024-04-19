


const jModules = window.j_loadjs_modules = window.j_loadjs_modules || {};
jModules.cache = jModules.cache||{};

jModules.loadSuccess = jModules.loadSuccess || function(url, module) {
    jModules.cache[url] = module;
    const resolve = jModules.cache[url + '_resolve'];
    resolve && resolve(module);
    delete jModules.cache[url + '_resolve'];
}

// 异步加载js
jModules.loadJS = jModules.loadJS || async function loadJS(url, isModule = false) {
    if(jModules.cache[url]) return jModules.cache[url];

    const p = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/script';
        if(isModule) {
            script.type = 'module';
            script.innerHTML = `
                import curModule from '${url}';
                if(window.j_loadjs_modules) {
                    window.j_loadjs_modules.cache['${url}'] = curModule;
                    window.j_loadjs_modules.loadSuccess('${url}', curModule);
                }
            `;
            jModules.cache[url + '_resolve'] = resolve;
        }
        else {
            script.src = url;
            script.onload = function(e) {
                resolve(e);
            }
            script.onerror = function(e) {
                reject(e);
            }            
        }
        window.document.head.appendChild(script);
    });
    jModules.cache[url] = p;
    return p;
}
// 挂载到window
window.jLoadJSModules = jModules;

if(typeof module !== 'undefined' && module.exports) module.exports = jModules;
