import{S as r,i as s,s as a,e as t,t as e,c as n,a as c,g as o,d as u,f,X as l,h as d,k as m,l as p,n as i,R as h}from"./chunks/vendor-2fda02bd.js";function E(r){let s,a,m=r[1].frame+"";return{c(){s=t("pre"),a=e(m)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].frame+"")&&d(a,m)},d(r){r&&u(s)}}}function k(r){let s,a,m=r[1].stack+"";return{c(){s=t("pre"),a=e(m)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].stack+"")&&d(a,m)},d(r){r&&u(s)}}}function v(r){let s,a,v,R,g,P,x,N,$=r[1].message+"",b=r[1].frame&&E(r),j=r[1].stack&&k(r);return{c(){s=t("h1"),a=e(r[0]),v=m(),R=t("pre"),g=e($),P=m(),b&&b.c(),x=m(),j&&j.c(),N=p()},l(t){s=n(t,"H1",{});var e=c(s);a=o(e,r[0]),e.forEach(u),v=i(t),R=n(t,"PRE",{});var f=c(R);g=o(f,$),f.forEach(u),P=i(t),b&&b.l(t),x=i(t),j&&j.l(t),N=p()},m(r,t){f(r,s,t),l(s,a),f(r,v,t),f(r,R,t),l(R,g),f(r,P,t),b&&b.m(r,t),f(r,x,t),j&&j.m(r,t),f(r,N,t)},p(r,[s]){1&s&&d(a,r[0]),2&s&&$!==($=r[1].message+"")&&d(g,$),r[1].frame?b?b.p(r,s):(b=E(r),b.c(),b.m(x.parentNode,x)):b&&(b.d(1),b=null),r[1].stack?j?j.p(r,s):(j=k(r),j.c(),j.m(N.parentNode,N)):j&&(j.d(1),j=null)},i:h,o:h,d(r){r&&u(s),r&&u(v),r&&u(R),r&&u(P),b&&b.d(r),r&&u(x),j&&j.d(r),r&&u(N)}}}function R({error:r,status:s}){return{props:{error:r,status:s}}}function g(r,s,a){let{status:t}=s,{error:e}=s;return r.$$set=r=>{"status"in r&&a(0,t=r.status),"error"in r&&a(1,e=r.error)},[t,e]}class P extends r{constructor(r){super(),s(this,r,g,v,a,{status:0,error:1})}}export{P as default,R as load};