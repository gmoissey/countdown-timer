import{S as F,i as L,s as R,k,a as A,l as g,m as h,h as a,c as U,J as B,n as b,p as V,b as D,G as w,K as W,H as q,o as H,w as J,q as S,r as P,u as N,y as O,L as Q,z as X,A as Y,g as Z,d as x,B as $}from"../chunks/index.c99a6402.js";import{b as y}from"../chunks/paths.0294cd46.js";function ee(m){let r,t;return{c(){r=k("div"),t=S("TIMES UP!"),this.h()},l(o){r=g(o,"DIV",{class:!0});var l=h(r);t=P(l,"TIMES UP!"),l.forEach(a),this.h()},h(){b(r,"class","timesUpText svelte-tvu6k3")},m(o,l){D(o,r,l),w(r,t)},p:q,d(o){o&&a(r)}}}function te(m){let r,t=((m[0]/1e3|0)/10|0)+"",o,l,c,s=(m[0]/1e3|0)%10+"",_,e,n,p,d,u,f=(m[0]%1e3/100|0)+"",T,E,I,C=(m[0]%100/10|0)+"",M;return{c(){r=k("div"),o=S(t),l=A(),c=k("div"),_=S(s),e=A(),n=k("div"),p=S(":"),d=A(),u=k("div"),T=S(f),E=A(),I=k("div"),M=S(C),this.h()},l(i){r=g(i,"DIV",{class:!0});var v=h(r);o=P(v,t),v.forEach(a),l=U(i),c=g(i,"DIV",{class:!0});var j=h(c);_=P(j,s),j.forEach(a),e=U(i),n=g(i,"DIV",{class:!0});var G=h(n);p=P(G,":"),G.forEach(a),d=U(i),u=g(i,"DIV",{class:!0});var K=h(u);T=P(K,f),K.forEach(a),E=U(i),I=g(i,"DIV",{class:!0});var z=h(I);M=P(z,C),z.forEach(a),this.h()},h(){b(r,"class","Digit svelte-tvu6k3"),b(c,"class","Digit svelte-tvu6k3"),b(n,"class","Digit svelte-tvu6k3"),b(u,"class","Digit svelte-tvu6k3"),b(I,"class","Digit svelte-tvu6k3")},m(i,v){D(i,r,v),w(r,o),D(i,l,v),D(i,c,v),w(c,_),D(i,e,v),D(i,n,v),w(n,p),D(i,d,v),D(i,u,v),w(u,T),D(i,E,v),D(i,I,v),w(I,M)},p(i,v){v&1&&t!==(t=((i[0]/1e3|0)/10|0)+"")&&N(o,t),v&1&&s!==(s=(i[0]/1e3|0)%10+"")&&N(_,s),v&1&&f!==(f=(i[0]%1e3/100|0)+"")&&N(T,f),v&1&&C!==(C=(i[0]%100/10|0)+"")&&N(M,C)},d(i){i&&a(r),i&&a(l),i&&a(c),i&&a(e),i&&a(n),i&&a(d),i&&a(u),i&&a(E),i&&a(I)}}}function se(m){let r,t,o,l,c,s,_,e;function n(u,f){return u[0]>0?te:ee}let p=n(m),d=p(m);return{c(){r=k("audio"),o=A(),l=k("main"),c=k("div"),s=k("div"),d.c(),this.h()},l(u){r=g(u,"AUDIO",{src:!0}),h(r).forEach(a),o=U(u),l=g(u,"MAIN",{});var f=h(l);c=g(f,"DIV",{class:!0});var T=h(c);s=g(T,"DIV",{class:!0});var E=h(s);d.l(E),E.forEach(a),T.forEach(a),f.forEach(a),this.h()},h(){B(r.src,t=m[3])||b(r,"src",t),b(s,"class","TimerDigits svelte-tvu6k3"),V(s,"--borderPercentage",m[1]),V(s,"--color",m[4]),b(c,"class","CountdowdTimer svelte-tvu6k3")},m(u,f){D(u,r,f),m[7](r),D(u,o,f),D(u,l,f),w(l,c),w(c,s),d.m(s,null),_||(e=W(window,"keydown",m[5]),_=!0)},p(u,[f]){f&8&&!B(r.src,t=u[3])&&b(r,"src",t),p===(p=n(u))&&d?d.p(u,f):(d.d(1),d=p(u),d&&(d.c(),d.m(s,null))),f&2&&V(s,"--borderPercentage",u[1]),f&16&&V(s,"--color",u[4])},i:q,o:q,d(u){u&&a(r),m[7](null),u&&a(o),u&&a(l),d.d(),_=!1,e()}}}function re(m,r,t){let o,l,c,s,_=`${y}/sounds/regular-timer-sound.mp3`,e={currentTime:new Date().getTime(),endTime:new Date().getTime()+60*1e3,status:"PAUSED"},n=[255,0,0],p=[0,0,0];function d(f){let T=f.key;T===" "?e.status==="PAUSED"?(s.play(),t(6,e.status="RUNNING",e),t(6,e.endTime=new Date().getTime()+o,e)):(t(6,e.status="PAUSED",e),s.pause()):T=="r"||T=="R"?(t(6,e.status="PAUSED",e),t(6,e.currentTime=new Date().getTime(),e),t(6,e.endTime=new Date().getTime()+60*1e3,e),t(2,s.currentTime=0,s),s.pause()):T=="f"||T=="F"?(t(3,_=`${y}/sounds/quizTimer.mp3`),t(6,e.status="PAUSED",e),t(6,e.currentTime=new Date().getTime(),e),t(6,e.endTime=new Date().getTime()+60*1e3,e),t(2,s.currentTime=0,s),s.pause()):(T=="g"||T=="G")&&(t(3,_=`${y}/sounds/regular-timer-sound.mp3`),t(6,e.status="PAUSED",e),t(6,e.currentTime=new Date().getTime(),e),t(6,e.endTime=new Date().getTime()+60*1e3,e),t(2,s.currentTime=0,s),s.pause())}H(()=>{setInterval(()=>{e.status!=="PAUSED"&&(o>0?t(6,e.currentTime=new Date().getTime(),e):(t(6,e.currentTime=0,e),t(6,e.endTime=0,e),t(6,e.status="PAUSED",e)))},20)});function u(f){J[f?"unshift":"push"](()=>{s=f,t(2,s)})}return m.$$.update=()=>{m.$$.dirty&64&&t(0,o=e.endTime-e.currentTime>0?e.endTime-e.currentTime:0),m.$$.dirty&1&&t(1,l=o/(60*1e3)),m.$$.dirty&2&&t(4,c=`rgb(${(p[0]-n[0])*l+n[0]}, ${(p[1]-n[1])*l+n[1]}, ${(p[2]-n[2])*l+n[2]})`)},[o,l,s,_,c,d,e,u]}class le extends F{constructor(r){super(),L(this,r,re,se,R,{})}}function ie(m){let r,t,o,l,c,s,_,e;return c=new le({}),{c(){r=k("base"),t=A(),o=k("main"),l=k("div"),O(c.$$.fragment),this.h()},l(n){const p=Q("svelte-6cllt1",document.head);r=g(p,"BASE",{href:!0}),p.forEach(a),t=U(n),o=g(n,"MAIN",{});var d=h(o);l=g(d,"DIV",{class:!0});var u=h(l);X(c.$$.fragment,u),u.forEach(a),d.forEach(a),this.h()},h(){b(r,"href","/countdown-timer"),b(l,"class","main svelte-pfuyuf"),V(l,"--backgroundImage",`url(${m[1][m[0]]})`)},m(n,p){w(document.head,r),D(n,t,p),D(n,o,p),w(o,l),Y(c,l,null),s=!0,_||(e=W(window,"keydown",m[2]),_=!0)},p(n,[p]){p&1&&V(l,"--backgroundImage",`url(${n[1][n[0]]})`)},i(n){s||(Z(c.$$.fragment,n),s=!0)},o(n){x(c.$$.fragment,n),s=!1},d(n){a(r),n&&a(t),n&&a(o),$(c),_=!1,e()}}}function ne(m,r,t){let o=[`${y}/backgrounds/ancientWall.jpeg`,`${y}/backgrounds/desert_1.jpg`,`${y}/backgrounds/canyon_river.jpg`,`${y}/backgrounds/fireWall.gif`],l=0;function c(s){let _=s.key;_>="0"&&_<="9"&&t(0,l=parseInt(_)-1)}return[l,o,c]}class ae extends F{constructor(r){super(),L(this,r,ne,ie,R,{})}}export{ae as default};