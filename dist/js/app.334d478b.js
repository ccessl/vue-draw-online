(function(t){function e(e){for(var r,s,c=e[0],a=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,c=1;c<o.length;c++){var a=o[c];0!==n[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"05c4":function(t,e,o){"use strict";var r=o("e9e1"),n=o.n(r);n.a},"1be0":function(t,e,o){},"49cf":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("tool-header"),o("tool-bar"),o("div",{staticClass:"main"},[o("draw-container",{staticClass:"draw"}),o("element-list")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-container"},t._l(t.toolList,(function(e,r){return o("div",{key:r,staticClass:"tool-item",on:{click:function(o){return t.setDrawState(e.drawState)}}},[t._v(t._s(e.text))])})),0)},c=[],a=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),l=o("2f62");function u(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function f(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?u(Object(o),!0).forEach((function(e){Object(a["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var p={name:"ToolHeader",data:function(){return{toolList:[{text:"新建",drawState:"newFile"},{text:"撤销图形",drawState:"undo"},{text:"保存",drawState:"save"}]}},methods:f({},Object(l["b"])({setDrawState:"setDrawState"}))},d=p,h=(o("05c4"),o("2877")),b=Object(h["a"])(d,s,c,!1,null,"2d39a3de",null),m=b.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"draw-tool"},[o("div",{staticClass:"drag-tool"}),o("div",{staticClass:"shape-picker"},t._l(t.toolList,(function(e,r){return o("span",{key:r,staticClass:"shape-picker-item",class:{active:e.state===t.drawState},attrs:{title:e.title},on:{click:function(o){return t.setDrawState(e.state)}}},[o("i",{staticClass:"fa",class:e.icon})])})),0),o("div",{staticClass:"shape-fill"},[o("div",{staticClass:"shape-fill-icon",class:{active:"fill"===t.drawState},on:{click:function(e){return t.setDrawState("fill")}}},[o("i",{staticClass:"fa fa-clipboard"})]),o("p",[t._v("填充")])]),o("div",{staticClass:"now-color"},[o("div",{staticClass:"now-color-show",style:{backgroundColor:t.color}}),o("p",[t._v("颜色")])]),o("div",{staticClass:"color-picker"},t._l(t.colorList,(function(e,r){return o("span",{key:r,staticClass:"color-picker-item",style:{backgroundColor:e.color},on:{click:function(o){return t.setColor(e.color)}}})})),0)])},v=[],w=(o("99af"),o("caad"),o("ac1f"),o("2532"),o("5319"),{bind:function(t){var e=t,o=t.querySelector(".drag-tool"),r=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();o.onmousedown=function(t){var o=t.clientX-e.offsetLeft,n=t.clientY-e.offsetTop,i=document.body.clientWidth,s=document.documentElement.clientHeight,c=e.offsetWidth,a=e.offsetHeight,l=e.offsetLeft,u=i-e.offsetLeft-c,f=e.offsetTop,p=s-e.offsetTop-a,d=r(e,"left"),h=r(e,"top");d.includes("%")?(d=+document.body.clientWidth*(+d.replace(/%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/%/g,"")/100)):(d=+d.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(t){var r=t.clientX-o,i=t.clientY-n;-r>l?r=-l:r>u&&(r=u),-i>f?i=-f:i>p&&(i=p),e.style.cssText+=";left:".concat(r+d,"px;top:").concat(i+h,"px;")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}});function O(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?O(Object(o),!0).forEach((function(e){Object(a["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var j={name:"ToolBar",data:function(){return{activeTool:"",toolList:[{icon:"fa fa-pencil",state:"polyline",title:"画笔工具"},{icon:"fa-circle-o",state:"ellipse",title:"椭圆工具"},{icon:"fa-square-o",state:"rect",title:"矩形工具"},{icon:"fa-minus",state:"line",title:"直线工具"},{icon:"fa-font",state:"text",title:"文字工具"}],colorList:[{color:"#000000"},{color:"#FF88C2"},{color:"#FF5511"},{color:"#EE7700"},{color:"#FFFF00"},{color:"#BBFF00"},{color:"#77FF00"},{color:"#00FF00"},{color:"#00FFFF"},{color:"#00BBFF"},{color:"#0000FF"},{color:"#7700FF"},{color:"#9900FF"},{color:"#CC00FF"},{color:"#FF00FF"},{color:"#FFFFFF"}]}},computed:g({},Object(l["c"])(["color","drawState"])),directives:{drag:w},methods:g({},Object(l["b"])({setDrawState:"setDrawState",setColor:"setColor"}))},z=j,S=(o("aa1c"),Object(h["a"])(z,y,v,!1,null,"99b531a0",null)),F=S.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"draw-container"},[o("div",{ref:"drawMain",staticClass:"draw-main"}),o("textarea",{attrs:{id:"textInput",cols:"30",rows:"5"}})])},x=[],P=(o("cb29"),o("537f")),C=o.n(P);function D(){var t=new Date,e="-",o=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();r>=1&&r<=9&&(r="0"+r),n>=0&&n<=9&&(n="0"+n);var i=o+e+r+e+n;return i}function E(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function G(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?E(Object(o),!0).forEach((function(e){Object(a["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var _={name:"DrawContainer",data:function(){return{zr:"",zrGroup:"",zrBgElement:null,commonStyle:{fill:"transparent",stroke:"black"},fontStyle:{fontSize:"15",textStroke:"black"}}},computed:G({},Object(l["c"])(["color","trigger","drawState"])),watch:{trigger:function(){switch(this.zr.off("mousedown"),this.zr.off("mousemove"),this.zr.off("mouseup"),this.zr.off("click"),this.drawState){case"newFile":this.newFile();break;case"undo":this.undo();break;case"save":this.save();break;case"polyline":this.drawPolyline();break;case"ellipse":this.drawEllipse();break;case"rect":this.drawRect();break;case"line":this.drawLine();break;case"text":this.drawText();break;case"fill":this.fill();break}}},methods:G({},Object(l["b"])({setDrawState:"setDrawState",setZrGroup:"setZrGroup",setZr:"setZr"}),{drawPolyline:function(){var t,e,o,r=this,n=[],i=!1,s=this.zrGroup;this.zr.on("mousedown",(function(c){e=c.offsetX-s.position[0],o=c.offsetY-s.position[1],i=!0,n.length=0,n.push([e,o]),t=new C.a.Polyline({type:"circle",shape:{points:n},style:G({},r.commonStyle,{stroke:r.color,smooth:.5})}),s.add(t)})),this.zr.on("mousemove",(function(e){if(i){var o=e.offsetY-s.position[1],r=e.offsetX-s.position[0];n.push([r,o]),t.attr({shape:{points:n}})}})),this.zr.on("mouseup",(function(){i=!1}))},drawEllipse:function(){var t,e,o,r=this,n=!1,i=this.zrGroup;this.zr.on("mousedown",(function(s){e=s.offsetX-i.position[0],o=s.offsetY-i.position[1],n=!0,t=new C.a.Ellipse({type:"circle",shape:{cx:e,cy:o,rx:0,ry:0},style:G({},r.commonStyle,{stroke:r.color})}),i.add(t)})),this.zr.on("mousemove",(function(r){if(n){var s=r.offsetY-i.position[1],c=r.offsetX-i.position[0];t.attr({shape:{cx:(c+e)/2,cy:(s+o)/2,rx:(c-e)/2,ry:(s-o)/2}})}})),this.zr.on("mouseup",(function(){n=!1}))},drawRect:function(){var t,e,o,r=this,n=!1,i=this.zrGroup;this.zr.on("mousedown",(function(s){e=s.offsetX-i.position[0],o=s.offsetY-i.position[1],n=!0,t=new C.a.Rect({type:"rect",shape:{x:e,y:o,width:0,height:0},style:G({},r.commonStyle,{stroke:r.color})}),i.add(t)})),this.zr.on("mousemove",(function(r){if(n){var s=r.offsetY-i.position[1],c=r.offsetX-i.position[0];t.attr({shape:{x:c-e<0?c:e,y:s-o<0?s:o,width:Math.abs(c-e),height:Math.abs(s-o)}})}})),this.zr.on("mouseup",(function(){n=!1}))},drawLine:function(){var t,e,o,r=this,n=!1,i=this.zrGroup;this.zr.on("mousedown",(function(s){e=s.offsetX-i.position[0],o=s.offsetY-i.position[1],n=!0,t=new C.a.Line({type:"line",shape:{x1:e,y1:o,x2:e,y2:o},style:G({},r.commonStyle,{stroke:r.color})}),i.add(t)})),this.zr.on("mousemove",(function(r){if(n){var s=r.offsetY-i.position[1],c=r.offsetX-i.position[0];t.attr({shape:{x1:e,y1:o,x2:c,y2:s}})}})),this.zr.on("mouseup",(function(){n=!1}))},drawText:function(){var t,e,o,r=this,n=this,i=this.zrGroup,s=document.getElementById("textInput"),c=!1;this.zr.on("mousedown",(function(a){e=s.offsetLeft,o=s.offsetTop,c?(a.offsetY>=o&&a.offsetY<o+239&&a.offsetX>=e&&a.offsetX<e+117||(t=new C.a.Text({type:"text",position:[e,o],style:G({},n.fontStyle,{text:s.value,textFill:r.color})}),i.add(t),s.style.cssText+="display:none",r.zr.off("mousedown")),n.setDrawState("")):(s.style.cssText+=";left:".concat(a.offsetX,"px;top:").concat(a.offsetY,"px;display:block"),c=!0)}))},fill:function(){var t,e,o=this,r=this.zrGroup,n=!0;this.zr.on("click",(function(i){t=i.offsetX-r.position[0],e=i.offsetY-r.position[1];for(var s=o.zrGroup.childCount()-1;s>=0;s--){var c=o.zrGroup.childAt(s);if(c.contain(t,e)){c.attr({style:{fill:o.color}}),n=!1;break}}n&&o.zrBgElement.attr({style:{fill:o.color}})}))},newFile:function(){this.zrGroup.removeAll(),this.zrBgElement.attr({style:{fill:"#FFFFFF"}}),this.zr.refresh()},undo:function(){this.zrGroup.remove(this.zrGroup.childAt(this.zrGroup.childCount()-1))},save:function(){var t=this.zr.painter.getRenderedCanvas({}),e=document.createElement("a");e.download=D(),e.style.display="none",e.href=t.toDataURL("image/png"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}}),mounted:function(){this.zr=C.a.init(this.$refs.drawMain);var t=this.zr.getWidth(),e=this.zr.getHeight();this.zrBgElement=new C.a.Rect({shape:{width:t,height:e},style:{fill:"#fff"}}),this.zr.add(this.zrBgElement);var o=new C.a.Group;o.position=[0,0],this.zrGroup=o,this.zr.add(this.zrGroup),this.setZrGroup(this.zrGroup),this.setZr(this.zr)}},T=_,L=(o("926c"),Object(h["a"])(T,k,x,!1,null,"7293fa64",null)),Y=L.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list-container"},t._l(t.list,(function(e){return o("div",{key:e.id,staticClass:"list-item",class:{active:e.id==t.activeId},on:{click:function(o){return t.setSelect(e.ref)}}},[o("i",{staticClass:"fa fa-remove",on:{click:function(o){return t.remove(e.ref)}}}),t._v(" "+t._s(e.type+" "+e.id)+" ")])})),0)},B=[];function M(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function Z(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?M(Object(o),!0).forEach((function(e){Object(a["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var H={name:"ElementList",data:function(){return{list:[],activeId:""}},computed:Z({},Object(l["c"])(["zrGroup","zr"])),watch:{"zrGroup._children":function(){var t=[];this.zrGroup.eachChild((function(e){t.push({id:e.id,type:e.type,ref:e})})),this.list=t}},methods:{setSelect:function(t){this.activeId=t.id,this.zr.clearHover(),this.zr.addHover(t,{fill:"gold",stroke:"gold",shadowColor:"#ee604a"})},remove:function(t){this.zrGroup.remove(t)}},mounted:function(){}},$=H,I=(o("8138"),Object(h["a"])($,X,B,!1,null,"2d55b794",null)),R=I.exports,W={name:"ZrenderDraw",components:{ToolHeader:m,ToolBar:F,DrawContainer:Y,ElementList:R},data:function(){return{}},methods:{}},A=W,q=(o("f0d0"),Object(h["a"])(A,n,i,!1,null,"51478ecc",null)),J=q.exports;o("b429"),o("8512"),o("1be0");r["a"].use(l["a"]);var N=new l["a"].Store({state:{color:"#000000",trigger:0,drawState:"",zrGroup:{},zr:null},mutations:{setColor:function(t,e){t.color=e},setDrawState:function(t,e){t.drawState=e,t.trigger++},setZrGroup:function(t,e){t.zrGroup=e},setZr:function(t,e){t.zr=e}}});r["a"].config.productionTip=!1,new r["a"]({store:N,render:function(t){return t(J)}}).$mount("#app")},8138:function(t,e,o){"use strict";var r=o("81e1"),n=o.n(r);n.a},"81e1":function(t,e,o){},"91de":function(t,e,o){},"926c":function(t,e,o){"use strict";var r=o("91de"),n=o.n(r);n.a},aa1c:function(t,e,o){"use strict";var r=o("49cf"),n=o.n(r);n.a},b3ba:function(t,e,o){},e9e1:function(t,e,o){},f0d0:function(t,e,o){"use strict";var r=o("b3ba"),n=o.n(r);n.a}});
//# sourceMappingURL=app.334d478b.js.map