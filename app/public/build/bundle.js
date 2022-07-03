var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,l;function u(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}function _(t){l=t}const b=[],y=[],x=[],w=[],k=Promise.resolve();let q=!1;function T(){q||(q=!0,k.then(O))}function E(t){x.push(t)}const S=new Set;let A=0;function O(){const t=l;do{for(;A<b.length;){const t=b[A];A++,_(t),j(t.$$)}for(_(null),b.length=0,A=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];S.has(e)||(S.add(e),e())}x.length=0}while(b.length);for(;w.length;)w.pop()();q=!1,S.clear(),_(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function M(s,c,u,i,a,d,p,g=[-1]){const m=l;_(s);const h=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(m?m.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:c.target||m.$$.root};p&&p(h.root);let v=!1;if(h.ctx=u?u(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),v&&function(t,e){-1===t.$$.dirty[0]&&(b.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e})):[],h.update(),v=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();c.intro&&(($=s.$$.fragment)&&$.i&&(L.delete($),$.i(y))),function(t,n,s,c){const{fragment:l,on_mount:u,on_destroy:i,after_update:a}=t.$$;l&&l.m(n,s),c||E((()=>{const n=u.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(E)}(s,c.target,c.anchor,c.customElement),O()}var $,y;_(m)}function N(t,e,n){const o=t.slice();return o[14]=e[n],o}function z(e){let n,o,r,s,c=e[14]+"";return{c(){n=d("option"),o=g(c),r=m(),n.__value=s=e[14],n.value=n.__value},m(t,e){a(t,n,e),i(n,o),i(n,r)},p:t,d(t){t&&f(n)}}}function B(e){let n,r,s,c,l,_,b,y,x,w,k,q,T,S,A,O,j,L,M,B,C,I,P=e[2]?.paused?"START":"STOP",H=e[4],R=[];for(let t=0;t<H.length;t+=1)R[t]=z(N(e,H,t));return{c(){n=d("main"),r=d("div"),s=d("div"),c=g(P),l=m(),_=d("div"),b=p("svg"),y=p("circle"),x=p("circle"),w=m(),k=d("aside"),q=d("span"),q.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="svelte-qmv7lg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 2h6m-3 8v4m0 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path></svg>',T=m(),S=d("select");for(let t=0;t<R.length;t+=1)R[t].c();O=m(),j=d("audio"),M=m(),B=d("footer"),B.innerHTML="<p>sounds by sfzc.org</p> \n  <p>tomasmcm – 2022</p>",v(s,"class","progress__number svelte-qmv7lg"),v(y,"r","15.9154943092"),v(y,"cy","20"),v(y,"cx","20"),v(y,"class","svelte-qmv7lg"),v(x,"r","15.9154943092"),v(x,"cy","20"),v(x,"cx","20"),v(x,"stroke-dashoffset","100"),v(x,"transform","rotate(-90,20,20)"),v(x,"class","svelte-qmv7lg"),v(b,"class","progress__svg svelte-qmv7lg"),v(b,"viewBox","0 0 40 40"),v(_,"class","progress__fill svelte-qmv7lg"),v(r,"class","progress svelte-qmv7lg"),v(q,"class","label svelte-qmv7lg"),v(S,"class","interval-select svelte-qmv7lg"),S.disabled=A=!e[2]?.paused,void 0===e[0]&&E((()=>e[9].call(S))),v(k,"class","svelte-qmv7lg"),u(j.src,L=e[1])||v(j,"src",L),v(n,"class","svelte-qmv7lg"),v(B,"class","svelte-qmv7lg")},m(t,o){a(t,n,o),i(n,r),i(r,s),i(s,c),i(r,l),i(r,_),i(_,b),i(b,y),i(b,x),e[8](x),i(n,w),i(n,k),i(k,q),i(k,T),i(k,S);for(let t=0;t<R.length;t+=1)R[t].m(S,null);$(S,e[0]),i(n,O),i(n,j),e[10](j),a(t,M,o),a(t,B,o),C||(I=[h(r,"click",e[6]),h(S,"change",e[9]),h(j,"timeupdate",e[7]),h(j,"ended",e[5])],C=!0)},p(t,[e]){if(4&e&&P!==(P=t[2]?.paused?"START":"STOP")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,P),16&e){let n;for(H=t[4],n=0;n<H.length;n+=1){const o=N(t,H,n);R[n]?R[n].p(o,e):(R[n]=z(o),R[n].c(),R[n].m(S,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=H.length}4&e&&A!==(A=!t[2]?.paused)&&(S.disabled=A),17&e&&$(S,t[0]),2&e&&!u(j.src,L=t[1])&&v(j,"src",L)},i:t,o:t,d(t){t&&f(n),e[8](null),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(R,t),e[10](null),t&&f(M),t&&f(B),C=!1,o(I)}}}const C="zazen-duration";function I(t,e,n){let o;const r=["15","20","30","40"];let s,c,l,u=localStorage.getItem(C)||"30";async function i(){n(1,s=o),await(T(),k),c.pause(),n(2,c.currentTime=0,c),c.play()}function a(){c.pause(),n(2,c.currentTime=0,c),n(1,s=void 0),f()}function f(){c.paused?l.setAttribute("stroke-dashoffset",100):l.setAttribute("stroke-dashoffset",100-100*c.currentTime/c.duration)}return t.$$.update=()=>{1&t.$$.dirty&&(o=`${u}.m4a`),1&t.$$.dirty&&localStorage.setItem(C,u)},[u,s,c,l,r,a,function(){c?.paused?i():a()},f,function(t){y[t?"unshift":"push"]((()=>{l=t,n(3,l)}))},function(){u=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,u),n(4,r)},function(t){y[t?"unshift":"push"]((()=>{c=t,n(2,c)}))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),M(this,t,I,B,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
