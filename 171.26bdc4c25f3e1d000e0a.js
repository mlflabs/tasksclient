(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{xz6d:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=(u("OO+k"),u("qXBG")),r=function(n,l,u,e){return new(u||(u=Promise))(function(t,r){function i(n){try{s(e.next(n))}catch(n){r(n)}}function o(n){try{s(e.throw(n))}catch(n){r(n)}}function s(n){n.done?t(n.value):new u(function(l){l(n.value)}).then(i,o)}s((e=e.apply(n,l||[])).next())})},i=function(n,l){var u,e,t,r,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,e&&(t=2&r[0]?e.return:r[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,r[1])).done)return t;switch(e=0,t&&(r=[2&r[0],t.value]),r[0]){case 0:case 1:t=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,e=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!t||r[1]>t[0]&&r[1]<t[3])){i.label=r[1];break}if(6===r[0]&&i.label<t[1]){i.label=t[1],t=r;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(r);break}t[2]&&i.ops.pop(),i.trys.pop();continue}r=l.call(n,i)}catch(n){r=[6,n],e=0}finally{u=t=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},o=function(){function n(n,l,u,e){this.auth=n,this.router=l,this.app=u,this.toastController=e,this.user={name:"",password:""},this._isLoading=!1}return Object.defineProperty(n.prototype,"isLoading",{get:function(){return this._isLoading},set:function(n){this._isLoading=n,this.app.tick()},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){},n.prototype.onSubmit=function(){return r(this,void 0,void 0,function(){var n,l,u=this;return i(this,function(e){switch(e.label){case 0:this.isLoading=!0,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.auth.login(this.user.name,this.user.password)];case 2:return n=e.sent(),console.log(n),this.isLoading=!1,!0===n.success||(n.data.message?this.presentToast(n.data.message):n.data.errors&&n.data.errors.forEach(function(n){u.presentToast(n.msg)})),[3,4];case 3:return l=e.sent(),console.log(l),[3,4];case 4:return console.log("Cancel is Loading"),this.isLoading=!1,setTimeout(function(){u.app.tick(),console.log("App tick()")},100),[2]}})})},n.prototype.forgotPassword=function(){this.router.navigate(["forgotPassword"])},n.prototype.register=function(){this.router.navigate(["register"])},n.prototype.presentToast=function(n){return r(this,void 0,void 0,function(){return i(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n,duration:2e3})];case 1:return l.sent().present(),[2]}})})},n.prototype.keyPressNameInput=function(n){"Enter"===n.code&&this.inputPassword.setFocus()},n.prototype.keyPressPasswordInput=function(n){"Enter"===n.code&&this.onSubmit()},n}(),s=function(){},a=u("pMnS"),b=u("ra/t"),c=u("ntG5"),d=u("gIcY"),g=u("M9A9"),p=u("ZYCi"),f=u("Zq1E"),h=u("Ip0R"),C=u("P87I"),m=e.qb({encapsulation:0,styles:[["ion-grid[_ngcontent-%COMP%]{width:100%;height:100%}ion-row[_ngcontent-%COMP%]{height:100%}ion-col[_ngcontent-%COMP%]{border:1px solid #488aff;background:#fff}ion-button[_ngcontent-%COMP%]{font-weight:300}@media (min-width:240px) and (max-width:768px){ion-grid[_ngcontent-%COMP%]{background:#fff}ion-col[_ngcontent-%COMP%]{border:none}}"]],data:{}});function k(n){return e.Ib(0,[(n()(),e.sb(0,0,null,null,2,"ion-label",[["color","danger"],["position","stacked"]],null,null,null,b.O,b.o)),e.rb(1,49152,null,0,c.K,[e.i,e.l],{color:[0,"color"],position:[1,"position"]},null),(n()(),e.Hb(-1,0,[" Valid email is required "]))],function(n,l){n(l,1,0,"danger","stacked")},null)}function y(n){return e.Ib(0,[(n()(),e.sb(0,0,null,null,2,"ion-label",[["color","danger"],["position","stacked"]],null,null,null,b.O,b.o)),e.rb(1,49152,null,0,c.K,[e.i,e.l],{color:[0,"color"],position:[1,"position"]},null),(n()(),e.Hb(-1,0,[" Password is required "]))],function(n,l){n(l,1,0,"danger","stacked")},null)}function v(n){return e.Ib(0,[(n()(),e.sb(0,0,null,null,1,"ion-spinner",[["color","primary"],["name","dots"],["slot","middle"]],null,null,null,b.U,b.u)),e.rb(1,49152,null,0,c.nb,[e.i,e.l],{color:[0,"color"],name:[1,"name"]},null)],function(n,l){n(l,1,0,"primary","dots")},null)}function w(n){return e.Ib(0,[e.Fb(402653184,1,{inputName:0}),e.Fb(402653184,2,{inputPassword:0}),(n()(),e.sb(2,0,null,null,10,"ion-header",[],null,null,null,b.K,b.k)),e.rb(3,49152,null,0,c.y,[e.i,e.l],null,null),(n()(),e.sb(4,0,null,0,8,"ion-toolbar",[],null,null,null,b.Z,b.y)),e.rb(5,49152,null,0,c.xb,[e.i,e.l],null,null),(n()(),e.sb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.D,b.d)),e.rb(7,49152,null,0,c.g,[],null,null),(n()(),e.sb(8,0,null,0,1,"ion-menu-button",[],null,null,null,b.Q,b.r)),e.rb(9,49152,null,0,c.O,[e.i,e.l],null,null),(n()(),e.sb(10,0,null,0,2,"ion-title",[],null,null,null,b.Y,b.z)),e.rb(11,49152,null,0,c.yb,[e.i,e.l],null,null),(n()(),e.Hb(-1,0,["login"])),(n()(),e.sb(13,0,null,null,59,"ion-content",[["padding",""]],null,null,null,b.F,b.f)),e.rb(14,49152,null,0,c.r,[e.i,e.l],null,null),(n()(),e.sb(15,0,null,0,57,"ion-grid",[],null,null,null,b.J,b.j)),e.rb(16,49152,null,0,c.x,[e.i,e.l],null,null),(n()(),e.sb(17,0,null,0,55,"ion-row",[["justify-content-center",""]],null,null,null,b.T,b.t)),e.rb(18,49152,null,0,c.db,[],null,null),(n()(),e.sb(19,0,null,0,53,"ion-col",[["align-self-center",""],["size-lg","5"],["size-md","6"],["size-xs","12"]],null,null,null,b.E,b.e)),e.rb(20,49152,null,0,c.q,[e.i,e.l],null,null),(n()(),e.sb(21,0,null,0,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,r=n.component;return"submit"===l&&(t=!1!==e.Cb(n,23).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.Cb(n,23).onReset()&&t),"ngSubmit"===l&&(t=!1!==r.onSubmit()&&t),t},null,null)),e.rb(22,16384,null,0,d.m,[],null,null),e.rb(23,4210688,[["userForm",4]],0,d.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Eb(2048,null,d.a,null,[d.i]),e.rb(25,16384,null,0,d.h,[[4,d.a]],null,null),(n()(),e.sb(26,0,null,null,2,"div",[["text-center",""]],null,null,null,null,null)),(n()(),e.sb(27,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Login Form"])),(n()(),e.sb(29,0,null,null,28,"div",[["padding",""]],null,null,null,null,null)),(n()(),e.sb(30,0,null,null,11,"ion-item",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.Cb(n,32).onClick(u)&&t),t},b.N,b.n)),e.rb(31,49152,null,0,c.E,[e.i,e.l],null,null),e.rb(32,16384,null,0,g.a,[[2,p.l],e.l],null,null),(n()(),e.sb(33,0,null,0,8,"ion-input",[["id","name"],["name","name"],["placeholder","Email or Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keypress"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,u){var t=!0,r=n.component;return"ionChange"===l&&(t=!1!==e.Cb(n,36)._handleInputEvent(u.target.value)&&t),"ionBlur"===l&&(t=!1!==e.Cb(n,36)._handleBlurEvent()&&t),"ngModelChange"===l&&(t=!1!==(r.user.name=u)&&t),"keypress"===l&&(t=!1!==r.keyPressNameInput(u)&&t),t},b.M,b.m)),e.rb(34,16384,null,0,d.k,[],{required:[0,"required"]},null),e.Eb(1024,null,d.d,function(n){return[n]},[d.k]),e.rb(36,16384,null,0,f.a,[e.l],null,null),e.Eb(1024,null,d.e,function(n){return[n]},[f.a]),e.rb(38,671744,[["name",4]],0,d.j,[[2,d.a],[6,d.d],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,d.f,null,[d.j]),e.rb(40,16384,null,0,d.g,[[4,d.f]],null,null),e.rb(41,49152,[[1,4],["inputName",4]],0,c.D,[e.i,e.l],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),e.sb(42,0,null,null,11,"ion-item",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.Cb(n,44).onClick(u)&&t),t},b.N,b.n)),e.rb(43,49152,null,0,c.E,[e.i,e.l],null,null),e.rb(44,16384,null,0,g.a,[[2,p.l],e.l],null,null),(n()(),e.sb(45,0,null,0,8,"ion-input",[["id","password"],["name","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keypress"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,u){var t=!0,r=n.component;return"ionChange"===l&&(t=!1!==e.Cb(n,48)._handleInputEvent(u.target.value)&&t),"ionBlur"===l&&(t=!1!==e.Cb(n,48)._handleBlurEvent()&&t),"ngModelChange"===l&&(t=!1!==(r.user.password=u)&&t),"keypress"===l&&(t=!1!==r.keyPressPasswordInput(u)&&t),t},b.M,b.m)),e.rb(46,16384,null,0,d.k,[],{required:[0,"required"]},null),e.Eb(1024,null,d.d,function(n){return[n]},[d.k]),e.rb(48,16384,null,0,f.a,[e.l],null,null),e.Eb(1024,null,d.e,function(n){return[n]},[f.a]),e.rb(50,671744,[["password",4]],0,d.j,[[2,d.a],[6,d.d],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,d.f,null,[d.j]),e.rb(52,16384,null,0,d.g,[[4,d.f]],null,null),e.rb(53,49152,[[2,4],["inputPassword",4]],0,c.D,[e.i,e.l],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),e.jb(16777216,null,null,1,null,k)),e.rb(55,16384,null,0,h.i,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(16777216,null,null,1,null,y)),e.rb(57,16384,null,0,h.i,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(58,0,null,null,14,"div",[["padding",""],["text-center",""]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,v)),e.rb(60,16384,null,0,h.i,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(61,0,null,null,3,"ion-button",[["expand","block"],["size","large"],["type","submit"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.Cb(n,63).onClick(u)&&t),t},b.C,b.c)),e.rb(62,49152,null,0,c.f,[e.i,e.l],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),e.rb(63,16384,null,0,g.a,[[2,p.l],e.l],null,null),(n()(),e.Hb(-1,0,["Login"])),(n()(),e.sb(65,0,null,null,3,"ion-button",[["expand","block"],["size","large"]],null,[[null,"click"]],function(n,l,u){var t=!0,r=n.component;return"click"===l&&(t=!1!==e.Cb(n,67).onClick(u)&&t),"click"===l&&(t=!1!==r.register()&&t),t},b.C,b.c)),e.rb(66,49152,null,0,c.f,[e.i,e.l],{expand:[0,"expand"],size:[1,"size"]},null),e.rb(67,16384,null,0,g.a,[[2,p.l],e.l],null,null),(n()(),e.Hb(-1,0,["Register"])),(n()(),e.sb(69,0,null,null,3,"ion-button",[["size","small"]],null,[[null,"click"]],function(n,l,u){var t=!0,r=n.component;return"click"===l&&(t=!1!==e.Cb(n,71).onClick(u)&&t),"click"===l&&(t=!1!==r.forgotPassword()&&t),t},b.C,b.c)),e.rb(70,49152,null,0,c.f,[e.i,e.l],{size:[0,"size"]},null),e.rb(71,16384,null,0,g.a,[[2,p.l],e.l],null,null),(n()(),e.Hb(-1,0,["Forgot Password"]))],function(n,l){var u=l.component;n(l,34,0,""),n(l,38,0,"name",u.user.name),n(l,41,0,"name","Email or Username","","text"),n(l,46,0,""),n(l,50,0,"password",u.user.password),n(l,53,0,"password","Password","","password"),n(l,55,0,!e.Cb(l,38).valid&&!e.Cb(l,38).pristine),n(l,57,0,!e.Cb(l,50).valid&&!e.Cb(l,50).pristine),n(l,60,0,u.isLoading),n(l,62,0,!e.Cb(l,23).valid,"block","large","submit"),n(l,66,0,"block","large"),n(l,70,0,"small")},function(n,l){n(l,21,0,e.Cb(l,25).ngClassUntouched,e.Cb(l,25).ngClassTouched,e.Cb(l,25).ngClassPristine,e.Cb(l,25).ngClassDirty,e.Cb(l,25).ngClassValid,e.Cb(l,25).ngClassInvalid,e.Cb(l,25).ngClassPending),n(l,33,0,e.Cb(l,34).required?"":null,e.Cb(l,40).ngClassUntouched,e.Cb(l,40).ngClassTouched,e.Cb(l,40).ngClassPristine,e.Cb(l,40).ngClassDirty,e.Cb(l,40).ngClassValid,e.Cb(l,40).ngClassInvalid,e.Cb(l,40).ngClassPending),n(l,45,0,e.Cb(l,46).required?"":null,e.Cb(l,52).ngClassUntouched,e.Cb(l,52).ngClassTouched,e.Cb(l,52).ngClassPristine,e.Cb(l,52).ngClassDirty,e.Cb(l,52).ngClassValid,e.Cb(l,52).ngClassInvalid,e.Cb(l,52).ngClassPending)})}var P=e.ob("app-login",o,function(n){return e.Ib(0,[(n()(),e.sb(0,0,null,null,1,"app-login",[],null,null,null,w,m)),e.rb(1,114688,null,0,o,[t.a,p.l,e.g,C.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),I=u("95zI"),x=u("9opb"),q=u("apKv"),E=u("B4/3");u.d(l,"LoginPageModuleNgFactory",function(){return z});var z=e.pb(s,[],function(n){return e.zb([e.Ab(512,e.k,e.eb,[[8,[a.a,P]],[3,e.k],e.z]),e.Ab(4608,h.k,h.j,[e.w,[2,h.q]]),e.Ab(4608,d.n,d.n,[]),e.Ab(4608,I.a,I.a,[e.B,e.g]),e.Ab(4608,x.a,x.a,[I.a,e.k,e.s]),e.Ab(4608,q.a,q.a,[I.a,e.k,e.s]),e.Ab(1073742336,h.b,h.b,[]),e.Ab(1073742336,d.l,d.l,[]),e.Ab(1073742336,d.c,d.c,[]),e.Ab(1073742336,E.a,E.a,[]),e.Ab(1073742336,p.n,p.n,[[2,p.t],[2,p.l]]),e.Ab(1073742336,s,s,[]),e.Ab(1024,p.j,function(){return[[{path:"",component:o}]]},[])])})}}]);