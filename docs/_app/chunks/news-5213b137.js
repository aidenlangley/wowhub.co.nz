import{S as t,i as e,s,D as n,e as r,c as l,a,d as o,b as c,a2 as i,f,E as u,F as $,G as h,x as d,u as p,t as m,g,h as v,X as w,j as y,k as b,m as E,n as j,o as x,v as L,r as S,Y as A,w as O,l as k,Z as N,H as P,a7 as D}from"./vendor-dc84e8b1.js";import{s as I}from"./seo-1c9b74d4.js";import{H}from"./Heading-339ced10.js";import{g as C,r as M}from"./singletons-ff603286.js";const T=M,V=function(t){return T.prefetch(new URL(t,C(document)))};function W(t){let e,s,w;const y=t[8].default,b=n(y,t,t[7],null),E=b||function(t){let e;return{c(){e=m(t[0])},l(s){e=g(s,t[0])},m(t,s){f(t,e,s)},p(t,s){1&s&&v(e,t[0])},d(t){t&&o(e)}}}(t);return{c(){e=r("a"),E&&E.c(),this.h()},l(t){e=l(t,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var s=a(e);E&&E.l(s),s.forEach(o),this.h()},h(){c(e,"href",t[0]),c(e,"target",t[4]),c(e,"rel",t[5]),c(e,"aria-label",t[1]),c(e,"class",s=i(t[2]?`button ${t[3]}`:"link")+" svelte-16gjy3a")},m(t,s){f(t,e,s),E&&E.m(e,null),w=!0},p(t,[n]){b?b.p&&(!w||128&n)&&u(b,y,t,t[7],w?h(y,t[7],n,null):$(t[7]),null):E&&E.p&&(!w||1&n)&&E.p(t,w?n:-1),(!w||1&n)&&c(e,"href",t[0]),(!w||2&n)&&c(e,"aria-label",t[1]),(!w||12&n&&s!==(s=i(t[2]?`button ${t[3]}`:"link")+" svelte-16gjy3a"))&&c(e,"class",s)},i(t){w||(d(E,t),w=!0)},o(t){p(E,t),w=!1},d(t){t&&o(e),E&&E.d(t)}}}function F(t,e,s){let{$$slots:n={},$$scope:r}=e,{href:l}=e,{internal:a=!1}=e,{label:o=null}=e,{button:c=!1}=e,{colour:i=null}=e;a&&V(l);const f=a?null:"_blank",u="noopener "+(a?"":"external");return t.$$set=t=>{"href"in t&&s(0,l=t.href),"internal"in t&&s(6,a=t.internal),"label"in t&&s(1,o=t.label),"button"in t&&s(2,c=t.button),"colour"in t&&s(3,i=t.colour),"$$scope"in t&&s(7,r=t.$$scope)},[l,o,c,i,f,u,a,r,n]}class G extends t{constructor(t){super(),e(this,t,F,W,s,{href:0,internal:6,label:1,button:2,colour:3})}}function R(t){let e,s,n=t[0].title+"";return{c(){e=r("span"),s=m(n),this.h()},l(t){e=l(t,"SPAN",{class:!0});var r=a(e);s=g(r,n),r.forEach(o),this.h()},h(){c(e,"class","svelte-1frlsn2")},m(t,n){f(t,e,n),w(e,s)},p(t,e){1&e&&n!==(n=t[0].title+"")&&v(s,n)},d(t){t&&o(e)}}}function U(t){let e,s,n,i=new Date(t[0].date).toLocaleString()+"";return{c(){e=r("small"),s=m("posted "),n=m(i),this.h()},l(t){e=l(t,"SMALL",{class:!0});var r=a(e);s=g(r,"posted "),n=g(r,i),r.forEach(o),this.h()},h(){c(e,"class","svelte-1frlsn2")},m(t,r){f(t,e,r),w(e,s),w(e,n)},p(t,e){1&e&&i!==(i=new Date(t[0].date).toLocaleString()+"")&&v(n,i)},d(t){t&&o(e)}}}function X(t){let e,s,n,i,u,$,h,S=t[0].description+"";s=new G({props:{href:t[0].slug,internal:!0,$$slots:{default:[R]},$$scope:{ctx:t}}});let A=t[0].date&&U(t);return{c(){e=r("li"),y(s.$$.fragment),n=b(),i=r("p"),u=m(S),$=b(),A&&A.c(),this.h()},l(t){e=l(t,"LI",{class:!0});var r=a(e);E(s.$$.fragment,r),n=j(r),i=l(r,"P",{});var c=a(i);u=g(c,S),c.forEach(o),$=j(r),A&&A.l(r),r.forEach(o),this.h()},h(){c(e,"class","svelte-1frlsn2")},m(t,r){f(t,e,r),x(s,e,null),w(e,n),w(e,i),w(i,u),w(e,$),A&&A.m(e,null),h=!0},p(t,[n]){const r={};1&n&&(r.href=t[0].slug),3&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r),(!h||1&n)&&S!==(S=t[0].description+"")&&v(u,S),t[0].date?A?A.p(t,n):(A=U(t),A.c(),A.m(e,null)):A&&(A.d(1),A=null)},i(t){h||(d(s.$$.fragment,t),h=!0)},o(t){p(s.$$.fragment,t),h=!1},d(t){t&&o(e),L(s),A&&A.d()}}}function Y(t,e,s){let{article:n}=e;return t.$$set=t=>{"article"in t&&s(0,n=t.article)},[n]}class Z extends t{constructor(t){super(),e(this,t,Y,X,s,{article:0})}}function _(t,e,s){const n=t.slice();return n[1]=e[s],n}function q(t){let e,s,n=[],i=new Map,u=t[0];const $=t=>t[1].slug;for(let r=0;r<u.length;r+=1){let e=_(t,u,r),s=$(e);i.set(s,n[r]=z(s,e))}return{c(){e=r("ol");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=l(t,"OL",{class:!0});var s=a(e);for(let e=0;e<n.length;e+=1)n[e].l(s);s.forEach(o),this.h()},h(){c(e,"class","svelte-1rwa5a3")},m(t,r){f(t,e,r);for(let s=0;s<n.length;s+=1)n[s].m(e,null);s=!0},p(t,s){1&s&&(u=t[0],S(),n=A(n,s,$,1,t,u,i,e,N,z,null,_),O())},i(t){if(!s){for(let t=0;t<u.length;t+=1)d(n[t]);s=!0}},o(t){for(let e=0;e<n.length;e+=1)p(n[e]);s=!1},d(t){t&&o(e);for(let e=0;e<n.length;e+=1)n[e].d()}}}function z(t,e){let s,n,r;return n=new Z({props:{article:e[1]}}),{key:t,first:null,c(){s=k(),y(n.$$.fragment),this.h()},l(t){s=k(),E(n.$$.fragment,t),this.h()},h(){this.first=s},m(t,e){f(t,s,e),x(n,t,e),r=!0},p(t,s){e=t;const r={};1&s&&(r.article=e[1]),n.$set(r)},i(t){r||(d(n.$$.fragment,t),r=!0)},o(t){p(n.$$.fragment,t),r=!1},d(t){t&&o(s),L(n,t)}}}function B(t){let e,s,n=t[0].length>0&&q(t);return{c(){n&&n.c(),e=k()},l(t){n&&n.l(t),e=k()},m(t,r){n&&n.m(t,r),f(t,e,r),s=!0},p(t,[s]){t[0].length>0?n?(n.p(t,s),1&s&&d(n,1)):(n=q(t),n.c(),d(n,1),n.m(e.parentNode,e)):n&&(S(),p(n,1,1,(()=>{n=null})),O())},i(t){s||(d(n),s=!0)},o(t){p(n),s=!1},d(t){n&&n.d(t),t&&o(e)}}}function J(t,e,s){let{articles:n}=e;return t.$$set=t=>{"articles"in t&&s(0,n=t.articles)},[n]}class K extends t{constructor(t){super(),e(this,t,J,B,s,{articles:0})}}function Q(t){let e;return{c(){e=m("Panui (news)")},l(t){e=g(t,"Panui (news)")},m(t,s){f(t,e,s)},d(t){t&&o(e)}}}function tt(t){let e;return{c(){e=m("Other info")},l(t){e=g(t,"Other info")},m(t,s){f(t,e,s)},d(t){t&&o(e)}}}function et(t){let e,s,n,i,u,$,h,m,g,v,S,A,O,k,N,P,D;return g=new H({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),S=new K({props:{articles:t[0]}}),k=new H({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),P=new K({props:{articles:t[1]}}),{c(){e=r("aside"),s=r("nav"),n=r("ol"),i=b(),u=r("ol"),$=b(),h=r("div"),m=r("section"),y(g.$$.fragment),v=b(),y(S.$$.fragment),A=b(),O=r("section"),y(k.$$.fragment),N=b(),y(P.$$.fragment),this.h()},l(t){e=l(t,"ASIDE",{});var r=a(e);s=l(r,"NAV",{});var c=a(s);n=l(c,"OL",{}),a(n).forEach(o),i=j(c),u=l(c,"OL",{}),a(u).forEach(o),c.forEach(o),r.forEach(o),$=j(t),h=l(t,"DIV",{class:!0});var f=a(h);m=l(f,"SECTION",{class:!0});var d=a(m);E(g.$$.fragment,d),v=j(d),E(S.$$.fragment,d),d.forEach(o),A=j(f),O=l(f,"SECTION",{class:!0});var p=a(O);E(k.$$.fragment,p),N=j(p),E(P.$$.fragment,p),p.forEach(o),f.forEach(o),this.h()},h(){c(m,"class","gaps-y"),c(O,"class","gaps-y"),c(h,"class","root column gaps-y")},m(t,r){f(t,e,r),w(e,s),w(s,n),w(s,i),w(s,u),f(t,$,r),f(t,h,r),w(h,m),x(g,m,null),w(m,v),x(S,m,null),w(h,A),w(h,O),x(k,O,null),w(O,N),x(P,O,null),D=!0},p(t,[e]){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),g.$set(s);const n={};1&e&&(n.articles=t[0]),S.$set(n);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),k.$set(r);const l={};2&e&&(l.articles=t[1]),P.$set(l)},i(t){D||(d(g.$$.fragment,t),d(S.$$.fragment,t),d(k.$$.fragment,t),d(P.$$.fragment,t),D=!0)},o(t){p(g.$$.fragment,t),p(S.$$.fragment,t),p(k.$$.fragment,t),p(P.$$.fragment,t),D=!1},d(t){t&&o(e),t&&o($),t&&o(h),L(g),L(S),L(k),L(P)}}}var st=function(t,e,s,n){return new(s||(s=Promise))((function(r,l){function a(t){try{c(n.next(t))}catch(e){l(e)}}function o(t){try{c(n.throw(t))}catch(e){l(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}))};const nt=({fetch:t})=>st(void 0,void 0,void 0,(function*(){return{props:{docs:(yield(yield t("/docs/docs.json")).json()).docs}}})),rt=({fetch:t})=>st(void 0,void 0,void 0,(function*(){return{props:{news:(yield(yield t("/news/news.json")).json()).news}}})),lt=({fetch:t})=>st(void 0,void 0,void 0,(function*(){const e=yield(yield t("/news/news.json")).json(),s=yield(yield t("/docs/docs.json")).json();return{props:{news:e.news,docs:s.docs}}}));function at(t,e,s){let n;P(t,I,(t=>s(2,n=t))),D(I,n={title:"Panui & other documents",description:"A blog from the Whakaoranga Whanau; news & updates from the community",robots:"none"},n);let{news:r}=e,{docs:l}=e;return t.$$set=t=>{"news"in t&&s(0,r=t.news),"docs"in t&&s(1,l=t.docs)},[r,l]}class ot extends t{constructor(t){super(),e(this,t,at,et,s,{news:0,docs:1})}}export{K as A,G as L,ot as N,nt as a,lt as b,rt as l};
