(function(e){function t(t){for(var a,r,l=t[0],o=t[1],c=t[2],u=0,m=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,l=1;l<s.length;l++){var o=s[l];0!==n[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"07fe":function(e,t,s){},"13c7":function(e,t,s){},"14d4":function(e,t,s){e.exports=s.p+"img/vue_gram_logo_cp.6eb5553c.png"},2886:function(e,t,s){},"2eb7":function(e,t,s){"use strict";var a=s("13c7"),n=s.n(a);n.a},"32a8":function(e,t,s){"use strict";var a=s("2886"),n=s.n(a);n.a},"34d0":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-phone"},[a("div",{staticClass:"phone-header"},["app-step-1"!=e.step?a("a",{staticClass:"cancel-cta",on:{click:e.goToHome}},[e._v(" Cancel ")]):e._e(),a("img",{attrs:{src:s("14d4")}}),"app-step-2"==e.step?a("a",{staticClass:"next-cta",on:{click:function(t){e.step="app-step-3"}}},[e._v(" Next ")]):e._e(),"app-step-3"==e.step?a("a",{staticClass:"next-cta",on:{click:e.share}},[e._v(" Share ")]):e._e()]),a("phone-body",{attrs:{posts:e.posts,step:e.step,image:e.image,filters:e.filters,selectFilter:e.selectFilter},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),a("div",{staticClass:"phone-footer"},[a("div",{staticClass:"home-cta"},[a("i",{staticClass:"fas fa-home fa-lg",on:{click:e.goToHome}})]),a("div",{staticClass:"upload-cta"},[a("input",{attrs:{type:"file",id:"file",name:"file",disabled:"app-step-1"!=e.step},on:{change:e.uploadImage}}),e._m(0)])])],1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"file"}},[s("i",{staticClass:"far fa-plus-square fa-lg"})])}],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"phone-body"},[s("transition",{attrs:{mode:"out-in"}},[s(e.step,{tag:"component",attrs:{posts:e.posts,selectFilter:e.selectFilter,image:e.image,filters:e.filters,"v-model":e.value}})],1)],1)},l=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"feed"},e._l(e.posts,(function(e,t){return s("vuegram-post",{key:t,attrs:{post:e}})})),1)},c=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuegram-post"},[s("div",{staticClass:"header level"},[s("div",{staticClass:"level-left"},[s("figure",{staticClass:"image is-32x32"},[s("img",{attrs:{src:e.post.userImage}})]),s("span",{staticClass:"username"},[e._v(e._s(e.post.username))])])]),s("div",{staticClass:"image-container",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.cilckLike}}),s("div",{staticClass:"content"},[s("div",{staticClass:"heart"},[s("i",{staticClass:"far fa-heart",class:{fas:this.post.hasBeenLiked},on:{click:e.cilckLike}})]),s("p",{staticClass:"likes"},[e._v(e._s(e.post.likes)+" likes")]),s("p",{staticClass:"caption"},[e._v(e._s(e.post.caption))])])])},u=[],m={props:{post:Object},methods:{cilckLike:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}}},f=m,d=(s("a2a1"),s("2877")),g=Object(d["a"])(f,p,u,!1,null,null,null),h=g.exports,v={props:{posts:Array},components:{"vuegram-post":h}},b=v,_=Object(d["a"])(b,o,c,!1,null,null,null),k=_.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"selected-image",class:e.selectFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"filter-container"},e._l(e.filters,(function(t){return s("file-type",{key:t.name,attrs:{filter:t,image:e.image}})})),1)])},w=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter-type"},[s("p",[e._v(e._s(e.filter.name))]),s("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.image+")"},on:{click:e.selectFilter}})])},x=[],j=(s("4de4"),s("b0c0"),new a["a"]),O={props:{filter:Object,image:String},methods:{selectFilter:function(){j.$emit("selectedFilter",this.filter.name)}}},F=O,I=(s("bf76"),Object(d["a"])(F,C,x,!1,null,null,null)),S=I.exports,$={props:{selectFilter:String,image:String,filters:Array},components:{"file-type":S}},L=$,T=Object(d["a"])(L,y,w,!1,null,null,null),B=T.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"selected-image",class:e.selectFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{staticClass:"caption-container"},[s("textarea",{attrs:{placeholder:"Write a caption..."},domProps:{value:e.value},on:{input:e.inputText}})])])},P=[],z={props:{selectFilter:String,image:String,filters:Array,value:String},methods:{inputText:function(e){j.$emit("inputText",e.target.value)}}},A=z,H=Object(d["a"])(A,E,P,!1,null,null,null),M=H.exports,N={props:{posts:Array,filters:Array,step:String,image:String,selectFilter:String,value:String},components:{"app-step-1":k,"app-step-2":B,"app-step-3":M},methods:{inputText:function(e){this.$emit("input",e.target.value)}}},J=N,R=(s("2eb7"),s("ca5c"),Object(d["a"])(J,r,l,!1,null,"6c277b1d",null)),W=R.exports,q=[{username:"liuluwei",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",likes:36,hasBeenLiked:!1,caption:"When you're ready for summer '18 ☀️",filter:"perpetua"},{username:"cc",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",likes:20,hasBeenLiked:!1,caption:"Views from the six...",filter:"clarendon"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"}],D=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyes"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],K={name:"app",components:{"phone-body":W},created:function(){var e=this;j.$on("selectedFilter",(function(t){e.selectFilter=t})),j.$on("inputText",(function(t){e.caption=t}))},data:function(){return{posts:q,filters:D,step:"app-step-1",image:"",selectFilter:"13",caption:""}},methods:{uploadImage:function(e){var t=this,s=e.target.files;if(s.length){var a=new FileReader;a.readAsDataURL(s[0]),a.onload=function(e){t.image=e.target.result,t.step="app-step-2"}}},goToHome:function(){this.image="",this.selectFilter="",this.step="app-step-1"},share:function(){var e={username:"King",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:this.image,likes:0,hasBeenLiked:!1,caption:this.caption,filter:this.selectFilter};this.posts.unshift(e),this.goToHome()}}},U=K,V=(s("32a8"),Object(d["a"])(U,n,i,!1,null,null,null)),G=V.exports,Q=s("0eb0"),X=s.n(Q);a["a"].use(X.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(G)}}).$mount("#app")},5923:function(e,t,s){},a2a1:function(e,t,s){"use strict";var a=s("5923"),n=s.n(a);n.a},bf76:function(e,t,s){"use strict";var a=s("34d0"),n=s.n(a);n.a},ca5c:function(e,t,s){"use strict";var a=s("07fe"),n=s.n(a);n.a}});
//# sourceMappingURL=app.1b57b524.js.map