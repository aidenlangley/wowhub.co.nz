import{S as t,i as e,s as r,H as s,e as n,c as o,a,d as l,b as c,f as i,L as d,M as u,N as f,x as h,u as p,t as g,g as x,F as $,h as m,k as b,j as v,n as w,m as k,o as y,v as L,r as E,W as j,w as P,l as D,X as N,Q as S,a0 as A,$ as I}from"./vendor-5430cdcf.js";import{s as V}from"./seo-07972888.js";import{C as B}from"./Column-0ecb2a69.js";import{g as H,r as W}from"./singletons-ff603286.js";const C=W,M=function(t){return C.prefetch(new URL(t,H(document)))};var O,R;(R=O||(O={})).Default="bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:text-green-500 dark:hover:text-green-500 focus:text-green-500 dark:focus:text-green-500 dark:text-white",R.Blue="bg-blue-500 border-blue-300 dark:border-blue-700 text-white hover:text-blue-200 dark:hover:text-blue-200 focus:text-blue-200 dark:focus:text-blue-200",R.Red="bg-red-500 border-red-300 dark:border-red-700 text-white hover:text-red-200 dark:hover:text-red-200 focus:text-red-200 dark:focus:text-red-200",R.Yellow="bg-yellow-400 border-yellow-200 dark:border-yellow-800 text-white hover:text-yellow-100 dark:hover:text-yellow-100 focus:text-yellow-100 dark:focus:text-yellow-100 text-shadow",R.Green="bg-green-500 border-green-300 dark:border-green-700 text-white hover:text-green-200 dark:hover:text-green-200 focus:text-green-200 dark:focus:text-green-200";const _="flex items-center space-x-2 border rounded-md p-2 ty:p-3 sm:p-4 shadow font-mono font-medium tyd:tracking-tighter sm:text-18 md:text-20 lg:text-22 xl:text-24 focus:scale-105 transition duration-300";function F(t){let e,r,b,v,w;const k=t[6].default,y=s(k,t,t[5],null),L=y||function(t){let e,r;return{c(){e=n("span"),r=g(t[1])},l(s){e=o(s,"SPAN",{});var n=a(e);r=x(n,t[1]),n.forEach(l)},m(t,s){i(t,e,s),$(e,r)},p(t,e){2&e&&m(r,t[1])},d(t){t&&l(e)}}}(t);return{c(){e=n("a"),L&&L.c(),this.h()},l(t){e=o(t,"A",{href:!0,target:!0,rel:!0,class:!0});var r=a(e);L&&L.l(r),r.forEach(l),this.h()},h(){c(e,"href",t[0]),c(e,"target",r=t[4]?"_blank":""),c(e,"rel",b=(t[4]?"external":"")+" noopener"),c(e,"class",v=t[2]?`${_} ${t[3]}`:"font-mono font-bold focus:underline text-blue-600 hover:text-blue-400 focus:text-blue-400 dark:text-blue-300 dark:hover:text-blue-400 dark:focus:text-blue-400 visited:text-purple-700 hover:visited:text-purple-500 dark:visited:text-purple-300 dark:hover:visited:text-purple-400")},m(t,r){i(t,e,r),L&&L.m(e,null),w=!0},p(t,[s]){y?y.p&&(!w||32&s)&&d(y,k,t,t[5],w?f(k,t[5],s,null):u(t[5]),null):L&&L.p&&(!w||2&s)&&L.p(t,w?s:-1),(!w||1&s)&&c(e,"href",t[0]),(!w||16&s&&r!==(r=t[4]?"_blank":""))&&c(e,"target",r),(!w||16&s&&b!==(b=(t[4]?"external":"")+" noopener"))&&c(e,"rel",b),(!w||12&s&&v!==(v=t[2]?`${_} ${t[3]}`:"font-mono font-bold focus:underline text-blue-600 hover:text-blue-400 focus:text-blue-400 dark:text-blue-300 dark:hover:text-blue-400 dark:focus:text-blue-400 visited:text-purple-700 hover:visited:text-purple-500 dark:visited:text-purple-300 dark:hover:visited:text-purple-400"))&&c(e,"class",v)},i(t){w||(h(L,t),w=!0)},o(t){p(L,t),w=!1},d(t){t&&l(e),L&&L.d(t)}}}function G(t,e,r){let{$$slots:s={},$$scope:n}=e,{href:o}=e,{text:a=null}=e,{button:l=!1}=e,{colour:c=O.Default}=e,{external:i=!0}=e;return i||M(o),t.$$set=t=>{"href"in t&&r(0,o=t.href),"text"in t&&r(1,a=t.text),"button"in t&&r(2,l=t.button),"colour"in t&&r(3,c=t.colour),"external"in t&&r(4,i=t.external),"$$scope"in t&&r(5,n=t.$$scope)},[o,a,l,c,i,n,s]}class Q extends t{constructor(t){super(),e(this,t,G,F,r,{href:0,text:1,button:2,colour:3,external:4})}}function U(t){let e,r,s=t[0].title+"";return{c(){e=n("span"),r=g(s),this.h()},l(t){e=o(t,"SPAN",{class:!0});var n=a(e);r=x(n,s),n.forEach(l),this.h()},h(){c(e,"class","ty:text-18 sm:text-20 md:text-24")},m(t,s){i(t,e,s),$(e,r)},p(t,e){1&e&&s!==(s=t[0].title+"")&&m(r,s)},d(t){t&&l(e)}}}function X(t){let e,r,s,d,u,f,E,j,P,D,N,S=new Date(t[0].date).toLocaleString()+"",A=t[0].description+"";return f=new Q({props:{external:!1,href:t[0].slug,$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){e=n("div"),r=n("p"),s=g("posted "),d=g(S),u=b(),v(f.$$.fragment),E=b(),j=n("p"),P=n("span"),D=g(A),this.h()},l(t){e=o(t,"DIV",{class:!0});var n=a(e);r=o(n,"P",{class:!0});var c=a(r);s=x(c,"posted "),d=x(c,S),c.forEach(l),u=w(n),k(f.$$.fragment,n),E=w(n),j=o(n,"P",{class:!0});var i=a(j);P=o(i,"SPAN",{class:!0});var h=a(P);D=x(h,A),h.forEach(l),i.forEach(l),n.forEach(l),this.h()},h(){c(r,"class","font-mono"),c(P,"class","bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50"),c(j,"class","tracking-tight"),c(e,"class","space-y-1")},m(t,n){i(t,e,n),$(e,r),$(r,s),$(r,d),$(e,u),y(f,e,null),$(e,E),$(e,j),$(j,P),$(P,D),N=!0},p(t,[e]){(!N||1&e)&&S!==(S=new Date(t[0].date).toLocaleString()+"")&&m(d,S);const r={};1&e&&(r.href=t[0].slug),3&e&&(r.$$scope={dirty:e,ctx:t}),f.$set(r),(!N||1&e)&&A!==(A=t[0].description+"")&&m(D,A)},i(t){N||(h(f.$$.fragment,t),N=!0)},o(t){p(f.$$.fragment,t),N=!1},d(t){t&&l(e),L(f)}}}function Y(t,e,r){let{news:s}=e;return t.$$set=t=>{"news"in t&&r(0,s=t.news)},[s]}class q extends t{constructor(t){super(),e(this,t,Y,X,r,{news:0})}}function z(t,e,r){const s=t.slice();return s[1]=e[r],s}function J(t){let e,r,s=[],d=new Map,u=t[0];const f=t=>t[1].slug;for(let n=0;n<u.length;n+=1){let e=z(t,u,n),r=f(e);d.set(r,s[n]=K(r,e))}return{c(){e=n("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=o(t,"DIV",{class:!0});var r=a(e);for(let e=0;e<s.length;e+=1)s[e].l(r);r.forEach(l),this.h()},h(){c(e,"class","text-14 ty:text-base sm:text-18 tracking-tighter space-y-2")},m(t,n){i(t,e,n);for(let r=0;r<s.length;r+=1)s[r].m(e,null);r=!0},p(t,r){1&r&&(u=t[0],E(),s=j(s,r,f,1,t,u,d,e,N,K,null,z),P())},i(t){if(!r){for(let t=0;t<u.length;t+=1)h(s[t]);r=!0}},o(t){for(let e=0;e<s.length;e+=1)p(s[e]);r=!1},d(t){t&&l(e);for(let e=0;e<s.length;e+=1)s[e].d()}}}function K(t,e){let r,s,n;return s=new q({props:{news:e[1]}}),{key:t,first:null,c(){r=D(),v(s.$$.fragment),this.h()},l(t){r=D(),k(s.$$.fragment,t),this.h()},h(){this.first=r},m(t,e){i(t,r,e),y(s,t,e),n=!0},p(t,r){e=t;const n={};1&r&&(n.news=e[1]),s.$set(n)},i(t){n||(h(s.$$.fragment,t),n=!0)},o(t){p(s.$$.fragment,t),n=!1},d(t){t&&l(r),L(s,t)}}}function T(t){let e,r,s=t[0].length>0&&J(t);return{c(){s&&s.c(),e=D()},l(t){s&&s.l(t),e=D()},m(t,n){s&&s.m(t,n),i(t,e,n),r=!0},p(t,[r]){t[0].length>0?s?(s.p(t,r),1&r&&h(s,1)):(s=J(t),s.c(),h(s,1),s.m(e.parentNode,e)):s&&(E(),p(s,1,1,(()=>{s=null})),P())},i(t){r||(h(s),r=!0)},o(t){p(s),r=!1},d(t){s&&s.d(t),t&&l(e)}}}function Z(t,e,r){let{newsList:s}=e;return t.$$set=t=>{"newsList"in t&&r(0,s=t.newsList)},[s]}class tt extends t{constructor(t){super(),e(this,t,Z,T,r,{newsList:0})}}function et(t,e,r){const s=t.slice();return s[4]=e[r],s}function rt(t){let e,r,s=t[4].title+"";return{c(){e=n("span"),r=g(s),this.h()},l(t){e=o(t,"SPAN",{class:!0});var n=a(e);r=x(n,s),n.forEach(l),this.h()},h(){c(e,"class","ty:text-18 sm:text-20 md:text-24")},m(t,s){i(t,e,s),$(e,r)},p(t,e){2&e&&s!==(s=t[4].title+"")&&m(r,s)},d(t){t&&l(e)}}}function st(t){let e,r,s,d,u,f,E,j=t[4].description+"";return r=new Q({props:{external:!1,href:t[4].slug,$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){e=n("div"),v(r.$$.fragment),s=b(),d=n("p"),u=g(j),f=b(),this.h()},l(t){e=o(t,"DIV",{});var n=a(e);k(r.$$.fragment,n),s=w(n),d=o(n,"P",{class:!0});var c=a(d);u=x(c,j),c.forEach(l),f=w(n),n.forEach(l),this.h()},h(){c(d,"class","font-mono tracking-tighter")},m(t,n){i(t,e,n),y(r,e,null),$(e,s),$(e,d),$(d,u),$(e,f),E=!0},p(t,e){const s={};2&e&&(s.href=t[4].slug),130&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s),(!E||2&e)&&j!==(j=t[4].description+"")&&m(u,j)},i(t){E||(h(r.$$.fragment,t),E=!0)},o(t){p(r.$$.fragment,t),E=!1},d(t){t&&l(e),L(r)}}}function nt(t){let e,r,s,d,u,f,m,j,D,N,S,A,V;f=new tt({props:{newsList:t[0]}});let B=t[1],H=[];for(let n=0;n<B.length;n+=1)H[n]=st(et(t,B,n));const W=t=>p(H[t],1,1,(()=>{H[t]=null}));return{c(){e=n("div"),r=n("h1"),s=n("span"),d=g("Panui"),u=b(),v(f.$$.fragment),m=b(),j=n("h1"),D=n("span"),N=g("Other Docs"),S=b(),A=n("div");for(let t=0;t<H.length;t+=1)H[t].c();this.h()},l(t){e=o(t,"DIV",{class:!0});var n=a(e);r=o(n,"H1",{});var c=a(r);s=o(c,"SPAN",{class:!0});var i=a(s);d=x(i,"Panui"),i.forEach(l),c.forEach(l),u=w(n),k(f.$$.fragment,n),m=w(n),j=o(n,"H1",{});var h=a(j);D=o(h,"SPAN",{class:!0});var p=a(D);N=x(p,"Other Docs"),p.forEach(l),h.forEach(l),S=w(n),A=o(n,"DIV",{class:!0});var g=a(A);for(let e=0;e<H.length;e+=1)H[e].l(g);g.forEach(l),n.forEach(l),this.h()},h(){c(s,"class",t[2]),c(D,"class",t[2]),c(A,"class","space-y-2"),c(e,"class","p-2 space-y-4 md:space-y-6 lg:space-y-8")},m(t,n){i(t,e,n),$(e,r),$(r,s),$(s,d),$(e,u),y(f,e,null),$(e,m),$(e,j),$(j,D),$(D,N),$(e,S),$(e,A);for(let e=0;e<H.length;e+=1)H[e].m(A,null);V=!0},p(t,e){const r={};if(1&e&&(r.newsList=t[0]),f.$set(r),2&e){let r;for(B=t[1],r=0;r<B.length;r+=1){const s=et(t,B,r);H[r]?(H[r].p(s,e),h(H[r],1)):(H[r]=st(s),H[r].c(),h(H[r],1),H[r].m(A,null))}for(E(),r=B.length;r<H.length;r+=1)W(r);P()}},i(t){if(!V){h(f.$$.fragment,t);for(let t=0;t<B.length;t+=1)h(H[t]);V=!0}},o(t){p(f.$$.fragment,t),H=H.filter(Boolean);for(let e=0;e<H.length;e+=1)p(H[e]);V=!1},d(t){t&&l(e),L(f),I(H,t)}}}function ot(t){let e,r;return e=new B({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){y(e,t,s),r=!0},p(t,[r]){const s={};131&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}var at=function(t,e,r,s){return new(r||(r=Promise))((function(n,o){function a(t){try{c(s.next(t))}catch(e){o(e)}}function l(t){try{c(s.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,l)}c((s=s.apply(t,e||[])).next())}))};const lt=({fetch:t})=>at(void 0,void 0,void 0,(function*(){return{props:{docs:(yield(yield t("/docs/docs.json")).json()).docs}}})),ct=({fetch:t})=>at(void 0,void 0,void 0,(function*(){return{props:{newsList:(yield(yield t("/news/news.json")).json()).newsList}}})),it=({fetch:t})=>at(void 0,void 0,void 0,(function*(){const e=yield(yield t("/news/news.json")).json(),r=yield(yield t("/docs/docs.json")).json();return{props:{newsList:e.newsList,docs:r.docs}}}));function dt(t,e,r){let s;S(t,V,(t=>r(3,s=t))),A(V,s={title:"Panui",description:"A blog from the Whakaoranga Whanau; news & updates from the community",robots:"none"},s);let{newsList:n}=e,{docs:o}=e;return t.$$set=t=>{"newsList"in t&&r(0,n=t.newsList),"docs"in t&&r(1,o=t.docs)},[n,o,"font-bold font-serif tracking-tighter text-shadow text-28 md:text-42 lg:text-64 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 border-b-4 border-green-300 dark:border-yellow-300"]}class ut extends t{constructor(t){super(),e(this,t,dt,ot,r,{newsList:0,docs:1})}}export{O as B,Q as L,tt as N,ut as a,lt as b,it as c,ct as l};