import{S as s,i as e,s as t,D as n,e as o,c as l,a as r,d as a,b as c,f as i,E as $,F as u,G as d,x as f,u as p,j as g,m as h,o as m,v,a2 as b}from"./vendor-06293897.js";var x,G,w,B,R,y;function E(s){let e,t,g;const h=s[3].default,m=n(h,s,s[2],null);return{c(){e=o("div"),m&&m.c(),this.h()},l(s){e=l(s,"DIV",{class:!0});var t=r(e);m&&m.l(t),t.forEach(a),this.h()},h(){c(e,"class",t=s[0]+" "+s[1]+" svelte-zfrnpa")},m(s,t){i(s,e,t),m&&m.m(e,null),g=!0},p(s,[n]){m&&m.p&&(!g||4&n)&&$(m,h,s,s[2],g?d(h,s[2],n,null):u(s[2]),null),(!g||3&n&&t!==(t=s[0]+" "+s[1]+" svelte-zfrnpa"))&&c(e,"class",t)},i(s){g||(f(m,s),g=!0)},o(s){p(m,s),g=!1},d(s){s&&a(e),m&&m.d(s)}}}function j(s,e,t){let{$$slots:n={},$$scope:o}=e,{direction:l}=e,{colour:r}=e;return s.$$set=s=>{"direction"in s&&t(0,l=s.direction),"colour"in s&&t(1,r=s.colour),"$$scope"in s&&t(2,o=s.$$scope)},[l,r,o,n]}class z extends s{constructor(s){super(),e(this,s,j,E,t,{direction:0,colour:1})}}(G=x||(x={})).BottomRight="translate-br",G.BottomLeft="translate-bl",(B=w||(w={})).Green="translate-green",B.Red="translate-red",B.Yellow="translate-yellow",(y=R||(R={})).Green="gradient-green",y.Yellow="gradient-yellow",y.Red="gradient-red";function D(s){let e,t,g;const h=s[3].default,m=n(h,s,s[4],null);return{c(){e=o("h1"),m&&m.c(),this.h()},l(s){e=l(s,"H1",{class:!0});var t=r(e);m&&m.l(t),t.forEach(a),this.h()},h(){c(e,"class",t=b(s[2])+" svelte-olmvsp")},m(s,t){i(s,e,t),m&&m.m(e,null),g=!0},p(s,n){m&&m.p&&(!g||16&n)&&$(m,h,s,s[4],g?d(h,s[4],n,null):u(s[4]),null),(!g||4&n&&t!==(t=b(s[2])+" svelte-olmvsp"))&&c(e,"class",t)},i(s){g||(f(m,s),g=!0)},o(s){p(m,s),g=!1},d(s){s&&a(e),m&&m.d(s)}}}function H(s){let e,t;return e=new z({props:{direction:s[0],colour:s[1],$$slots:{default:[D]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,n){m(e,s,n),t=!0},p(s,[t]){const n={};1&t&&(n.direction=s[0]),2&t&&(n.colour=s[1]),20&t&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){v(e,s)}}}function Y(s,e,t){let{$$slots:n={},$$scope:o}=e,{direction:l=x.BottomRight}=e,{bg:r=w.Green}=e,{fg:a=R.Green}=e;return s.$$set=s=>{"direction"in s&&t(0,l=s.direction),"bg"in s&&t(1,r=s.bg),"fg"in s&&t(2,a=s.fg),"$$scope"in s&&t(4,o=s.$$scope)},[l,r,a,n,o]}class F extends s{constructor(s){super(),e(this,s,Y,H,t,{direction:0,bg:1,fg:2})}}export{w as B,R as G,F as H,x as T};
