import{S as t,i as s,s as e,G as n,e as l,c as r,a,d as c,b as o,P as i,f as $,H as u,I as f,J as d,x as h,u as p,t as m,g,F as v,h as w,j as x,k as y,m as j,n as E,o as S,v as L,r as P,_ as N,w as b,l as k,$ as A,K as D,a7 as I}from"./vendor-5f1777c7.js";import{s as O}from"./seo-53706ea1.js";import{L as q}from"./Link-a574b70a.js";function C(t){let s,e;const m=t[2].default,g=n(m,t,t[1],null);return{c(){s=l("span"),g&&g.c(),this.h()},l(t){s=r(t,"SPAN",{class:!0});var e=a(s);g&&g.l(e),e.forEach(c),this.h()},h(){o(s,"class","span svelte-luvnag"),i(s,"under-line",t[0])},m(t,n){$(t,s,n),g&&g.m(s,null),e=!0},p(t,[n]){g&&g.p&&(!e||2&n)&&u(g,m,t,t[1],e?d(m,t[1],n,null):f(t[1]),null),1&n&&i(s,"under-line",t[0])},i(t){e||(h(g,t),e=!0)},o(t){p(g,t),e=!1},d(t){t&&c(s),g&&g.d(t)}}}function H(t,s,e){let{$$slots:n={},$$scope:l}=s,{underline:r=!1}=s;return t.$$set=t=>{"underline"in t&&e(0,r=t.underline),"$$scope"in t&&e(1,l=t.$$scope)},[r,l,n]}class M extends t{constructor(t){super(),s(this,t,H,C,e,{underline:0})}}function T(t){let s,e;const i=t[1].default,m=n(i,t,t[0],null);return{c(){s=l("h1"),m&&m.c(),this.h()},l(t){s=r(t,"H1",{class:!0});var e=a(s);m&&m.l(e),e.forEach(c),this.h()},h(){o(s,"class","svelte-wdwylk")},m(t,n){$(t,s,n),m&&m.m(s,null),e=!0},p(t,[s]){m&&m.p&&(!e||1&s)&&u(m,i,t,t[0],e?d(i,t[0],s,null):f(t[0]),null)},i(t){e||(h(m,t),e=!0)},o(t){p(m,t),e=!1},d(t){t&&c(s),m&&m.d(t)}}}function W(t,s,e){let{$$slots:n={},$$scope:l}=s;return t.$$set=t=>{"$$scope"in t&&e(0,l=t.$$scope)},[l,n]}class F extends t{constructor(t){super(),s(this,t,W,T,e,{})}}function G(t){let s,e,n=t[0].title+"";return{c(){s=l("span"),e=m(n),this.h()},l(t){s=r(t,"SPAN",{class:!0});var l=a(s);e=g(l,n),l.forEach(c),this.h()},h(){o(s,"class","svelte-1a069mg")},m(t,n){$(t,s,n),v(s,e)},p(t,s){1&s&&n!==(n=t[0].title+"")&&w(e,n)},d(t){t&&c(s)}}}function J(t){let s,e,n,i=new Date(t[0].date).toLocaleString()+"";return{c(){s=l("small"),e=m("posted "),n=m(i),this.h()},l(t){s=r(t,"SMALL",{class:!0});var l=a(s);e=g(l,"posted "),n=g(l,i),l.forEach(c),this.h()},h(){o(s,"class","svelte-1a069mg")},m(t,l){$(t,s,l),v(s,e),v(s,n)},p(t,s){1&s&&i!==(i=new Date(t[0].date).toLocaleString()+"")&&w(n,i)},d(t){t&&c(s)}}}function K(t){let s,e,n,i,u,f,d,P=t[0].description+"";e=new q({props:{href:t[0].slug,internal:!0,$$slots:{default:[G]},$$scope:{ctx:t}}});let N=t[0].date&&J(t);return{c(){s=l("li"),x(e.$$.fragment),n=y(),i=l("p"),u=m(P),f=y(),N&&N.c(),this.h()},l(t){s=r(t,"LI",{class:!0});var l=a(s);j(e.$$.fragment,l),n=E(l),i=r(l,"P",{});var o=a(i);u=g(o,P),o.forEach(c),f=E(l),N&&N.l(l),l.forEach(c),this.h()},h(){o(s,"class","svelte-1a069mg")},m(t,l){$(t,s,l),S(e,s,null),v(s,n),v(s,i),v(i,u),v(s,f),N&&N.m(s,null),d=!0},p(t,[n]){const l={};1&n&&(l.href=t[0].slug),3&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l),(!d||1&n)&&P!==(P=t[0].description+"")&&w(u,P),t[0].date?N?N.p(t,n):(N=J(t),N.c(),N.m(s,null)):N&&(N.d(1),N=null)},i(t){d||(h(e.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),d=!1},d(t){t&&c(s),L(e),N&&N.d()}}}function V(t,s,e){let{article:n}=s;return t.$$set=t=>{"article"in t&&e(0,n=t.article)},[n]}class _ extends t{constructor(t){super(),s(this,t,V,K,e,{article:0})}}function z(t,s,e){const n=t.slice();return n[1]=s[e],n}function B(t){let s,e,n=[],i=new Map,u=t[0];const f=t=>t[1].slug;for(let l=0;l<u.length;l+=1){let s=z(t,u,l),e=f(s);i.set(e,n[l]=Q(e,s))}return{c(){s=l("ol");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){s=r(t,"OL",{class:!0});var e=a(s);for(let s=0;s<n.length;s+=1)n[s].l(e);e.forEach(c),this.h()},h(){o(s,"class","svelte-1rwa5a3")},m(t,l){$(t,s,l);for(let e=0;e<n.length;e+=1)n[e].m(s,null);e=!0},p(t,e){1&e&&(u=t[0],P(),n=N(n,e,f,1,t,u,i,s,A,Q,null,z),b())},i(t){if(!e){for(let t=0;t<u.length;t+=1)h(n[t]);e=!0}},o(t){for(let s=0;s<n.length;s+=1)p(n[s]);e=!1},d(t){t&&c(s);for(let s=0;s<n.length;s+=1)n[s].d()}}}function Q(t,s){let e,n,l;return n=new _({props:{article:s[1]}}),{key:t,first:null,c(){e=k(),x(n.$$.fragment),this.h()},l(t){e=k(),j(n.$$.fragment,t),this.h()},h(){this.first=e},m(t,s){$(t,e,s),S(n,t,s),l=!0},p(t,e){s=t;const l={};1&e&&(l.article=s[1]),n.$set(l)},i(t){l||(h(n.$$.fragment,t),l=!0)},o(t){p(n.$$.fragment,t),l=!1},d(t){t&&c(e),L(n,t)}}}function R(t){let s,e,n=t[0].length>0&&B(t);return{c(){n&&n.c(),s=k()},l(t){n&&n.l(t),s=k()},m(t,l){n&&n.m(t,l),$(t,s,l),e=!0},p(t,[e]){t[0].length>0?n?(n.p(t,e),1&e&&h(n,1)):(n=B(t),n.c(),h(n,1),n.m(s.parentNode,s)):n&&(P(),p(n,1,1,(()=>{n=null})),b())},i(t){e||(h(n),e=!0)},o(t){p(n),e=!1},d(t){n&&n.d(t),t&&c(s)}}}function U(t,s,e){let{articles:n}=s;return t.$$set=t=>{"articles"in t&&e(0,n=t.articles)},[n]}class X extends t{constructor(t){super(),s(this,t,U,R,e,{articles:0})}}function Y(t){let s;return{c(){s=m("Panui")},l(t){s=g(t,"Panui")},m(t,e){$(t,s,e)},d(t){t&&c(s)}}}function Z(t){let s,e;return s=new M({props:{underline:!0,$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){x(s.$$.fragment)},l(t){j(s.$$.fragment,t)},m(t,n){S(s,t,n),e=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),e=!1},d(t){L(s,t)}}}function tt(t){let s;return{c(){s=m("Other Docs")},l(t){s=g(t,"Other Docs")},m(t,e){$(t,s,e)},d(t){t&&c(s)}}}function st(t){let s,e;return s=new M({props:{underline:!0,$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){x(s.$$.fragment)},l(t){j(s.$$.fragment,t)},m(t,n){S(s,t,n),e=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),e=!1},d(t){L(s,t)}}}function et(t){let s,e,n,i,u,f,d,m,g,w,P;return n=new F({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),u=new X({props:{articles:t[0]}}),m=new F({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),w=new X({props:{articles:t[1]}}),{c(){s=l("div"),e=l("section"),x(n.$$.fragment),i=y(),x(u.$$.fragment),f=y(),d=l("section"),x(m.$$.fragment),g=y(),x(w.$$.fragment),this.h()},l(t){s=r(t,"DIV",{class:!0});var l=a(s);e=r(l,"SECTION",{class:!0});var o=a(e);j(n.$$.fragment,o),i=E(o),j(u.$$.fragment,o),o.forEach(c),f=E(l),d=r(l,"SECTION",{class:!0});var $=a(d);j(m.$$.fragment,$),g=E($),j(w.$$.fragment,$),$.forEach(c),l.forEach(c),this.h()},h(){o(e,"class","svelte-1nqsvcp"),o(d,"class","svelte-1nqsvcp"),o(s,"class","grid column")},m(t,l){$(t,s,l),v(s,e),S(n,e,null),v(e,i),S(u,e,null),v(s,f),v(s,d),S(m,d,null),v(d,g),S(w,d,null),P=!0},p(t,[s]){const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e);const l={};1&s&&(l.articles=t[0]),u.$set(l);const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),m.$set(r);const a={};2&s&&(a.articles=t[1]),w.$set(a)},i(t){P||(h(n.$$.fragment,t),h(u.$$.fragment,t),h(m.$$.fragment,t),h(w.$$.fragment,t),P=!0)},o(t){p(n.$$.fragment,t),p(u.$$.fragment,t),p(m.$$.fragment,t),p(w.$$.fragment,t),P=!1},d(t){t&&c(s),L(n),L(u),L(m),L(w)}}}var nt=function(t,s,e,n){return new(e||(e=Promise))((function(l,r){function a(t){try{o(n.next(t))}catch(s){r(s)}}function c(t){try{o(n.throw(t))}catch(s){r(s)}}function o(t){var s;t.done?l(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(a,c)}o((n=n.apply(t,s||[])).next())}))};const lt=({fetch:t})=>nt(void 0,void 0,void 0,(function*(){return{props:{docs:(yield(yield t("/docs/docs.json")).json()).docs}}})),rt=({fetch:t})=>nt(void 0,void 0,void 0,(function*(){return{props:{news:(yield(yield t("/news/news.json")).json()).news}}})),at=({fetch:t})=>nt(void 0,void 0,void 0,(function*(){const s=yield(yield t("/news/news.json")).json(),e=yield(yield t("/docs/docs.json")).json();return{props:{news:s.news,docs:e.docs}}}));function ct(t,s,e){let n;D(t,O,(t=>e(2,n=t))),I(O,n={title:"Panui",description:"A blog from the Whakaoranga Whanau; news & updates from the community",robots:"none"},n);let{news:l}=s,{docs:r}=s;return t.$$set=t=>{"news"in t&&e(0,l=t.news),"docs"in t&&e(1,r=t.docs)},[l,r]}class ot extends t{constructor(t){super(),s(this,t,ct,et,e,{news:0,docs:1})}}export{X as A,ot as N,M as S,lt as a,at as b,rt as l};
