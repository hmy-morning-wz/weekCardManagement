webpackJsonp([1],Array(93).concat([function(e,t,r){var a=r(32)(r(143),r(164),function(e){r(159)},"data-v-acdcc490",null);e.exports=a.exports},,,function(e,t,r){e.exports=r(1)(12)},function(e,t,r){e.exports=r(1)(5)},function(e,t,r){e.exports=r(1)(128)},function(e,t,r){e.exports=r(1)(17)},function(e,t,r){e.exports=r(1)(54)},function(e,t,r){"use strict";var a={};a.netImg="https://operation.allcitygo.com/",a.nethost="https://bmapi.allcitygo.com:13002/op/",t.a=a},function(e,t,r){"use strict";r.d(t,"b",function(){return m}),r.d(t,"a",function(){return p});var a=r(124),n=r.n(a),i=r(103),o=r.n(i),s=r(134),c=r.n(s),l=(r(101),r(12));r.n(l),window.sessionStorage.getItem("ak")||window.localStorage.getItem("ak");window.Promise||(window.Promise=o.a);var u=function(e){var t=e.data;return t.code,0==+t.code?t:2e4==+t.code?t:302!=+t.code&&(5==+t.code&&l.Message.error("系统维护中，请稍后再试。"),o.a.reject(e.data,e))},d=function(e){return o.a.reject(e.response.data||{},e.response)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,r=void 0===t?{}:t,a=e.params,i=void 0===a?{}:a,o=e.method,s=void 0===o?"":o,l=e.url,f=void 0===l?"":l,m=e.headers,p=void 0===m?{}:m,h={method:s,url:f,data:r,params:i,responseType:"json",withCredentials:!0};return h.headers={"Content-Type":"application/json; charset=UTF-8",access_token:function(){for(var e=(document.cookie||"x-access-token=1_571f545976bc45aa98b28d7d02202558_1").split("; "),t=0;t<e.length;t++){var r=e[t].split("=");if("x-access-token"==r[0])return r[1]}}()},n()(h.headers,p),n()(h.params,{_:(new Date).getTime()}),c()(h).then(u,d)},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f({url:e,method:"GET",params:t,headers:r})},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f({url:e,method:"POST",data:t,headers:r})}},function(e,t,r){e.exports={default:r(109),__esModule:!0}},function(e,t,r){var a=r(100),n=r(96)("toStringTag"),i="Arguments"==a(function(){return arguments}());e.exports=function(e){var t,r,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),n))?r:i?a(t):"Object"==(o=a(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,r){var a,n,i,o=r(98),s=r(112),c=r(125),l=r(133),u=r(97),d=u.process,f=u.setImmediate,m=u.clearImmediate,p=u.MessageChannel,h=0,v={},g="onreadystatechange",y=function(){var e=+this;if(v.hasOwnProperty(e)){var t=v[e];delete v[e],t()}},x=function(e){y.call(e.data)};f&&m||(f=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return v[++h]=function(){s("function"==typeof e?e:Function(e),t)},a(h),h},m=function(e){delete v[e]},"process"==r(100)(d)?a=function(e){d.nextTick(o(y,e,1))}:p?(i=(n=new p).port2,n.port1.onmessage=x,a=o(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(a=function(e){u.postMessage(e+"","*")},u.addEventListener("message",x,!1)):a=g in l("script")?function(e){c.appendChild(l("script"))[g]=function(){c.removeChild(this),y.call(e)}}:function(e){setTimeout(o(y,e,1),0)}),e.exports={set:f,clear:m}},function(e,t,r){e.exports=r(1)(125)},function(e,t,r){e.exports=r(1)(27)},function(e,t,r){"use strict";var a=r(103),n=r.n(a),i=r(101),o=(r(102),r(102)),s=i.a.nethost;t.a={addSaleProductCfg:function(e){var t=s+"operation-mall/saleProductCfg/addSaleProductCfg";return r.i(o.a)(t,e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},updateSaleProductCfg:function(e){var t=s+"operation-mall/saleProductCfg/updateSaleProductCfg";return r.i(o.a)(t,e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},getSaleGeneralCfg:function(){var e=s+"operation-mall/saleGeneralCfg/getSaleGeneralCfg";return r.i(o.b)(e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},addSaleGeneralCfg:function(e){var t=s+"operation-mall/saleGeneralCfg/addSaleGeneralCfg";return r.i(o.a)(t,e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},updateSaleGeneralCfg:function(e){var t=s+"operation-mall/saleGeneralCfg/updateSaleGeneralCfg";return r.i(o.a)(t,e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},getMainMerchantList:function(){var e=s+"operation-mall/saleProductCfg/getMainMerchantList";return r.i(o.b)(e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},getEffectiveTimePrecisionList:function(){var e=s+"operation-mall/saleProductCfg/getEffectiveTimePrecisionList";return r.i(o.b)(e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},getEquityMerchantList:function(){var e=s+"operation-mall/saleProductCfg/getEquityMerchantList";return r.i(o.b)(e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},getSaleNote:function(e){var t=s+"operation-mall/saleProductCfg/getSaleNote?cityCode="+e;return r.i(o.b)(t).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},getWeekCardList:function(e){var t=s+"operation-mall/saleProductCfg/getSaleProductList";return r.i(o.a)(t,e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},getCardDetail:function(e){var t=s+"operation-mall/saleProductCfg/getSaleProductCfgById?id="+e;return r.i(o.b)(t).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})},updateSaleProductStatus:function(e){var t=s+"operation-mall/saleProductCfg/updateSaleProductStatus";return r.i(o.a)(t,e).then(function(e){return n.a.resolve(e)},function(e){return n.a.reject(e)})}}},function(e,t,r){r(127),r(128),r(129),r(121),e.exports=r(11).Promise},function(e,t){e.exports=function(e,t,r,a){if(!(e instanceof t)||void 0!==a&&a in e)throw TypeError(r+": incorrect invocation!");return e}},function(e,t,r){var a=r(98),n=r(114),i=r(113),o=r(99),s=r(126),c=r(120),l={},u={};(t=e.exports=function(e,t,r,d,f){var m,p,h,v,g=f?function(){return e}:c(e),y=a(r,d,t?2:1),x=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(i(g)){for(m=s(e.length);m>x;x++)if((v=t?y(o(p=e[x])[0],p[1]):y(e[x]))===l||v===u)return v}else for(h=g.call(e);!(p=h.next()).done;)if((v=n(h,y,p.value,t))===l||v===u)return v}).BREAK=l,t.RETURN=u},function(e,t){e.exports=function(e,t,r){var a=void 0===r;switch(t.length){case 0:return a?e():e.call(r);case 1:return a?e(t[0]):e.call(r,t[0]);case 2:return a?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return a?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return a?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},function(e,t,r){var a=r(107),n=r(96)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||i[n]===e)}},function(e,t,r){var a=r(99);e.exports=function(e,t,r,n){try{return n?t(a(r)[0],r[1]):t(r)}catch(t){var i=e.return;throw void 0!==i&&a(i.call(e)),t}}},function(e,t,r){var a=r(96)("iterator"),n=!1;try{var i=[7][a]();i.return=function(){n=!0},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!n)return!1;var r=!1;try{var i=[7],o=i[a]();o.next=function(){return{done:r=!0}},i[a]=function(){return o},e(i)}catch(e){}return r}},function(e,t,r){var a=r(97),n=r(105).set,i=a.MutationObserver||a.WebKitMutationObserver,o=a.process,s=a.Promise,c="process"==r(100)(o);e.exports=function(){var e,t,r,l=function(){var a,n;for(c&&(a=o.domain)&&a.exit();e;){n=e.fn,e=e.next;try{n()}catch(a){throw e?r():t=void 0,a}}t=void 0,a&&a.enter()};if(c)r=function(){o.nextTick(l)};else if(i){var u=!0,d=document.createTextNode("");new i(l).observe(d,{characterData:!0}),r=function(){d.data=u=!u}}else if(s&&s.resolve){var f=s.resolve();r=function(){f.then(l)}}else r=function(){n.call(a,l)};return function(a){var n={fn:a,next:void 0};t&&(t.next=n),e||(e=n,r()),t=n}}},function(e,t,r){var a=r(122);e.exports=function(e,t,r){for(var n in t)r&&e[n]?e[n]=t[n]:a(e,n,t[n]);return e}},function(e,t,r){"use strict";var a=r(97),n=r(11),i=r(123),o=r(135),s=r(96)("species");e.exports=function(e){var t="function"==typeof n[e]?n[e]:a[e];o&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},function(e,t,r){var a=r(99),n=r(106),i=r(96)("species");e.exports=function(e,t){var r,o=a(e).constructor;return void 0===o||void 0==(r=a(o)[i])?t:n(r)}},function(e,t,r){var a=r(104),n=r(96)("iterator"),i=r(107);e.exports=r(11).getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||i[a(e)]}},function(e,t,r){"use strict";var a,n,i,o=r(131),s=r(97),c=r(98),l=r(104),u=r(33),d=r(130),f=r(106),m=r(110),p=r(111),h=r(119),v=r(105).set,g=r(116)(),y="Promise",x=s.TypeError,b=s.process,C=s[y],_="process"==l(b=s.process),F=function(){},w=!!function(){try{var e=C.resolve(1),t=(e.constructor={})[r(96)("species")]=function(e){e(F,F)};return(_||"function"==typeof PromiseRejectionEvent)&&e.then(F)instanceof t}catch(e){}}(),M=function(e,t){return e===t||e===C&&t===i},N=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},k=function(e){return M(C,e)?new P(e):new n(e)},P=n=function(e){var t,r;this.promise=new e(function(e,a){if(void 0!==t||void 0!==r)throw x("Bad Promise constructor");t=e,r=a}),this.resolve=f(t),this.reject=f(r)},D=function(e){try{e()}catch(e){return{error:e}}},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;g(function(){for(var a=e._v,n=1==e._s,i=0,o=function(t){var r,i,o=n?t.ok:t.fail,s=t.resolve,c=t.reject,l=t.domain;try{o?(n||(2==e._h&&L(e),e._h=1),!0===o?r=a:(l&&l.enter(),r=o(a),l&&l.exit()),r===t.promise?c(x("Promise-chain cycle")):(i=N(r))?i.call(r,s,c):s(r)):c(a)}catch(e){c(e)}};r.length>i;)o(r[i++]);e._c=[],e._n=!1,t&&!e._h&&q(e)})}},q=function(e){v.call(s,function(){var t,r,a,n=e._v;if(S(e)&&(t=D(function(){_?b.emit("unhandledRejection",n,e):(r=s.onunhandledrejection)?r({promise:e,reason:n}):(a=s.console)&&a.error&&a.error("Unhandled promise rejection",n)}),e._h=_||S(e)?2:1),e._a=void 0,t)throw t.error})},S=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,a=0;r.length>a;)if((t=r[a++]).fail||!S(t.promise))return!1;return!0},L=function(e){v.call(s,function(){var t;_?b.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})})},$=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},j=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw x("Promise can't be resolved itself");(t=N(e))?g(function(){var a={_w:r,_d:!1};try{t.call(e,c(j,a,1),c($,a,1))}catch(e){$.call(a,e)}}):(r._v=e,r._s=1,T(r,!1))}catch(e){$.call({_w:r,_d:!1},e)}}};w||(C=function(e){m(this,C,y,"_h"),f(e),a.call(this);try{e(c(j,this,1),c($,this,1))}catch(e){$.call(this,e)}},(a=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(117)(C.prototype,{then:function(e,t){var r=k(h(this,C));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=_?b.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),P=function(){var e=new a;this.promise=e,this.resolve=c(j,e,1),this.reject=c($,e,1)}),u(u.G+u.W+u.F*!w,{Promise:C}),r(132)(C,y),r(118)(y),i=r(11)[y],u(u.S+u.F*!w,y,{reject:function(e){var t=k(this);return(0,t.reject)(e),t.promise}}),u(u.S+u.F*(o||!w),y,{resolve:function(e){if(e instanceof C&&M(e.constructor,this))return e;var t=k(this);return(0,t.resolve)(e),t.promise}}),u(u.S+u.F*!(w&&r(115)(function(e){C.all(e).catch(F)})),y,{all:function(e){var t=this,r=k(t),a=r.resolve,n=r.reject,i=D(function(){var r=[],i=0,o=1;p(e,!1,function(e){var s=i++,c=!1;r.push(void 0),o++,t.resolve(e).then(function(e){c||(c=!0,r[s]=e,--o||a(r))},n)}),--o||a(r)});return i&&n(i.error),r.promise},race:function(e){var t=this,r=k(t),a=r.reject,n=D(function(){p(e,!1,function(e){t.resolve(e).then(r.resolve,a)})});return n&&a(n.error),r.promise}})},function(e,t,r){e.exports=r(1)(10)},function(e,t,r){e.exports=r(1)(11)},function(e,t,r){e.exports=r(1)(119)},function(e,t,r){e.exports=r(1)(130)},function(e,t,r){e.exports=r(1)(143)},function(e,t,r){e.exports=r(1)(146)},function(e,t,r){e.exports=r(1)(147)},function(e,t,r){e.exports=r(1)(151)},function(e,t,r){e.exports=r(1)(19)},function(e,t,r){e.exports=r(1)(28)},function(e,t,r){e.exports=r(1)(30)},function(e,t,r){e.exports=r(1)(55)},function(e,t,r){e.exports=r(1)(74)},function(e,t,r){e.exports=r(1)(9)},function(e,t,r){"use strict";var a=function(e){return("0"+e).slice(-2)},n=function e(t){this.d=t instanceof e?function(e){return new Date(e.getTime())}(t.d):t?new Date(t):new Date};n.prototype={addMonths:function(e){var t=this.d;return this.d.setMonth(t.getMonth()+e),this},addDate:function(e){var t=this.d;return this.d.setDate(t.getDate()+e),this},format:function(e){e||(e="YYYY-MM-DD");var t=this.d;return e.replace("YYYY",t.getFullYear()).replace("MM",a(t.getMonth()+1)).replace("DD",a(t.getDate())).replace("d",t.getDay()).replace("HH",a(t.getHours())).replace("mm",a(t.getMinutes())).replace("ss",a(t.getSeconds()))},formats:function(e){e||(e="YYYY-MM-DD HH:mm:ss");var t=this.d;return e.replace("YYYY",t.getFullYear()).replace("MM",a(t.getMonth()+1)).replace("DD",a(t.getDate())).replace("d",t.getDay()).replace("HH",a(t.getHours())).replace("mm",a(t.getMinutes())).replace("ss",a(t.getSeconds()))},year:function(e){return e?(this.d.setYear(e),this):this.d.getFullYear()},month:function(e){return e?(this.d.setMonth(e),this):this.d.getMonth()},date:function(e){return e?(this.d.setDate(e),this):this.d.getDate()},day:function(){return this.d.getDay()}},t.a=function(e){return new n(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},created:function(){},computed:{},methods:{}}},function(e,t,r){(e.exports=r(3)(!1)).push([e.i,".header_container{background-color:#eff2f7;height:60px;display:flex;justify-content:space-between;align-items:center;padding-left:20px}.avator{border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},function(e,t,r){var a=r(138);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(4)("271da596",a,!0)},function(e,t,r){var a=r(32)(r(137),r(141),function(e){r(139)},null,null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header_container"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,a){return r("el-breadcrumb-item",{key:a},[e._v(e._s(t))])})],2)],1)},staticRenderFns:[]}},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(108),n=r(101),i=(r(136),r(140));r.n(i);t.default={data:function(){return{loadingShow:!1,ue1:"ue1",type:!1,disableVal:"",dateRange:[],pickerOptions:{shortcuts:[{text:"下一周",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",[r,t])}},{text:"一个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+2592e6),e.$emit("pick",[r,t])}},{text:"三个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+7776e6),e.$emit("pick",[r,t])}}]},timeAccuracyList:[],mainMerchantList:[],equityMerchantList:[],virtualCardList:[],ruleForm:{list:[],cardDetailsGuide:"",discount:"",effectDay:"",equityMerchantNo:"",equityMerchantName:"",merchantKey:"",mainMerchantNo:"",mainMerchantName:"",orderConfirmation:"",originalPrice:"",productName:"",mainHueValue:"",saleNoticeUrl:"",productCoverUrl:"",saleNoticeTitle:"",salePrice:"",saleRule:"",saleStartTime:"",saleEndTime:"",singleAmtLimit:"",singleDayNum:"",validDays:"",saleNote:"",appletAppId:"",cardType:"",cityName:""},uploadimgUrl:n.a.netImg+"prefer/api/fileUploadOne",rules:{cardDetailsGuide:[{required:!0,message:"请输入引导语",trigger:"change"}],equityMerchantNo:[{required:!0,message:"请选择结算商户",trigger:"change"}],mainMerchantNo:[{required:!0,message:"请选择主体商户",trigger:"change"}],effectiveTimePrecision:[{required:!0,message:"请选择时间精度",trigger:"change"}],saleNote:[{required:!0,message:"请选择支持的虚拟卡",trigger:"change"}],productName:[{required:!0,message:"请输入周期卡名称",trigger:"change"}],mainHueValue:[{required:!0,message:"请设置主色调值",trigger:"change"}],salePrice:[{required:!0,message:"请输入基础价格",trigger:"change"}],originalPrice:[{required:!0,message:"请输入原始价格",trigger:"change"}],orderConfirmation:[{required:!0,message:"请输入订单确认提示",trigger:"change"}],saleStartTime:[{required:!0,message:"请选择起止日期",trigger:"change"}],singleAmtLimit:[{required:!0,message:"请输入单笔封顶金额",trigger:"change"}],saleRule:[{required:!0,message:"请输入规则",trigger:"change"}],discount:[{required:!0,message:"请输入折扣系数",trigger:"change"},{validator:function(e,t,r){/^(0(\.\d{1,2})?|1(\.0{1,2})?)$/.test(t)?r():r(new Error("0-1之间,最多两位小数"))},trigger:"change"}],productCoverUrl:[{required:!0,message:"请上传封面图片",trigger:"change"}]}}},created:function(){this.getMainMerchantList(),this.getEquityMerchantList(),this.getEffectiveTimePrecisionList()},mounted:function(){this.$nextTick(function(){})},updated:function(){},components:{},methods:{handleAddPoint:function(){this.ruleForm.list.push({content:"",title:"",iconUrl:""}),console.log(this.ruleForm.list)},delPoint:function(e){this.ruleForm.list.splice(e,1),console.log(this.ruleForm.list)},handleDateChange:function(){this.ruleForm.saleEndTime=this.dateRange[1]||"",this.ruleForm.saleStartTime=this.dateRange[0]||""},handleMainMerchantChange:function(e){var t=this;console.log(e,this.ruleForm.mainMerchantNo),this.mainMerchantList.forEach(function(r,a){r.mainMerchantNo===e&&(console.log(r),t.ruleForm.mainMerchantName=r.mainMerchantName,t.ruleForm.cityCode=r.cityCode)}),this.ruleForm.cardType="",this.ruleForm.saleNote="",this.ruleForm.appletAppId="",this.ruleForm.cityName="",this.virtualCardList=[],this.ruleForm.cityCode&&this.getSaleNote()},handleEquityMerchantChange:function(e){var t=this;this.equityMerchantList.forEach(function(r,a){r.equityMerchantNo===e&&(t.ruleForm.equityMerchantName=r.equityMerchantName,t.ruleForm.merchantKey=r.merchantKey)})},handleVirtualCardChange:function(e){var t=this;this.virtualCardList.forEach(function(r,a){r.cardType===e&&(t.ruleForm.saleNote=r.cardName,t.ruleForm.appletAppId=r.miniAppId,t.ruleForm.cityName=r.cityName)})},getMainMerchantList:function(){var e=this;a.a.getMainMerchantList().then(function(t){console.log(t),e.mainMerchantList=t.data||[]},function(t){e.$message.error(t.sub_msg||t.msg||"请求服务器连接失败!")})},getEffectiveTimePrecisionList:function(){var e=this;a.a.getEffectiveTimePrecisionList().then(function(t){console.log(t),e.timeAccuracyList=t.data||[]},function(t){e.$message.error(t.sub_msg||t.msg||"请求服务器连接失败!")})},getEquityMerchantList:function(){var e=this;a.a.getEquityMerchantList().then(function(t){console.log(t),e.equityMerchantList=t.data||[]},function(t){e.$message.error(t.sub_msg||t.msg||"请求服务器连接失败!")})},getSaleNote:function(){var e=this;this.virtualCardList=[],a.a.getSaleNote(this.ruleForm.cityCode).then(function(t){console.log(t),e.virtualCardList=t.data||[]},function(t){e.$message.error(t.sub_msg||t.msg||"请求服务器连接失败!")})},checkListValid:function(){var e=!0;return this.ruleForm.list.forEach(function(t,r){t.content&&t.iconUrl&&t.title||(e=!1)}),e},showConfirm:function(e){this.$confirm(""+e,"",{confirmButtonText:"确定",type:"error",center:!0})},addWeekCard:function(){var e=this;a.a.addSaleProductCfg(this.ruleForm).then(function(t){console.log(t),e.$message({message:"添加成功",type:"success"}),e.$router.go(-1)},function(t){e.$message.error(t.sub_msg||t.msg||"请求服务器连接失败!")})},submitForm:function(e){var t=this;console.log(this.ruleForm),this.$refs[e].validate(function(e){if(!e)return t.showConfirm("表单验证错误"),!1;if(t.ruleForm.list.length>5||t.ruleForm.list.length<3)t.showConfirm("宣传点限制3-5个");else{t.checkListValid()?t.addWeekCard():t.showConfirm("宣传点内容不可空")}})},handleAvatarSuccess:function(e,t){var r="https://sit-img-citytsm.oss-cn-hangzhou.aliyuncs.com/"+e.data;this.ruleForm.smallImages.push(r)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/jpg",r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},handleCoverSuccess:function(e,t){this.ruleForm.productCoverUrl="https://"+e.data},handleCoverDelete:function(){this.ruleForm.productCoverUrl=""},beforeAvatarUpload2:function(e){var t="image/jpeg"===e.type||"image/jpg",r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},handleCoverSuccess2:function(e,t,r){console.log(t,e),this.ruleForm.list[e].iconUrl="https://"+t.data},handleCoverDelete2:function(e){this.ruleForm.list[e].iconUrl=""}},computed:{},watch:{loadingShow:function(e){return e}}}},,,,,,,,,,,function(e,t,r){(e.exports=r(3)(!1)).push([e.i,".avatar-uploader-icon[data-v-acdcc490]{font-size:24px;color:#8c939d;width:296px;height:166px;line-height:166px;text-align:center}.avatar-uploader-icon2[data-v-acdcc490]{font-size:24px;color:#8c939d;width:80px;height:80px;line-height:80px;text-align:center}.avatar[data-v-acdcc490]{width:296px;height:166px;display:block;margin:10px 10px 0 0}.avatar2[data-v-acdcc490]{width:80px;height:80px;display:block}.header-banner[data-v-acdcc490]{position:relative}.deletImg[data-v-acdcc490]{position:absolute;width:100%;height:100%;left:0;top:0;cursor:default;text-align:center;color:#fff;opacity:0;font-size:20px;background-color:rgba(0,0,0,.5);transition:opacity .3s}.deletImg[data-v-acdcc490]:hover{opacity:1}.deletImg2[data-v-acdcc490]{position:absolute;top:43%;left:46%}.deletImg3[data-v-acdcc490]{position:absolute;top:40%;left:40%}.leftIcon[data-v-acdcc490]{position:relative;left:10px;top:20px;width:60px;height:60px;border-radius:50%;background-color:#8c939d;display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff}.bgcolor[data-v-acdcc490]{color:#999!important}#editor[data-v-acdcc490]{width:800px}.comm-dis[data-v-acdcc490]{display:flex}.add-goods[data-v-acdcc490]{padding:0 30px}.redFlag[data-v-acdcc490]{position:relative;left:112px;top:5px;color:#f56c6c;margin-right:4px}.addXCPoint[data-v-acdcc490]{height:60px;margin-top:20px;border-radius:50%;background-color:#f5f7fa}.addXCPoint[data-v-acdcc490],.delPoint[data-v-acdcc490]{width:60px;display:flex;align-items:center;justify-content:center;font-size:20px;color:#606266}.delPoint[data-v-acdcc490]{height:80px;border:1px dashed #d9d9d9;border-radius:6px}",""])},,,,,function(e,t,r){var a=r(154);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(4)("d779445a",a,!0)},,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-goods"},[r("div",{staticClass:"pl20px pt30 pr20 mt10"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"180px"}},[r("div",{staticClass:"leftIcon"},[e._v("发行")]),e._v(" "),r("div",{staticClass:"faxing",staticStyle:{display:"flex"}},[r("div",[r("el-form-item",{attrs:{label:"主体商户",required:"",prop:"mainMerchantNo"}},[r("el-select",{attrs:{disabled:e.type,placeholder:"请选择"},on:{change:e.handleMainMerchantChange},model:{value:e.ruleForm.mainMerchantNo,callback:function(t){e.$set(e.ruleForm,"mainMerchantNo",t)},expression:"ruleForm.mainMerchantNo"}},e._l(e.mainMerchantList,function(e){return r("el-option",{key:e.mainMerchantNo,attrs:{label:e.mainMerchantName,value:e.mainMerchantNo}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"结算商户",required:"",prop:"equityMerchantNo"}},[r("el-select",{attrs:{disabled:e.type,placeholder:"请选择"},on:{change:e.handleEquityMerchantChange},model:{value:e.ruleForm.equityMerchantNo,callback:function(t){e.$set(e.ruleForm,"equityMerchantNo",t)},expression:"ruleForm.equityMerchantNo"}},e._l(e.equityMerchantList,function(e){return r("el-option",{key:e.equityMerchantNo,attrs:{label:e.equityMerchantName,value:e.equityMerchantNo}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"周期卡命名",prop:"productName"}},[r("el-input",{staticClass:"w350",attrs:{maxlength:"13",disabled:e.type,placeholder:"周期卡名称"},model:{value:e.ruleForm.productName,callback:function(t){e.$set(e.ruleForm,"productName",t)},expression:"ruleForm.productName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"主色调值",prop:"mainHueValue"}},[r("el-input",{staticClass:"w350",attrs:{maxlength:"13",disabled:e.type,placeholder:"卡面主色调"},model:{value:e.ruleForm.mainHueValue,callback:function(t){e.$set(e.ruleForm,"mainHueValue",t)},expression:"ruleForm.mainHueValue"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"支持渠道",required:""}},[r("el-select",{attrs:{value:"支付宝",disabled:!0,placeholder:"支付宝"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"支持虚拟卡",required:"",prop:"saleNote"}},[r("el-select",{directives:[{name:"show",rawName:"v-show",value:!e.ruleForm.mainMerchantNo,expression:"!ruleForm.mainMerchantNo"}],attrs:{disabled:!0,placeholder:"请先选择主体商户"},model:{value:e.disableVal,callback:function(t){e.disableVal=t},expression:"disableVal"}}),e._v(" "),r("el-select",{directives:[{name:"show",rawName:"v-show",value:e.ruleForm.mainMerchantNo,expression:"ruleForm.mainMerchantNo"}],attrs:{disabled:e.type,placeholder:"请选择"},on:{change:e.handleVirtualCardChange},model:{value:e.ruleForm.cardType,callback:function(t){e.$set(e.ruleForm,"cardType",t)},expression:"ruleForm.cardType"}},e._l(e.virtualCardList,function(e){return r("el-option",{key:e.cardType,attrs:{label:e.cardName,value:e.cardType}})}))],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"",required:"",prop:"productCoverUrl"}},[r("div",{staticClass:"comm-dis"},[r("div",{staticClass:"header-banner"},[e.ruleForm.productCoverUrl?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.productCoverUrl}}):e._e(),e._v(" "),e.type?e._e():r("span",{staticClass:"deletImg"},[r("span",{staticClass:"deletImg2",on:{click:e.handleCoverDelete}},[r("i",{staticClass:"el-icon-delete"})])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.ruleForm.productCoverUrl,expression:"!ruleForm.productCoverUrl"}]},[r("el-upload",{staticClass:"avatar-uploader",attrs:{name:"file",action:e.uploadimgUrl,"show-file-list":!1,"on-success":e.handleCoverSuccess,"before-upload":e.beforeAvatarUpload}},[r("div",{staticClass:"avatar-uploader-icon"},[e._v("添加卡面图片")])])],1)])])],1),e._v(" "),r("div",{staticClass:"leftIcon"},[e._v("售卖")]),e._v(" "),r("div",{staticClass:"shoumai"},[r("div",{staticStyle:{display:"flex"}},[r("el-form-item",{attrs:{label:"售卖起止日期",required:"",prop:"saleStartTime"}},[r("el-date-picker",{attrs:{type:"daterange",align:"right",clearable:!1,"unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd 00:00:00","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1)],1),e._v(" "),r("div",{staticClass:"flex"},[r("el-form-item",{attrs:{label:"可选生效时间精度",prop:"effectiveTimePrecision"}},[r("el-select",{staticClass:"w150",attrs:{disabled:e.type,placeholder:"请选择"},model:{value:e.ruleForm.effectiveTimePrecision,callback:function(t){e.$set(e.ruleForm,"effectiveTimePrecision",t)},expression:"ruleForm.effectiveTimePrecision"}},e._l(e.timeAccuracyList,function(e){return r("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"可选生效时间范围",required:"",prop:"effectDay"}},[r("el-input-number",{staticClass:"w150",attrs:{type:"Number",min:1,disabled:e.type,placeholder:"天数"},model:{value:e.ruleForm.effectDay,callback:function(t){e.$set(e.ruleForm,"effectDay",t)},expression:"ruleForm.effectDay"}}),e._v(" 天\n          ")],1)],1),e._v(" "),r("div",{staticClass:"flex"},[r("el-form-item",{attrs:{label:"基础价格",prop:"salePrice"}},[r("el-input",{staticClass:"w150",attrs:{disabled:e.type,placeholder:"基础价格"},model:{value:e.ruleForm.salePrice,callback:function(t){e.$set(e.ruleForm,"salePrice",t)},expression:"ruleForm.salePrice"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"划线价格",prop:"originalPrice"}},[r("el-input",{staticClass:"w150",attrs:{disabled:e.type,placeholder:"划线价格"},model:{value:e.ruleForm.originalPrice,callback:function(t){e.$set(e.ruleForm,"originalPrice",t)},expression:"ruleForm.originalPrice"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"购买须知1"}},[r("el-input",{staticClass:"w240",attrs:{disabled:e.type,placeholder:"协议名称"},model:{value:e.ruleForm.saleNoticeTitle,callback:function(t){e.$set(e.ruleForm,"saleNoticeTitle",t)},expression:"ruleForm.saleNoticeTitle"}}),e._v(" "),r("el-input",{staticClass:"w350",attrs:{disabled:e.type,placeholder:"协议链接"},model:{value:e.ruleForm.saleNoticeUrl,callback:function(t){e.$set(e.ruleForm,"saleNoticeUrl",t)},expression:"ruleForm.saleNoticeUrl"}})],1)],1),e._v(" "),r("div",{staticClass:"leftIcon"},[e._v("优惠")]),e._v(" "),r("div",{staticClass:"youhui"},[r("div",{staticClass:"flex"},[r("el-form-item",{attrs:{label:"折扣系数",prop:"discount"}},[r("el-input",{staticClass:"w120",attrs:{disabled:e.type,placeholder:"折扣系数"},model:{value:e.ruleForm.discount,callback:function(t){e.$set(e.ruleForm,"discount",t)},expression:"ruleForm.discount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单日笔数",required:"",prop:"singleDayNum"}},[r("el-input-number",{staticClass:"w150",attrs:{type:"Number",min:0,disabled:e.type,placeholder:"笔数"},model:{value:e.ruleForm.singleDayNum,callback:function(t){e.$set(e.ruleForm,"singleDayNum",t)},expression:"ruleForm.singleDayNum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单笔封顶",prop:"singleAmtLimit"}},[r("el-input",{staticClass:"w120",attrs:{disabled:e.type,placeholder:"封顶金额"},model:{value:e.ruleForm.singleAmtLimit,callback:function(t){e.$set(e.ruleForm,"singleAmtLimit",t)},expression:"ruleForm.singleAmtLimit"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"有效天数",required:"",prop:"validDays"}},[r("el-input-number",{staticClass:"w150",attrs:{type:"Number",min:1,disabled:e.type,placeholder:"天数"},model:{value:e.ruleForm.validDays,callback:function(t){e.$set(e.ruleForm,"validDays",t)},expression:"ruleForm.validDays"}}),e._v(" 天\n        ")],1)],1),e._v(" "),r("div",{staticClass:"leftIcon"},[e._v("宣传")]),e._v(" "),r("div",{staticClass:"xuanchuan"},[r("el-form-item",{attrs:{label:"卡详情引导语",prop:"cardDetailsGuide"}},[r("el-input",{staticClass:"w350",attrs:{disabled:e.type,placeholder:"卡详情引导语"},model:{value:e.ruleForm.cardDetailsGuide,callback:function(t){e.$set(e.ruleForm,"cardDetailsGuide",t)},expression:"ruleForm.cardDetailsGuide"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"卡面显示规则",prop:"saleRule"}},[r("el-input",{staticClass:"w350",attrs:{disabled:e.type,placeholder:"卡面显示规则"},model:{value:e.ruleForm.saleRule,callback:function(t){e.$set(e.ruleForm,"saleRule",t)},expression:"ruleForm.saleRule"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"卡详情宣传点",prop:"list"}},[e._l(e.ruleForm.list,function(t,a){return r("div",{key:a,staticClass:"flex mb20"},[r("div",{staticClass:"pointLeft"},[r("el-input",{staticClass:"w350",attrs:{disabled:e.type,placeholder:"宣传标题"},model:{value:t.title,callback:function(r){e.$set(t,"title",r)},expression:"item.title"}}),r("br"),e._v(" "),r("el-input",{staticClass:"w350",attrs:{disabled:e.type,placeholder:"宣传内容"},model:{value:t.content,callback:function(r){e.$set(t,"content",r)},expression:"item.content"}})],1),e._v(" "),r("div",{staticClass:"comm-dis"},[r("div",{staticClass:"header-banner"},[t.iconUrl?r("img",{staticClass:"avatar2",attrs:{src:t.iconUrl}}):e._e(),e._v(" "),e.type?e._e():r("span",{staticClass:"deletImg"},[r("span",{staticClass:"deletImg3",on:{click:function(t){e.handleCoverDelete2(a)}}},[r("i",{staticClass:"el-icon-delete"})])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.iconUrl,expression:"!item.iconUrl"}]},[r("el-upload",{staticClass:"avatar-uploader2",attrs:{name:"file",action:e.uploadimgUrl,"show-file-list":!1,"on-success":function(t,r,n){e.handleCoverSuccess2(a,t,r,n)},"before-upload":e.beforeAvatarUpload2}},[r("div",{staticClass:"avatar-uploader-icon2"},[e._v("+")])])],1)]),e._v(" "),r("div",{staticClass:"delPoint",on:{click:function(t){e.delPoint(a)}}},[r("i",{staticClass:"el-icon-delete"})])])}),e._v(" "),r("div",{staticClass:"addXCPoint",on:{click:e.handleAddPoint}},[e._v("\n            +\n          ")])],2),e._v(" "),r("el-form-item",{attrs:{label:"订单确认提示",prop:"orderConfirmation"}},[r("el-input",{staticStyle:{width:"450px"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"请输入描述内容",disabled:e.type},model:{value:e.ruleForm.orderConfirmation,callback:function(t){e.$set(e.ruleForm,"orderConfirmation",t)},expression:"ruleForm.orderConfirmation"}})],1)],1),e._v(" "),r("el-form-item",[e.type?e._e():r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")])],1)],1)],1)])},staticRenderFns:[]}}]));