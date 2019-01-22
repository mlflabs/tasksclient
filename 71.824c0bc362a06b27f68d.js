(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{X19f:function(e,t,r){"use strict";r.r(t),r.d(t,"IonReorder",function(){return s}),r.d(t,"IonReorderGroup",function(){return l});var o=r("B5Ai"),n=r("cBjU"),i=r("HHlg"),s=function(){function e(){}return e.prototype.render=function(){return Object(n.b)("slot",null,Object(n.b)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[slot].sc-ion-reorder-md-h{display:none;line-height:0;z-index:100}.reorder-icon.sc-ion-reorder-md{display:block;font-size:22px;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var e,t,n,i=this;return o.c(this,function(o){switch(o.label){case 0:return(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return o.sent(),t=this,[4,e.getScrollElement()];case 2:t.scrollEl=o.sent(),o.label=3;case 3:return n=this,[4,r.e(0).then(r.bind(null,"2jMD"))];case 4:return n.gesture=o.sent().createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,threshold:0,direction:"y",passive:!1,canStart:function(e){return i.canStart(e)},onStart:function(e){return i.onStart(e)},onMove:function(e){return i.onMove(e)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.onEnd()},e.prototype.complete=function(e){return Promise.resolve(this.completeSync(e))},e.prototype.canStart=function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=function(e,t){for(var r,o=0;e&&o<6;){if((r=e.parentNode)===t)return e;e=r,o++}}(t,this.el);return r?(e.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var o=this.el,n=o.children;if(n&&0!==n.length){for(var s=0,l=0;l<n.length;l++){var d=n[l];r.push(s+=d.offsetHeight),d.$ionIndex=l}var h=o.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+c,this.scrollElBottom=f.bottom-c}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(u),Object(i.e)()}},e.prototype.onMove=function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),o=this.containerTop-r,n=Math.max(o,Math.min(e.currentY,this.containerBottom-r)),s=r+n-e.startY,l=this.itemIndexForTop(n-o);if(l!==this.lastToIndex){var c=a(t);this.lastToIndex=l,Object(i.c)(),this.reorderMove(c,l)}t.style.transform="translateY("+s+"px)"}},e.prototype.onEnd=function(){var e=this,t=this.selectedItemEl;if(this.state=2,t){var r=this.lastToIndex,o=a(t);r===o?(t.style.transition="transform 200ms ease-in-out",setTimeout(function(){return e.completeSync()},200)):this.ionItemReorder.emit({from:o,to:r,complete:this.completeSync.bind(this)}),Object(i.d)()}else this.state=0},e.prototype.completeSync=function(e){var t=this.selectedItemEl;if(t&&2===this.state){var r=this.el.children,o=r.length,n=this.lastToIndex,i=a(t);!0===e&&this.el.insertBefore(t,i<n?r[n+1]:r[n]),Array.isArray(e)&&(e=function(e,t,r){var o=e[i];return e.splice(i,1),e.splice(r,0,o),e.slice()}(e,0,n));for(var s=0;s<o;s++)r[s].style.transform="";t.style.transition="",t.classList.remove(u),this.selectedItemEl=void 0,this.state=0}return e},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r},e.prototype.reorderMove=function(e,t){for(var r=this.selectedItemHeight,o=this.el.children,n=0;n<o.length;n++){var i="";n>e&&n<=t?i="translateY("+-r+"px)":n<e&&n>=t&&(i="translateY("+r+"px)"),o[n].style.transform=i}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-d:e>this.scrollElBottom&&(t=d),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}}},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),e}();function a(e){return e.$ionIndex}var c=60,d=10,u="reorder-selected"}}]);