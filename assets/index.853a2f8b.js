import{r as n,c as S,w as T,o as _,a as b,b as t,n as L,d as E,t as C,e as w,F as M,f as P,p as D,g as j,h as q,i as V,j as K}from"./vendor.5c515600.js";const $=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};$();var G="/nannan/assets/sorry.6d64bef9.png",H="/nannan/assets/sorry.419926b9.mp3",J="/nannan/assets/bgm.93055057.mp3",Q="/nannan/assets/success.8dab3db9.mp3";const O=[{text:"\u9633\u5149\uFF0C\u662F\u51AC\u65E5\u91CC\u6700\u597D\u7684\u6D6A\u6F2B\u3002\u84DD\u5929\u767D\u4E91\u90FD\u4F1A\u6709\uFF0C\u4E00\u5207\u7F8E\u597D\u90FD\u4F1A\u5982\u671F\u800C\u81F3~",fontSize:22},{text:"\u6211\u5BC4\u4F60\u7684\u4FE1,\u603B\u8981\u9001\u5F80\u90AE\u5C40,\u4E0D\u559C\u6B22\u653E\u5728\u8857\u8FB9\u7684\u7EFF\u8272\u90AE\u7B52\u4E2D,\u6211\u603B\u7591\u5FC3\u90A3\u91CC\u4F1A\u6162\u4E00\u70B9~",fontSize:20},{text:"\u6D6E\u4E16\u4E09\u5343,\u543E\u7231\u6709\u4E09\uFF0C\u65E5\u3001\u6708\u4E0E\u537F\uFF0C\u65E5\u4E3A\u671D\uFF0C\u6708\u4E3A\u66AE\uFF0C\u537F\u4E3A\u671D\u671D\u66AE\u66AE~",fontSize:22},{text:"\u5176\u5B9E\uFF0C\u6211\u53EA\u6709\u5728\u505A\u4E00\u4EF6\u4E8B\u7684\u65F6\u5019\u624D\u4F1A\u60F3\u4F60\uFF0C\u90A3\u5C31\u662F\u547C\u5438~",fontSize:22},{text:"\u8FD9\u4E00\u5929\uFF0C\u8BA9\u53EF\u7231\u7684\u649E\u89C1\u53EF\u7231\u7684\uFF0C\u50CF\u4E91\u649E\u89C1\u4E91\uFF0C\u98CE\u649E\u89C1\u98CE~",fontSize:22},{text:"\u613F\u968F\u98CE\u98D8\u8361\u7684\u84B2\u516C\u82F1\u80FD\u5E26\u53BB\u6211\u7684\u559C\u6B22\uFF0C\u4F60\u80FD\u77E5\u9053\u6211\uFF0C\u559C\u4F60\u6210\u75BE\uFF0C\u836F\u77F3\u65E0\u533B~",fontSize:22},{text:"\u53BB\u89C1\u4F60\u7684\u8DEF\u4E0A\uFF0C\u9633\u5149\u6E29\u6696\uFF0C\u4E91\u6735\u53EF\u7231\uFF0C\u60F3\u5FC5\u98CE\u5439\u8FC7\u6765\uFF0C\u4E5F\u662F\u751C\u7684~",fontSize:22},{text:"\u4F55\u65F6\u5C14\u4ED7\u770B\u5357\u96EA\uFF0C\u6211\u4E0E\u6885\u82B1\u4E24\u767D\u5934\u3002\u5BD2\u706F\u7EB8\u4E0A\u68A8\u82B1\u96E8\uFF0C\u6211\u7B49\u98CE\u96EA\u53C8\u4E00\u5E74~",fontSize:22},{text:"\u56DB\u5B63\u7684\u98CE\uFF0C\u643A\u5E26\u4F60\u7684\u58F0\u97F3\u548C\u5473\u9053\uFF0C\u907F\u5F00\u6211\u5439\u5411\u5168\u4E16\u754C~",fontSize:22},{text:"\u8584\u66AE\u8F7B\u70DF\u9752\u5C71\u6DE1\uFF0C\u98DE\u9E3F\u5F71\u8FC7\u79CB\u8272\u8FDC\u3002\u6F4B\u6EDF\u4E00\u6C5F\u76F8\u601D\u610F\uFF0C\u5B64\u821F\u96BE\u8F7D\u60C5\u6DF1\u6D45~",fontSize:22}];var R=(u,l)=>{const o=u.__vccOpts||u;for(const[r,e]of l)o[r]=e;return o};const v=u=>(D("data-v-e6ab2caa"),u=u(),j(),u),U=v(()=>t("div",{class:"top"},null,-1)),W={class:"card",style:{height:"210px"}},X=v(()=>t("br",null,null,-1)),Y=E(),Z=v(()=>t("div",{style:{"text-align":"right"}},"\u2014\u2014\u5B98\u777F",-1)),ee=v(()=>t("source",{src:H,type:"audio/mpeg"},null,-1)),te=[ee],ae=v(()=>t("source",{src:J,type:"audio/mpeg"},null,-1)),se=[ae],oe=v(()=>t("source",{src:Q,type:"audio/mpeg"},null,-1)),ne=[oe],re={setup(u){const l=n([]),o=n(!1),r=n(!1),e=n(""),a=n(!1),s=n(!0),z=n(22),k=n(null),m=n(null),y=n(null),h=n(null),g=n(""),d=n(!1);let I=S.create(k.value,{resize:!0});function N(){a.value||r.value||(d.value=!1,setTimeout(()=>{g.value=["\u542C\uFF0C\u8FD9\u662F\u5FC3\u788E\u7684\u58F0\u97F3~","\u4E56~\u522B\u95F9~~","\uFF1F\u62D2\u6536\u597D\u4EBA\u5361\uFF1F\uFF01","\u5FC3\u788E\u4E86\u9E2D~~","555...\u5FC3\u788E+1","emmm...\u4EC0\u4E48\u4E1C\u897F\u788E\u4E86\uFF1F"][~~(Math.random()*6)],d.value=!0}),l.value.push({x:300*Math.random()-300,y:400*Math.random()-500,w:200+Math.random()*150}),m.value.currentTime=0,m.value.play())}function A(i){e.value=i,s.value=!0}function B(){!s.value||(d.value=!1,s.value&&!o.value?(y.value.currentTime=0,y.value.play(),o.value=!0):s.value&&o.value&&r.value&&(s.value=!0,o.value=!1,r.value=!1,e.value=""))}function p(i,f=0){return new Promise((c,x)=>{setTimeout(()=>{d.value=!1},f),setTimeout(()=>{g.value=i,d.value=!0,c()},f+200)})}async function F(i){if(a.value||r.value)return;h.value.currentTime=0,h.value.play(),s.value=!1,r.value=!0,l.value.length=0;const f=Date.now()+10*1e3,c=["#bb0000","#ffffff"];(function x(){S({particleCount:2,angle:60,spread:55,origin:{x:0},colors:c}),S({particleCount:2,angle:120,spread:55,origin:{x:1},colors:c}),Date.now()<f?(requestAnimationFrame(x),a.value=!0):a.value=!1})(),await p("\u6211\u6CA1\u542C\u9519\u5427\uFF1F\uFF01",0),await p("\u90A3\u4E48...",1500),await p("\u6211\u5728\u5929\u6D25\u9759\u5019\u6960\u6960\u7684\u5230\u6765\u{1F618}\uFF01\uFF01\uFF01",1500),await p("\u7231\u4F60~",2e3),s.value=!0}return T(o,i=>{if(!i)return;s.value=!1;let f=O[~~(Math.random()*O.length)];z.value=f.fontSize,setTimeout(()=>I(),1e3),setTimeout(()=>A(f.text),2222)}),T(s,i=>{}),(i,f)=>(_(),b(M,null,[t("div",{class:w(["envelope",{active:o.value}])},[U,t("div",{class:"heart",onClick:B}),t("div",W,[t("p",{style:L({"font-size":z.value+"px"})},[E(C(e.value),1),X,Y,Z],4)]),t("canvas",{ref_key:"canvas",ref:k},null,512)],2),t("div",{class:w(["word",{active:d.value}])},C(g.value),3),(_(!0),b(M,null,P(l.value,(c,x)=>(_(),b("img",{style:L({"margin-left":c.x+"px","margin-top":c.y+"px",width:c.w+"px"}),key:c,src:G,class:"sorry"},null,4))),128)),t("div",{class:w(["btns",{active:s.value&&o.value&&!r.value}])},[t("div",{onClick:F},"\u592A\u5F00\u5FC3\uFF0C\u592A\u611F\u52A8\u4E86\uFF0C\u8FD9\u5C31\u9A6C\u4E0A\u53BB\u5929\u6D25\u89C1\u4ED6\uFF01"),t("div",{onClick:N},"\u54FC\uFF0C\u5C31\u4E0D\u53BB\uFF0C\u6C14\u6B7B\u4ED6~")],2),t("audio",{ref_key:"sorry",ref:m,preload:"auto"},te,512),t("audio",{ref_key:"bgm",ref:y,loop:"",preload:"auto"},se,512),t("audio",{ref_key:"success",ref:h,preload:"auto"},ne,512)],64))}};var le=R(re,[["__scopeId","data-v-e6ab2caa"]]);const ue={setup(u){return(l,o)=>(_(),q(le))}};V(ue).use(K()).mount("#app");
