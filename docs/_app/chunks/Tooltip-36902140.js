import{S as t,i as o,s,l,f as a,r as e,u as p,w as i,x as n,d as r,R as c,e as u,c as h,a as g,b as d,K as f,T as m,U as b,V as $,H as x}from"./vendor-4017cb8d.js";function v(t){let o,s;const l=t[9].default,e=c(l,t,t[8],null);return{c(){o=u("span"),e&&e.c(),this.h()},l(t){o=h(t,"SPAN",{"data-tooltip":!0,"aria-haspopup":!0,class:!0});var s=g(o);e&&e.l(s),s.forEach(r),this.h()},h(){d(o,"data-tooltip",t[0]),d(o,"aria-haspopup","true"),d(o,"class","svelte-4r00g5"),f(o,"bottom",t[1]),f(o,"top",t[2]),f(o,"left",t[3]),f(o,"right",t[4])},m(t,l){a(t,o,l),e&&e.m(o,null),s=!0},p(t,a){e&&e.p&&(!s||256&a)&&m(e,l,t,t[8],s?$(l,t[8],a,null):b(t[8]),null),(!s||1&a)&&d(o,"data-tooltip",t[0]),2&a&&f(o,"bottom",t[1]),4&a&&f(o,"top",t[2]),8&a&&f(o,"left",t[3]),16&a&&f(o,"right",t[4])},i(t){s||(n(e,t),s=!0)},o(t){p(e,t),s=!1},d(t){t&&r(o),e&&e.d(t)}}}function N(t){let o,s,l,e;const i=t[9].default,v=c(i,t,t[8],null);return{c(){o=u("span"),v&&v.c(),this.h()},l(t){o=h(t,"SPAN",{"data-tooltip":!0,"aria-haspopup":!0,class:!0});var s=g(o);v&&v.l(s),s.forEach(r),this.h()},h(){d(o,"data-tooltip",t[0]),d(o,"aria-haspopup","true"),d(o,"class","svelte-4r00g5"),f(o,"bottom",t[1]&&!t[2]),f(o,"top",t[2]),f(o,"left",t[3]),f(o,"right",t[4]),f(o,"toggled",t[6])},m(p,i){a(p,o,i),v&&v.m(o,null),s=!0,l||(e=x(o,"click",t[7]),l=!0)},p(t,l){v&&v.p&&(!s||256&l)&&m(v,i,t,t[8],s?$(i,t[8],l,null):b(t[8]),null),(!s||1&l)&&d(o,"data-tooltip",t[0]),6&l&&f(o,"bottom",t[1]&&!t[2]),4&l&&f(o,"top",t[2]),8&l&&f(o,"left",t[3]),16&l&&f(o,"right",t[4]),64&l&&f(o,"toggled",t[6])},i(t){s||(n(v,t),s=!0)},o(t){p(v,t),s=!1},d(t){t&&r(o),v&&v.d(t),l=!1,e()}}}function S(t){let o,s,c,u;const h=[N,v],g=[];function d(t,o){return t[5]?0:1}return o=d(t),s=g[o]=h[o](t),{c(){s.c(),c=l()},l(t){s.l(t),c=l()},m(t,s){g[o].m(t,s),a(t,c,s),u=!0},p(t,[l]){let a=o;o=d(t),o===a?g[o].p(t,l):(e(),p(g[a],1,1,(()=>{g[a]=null})),i(),s=g[o],s?s.p(t,l):(s=g[o]=h[o](t),s.c()),n(s,1),s.m(c.parentNode,c))},i(t){u||(n(s),u=!0)},o(t){p(s),u=!1},d(t){g[o].d(t),t&&r(c)}}}function A(t,o,s){let{$$slots:l={},$$scope:a}=o,{text:e}=o,{bottom:p=!0}=o,{top:i=!1}=o,{left:n=!1}=o,{right:r=!1}=o,{toggles:c=!1}=o,u=!1;return t.$$set=t=>{"text"in t&&s(0,e=t.text),"bottom"in t&&s(1,p=t.bottom),"top"in t&&s(2,i=t.top),"left"in t&&s(3,n=t.left),"right"in t&&s(4,r=t.right),"toggles"in t&&s(5,c=t.toggles),"$$scope"in t&&s(8,a=t.$$scope)},[e,p,i,n,r,c,u,()=>s(6,u=!u),a,l]}class E extends t{constructor(t){super(),o(this,t,A,S,s,{text:0,bottom:1,top:2,left:3,right:4,toggles:5})}}export{E as T};