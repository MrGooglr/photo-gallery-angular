(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{TUkU:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab2PageModule",(function(){return k}));var r,i=n("TEn/"),o=n("ofXK"),s=n("3Pt+"),a=n("qtYk"),c=n("tyNb"),u=n("mrSG"),l=n("fXoL"),d=function(t){return t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS",t}({}),h=function(t){return t.Uri="uri",t.Base64="base64",t.DataUrl="dataUrl",t}({}),p=function(t){return t.Documents="DOCUMENTS",t.Data="DATA",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE",t}({}),f=function(t){return t.Camera="camera",t.Photos="photos",t.Geolocation="geolocation",t.Notifications="notifications",t.ClipboardRead="clipboard-read",t.ClipboardWrite="clipboard-write",t.Microphone="microphone",t}({}),v=(r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).Capacitor=r.Capacitor||new(function(){function t(){var t=this;this.platform="web",this.isNative=!1,this.Plugins={},"undefined"!=typeof Proxy&&(this.Plugins=new Proxy(this.Plugins,{get:function(e,n){if(void 0===e[n]){var r=t;return new Proxy({},{get:function(t,e){return void 0===t[e]?r.pluginMethodNoop.bind(r,t,e,n):t[e]}})}return e[n]}}))}return t.prototype.pluginMethodNoop=function(t,e,n){return Promise.reject(n+" does not have web implementation.")},t.prototype.getPlatform=function(){return this.platform},t.prototype.isPluginAvailable=function(t){return this.Plugins.hasOwnProperty(t)},t.prototype.convertFileSrc=function(t){return t},t.prototype.handleError=function(t){console.error(t)},t}()),y=v.Plugins,w=new(function(){function t(){this.plugins={},this.loadedPlugins={}}return t.prototype.addPlugin=function(t){this.plugins[t.config.name]=t},t.prototype.getPlugin=function(t){return this.plugins[t]},t.prototype.loadPlugin=function(t){var e=this.getPlugin(t);e?e.load():console.error("Unable to load web plugin "+t+", no such plugin found.")},t.prototype.getPlugins=function(){var t=[];for(var e in this.plugins)t.push(this.plugins[e]);return t},t}()),m=function(){function t(t,e){this.config=t,this.loaded=!1,this.listeners={},this.windowListeners={},e?e.addPlugin(this):w.addPlugin(this)}return t.prototype.addWindowListener=function(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0},t.prototype.removeWindowListener=function(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)},t.prototype.addListener=function(t,e){var n=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e);var r=this.windowListeners[t];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){n.removeListener(t,e)}}},t.prototype.removeListener=function(t,e){var n=this.listeners[t];if(n){var r=n.indexOf(e);this.listeners[t].splice(r,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}},t.prototype.removeAllListeners=function(){for(var t in this.listeners={},this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}},t.prototype.notifyListeners=function(t,e){var n=this.listeners[t];n&&n.forEach((function(t){return t(e)}))},t.prototype.hasListeners=function(t){return!!this.listeners[t].length},t.prototype.registerWindowListener=function(t,e){var n=this;this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:function(t){n.notifyListeners(e,t)}}},t.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},t.prototype.load=function(){this.loaded=!0},t}(),b=function(t,e){t.hasOwnProperty(e.config.name)&&!function(t){return t.config.platforms&&t.config.platforms.indexOf(Capacitor.platform)>=0}(e)||(t[e.config.name]=e)},g=function(t,e){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function P(t,e){function n(){this.constructor=t}g(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function x(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function E(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}new(function(t){function e(){return t.call(this,{name:"Accessibility",platforms:["web"]})||this}return P(e,t),e.prototype.isScreenReaderEnabled=function(){throw new Error("Feature not available in the browser")},e.prototype.speak=function(t){if(!("speechSynthesis"in window))return Promise.reject("Browser does not support the Speech Synthesis API");var e=new SpeechSynthesisUtterance(t.value);return t.language&&(e.lang=t.language),window.speechSynthesis.speak(e),Promise.resolve()},e}(m)),new(function(t){function e(){var e=t.call(this,{name:"App",platforms:["web"]})||this;return"undefined"!=typeof document&&document.addEventListener("visibilitychange",e.handleVisibilityChange.bind(e),!1),e}return P(e,t),e.prototype.exitApp=function(){throw new Error("Method not implemented.")},e.prototype.canOpenUrl=function(t){return Promise.resolve({value:!0})},e.prototype.openUrl=function(t){return Promise.resolve({completed:!0})},e.prototype.getLaunchUrl=function(){return Promise.resolve({url:""})},e.prototype.getState=function(){return Promise.resolve({isActive:!0!==document.hidden})},e.prototype.handleVisibilityChange=function(){var t={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",t)},e}(m)),new(function(t){function e(){return t.call(this,{name:"Browser",platforms:["web"]})||this}return P(e,t),e.prototype.open=function(t){return x(this,void 0,void 0,(function(){return E(this,(function(e){return this._lastWindow=window.open(t.url,t.windowName||"_blank"),[2,Promise.resolve()]}))}))},e.prototype.prefetch=function(t){return x(this,void 0,void 0,(function(){return E(this,(function(t){return[2,Promise.resolve()]}))}))},e.prototype.close=function(){return x(this,void 0,void 0,(function(){return E(this,(function(t){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]}))}))},e}(m)),new(function(t){function e(){return t.call(this,{name:"Camera",platforms:["web"]})||this}return P(e,t),e.prototype.getPhoto=function(t){return x(this,void 0,void 0,(function(){var e=this;return E(this,(function(n){return[2,new Promise((function(n,r){return x(e,void 0,void 0,(function(){var e,i=this;return E(this,(function(o){switch(o.label){case 0:return e=document.createElement("pwa-camera-modal"),document.body.appendChild(e),[4,e.componentOnReady()];case 1:return o.sent(),e.addEventListener("onPhoto",(function(o){return x(i,void 0,void 0,(function(){var i,s;return E(this,(function(a){switch(a.label){case 0:return null!==(i=o.detail)?[3,1]:(r("User cancelled photos app"),[3,4]);case 1:return i instanceof Error?(r(i.message),[3,4]):[3,2];case 2:return s=n,[4,this._getCameraPhoto(i,t)];case 3:s.apply(void 0,[a.sent()]),a.label=4;case 4:return e.dismiss(),document.body.removeChild(e),[2]}}))}))})),e.present(),[2]}}))}))}))]}))}))},e.prototype._getCameraPhoto=function(t,e){return new Promise((function(n,r){var i=new FileReader,o=t.type.split("/")[1];e.resultType===h.Uri?n({webPath:URL.createObjectURL(t),format:o}):(i.readAsDataURL(t),i.onloadend=function(){var t=i.result;n(e.resultType===h.DataUrl?{dataUrl:t,format:o}:{base64String:t.split(",")[1],format:o})},i.onerror=function(t){r(t)})}))},e}(m)),new(function(t){function e(){return t.call(this,{name:"Clipboard",platforms:["web"]})||this}return P(e,t),e.prototype.write=function(t){return x(this,void 0,void 0,(function(){var e,n,r;return E(this,(function(i){switch(i.label){case 0:return navigator.clipboard?void 0!==t.string||t.url?navigator.clipboard.writeText?[4,navigator.clipboard.writeText(void 0!==t.string?t.string:t.url)]:[2,Promise.reject("Writting to clipboard not supported in this browser")]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return i.sent(),[3,10];case 2:if(!t.image)return[3,9];if(!navigator.clipboard.write)return[2,Promise.reject("Setting images not supported in this browser")];i.label=3;case 3:return i.trys.push([3,7,,8]),[4,fetch(t.image)];case 4:return[4,i.sent().blob()];case 5:return e=i.sent(),n=new ClipboardItem(((r={})[e.type]=e,r)),[4,navigator.clipboard.write([n])];case 6:return i.sent(),[3,8];case 7:return i.sent(),[2,Promise.reject("Failed to write image")];case 8:return[3,10];case 9:return[2,Promise.reject("Nothing to write")];case 10:return[2,Promise.resolve()]}}))}))},e.prototype.read=function(){return x(this,void 0,void 0,(function(){var t,e,n,r;return E(this,(function(i){switch(i.label){case 0:return navigator.clipboard?navigator.clipboard.read?[3,1]:navigator.clipboard.readText?[2,this.readText()]:[2,Promise.reject("Reading from clipboard not supported in this browser")]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return i.trys.push([1,5,,6]),[4,navigator.clipboard.read()];case 2:return[4,(t=i.sent())[0].getType(e=t[0].types[0])];case 3:return n=i.sent(),[4,this._getBlobData(n,e)];case 4:return r=i.sent(),[2,Promise.resolve({value:r,type:e})];case 5:return i.sent(),[2,this.readText()];case 6:return[2]}}))}))},e.prototype.readText=function(){return x(this,void 0,void 0,(function(){var t;return E(this,(function(e){switch(e.label){case 0:return[4,navigator.clipboard.readText()];case 1:return t=e.sent(),[2,Promise.resolve({value:t,type:"text/plain"})]}}))}))},e.prototype._getBlobData=function(t,e){return new Promise((function(n,r){var i=new FileReader;e.includes("image")?i.readAsDataURL(t):i.readAsText(t),i.onloadend=function(){n(i.result)},i.onerror=function(t){r(t)}}))},e}(m)),new(function(t){function e(){var e=t.call(this,{name:"Filesystem",platforms:["web"]})||this;return e.DEFAULT_DIRECTORY=p.Data,e.DB_VERSION=1,e.DB_NAME="Disc",e._writeCmds=["add","put","delete"],e}return P(e,t),e.prototype.initDb=function(){return x(this,void 0,void 0,(function(){var t=this;return E(this,(function(n){if(void 0!==this._db)return[2,this._db];if(!("indexedDB"in window))throw new Error("This browser doesn't support IndexedDB");return[2,new Promise((function(n,r){var i=indexedDB.open(t.DB_NAME,t.DB_VERSION);i.onupgradeneeded=e.doUpgrade,i.onsuccess=function(){t._db=i.result,n(i.result)},i.onerror=function(){return r(i.error)},i.onblocked=function(){console.warn("db blocked")}}))]}))}))},e.doUpgrade=function(t){var e=t.target.result;switch(t.oldVersion){case 0:case 1:default:e.objectStoreNames.contains("FileStorage")&&e.deleteObjectStore("FileStorage"),e.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}},e.prototype.dbRequest=function(t,e){return x(this,void 0,void 0,(function(){var n;return E(this,(function(r){return n=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",[2,this.initDb().then((function(r){return new Promise((function(i,o){var s=r.transaction(["FileStorage"],n).objectStore("FileStorage"),a=s[t].apply(s,e);a.onsuccess=function(){return i(a.result)},a.onerror=function(){return o(a.error)}}))}))]}))}))},e.prototype.dbIndexRequest=function(t,e,n){return x(this,void 0,void 0,(function(){var r;return E(this,(function(i){return r=-1!==this._writeCmds.indexOf(e)?"readwrite":"readonly",[2,this.initDb().then((function(i){return new Promise((function(o,s){var a=i.transaction(["FileStorage"],r).objectStore("FileStorage").index(t),c=a[e].apply(a,n);c.onsuccess=function(){return o(c.result)},c.onerror=function(){return s(c.error)}}))}))]}))}))},e.prototype.getPath=function(t,e){t=t||this.DEFAULT_DIRECTORY;var n=void 0!==e?e.replace(/^[/]+|[/]+$/g,""):"",r="/"+t;return""!==e&&(r+="/"+n),r},e.prototype.clear=function(){return x(this,void 0,void 0,(function(){return E(this,(function(t){switch(t.label){case 0:return[4,this.initDb()];case 1:return t.sent().transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear(),[2,{}]}}))}))},e.prototype.readFile=function(t){return x(this,void 0,void 0,(function(){var e,n;return E(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:if(void 0===(n=r.sent()))throw Error("File does not exist.");return[2,{data:n.content}]}}))}))},e.prototype.writeFile=function(t){return x(this,void 0,void 0,(function(){var e,n,r,i,o,s,a,c,u,l;return E(this,(function(d){switch(d.label){case 0:return e=this.getPath(t.directory,t.path),n=t.data,r=t.recursive,[4,this.dbRequest("get",[e])];case 1:if((i=d.sent())&&"directory"===i.type)throw"The supplied path is a directory.";return o=t.encoding,s=e.substr(0,e.lastIndexOf("/")),[4,this.dbRequest("get",[s])];case 2:return void 0!==d.sent()||-1===(a=s.indexOf("/",1))?[3,4]:(c=s.substr(a),[4,this.mkdir({path:c,directory:t.directory,recursive:r})]);case 3:d.sent(),d.label=4;case 4:return u=Date.now(),l={path:e,folder:s,type:"file",size:n.length,ctime:u,mtime:u,content:!o&&n.indexOf(",")>=0?n.split(",")[1]:n},[4,this.dbRequest("put",[l])];case 5:return d.sent(),[2,{uri:l.path}]}}))}))},e.prototype.appendFile=function(t){return x(this,void 0,void 0,(function(){var e,n,r,i,o,s,a,c;return E(this,(function(u){switch(u.label){case 0:return e=this.getPath(t.directory,t.path),n=t.data,r=e.substr(0,e.lastIndexOf("/")),i=Date.now(),o=i,[4,this.dbRequest("get",[e])];case 1:if((s=u.sent())&&"directory"===s.type)throw"The supplied path is a directory.";return[4,this.dbRequest("get",[r])];case 2:return void 0!==u.sent()?[3,4]:(a=r.indexOf("/",1),c=-1!==a?r.substr(a):"/",[4,this.mkdir({path:c,directory:t.directory,recursive:!0})]);case 3:u.sent(),u.label=4;case 4:return void 0!==s&&(n=s.content+n,o=s.ctime),[4,this.dbRequest("put",[{path:e,folder:r,type:"file",size:n.length,ctime:o,mtime:i,content:n}])];case 5:return u.sent(),[2,{}]}}))}))},e.prototype.deleteFile=function(t){return x(this,void 0,void 0,(function(){var e;return E(this,(function(n){switch(n.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:if(void 0===n.sent())throw Error("File does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)])];case 2:if(0!==n.sent().length)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[e])];case 3:return n.sent(),[2,{}]}}))}))},e.prototype.mkdir=function(t){return x(this,void 0,void 0,(function(){var e,n,r,i,o,s,a,c;return E(this,(function(u){switch(u.label){case 0:return e=this.getPath(t.directory,t.path),n=t.recursive,r=e.substr(0,e.lastIndexOf("/")),i=(e.match(/\//g)||[]).length,[4,this.dbRequest("get",[r])];case 1:return o=u.sent(),[4,this.dbRequest("get",[e])];case 2:if(s=u.sent(),1===i)throw Error("Cannot create Root directory");if(void 0!==s)throw Error("Current directory does already exist.");if(!n&&2!==i&&void 0===o)throw Error("Parent directory must exist");return n&&2!==i&&void 0===o?(a=r.substr(r.indexOf("/",1)),[4,this.mkdir({path:a,directory:t.directory,recursive:n})]):[3,4];case 3:u.sent(),u.label=4;case 4:return c=Date.now(),[4,this.dbRequest("put",[{path:e,folder:r,type:"directory",size:0,ctime:c,mtime:c}])];case 5:return u.sent(),[2,{}]}}))}))},e.prototype.rmdir=function(t){return x(this,void 0,void 0,(function(){var e,n,r,i,o,s,a,c,u;return E(this,(function(l){switch(l.label){case 0:return r=t.recursive,i=this.getPath(n=t.directory,e=t.path),[4,this.dbRequest("get",[i])];case 1:if(void 0===(o=l.sent()))throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");return[4,this.readdir({path:e,directory:n})];case 2:if(0!==(s=l.sent()).files.length&&!r)throw Error("Folder is not empty");a=0,c=s.files,l.label=3;case 3:return a<c.length?[4,this.stat({path:u=e+"/"+c[a],directory:n})]:[3,9];case 4:return"file"!==l.sent().type?[3,6]:[4,this.deleteFile({path:u,directory:n})];case 5:return l.sent(),[3,8];case 6:return[4,this.rmdir({path:u,directory:n,recursive:r})];case 7:l.sent(),l.label=8;case 8:return a++,[3,3];case 9:return[4,this.dbRequest("delete",[i])];case 10:return l.sent(),[2,{}]}}))}))},e.prototype.readdir=function(t){return x(this,void 0,void 0,(function(){var e,n;return E(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:if(n=r.sent(),""!==t.path&&void 0===n)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)])];case 2:return[2,{files:r.sent().map((function(t){return t.substring(e.length+1)}))}]}}))}))},e.prototype.getUri=function(t){return x(this,void 0,void 0,(function(){var e,n;return E(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[e+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{uri:n.path}]}}))}))},e.prototype.stat=function(t){return x(this,void 0,void 0,(function(){var e,n;return E(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[e+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path}]}}))}))},e.prototype.rename=function(t){return x(this,void 0,void 0,(function(){return E(this,(function(e){return[2,this._copy(t,!0)]}))}))},e.prototype.copy=function(t){return x(this,void 0,void 0,(function(){return E(this,(function(e){return[2,this._copy(t,!1)]}))}))},e.prototype._copy=function(t,e){return void 0===e&&(e=!1),x(this,void 0,void 0,(function(){var n,r,i,o,s,a,c,u,l,d,h,p,f,v,y,w,m=this;return E(this,(function(b){switch(b.label){case 0:if(r=t.from,i=t.directory,o=t.toDirectory,!(n=t.to)||!r)throw Error("Both to and from must be provided");if(o||(o=i),s=this.getPath(i,r),a=this.getPath(o,n),s===a)return[2,{}];if(a.startsWith(s))throw Error("To path cannot contain the from path");b.label=1;case 1:return b.trys.push([1,3,,6]),[4,this.stat({path:n,directory:o})];case 2:return c=b.sent(),[3,6];case 3:return b.sent(),(u=n.split("/")).pop(),l=u.join("/"),u.length>0?[4,this.stat({path:l,directory:o})]:[3,5];case 4:if("directory"!==b.sent().type)throw new Error("Parent directory of the to path is a file");b.label=5;case 5:return[3,6];case 6:if(c&&"directory"===c.type)throw new Error("Cannot overwrite a directory with a file");return[4,this.stat({path:r,directory:i})];case 7:switch(d=b.sent(),h=function(t,e,n){return x(m,void 0,void 0,(function(){var r,i;return E(this,(function(s){switch(s.label){case 0:return r=this.getPath(o,t),[4,this.dbRequest("get",[r])];case 1:return(i=s.sent()).ctime=e,i.mtime=n,[4,this.dbRequest("put",[i])];case 2:return s.sent(),[2]}}))}))},d.type){case"file":return[3,8];case"directory":return[3,15]}return[3,28];case 8:return[4,this.readFile({path:r,directory:i})];case 9:return p=b.sent(),e?[4,this.deleteFile({path:r,directory:i})]:[3,11];case 10:b.sent(),b.label=11;case 11:return[4,this.writeFile({path:n,directory:o,data:p.data})];case 12:return b.sent(),e?[4,h(n,d.ctime,d.mtime)]:[3,14];case 13:b.sent(),b.label=14;case 14:return[2,{}];case 15:if(c)throw Error("Cannot move a directory over an existing object");b.label=16;case 16:return b.trys.push([16,20,,21]),[4,this.mkdir({path:n,directory:o,recursive:!1})];case 17:return b.sent(),e?[4,h(n,d.ctime,d.mtime)]:[3,19];case 18:b.sent(),b.label=19;case 19:return[3,21];case 20:return b.sent(),[3,21];case 21:return[4,this.readdir({path:r,directory:i})];case 22:f=b.sent().files,v=0,y=f,b.label=23;case 23:return v<y.length?[4,this._copy({from:r+"/"+(w=y[v]),to:n+"/"+w,directory:i,toDirectory:o},e)]:[3,26];case 24:b.sent(),b.label=25;case 25:return v++,[3,23];case 26:return e?[4,this.rmdir({path:r,directory:i})]:[3,28];case 27:b.sent(),b.label=28;case 28:return[2,{}]}}))}))},e._debug=!0,e}(m));var S=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.forEach((function(e){if(e&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})),t};new(function(t){function e(){return t.call(this,{name:"Geolocation",platforms:["web"]})||this}return P(e,t),e.prototype.getCurrentPosition=function(t){var e=this;return new Promise((function(n,r){return e.requestPermissions().then((function(e){window.navigator.geolocation.getCurrentPosition((function(t){n(t)}),(function(t){r(t)}),S({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))}))}))},e.prototype.watchPosition=function(t,e){return""+window.navigator.geolocation.watchPosition((function(t){e(t)}),(function(t){e(null,t)}),S({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))},e.prototype.clearWatch=function(t){return window.navigator.geolocation.clearWatch(parseInt(t.id,10)),Promise.resolve()},e}(m)),new(function(t){function e(){return t.call(this,{name:"Device",platforms:["web"]})||this}return P(e,t),e.prototype.getInfo=function(){return x(this,void 0,void 0,(function(){var t,e;return E(this,(function(n){return t=navigator.userAgent,e=this.parseUa(t),[2,Promise.resolve({model:e.model,platform:"web",appVersion:"",appBuild:"",operatingSystem:e.operatingSystem,osVersion:e.osVersion,manufacturer:navigator.vendor,isVirtual:!1,uuid:this.getUid()})]}))}))},e.prototype.getBatteryInfo=function(){return x(this,void 0,void 0,(function(){var t;return E(this,(function(e){switch(e.label){case 0:t={},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return t=e.sent(),[3,4];case 3:return e.sent(),[3,4];case 4:return[2,Promise.resolve({batteryLevel:t.level,isCharging:t.charging})]}}))}))},e.prototype.getLanguageCode=function(){return x(this,void 0,void 0,(function(){return E(this,(function(t){return[2,{value:navigator.language}]}))}))},e.prototype.parseUa=function(t){var e={},n=t.indexOf("(")+1,r=t.indexOf(") AppleWebKit");-1!==t.indexOf(") Gecko")&&(r=t.indexOf(") Gecko"));var i=t.substring(n,r);if(-1!==t.indexOf("Android"))e.model=i.replace("; wv","").split("; ").pop().split(" Build")[0],e.osVersion=i.split("; ")[1];else if(e.model=i.split("; ")[0],navigator.oscpu)e.osVersion=navigator.oscpu;else if(-1!==t.indexOf("Windows"))e.osVersion=i;else{var o=i.split("; ").pop().replace(" like Mac OS X","").split(" ");e.osVersion=o[o.length-1].replace(/_/g,".")}return e.operatingSystem=/android/i.test(t)?"android":/iPad|iPhone|iPod/.test(t)&&!window.MSStream?"ios":/Win/.test(t)?"windows":/Mac/i.test(t)?"mac":"unknown",e},e.prototype.getUid=function(){var t=window.localStorage.getItem("_capuid");return t||(t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})),window.localStorage.setItem("_capuid",t),t)},e}(m)),new(function(t){function e(){var e=t.call(this,{name:"LocalNotifications",platforms:["web"]})||this;return e.pending=[],e}return P(e,t),e.prototype.createChannel=function(t){throw new Error("Feature not available in the browser. "+t.id)},e.prototype.deleteChannel=function(t){throw new Error("Feature not available in the browser. "+t.id)},e.prototype.listChannels=function(){throw new Error("Feature not available in the browser")},e.prototype.sendPending=function(){var t=this,e=[],n=+new Date;this.pending.forEach((function(r){r.schedule&&r.schedule.at&&+r.schedule.at<=n&&(t.buildNotification(r),e.push(r))})),console.log("Sent pending, removing",e),this.pending=this.pending.filter((function(t){return!e.find((function(e){return e===t}))}))},e.prototype.sendNotification=function(t){var e=this,n=t;if(t.schedule&&t.schedule.at){var r=+t.schedule.at-+new Date;return this.pending.push(n),void setTimeout((function(){e.sendPending()}),r)}this.buildNotification(t)},e.prototype.buildNotification=function(t){return new Notification(t.title,{body:t.body})},e.prototype.schedule=function(t){var e=this,n=[];return t.notifications.forEach((function(t){n.push(e.sendNotification(t))})),Promise.resolve({notifications:t.notifications.map((function(t){return{id:""+t.id}}))})},e.prototype.getPending=function(){return Promise.resolve({notifications:this.pending.map((function(t){return{id:""+t.id}}))})},e.prototype.registerActionTypes=function(t){throw new Error("Method not implemented.")},e.prototype.cancel=function(t){return console.log("Cancel these",t),this.pending=this.pending.filter((function(e){return!t.notifications.find((function(t){return t.id===""+e.id}))})),Promise.resolve()},e.prototype.areEnabled=function(){return Promise.resolve({value:"granted"===Notification.permission})},e.prototype.requestPermission=function(){return new Promise((function(t){Notification.requestPermission((function(e){var n=!0;"denied"!==e&&"default"!==e||(n=!1),t({granted:n})}))}))},e.prototype.requestPermissions=function(){return new Promise((function(t,e){Notification.requestPermission((function(n){"denied"!==n&&"default"!==n?t({results:[n]}):e(n)}))}))},e}(m)),new(function(t){function e(){return t.call(this,{name:"Share",platforms:["web"]})||this}return P(e,t),e.prototype.share=function(t){return navigator.share?navigator.share({title:t.title,text:t.text,url:t.url}):Promise.reject("Web Share API not available")},e}(m)),new(function(t){function e(){return t.call(this,{name:"Modals",platforms:["web"]})||this}return P(e,t),e.prototype.alert=function(t){return x(this,void 0,void 0,(function(){return E(this,(function(e){return window.alert(t.message),[2,Promise.resolve()]}))}))},e.prototype.prompt=function(t){return x(this,void 0,void 0,(function(){var e;return E(this,(function(n){return e=window.prompt(t.message,t.inputText||""),[2,Promise.resolve({value:e,cancelled:null===e})]}))}))},e.prototype.confirm=function(t){return x(this,void 0,void 0,(function(){var e;return E(this,(function(n){return e=window.confirm(t.message),[2,Promise.resolve({value:e})]}))}))},e.prototype.showActions=function(t){return x(this,void 0,void 0,(function(){var e=this;return E(this,(function(n){return[2,new Promise((function(n,r){return x(e,void 0,void 0,(function(){var e,r=this;return E(this,(function(i){return(e=document.querySelector("pwa-action-sheet"))||(e=document.createElement("pwa-action-sheet"),document.body.appendChild(e)),e.header=t.title,e.cancelable=!1,e.options=t.options,e.addEventListener("onSelection",(function(t){return x(r,void 0,void 0,(function(){return E(this,(function(e){return n({index:t.detail}),[2]}))}))})),[2]}))}))}))]}))}))},e}(m)),new(function(t){function e(){var e=t.call(this,{name:"Motion"})||this;return e.registerWindowListener("devicemotion","accel"),e.registerWindowListener("deviceorientation","orientation"),e}return P(e,t),e}(m)),new(function(t){function e(){var e=t.call(this,{name:"Network",platforms:["web"]})||this;return e.listenerFunction=null,e}return P(e,t),e.prototype.getStatus=function(){return new Promise((function(t,e){if(window.navigator){var n=window.navigator.onLine,r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;t({connected:n,connectionType:n?r?r.type||r.effectiveType:"wifi":"none"})}else e("Network info not available")}))},e.prototype.addListener=function(t,e){var n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,r=e.bind(this,{connected:!0,connectionType:n?n.type||n.effectiveType:"wifi"}),i=e.bind(this,{connected:!1,connectionType:"none"});if(0===t.localeCompare("networkStatusChange"))return window.addEventListener("online",r),window.addEventListener("offline",i),{remove:function(){window.removeEventListener("online",r),window.removeEventListener("offline",i)}}},e}(m)),new(function(t){function e(){return t.call(this,{name:"Permissions"})||this}return P(e,t),e.prototype.query=function(t){return x(this,void 0,void 0,(function(){var e;return E(this,(function(n){switch(n.label){case 0:return(e=window.navigator).permissions?[4,e.permissions.query({name:t.name===f.Photos?"camera":t.name})]:[2,Promise.reject("This browser does not support the Permissions API")];case 1:return[2,{state:n.sent().state}]}}))}))},e}(m)),new(function(t){function e(){return t.call(this,{name:"SplashScreen",platforms:["web"]})||this}return P(e,t),e.prototype.show=function(t,e){return Promise.resolve()},e.prototype.hide=function(t,e){return Promise.resolve()},e}(m)),new(function(t){function e(){var e=t.call(this,{name:"Storage",platforms:["web"]})||this;return e.KEY_PREFIX="_cap_",e}return P(e,t),e.prototype.get=function(t){var e=this;return new Promise((function(n,r){n({value:window.localStorage.getItem(e.makeKey(t.key))})}))},e.prototype.set=function(t){var e=this;return new Promise((function(n,r){window.localStorage.setItem(e.makeKey(t.key),t.value),n()}))},e.prototype.remove=function(t){var e=this;return new Promise((function(n,r){window.localStorage.removeItem(e.makeKey(t.key)),n()}))},e.prototype.keys=function(){var t=this;return new Promise((function(e,n){e({keys:Object.keys(localStorage).filter((function(e){return t.isKey(e)})).map((function(e){return t.getKey(e)}))})}))},e.prototype.clear=function(){var t=this;return new Promise((function(e,n){Object.keys(localStorage).filter((function(e){return t.isKey(e)})).forEach((function(t){return window.localStorage.removeItem(t)})),e()}))},e.prototype.makeKey=function(t){return this.KEY_PREFIX+t},e.prototype.isKey=function(t){return 0===t.indexOf(this.KEY_PREFIX)},e.prototype.getKey=function(t){return t.substr(this.KEY_PREFIX.length)},e}(m)),new(function(t){function e(){return t.call(this,{name:"Toast",platforms:["web"]})||this}return P(e,t),e.prototype.show=function(t){return x(this,void 0,void 0,(function(){var e,n;return E(this,(function(r){return e=2e3,t.duration&&(e="long"===t.duration?3500:2e3),(n=document.createElement("pwa-toast")).duration=e,n.message=t.text,document.body.appendChild(n),[2]}))}))},e}(m)),function(t){for(var e=0,n=w.getPlugins();e<n.length;e++)b(t,n[e])}(y);const{Camera:O,Filesystem:L,Storage:R}=y;let C=(()=>{class t{constructor(t){this.photos=[],this.PHOTO_STORAGE="photos",this.convertBlobToBase64=t=>new Promise((e,n)=>{const r=new FileReader;r.onerror=n,r.onload=()=>{e(r.result)},r.readAsDataURL(t)}),this.platform=t}loadSaved(){return Object(u.a)(this,void 0,void 0,(function*(){const t=yield R.get({key:this.PHOTO_STORAGE});if(this.photos=JSON.parse(t.value)||[],!this.platform.is("hybrid"))for(let e of this.photos){const t=yield L.readFile({path:e.filepath,directory:p.Data});e.base64="data:image/jpeg;base64,"+t.data}}))}addNewToGallery(){return Object(u.a)(this,void 0,void 0,(function*(){const t=yield O.getPhoto({resultType:h.Uri,source:d.Camera,quality:100}),e=yield this.savePicture(t);this.photos.unshift(e),R.set({key:this.PHOTO_STORAGE,value:this.platform.is("hybrid")?JSON.stringify(this.photos):JSON.stringify(this.photos.map(t=>{const e=Object.assign({},t);return delete e.base64,e}))})}))}savePicture(t){return Object(u.a)(this,void 0,void 0,(function*(){const e=yield this.readAsBase64(t),n=(new Date).getTime()+".jpeg",r=yield L.writeFile({path:n,data:e,directory:p.Data});return this.platform.is("hybrid")?{filepath:r.uri,webviewPath:v.convertFileSrc(r.uri)}:{filepath:n,webviewPath:t.webPath}}))}readAsBase64(t){return Object(u.a)(this,void 0,void 0,(function*(){if(this.platform.is("hybrid"))return(yield L.readFile({path:t.path})).data;{const e=yield fetch(t.webPath),n=yield e.blob();return yield this.convertBlobToBase64(n)}}))}deletePicture(t,e){return Object(u.a)(this,void 0,void 0,(function*(){this.photos.splice(e,1),R.set({key:this.PHOTO_STORAGE,value:JSON.stringify(this.photos)});const n=t.filepath.substr(t.filepath.lastIndexOf("/")+1);yield L.deleteFile({path:n,directory:p.Data})}))}}return t.\u0275fac=function(e){return new(e||t)(l.Qb(i.B))},t.\u0275prov=l.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function T(t,e){if(1&t){const t=l.Nb();l.Mb(0,"ion-col",6),l.Mb(1,"ion-img",7),l.Ub("click",(function(){l.cc(t);const n=e.$implicit,r=e.index;return l.Wb().showActionSheet(n,r)})),l.Lb(),l.Lb()}if(2&t){const t=e.$implicit;l.zb(1),l.ac("src",t.base64?t.base64:t.webviewPath)}}const F=[{path:"",component:(()=>{class t{constructor(t,e){this.photoService=t,this.actionSheetController=e}ngOnInit(){this.photoService.loadSaved()}showActionSheet(t,e){return Object(u.a)(this,void 0,void 0,(function*(){const n=yield this.actionSheetController.create({header:"Photos",buttons:[{text:"Delete",role:"destructive",icon:"trash",handler:()=>{this.photoService.deletePicture(t,e)}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{}}]});yield n.present()}))}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(C),l.Jb(i.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-tab2"]],decls:15,vars:1,consts:[["collapse","condense"],["size","large"],["size","4",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","center","slot","fixed"],[3,"click"],["name","camera"],["size","4"],[3,"src","click"]],template:function(t,e){1&t&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.gc(3," Photo Gallery "),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content"),l.Mb(5,"ion-header",0),l.Mb(6,"ion-toolbar"),l.Mb(7,"ion-title",1),l.gc(8,"Photo Gallery"),l.Lb(),l.Lb(),l.Lb(),l.Mb(9,"ion-grid"),l.Mb(10,"ion-row"),l.fc(11,T,2,1,"ion-col",2),l.Lb(),l.Lb(),l.Mb(12,"ion-fab",3),l.Mb(13,"ion-fab-button",4),l.Ub("click",(function(){return e.photoService.addNewToGallery()})),l.Kb(14,"ion-icon",5),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.zb(11),l.Zb("ngForOf",e.photoService.photos))},directives:[i.m,i.y,i.x,i.i,i.l,i.t,o.h,i.j,i.k,i.n,i.h,i.o],styles:[""]}),t})()}];let _=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(F)],c.i]}),t})(),k=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[i.z,o.b,s.a,a.a,_]]}),t})()}}]);