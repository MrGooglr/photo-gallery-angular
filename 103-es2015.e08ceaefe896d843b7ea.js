(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"37vE":function(e,t,o){"use strict";o.r(t),o.d(t,"pwa_camera_modal_instance",(function(){return i}));var n=o("JHRn");const i=class{constructor(e){Object(n.h)(this,e),this.noDevicesText="No camera found",this.noDevicesButtonText="Choose file",this.handlePhoto=async e=>{this.onPhoto.emit(e)},this.handleNoDeviceError=async e=>{this.noDeviceError.emit(e)},this.onPhoto=Object(n.d)(this,"onPhoto",7),this.noDeviceError=Object(n.d)(this,"noDeviceError",7)}handleBackdropClick(e){e.target!==this.el&&this.onPhoto.emit(null)}handleComponentClick(e){e.stopPropagation()}handleBackdropKeyUp(e){"Escape"===e.key&&this.onPhoto.emit(null)}render(){return Object(n.g)("div",{class:"wrapper",onClick:e=>this.handleBackdropClick(e)},Object(n.g)("div",{class:"content"},Object(n.g)("pwa-camera",{onClick:e=>this.handleComponentClick(e),handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}get el(){return Object(n.f)(this)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height)}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"}}}}]);