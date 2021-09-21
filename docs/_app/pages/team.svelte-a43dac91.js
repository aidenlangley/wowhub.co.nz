import{S as e,i as a,s as t,e as n,c as o,a as r,d as s,b as i,f as l,r as h,u,w as c,x as m,j as g,m as p,o as f,v as d,k as $,t as k,n as w,g as b,K as v,F as K,Z as y,G as E,D as x,E as T,X as N,l as A,_ as R,a0 as I,J as H}from"../chunks/vendor-d06578d5.js";import{H as j,T as W}from"../chunks/Heading-934e7bda.js";import{P as D}from"../chunks/Paragraph-3e67d236.js";import{T as M}from"../chunks/Tooltip-0873a60f.js";function B(e,a,t){const n=e.slice();return n[9]=a[t],n}function P(e){let a,t;return{c(){a=x("svg"),t=x("path"),this.h()},l(e){a=T(e,"svg",{xmlns:!0,viewBox:!0,fill:!0});var n=r(a);t=T(n,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),r(t).forEach(s),n.forEach(s),this.h()},h(){i(t,"fill-rule","evenodd"),i(t,"d","M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"),i(t,"clip-rule","evenodd"),i(a,"xmlns","http://www.w3.org/2000/svg"),i(a,"viewBox","0 0 20 20"),i(a,"fill","currentColor")},m(e,n){l(e,a,n),K(a,t)},p:E,d(e){e&&s(a)}}}function S(e){let a,t;return{c(){a=n("img"),this.h()},l(e){a=o(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){N(a.src,t=e[5])||i(a,"src",t),i(a,"alt","image of "+e[1]),i(a,"class","svelte-1ctzioo"),v(a,"tall",e[6])},m(e,t){l(e,a,t)},p:E,d(e){e&&s(a)}}}function L(e){let a;return{c(){a=k(e[1])},l(t){a=b(t,e[1])},m(e,t){l(e,a,t)},p:E,d(e){e&&s(a)}}}function z(e){let a,t;return a=new M({props:{text:e[4].join(".\n")+".",toggles:!0,left:!0,$$slots:{default:[_]},$$scope:{ctx:e}}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};4096&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function C(e){let a,t;return a=new M({props:{text:e[4].join(".\n")+".",toggles:!0,right:!0,$$slots:{default:[J]},$$scope:{ctx:e}}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};4096&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function _(e){let a;return{c(){a=k("Pepeha")},l(e){a=b(e,"Pepeha")},m(e,t){l(e,a,t)},d(e){e&&s(a)}}}function J(e){let a;return{c(){a=k("Pepeha")},l(e){a=b(e,"Pepeha")},m(e,t){l(e,a,t)},d(e){e&&s(a)}}}function F(e){let a,t=e[9]+"";return{c(){a=k(t)},l(e){a=b(e,t)},m(e,t){l(e,a,t)},p:E,d(e){e&&s(a)}}}function O(e){let a,t;return a=new D({props:{$$slots:{default:[F]},$$scope:{ctx:e}}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};4096&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function V(e){let a,t,E,x,T,N,A,R,I,H,D,M,_,J=e[2].join(", ")+"";let F=(e[5]?S:P)(e);N=new j({props:{direction:e[0]?W.BottomLeft:W.BottomRight,$$slots:{default:[L]},$$scope:{ctx:e}}});let V=e[7]&&function(e){let a,t,g,p;const f=[C,z],d=[];function $(e,a){return e[0]?0:1}return t=$(e),g=d[t]=f[t](e),{c(){a=n("button"),g.c(),this.h()},l(e){a=o(e,"BUTTON",{class:!0,"aria-label":!0});var t=r(a);g.l(t),t.forEach(s),this.h()},h(){i(a,"class","button svelte-1ctzioo"),i(a,"aria-label","show pepeha tooltip")},m(e,n){l(e,a,n),d[t].m(a,null),p=!0},p(e,n){let o=t;t=$(e),t===o?d[t].p(e,n):(h(),u(d[o],1,1,(()=>{d[o]=null})),c(),g=d[t],g?g.p(e,n):(g=d[t]=f[t](e),g.c()),m(g,1),g.m(a,null))},i(e){p||(m(g),p=!0)},o(e){u(g),p=!1},d(e){e&&s(a),d[t].d()}}}(e),G=e[3],Z=[];for(let n=0;n<G.length;n+=1)Z[n]=O(B(e,G,n));const U=e=>u(Z[e],1,1,(()=>{Z[e]=null}));return{c(){a=n("article"),t=n("header"),E=n("div"),F.c(),x=$(),T=n("section"),g(N.$$.fragment),A=$(),R=n("h2"),I=k(J),H=$(),V&&V.c(),D=$(),M=n("article");for(let e=0;e<Z.length;e+=1)Z[e].c();this.h()},l(e){a=o(e,"ARTICLE",{class:!0});var n=r(a);t=o(n,"HEADER",{class:!0});var i=r(t);E=o(i,"DIV",{class:!0});var l=r(E);F.l(l),l.forEach(s),x=w(i),T=o(i,"SECTION",{class:!0});var h=r(T);p(N.$$.fragment,h),h.forEach(s),A=w(i),R=o(i,"H2",{class:!0});var u=r(R);I=b(u,J),u.forEach(s),H=w(i),V&&V.l(i),i.forEach(s),D=w(n),M=o(n,"ARTICLE",{class:!0});var c=r(M);for(let a=0;a<Z.length;a+=1)Z[a].l(c);c.forEach(s),n.forEach(s),this.h()},h(){i(E,"class","img svelte-1ctzioo"),i(T,"class","name svelte-1ctzioo"),i(R,"class","titles svelte-1ctzioo"),i(t,"class","svelte-1ctzioo"),i(M,"class","blurb svelte-1ctzioo"),i(a,"class","member svelte-1ctzioo"),v(a,"right",e[0])},m(e,n){l(e,a,n),K(a,t),K(t,E),F.m(E,null),K(t,x),K(t,T),f(N,T,null),K(t,A),K(t,R),K(R,I),K(t,H),V&&V.m(t,null),K(a,D),K(a,M);for(let a=0;a<Z.length;a+=1)Z[a].m(M,null);_=!0},p(e,[t]){F.p(e,t);const n={};if(1&t&&(n.direction=e[0]?W.BottomLeft:W.BottomRight),4096&t&&(n.$$scope={dirty:t,ctx:e}),N.$set(n),e[7]&&V.p(e,t),8&t){let a;for(G=e[3],a=0;a<G.length;a+=1){const n=B(e,G,a);Z[a]?(Z[a].p(n,t),m(Z[a],1)):(Z[a]=O(n),Z[a].c(),m(Z[a],1),Z[a].m(M,null))}for(h(),a=G.length;a<Z.length;a+=1)U(a);c()}1&t&&v(a,"right",e[0])},i(e){if(!_){m(N.$$.fragment,e),m(V);for(let e=0;e<G.length;e+=1)m(Z[e]);_=!0}},o(e){u(N.$$.fragment,e),u(V),Z=Z.filter(Boolean);for(let a=0;a<Z.length;a+=1)u(Z[a]);_=!1},d(e){e&&s(a),F.d(),d(N),V&&V.d(),y(Z,e)}}}function G(e,a,t){let{member:n}=a;const{name:o,tags:r,about:s,pepeha:i,img:l,tallImg:h}=n;let{right:u=!1}=a;const c=i&&i.length>0;return e.$$set=e=>{"member"in e&&t(8,n=e.member),"right"in e&&t(0,u=e.right)},[u,o,r,s,i,l,h,c,n]}class Z extends e{constructor(e){super(),a(this,e,G,V,t,{member:8,right:0})}}function U(e,a,t){const n=e.slice();return n[1]=a[t],n[3]=t,n}function X(e){let a,t;return a=new Z({props:{member:e[1],right:!0}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};1&t&&(n.member=e[1]),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function q(e){let a,t;return a=new Z({props:{member:e[1]}}),{c(){g(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,n){f(a,e,n),t=!0},p(e,t){const n={};1&t&&(n.member=e[1]),a.$set(n)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){u(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}function Q(e){let a,t,n,o;const r=[q,X],i=[];return a=e[3]%2!=0?0:1,t=i[a]=r[a](e),{c(){t.c(),n=A()},l(e){t.l(e),n=A()},m(e,t){i[a].m(e,t),l(e,n,t),o=!0},p(e,a){t.p(e,a)},i(e){o||(m(t),o=!0)},o(e){u(t),o=!1},d(e){i[a].d(e),e&&s(n)}}}function Y(e){let a,t,g,p=e[0],f=[];for(let n=0;n<p.length;n+=1)f[n]=Q(U(e,p,n));const d=e=>u(f[e],1,1,(()=>{f[e]=null}));return{c(){a=n("div"),t=n("div");for(let e=0;e<f.length;e+=1)f[e].c();this.h()},l(e){a=o(e,"DIV",{class:!0});var n=r(a);t=o(n,"DIV",{class:!0});var i=r(t);for(let a=0;a<f.length;a+=1)f[a].l(i);i.forEach(s),n.forEach(s),this.h()},h(){i(t,"class","bg-inner gradient-gray fill pad-y gaps-y svelte-10pwvde"),i(a,"class","bg svelte-10pwvde")},m(e,n){l(e,a,n),K(a,t);for(let a=0;a<f.length;a+=1)f[a].m(t,null);g=!0},p(e,[a]){if(1&a){let n;for(p=e[0],n=0;n<p.length;n+=1){const o=U(e,p,n);f[n]?(f[n].p(o,a),m(f[n],1)):(f[n]=Q(o),f[n].c(),m(f[n],1),f[n].m(t,null))}for(h(),n=p.length;n<f.length;n+=1)d(n);c()}},i(e){if(!g){for(let e=0;e<p.length;e+=1)m(f[e]);g=!0}},o(e){f=f.filter(Boolean);for(let a=0;a<f.length;a+=1)u(f[a]);g=!1},d(e){e&&s(a),y(f,e)}}}function ee(e,a,t){let{team:n}=a;return e.$$set=e=>{"team"in e&&t(0,n=e.team)},[n]}class ae extends e{constructor(e){super(),a(this,e,ee,Y,t,{team:0})}}var te="/_app/assets/stu-bess-511370a9.jpg";const ne=R([{name:"Jane 🌊",tags:["founder","peer support","tuākana"],pepeha:["Ko Whakapoungakau te maunga","Ko Kaituna te awa","Ko Ruamata te marae","Ko Ngāti Pikiao, Ngāti Whakaue ōku hapū","Ko Te Arawa te iwi","Ko Te Arawa te waka","Ko Jane Beamsley ahau"],about:["Jane is the founder of Whakaoranga Whanau Recovery Hub. Although she has\n      no ties to Kaikohe, she was brought up by by her Te Arawa whakapapa, but\n      her granfathers' roots are with Ngati Te Roroa and Ngāti Kahungunu.","Jane is of Māori and pakeha descent and she shares personal lived\n      experience; maintaining mental wellbeing, as well as alcohol and drug\n      addiction.","Her recovery journey has brought her to Kaikohe and she\n      wanted to give back and share the gifts of recovery with others who\n      may be struggling. She couldn’t do this journey alone. He waka eke noa!"],frontline:!0,img:"/_app/assets/jane-0e74cf0b.jpg"},{name:"Dee 🔥",tags:["kaimanāki","peer support","tuākana"],pepeha:["Ko Hikurangi te maunga","Ko Ngātokimatawhaorua te waka","Ko Matawaia te marae","Ko Ngāti Hine te hapu","Ko Ngāpuhi te iwi","Ko Deeann Herkt Kopa ahau"],about:["Ka Kaimanāki ia Deeann Herkt; Dee is a peer support worker. She's been\n      clean and sober for 6 years after being addicted to methamphetamine for\n      many years. Dee checked herself into treatment, completed her programme in\n      2015 and is now very passionate about helping the next addict in their\n      recovery.","Another strong wāhine, she is always there to rescue her whanau and\n      support and teach Māoritanga via waiata & karakia especially."],frontline:!0,img:"/_app/assets/dee-2316a6ec.jpg",tallImg:!0},{name:"Rhonda 🔥",tags:["manager","co-founder","nāhi","trustee"],pepeha:["Ko Maungaemiemi tōku maunga","Ko Whangaroa tōku moana","Ko Kaingapipiwai tōku awa","Ko Mātaatua tōku waka","Ko Pupuke tōku marae","Ko Te Huia tōku whare tūpuna","Ko Ngapuhi tōku iwi","Ko Ngāti Pakahi tōku hapu","Ko Aaron Toki tōku hoa rangatira","Ko Shannyn, ko Rawiri, ko Julian, ko Fern āku tamariki","Ko nāhi ahau","Ko Kaikohe te kainga noho","Ko Rhonda Zielinski ahau"],about:["Rhonda is a registered Nurse and helped establish Whakaoranga Whanau\n      Recovery Hub in March 2020 alongside Jane. She's like a mother to the\n      Whakaoranga Whanau too. Born & bred in Rotorua, Rhonda moved North with\n      her parents at the age of 13 and has lived in Kaikohe ever since.","Rhonda also helps with Freedom Whare as a director of Whakamanamai\n      Whanau Charitable Trust; Freedom Whare help whanau with housing\n      solutions. Kaha nui ia Rhonda & very busy to put it mildly."],frontline:!0,img:"/_app/assets/rhonda-e27a3e53.jpg",tallImg:!0},{name:"Te Miringa 🔥",tags:["trustee","life coach"],pepeha:[],about:[],img:"/_app/assets/te-miringa-c92fa4ec.jpg"},{name:"Stu 💪🏽",tags:["he waka eke noa","aod counsellor","kaumātua"],pepeha:[],about:[],frontline:!0,img:te,tallImg:!0},{name:"Bess 🔥",tags:["he waka eke noa","therapist","kaumātua"],pepeha:[],about:[],frontline:!0,img:te,tallImg:!0},{name:"Noreen 🔥",tags:["kaimanāki","peer support","tuākana"],pepeha:["Ko Mauao te maunga","Ko Tauranga Moana tōku kainga whenua","Ko Wairoa tāku awa","Ko Ngāti Ranginui raua, ko Ngāiterangi te iwi","Ko Noreen Ahau"],about:["Wāhine Māori Noreen has been blessed to have survived and overcome some\n      of life's tribulations, such as child sexual abuse, abandonment, loss and\n      violence. She has experienced her fair share of grief and emotional\n      trauma.","She is a survivor of drug and alcohol abuse and has struggled to maintain\n      her mental health all of her life. Now being clean and sober, as well as a\n      Christian, she has a heart to help other people through their grief and\n      trauma by sharing her experience and knowledge of health and wellbeing,\n      particularly using the Māori world view of health and wellness."],frontline:!0,img:"/_app/assets/noreen-ae84dcb2.jpg"},{name:"Aiden 💻",tags:["kaipūkaha rorohiko","tuākana"],pepeha:["I whanau mai au i Tāmaki","I tupu ake au i tāwāhi, London, Ingarangi","Ko Whakatere te maunga","Ko Tāheke te awa","Ko Ngātokimatawhaorua te waka","Ko Ngāpuhi te iwi","Ko Ngāti Pākau te hapu","Ko Tāhekeroa te marae","Ko Pehi, ko Jack, ko Langley ōku whanau","Ko kaipūkaha rorohiko","Ko Aiden Langley ahau"],about:["Aiden has been described as more of a walker than a talker, so don't\n      expect much charisma from him. Aiden wrote this website, manages the IT\n      infrastructure and is our resident geek. 🤓","He was born in Tāmaki but moved with his parents to London at a young age\n      where he spent 20+ years growing up. His whanau originates from Tāheke &\n      Waima. He lives in Kaikohe these days.","He has been diagnosed with ADHD and has a mild form of Tourette's, so if\n      you ever meet him, you'll have to excuse any surprises. Drugs and alcohol\n      have played a large part in his life too."],img:"/_app/assets/aiden-9cc06c4c.jpg",tallImg:!0},{name:"Lisa 👩‍⚕️",tags:["clinical lead","mental health"],about:[],frontline:!0},{name:"Doug",tags:["trustee","director of whanau ora","founder of influence gym"],about:[],img:"/_app/assets/doug-9817a065.jpg"},{name:"Craig",tags:["trustee"],about:[]},{name:"Lily",tags:["trustee"],about:[]}]);function oe(e){let a,t,h,u,c;return{c(){a=n("span"),t=k("Tātou tīma he hui mai!"),h=$(),u=n("span"),c=k("Meet our team!"),this.h()},l(e){a=o(e,"SPAN",{});var n=r(a);t=b(n,"Tātou tīma he hui mai!"),n.forEach(s),h=w(e),u=o(e,"SPAN",{class:!0});var i=r(u);c=b(i,"Meet our team!"),i.forEach(s),this.h()},h(){i(u,"class","small")},m(e,n){l(e,a,n),K(a,t),l(e,h,n),l(e,u,n),K(u,c)},d(e){e&&s(a),e&&s(h),e&&s(u)}}}function re(e){let a,t;return{c(){a=n("span"),t=k("Behind the scenes...")},l(e){a=o(e,"SPAN",{});var n=r(a);t=b(n,"Behind the scenes..."),n.forEach(s)},m(e,n){l(e,a,n),K(a,t)},d(e){e&&s(a)}}}function se(e){let a,t,h,c,k,b,v,y,E,x,T,N,A,R,H,W;return a=new I({props:{title:"Meet the team",description:"Ngā kaimahi. Tātou tīma he hui mai! Those in front and behind\n    the scenes"}}),k=new j({props:{$$slots:{default:[oe]},$$scope:{ctx:e}}}),y=new ae({props:{team:e[0].filter(ie)}}),N=new j({props:{$$slots:{default:[re]},$$scope:{ctx:e}}}),H=new ae({props:{team:e[0].filter(le)}}),{c(){g(a.$$.fragment),t=$(),h=n("article"),c=n("header"),g(k.$$.fragment),b=$(),v=n("section"),g(y.$$.fragment),E=$(),x=n("article"),T=n("header"),g(N.$$.fragment),A=$(),R=n("section"),g(H.$$.fragment),this.h()},l(e){p(a.$$.fragment,e),t=w(e),h=o(e,"ARTICLE",{id:!0,class:!0});var n=r(h);c=o(n,"HEADER",{class:!0});var i=r(c);p(k.$$.fragment,i),i.forEach(s),b=w(n),v=o(n,"SECTION",{id:!0,class:!0});var l=r(v);p(y.$$.fragment,l),l.forEach(s),n.forEach(s),E=w(e),x=o(e,"ARTICLE",{id:!0,class:!0});var u=r(x);T=o(u,"HEADER",{class:!0});var m=r(T);p(N.$$.fragment,m),m.forEach(s),A=w(u),R=o(u,"SECTION",{id:!0,class:!0});var g=r(R);p(H.$$.fragment,g),g.forEach(s),u.forEach(s),this.h()},h(){i(c,"class","heading column svelte-13s0nmc"),i(v,"id","members"),i(v,"class","pad-x"),i(h,"id","kaimahi"),i(h,"class","pad-y"),i(T,"class","heading column svelte-13s0nmc"),i(R,"id","members-bts"),i(R,"class","pad-x"),i(x,"id","kaimahi-bts"),i(x,"class","pad-y")},m(e,n){f(a,e,n),l(e,t,n),l(e,h,n),K(h,c),f(k,c,null),K(h,b),K(h,v),f(y,v,null),l(e,E,n),l(e,x,n),K(x,T),f(N,T,null),K(x,A),K(x,R),f(H,R,null),W=!0},p(e,[a]){const t={};2&a&&(t.$$scope={dirty:a,ctx:e}),k.$set(t);const n={};1&a&&(n.team=e[0].filter(ie)),y.$set(n);const o={};2&a&&(o.$$scope={dirty:a,ctx:e}),N.$set(o);const r={};1&a&&(r.team=e[0].filter(le)),H.$set(r)},i(e){W||(m(a.$$.fragment,e),m(k.$$.fragment,e),m(y.$$.fragment,e),m(N.$$.fragment,e),m(H.$$.fragment,e),W=!0)},o(e){u(a.$$.fragment,e),u(k.$$.fragment,e),u(y.$$.fragment,e),u(N.$$.fragment,e),u(H.$$.fragment,e),W=!1},d(e){d(a,e),e&&s(t),e&&s(h),d(k),d(y),e&&s(E),e&&s(x),d(N),d(H)}}}const ie=e=>e.frontline,le=e=>!e.frontline;function he(e,a,t){let n;return H(e,ne,(e=>t(0,n=e))),[n]}class ue extends e{constructor(e){super(),a(this,e,he,se,t,{})}}export{ue as default};