import{S as s,i as t,s as r,e as a,j as e,c as n,a as o,m as c,d as u,b as f,f as $,o as i,x as l,u as d,v as m,t as p,g as h,h as g}from"../chunks/vendor-1ff334d5.js";import{H as x,B as v,G as j}from"../chunks/Heading-c1a38fc3.js";function b(s){let t,r,a;return{c(){t=p(s[0]),r=p(": "),a=p(s[1])},l(e){t=h(e,s[0]),r=h(e,": "),a=h(e,s[1])},m(s,e){$(s,t,e),$(s,r,e),$(s,a,e)},p(s,r){1&r&&g(t,s[0]),2&r&&g(a,s[1])},d(s){s&&u(t),s&&u(r),s&&u(a)}}}function k(s){let t,r,p;return r=new x({props:{bg:v.Red,fg:j.Red,$$slots:{default:[b]},$$scope:{ctx:s}}}),{c(){t=a("div"),e(r.$$.fragment),this.h()},l(s){t=n(s,"DIV",{class:!0});var a=o(t);c(r.$$.fragment,a),a.forEach(u),this.h()},h(){f(t,"class","column")},m(s,a){$(s,t,a),i(r,t,null),p=!0},p(s,[t]){const a={};7&t&&(a.$$scope={dirty:t,ctx:s}),r.$set(a)},i(s){p||(l(r.$$.fragment,s),p=!0)},o(s){d(r.$$.fragment,s),p=!1},d(s){s&&u(t),m(r)}}}function H({status:s,error:t}){return{props:{error:t.message,status:s}}}function R(s,t,r){let{status:a}=t,{error:e}=t;return s.$$set=s=>{"status"in s&&r(0,a=s.status),"error"in s&&r(1,e=s.error)},[a,e]}class w extends s{constructor(s){super(),t(this,s,R,k,r,{status:0,error:1})}}export{w as default,H as load};
