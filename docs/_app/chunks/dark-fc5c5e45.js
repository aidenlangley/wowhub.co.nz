import{S as s,i as a,s as e,e as t,k as o,c as l,n as r,a0 as c,b as h,a1 as i,f as p,G as n,d as g,C as d}from"./vendor-26549fe8.js";function w(s){let a,e,d,w,u,f,m;return{c(){a=t("img"),w=o(),u=t("img"),this.h()},l(s){a=l(s,"IMG",{src:!0,alt:!0,class:!0}),w=r(s),u=l(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){c(a.src,e="/_app/assets/logo-1ae893a2.png")||h(a,"src","/_app/assets/logo-1ae893a2.png"),h(a,"alt",x),h(a,"class",d=i(s[0]?"hide":"show")+" svelte-zqpbxx"),c(u.src,f="/_app/assets/logo-white-9f2ae718.png")||h(u,"src","/_app/assets/logo-white-9f2ae718.png"),h(u,"alt",x),h(u,"class",m=i(s[0]?"show":"hide")+" svelte-zqpbxx")},m(s,e){p(s,a,e),p(s,w,e),p(s,u,e)},p(s,[e]){1&e&&d!==(d=i(s[0]?"hide":"show")+" svelte-zqpbxx")&&h(a,"class",d),1&e&&m!==(m=i(s[0]?"show":"hide")+" svelte-zqpbxx")&&h(u,"class",m)},i:n,o:n,d(s){s&&g(a),s&&g(w),s&&g(u)}}}const x="wowhub logo";function u(s,a,e){let{white:t=!1}=a;return s.$$set=s=>{"white"in s&&e(0,t=s.white)},[t]}class f extends s{constructor(s){super(),a(this,s,u,w,e,{white:0})}}const m=d({dark:"true"===localStorage.getItem("dark")}),b=s=>{m.set({dark:s}),localStorage.setItem("dark",`${s}`)};export{f as L,b as a,m as s};