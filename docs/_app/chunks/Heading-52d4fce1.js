import{S as h,i as v,s as b,T as w,e as G,c as H,a as R,d as f,b as c,f as T,U as y,V as B,W as Y,x as u,u as _,j as E,m as S,o as V,v as q,Y as j}from"./vendor-0e7822ec.js";var m;(function(s){s.Green="gradient-green",s.Yellow="gradient-yellow",s.Red="gradient-red"})(m||(m={}));var d;(function(s){s.BottomRight="translate-br",s.BottomLeft="translate-bl"})(d||(d={}));var g;(function(s){s.Green="translate-green",s.Red="translate-red",s.Yellow="translate-yellow"})(g||(g={}));function D(s){let t,o,n;const i=s[3].default,l=w(i,s,s[2],null);return{c(){t=G("div"),l&&l.c(),this.h()},l(e){t=H(e,"DIV",{class:!0});var a=R(t);l&&l.l(a),a.forEach(f),this.h()},h(){c(t,"class",o=""+(s[0]+" "+s[1]+" svelte-1w1175r"))},m(e,a){T(e,t,a),l&&l.m(t,null),n=!0},p(e,[a]){l&&l.p&&(!n||a&4)&&y(l,i,e,e[2],n?Y(i,e[2],a,null):B(e[2]),null),(!n||a&3&&o!==(o=""+(e[0]+" "+e[1]+" svelte-1w1175r")))&&c(t,"class",o)},i(e){n||(u(l,e),n=!0)},o(e){_(l,e),n=!1},d(e){e&&f(t),l&&l.d(e)}}}function I(s,t,o){let{$$slots:n={},$$scope:i}=t,{direction:l}=t,{colour:e}=t;return s.$$set=a=>{"direction"in a&&o(0,l=a.direction),"colour"in a&&o(1,e=a.colour),"$$scope"in a&&o(2,i=a.$$scope)},[l,e,i,n]}class L extends h{constructor(t){super();v(this,t,I,D,b,{direction:0,colour:1})}}function U(s){let t,o,n;const i=s[3].default,l=w(i,s,s[4],null);return{c(){t=G("h1"),l&&l.c(),this.h()},l(e){t=H(e,"H1",{class:!0});var a=R(t);l&&l.l(a),a.forEach(f),this.h()},h(){c(t,"class",o=""+(j(s[2])+" svelte-olmvsp"))},m(e,a){T(e,t,a),l&&l.m(t,null),n=!0},p(e,a){l&&l.p&&(!n||a&16)&&y(l,i,e,e[4],n?Y(i,e[4],a,null):B(e[4]),null),(!n||a&4&&o!==(o=""+(j(e[2])+" svelte-olmvsp")))&&c(t,"class",o)},i(e){n||(u(l,e),n=!0)},o(e){_(l,e),n=!1},d(e){e&&f(t),l&&l.d(e)}}}function W(s){let t,o;return t=new L({props:{direction:s[0],colour:s[1],$$slots:{default:[U]},$$scope:{ctx:s}}}),{c(){E(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,i){V(t,n,i),o=!0},p(n,[i]){const l={};i&1&&(l.direction=n[0]),i&2&&(l.colour=n[1]),i&20&&(l.$$scope={dirty:i,ctx:n}),t.$set(l)},i(n){o||(u(t.$$.fragment,n),o=!0)},o(n){_(t.$$.fragment,n),o=!1},d(n){q(t,n)}}}function z(s,t,o){let{$$slots:n={},$$scope:i}=t,{direction:l=d.BottomRight}=t,{bg:e=g.Green}=t,{fg:a=m.Green}=t;return s.$$set=r=>{"direction"in r&&o(0,l=r.direction),"bg"in r&&o(1,e=r.bg),"fg"in r&&o(2,a=r.fg),"$$scope"in r&&o(4,i=r.$$scope)},[l,e,a,n,i]}class F extends h{constructor(t){super();v(this,t,z,W,b,{direction:0,bg:1,fg:2})}}export{g as B,m as G,F as H,d as T};