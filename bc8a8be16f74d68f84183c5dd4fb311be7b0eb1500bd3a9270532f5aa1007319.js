export default(async()=>{function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function s(t,n,e){t.$$.on_destroy.push(u(n,e))}function l(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t,n,e,o,r,c){if(r){const i=a(n,e,o,c);t.p(i,r)}}function p(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function h(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}let $,m=!1;function g(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function _(t,n){if(m){for(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const c=n[t].claim_order,i=(r>0&&n[e[r]].claim_order<=c?r+1:g(1,r,(t=>n[e[t]].claim_order),c))-1;o[t]=e[i]+1;const u=i+1;e[u]=t,r=Math.max(u,r)}const c=[],i=[];let u=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(c.push(n[t-1]);u>=t;u--)i.push(n[u]);u--}for(;u>=0;u--)i.push(n[u]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<i.length;n++){for(;e<c.length&&i[n].claim_order>=c[e].claim_order;)e++;const o=e<c.length?c[e]:null;t.insertBefore(i[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function y(t,n,e){m&&!e?_(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function E(){return v("")}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function N(t){return Array.from(t.childNodes)}function S(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function R(t,n,e){return function(t,n,e,o){return S(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,b)}function A(t,n){return S(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>v(n)),!0)}function B(t){return A(t," ")}function O(t){$=t}function j(){if(!$)throw new Error("Function called outside component initialization");return $}function L(t,n){j().$$.context.set(t,n)}function T(t){return j().$$.context.get(t)}const C=[],I=[],D=[],P=[],U=Promise.resolve();let z=!1;function G(t){D.push(t)}const H=new Set;let M=0;function K(){const t=$;do{for(;M<C.length;){const t=C[M];M++,O(t),q(t.$$)}for(O(null),C.length=0,M=0;I.length;)I.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];H.has(n)||(H.add(n),n())}D.length=0}while(C.length);for(;P.length;)P.pop()();z=!1,H.clear(),O(t)}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const Y=new Set;let F;function J(){F={r:0,c:[],p:F}}function V(){F.r||r(F.c),F=F.p}function W(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function Q(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),F.c.push((()=>{Y.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,o,i){const{fragment:u,on_mount:s,on_destroy:l,after_update:a}=t.$$;u&&u.m(n,o),i||G((()=>{const n=s.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(G)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(n,e,c,i,u,s,l,a=[-1]){const f=$;O(n);const d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(C.push(t),z||(z=!0,U.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),e.target){if(e.hydrate){m=!0;const t=N(e.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();e.intro&&W(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),m=!1,K()}O(f)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=/^:(.+)/;function it(t){return"*"===t[0]}function ut(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function st(t){return t.replace(/(^\/+|\/+$)/g,"")}function lt(t,n){return{route:t,score:t.default?0:ut(t.path).reduce(((t,n)=>(t+=4,function(t){return""===t}(n)?t+=1:function(t){return ct.test(t)}(n)?t+=2:it(n)?t-=5:t+=3,t)),0),index:n}}function at(t,n){let e,o;const[r]=n.split("?"),c=ut(r),i=""===c[0],u=function(t){return t.map(lt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=u.length;t<r;t++){const r=u[t].route;let s=!1;if(r.default){o={route:r,params:{},uri:n};continue}const l=ut(r.path),a={},f=Math.max(c.length,l.length);let d=0;for(;d<f;d++){const t=l[d],n=c[d];if(void 0!==t&&it(t)){a["*"===t?"*":t.slice(1)]=c.slice(d).map(decodeURIComponent).join("/");break}if(void 0===n){s=!0;break}let e=ct.exec(t);if(e&&!i){const t=decodeURIComponent(n);a[e[1]]=t}else if(t!==n){s=!0;break}}if(!s){e={route:r,params:a,uri:"/"+c.slice(0,d).join("/")};break}}return e||o||null}function ft(t,n){return`${st("/"===n?t:`${st(t)}/${st(n)}`)}/`}const dt=[];function pt(n,e=t){let o;const r=new Set;function c(t){if(i(n,t)&&(n=t,o)){const t=!dt.length;for(const t of r)t[1](),dt.push(t,n);if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,u=t){const s=[i,u];return r.add(s),1===r.size&&(o=e(c)||t),i(n),()=>{r.delete(s),0===r.size&&(o(),o=null)}}}}function ht(n,e,o){const i=!Array.isArray(n),s=i?[n]:n,l=e.length<2;return{subscribe:pt(o,(n=>{let o=!1;const a=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=e(i?a[0]:a,n);l?n(o):d=c(o)?o:t},h=s.map(((t,n)=>u(t,(t=>{a[n]=t,f&=~(1<<n),o&&p()}),(()=>{f|=1<<n}))));return o=!0,p(),function(){r(h),d()}})).subscribe}}const $t={},mt={};function gt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const _t=function(t,n){const e=[];let o=gt(t);return{get location(){return o},listen(n){e.push(n);const r=()=>{o=gt(t),n({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=e.indexOf(n);e.splice(o,1)}},navigate(n,{state:r,replace:c=!1}={}){r={...r,key:Date.now()+""};try{c?t.history.replaceState(r,null,n):t.history.pushState(r,null,n)}catch(e){t.location[c?"replace":"assign"](n)}o=gt(t),e.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],o=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return o[n]},pushState(t,r,c){const[i,u=""]=c.split("?");n++,e.push({pathname:i,search:u}),o.push(t)},replaceState(t,r,c){const[i,u=""]=c.split("?");e[n]={pathname:i,search:u},o[n]=t}}}}());function yt(t){let n;const e=t[9].default,o=l(e,t,t[8],null);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||256&r)&&d(o,e,t,t[8],n?f(e,t[8],r,null):p(t[8]),null)},i(t){n||(W(o,t),n=!0)},o(t){Q(o,t),n=!1},d(t){o&&o.d(t)}}}function xt(t,n,e){let o,r,c,{$$slots:i={},$$scope:u}=n,{basepath:l="/"}=n,{url:a=null}=n;const f=T($t),d=T(mt),p=pt([]);s(t,p,(t=>e(6,r=t)));const h=pt(null);let $=!1;const m=f||pt(a?{pathname:a}:_t.location);s(t,m,(t=>e(5,o=t)));const g=d?d.routerBase:pt({path:l,uri:l});s(t,g,(t=>e(7,c=t)));const _=ht([g,h],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:o,uri:r}=n;return{path:o.default?e:o.path.replace(/\*.*$/,""),uri:r}}));var y;return f||(y=()=>_t.listen((t=>{m.set(t.location)})),j().$$.on_mount.push(y),L($t,m)),L(mt,{activeRoute:h,base:g,routerBase:_,registerRoute:function(t){const{path:n}=c;let{path:e}=t;if(t._path=e,t.path=ft(n,e),"undefined"==typeof window){if($)return;const n=function(t,n){return at([t],n)}(t,o.pathname);n&&(h.set(n),$=!0)}else p.update((n=>(n.push(t),n)))},unregisterRoute:function(t){p.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,l=t.basepath),"url"in t&&e(4,a=t.url),"$$scope"in t&&e(8,u=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=c;p.update((n=>(n.forEach((n=>n.path=ft(t,n._path))),n)))}if(96&t.$$.dirty){const t=at(r,o.pathname);h.set(t)}},[p,m,g,l,a,o,r,c,u,i]}class bt extends rt{constructor(t){super(),ot(this,t,xt,yt,i,{basepath:3,url:4})}}const vt=t=>({params:4&t,location:16&t}),wt=t=>({params:t[2],location:t[4]});function Et(t){let n,e,o,r;const c=[Nt,kt],i=[];function u(t,n){return null!==t[0]?0:1}return n=u(t),e=i[n]=c[n](t),{c(){e.c(),o=E()},l(t){e.l(t),o=E()},m(t,e){i[n].m(t,e),y(t,o,e),r=!0},p(t,r){let s=n;n=u(t),n===s?i[n].p(t,r):(J(),Q(i[s],1,1,(()=>{i[s]=null})),V(),e=i[n],e?e.p(t,r):(e=i[n]=c[n](t),e.c()),W(e,1),e.m(o.parentNode,o))},i(t){r||(W(e),r=!0)},o(t){Q(e),r=!1},d(t){i[n].d(t),t&&x(o)}}}function kt(t){let n;const e=t[10].default,o=l(e,t,t[9],wt);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||532&r)&&d(o,e,t,t[9],n?f(e,t[9],r,vt):p(t[9]),wt)},i(t){n||(W(o,t),n=!0)},o(t){Q(o,t),n=!1},d(t){o&&o.d(t)}}}function Nt(t){let e,o,r;const c=[{location:t[4]},t[2],t[3]];var i=t[0];function u(t){let e={};for(let t=0;t<c.length;t+=1)e=n(e,c[t]);return{props:e}}return i&&(e=new i(u())),{c(){e&&Z(e.$$.fragment),o=E()},l(t){e&&tt(e.$$.fragment,t),o=E()},m(t,n){e&&nt(e,t,n),y(t,o,n),r=!0},p(t,n){const r=28&n?function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],u=n[c];if(u){for(const t in i)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(c,[16&n&&{location:t[4]},4&n&&X(t[2]),8&n&&X(t[3])]):{};if(i!==(i=t[0])){if(e){J();const t=e;Q(t.$$.fragment,1,0,(()=>{et(t,1)})),V()}i?(e=new i(u()),Z(e.$$.fragment),W(e.$$.fragment,1),nt(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&W(e.$$.fragment,t),r=!0)},o(t){e&&Q(e.$$.fragment,t),r=!1},d(t){t&&x(o),e&&et(e,t)}}}function St(t){let n,e,o=null!==t[1]&&t[1].route===t[7]&&Et(t);return{c(){o&&o.c(),n=E()},l(t){o&&o.l(t),n=E()},m(t,r){o&&o.m(t,r),y(t,n,r),e=!0},p(t,[e]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,e),2&e&&W(o,1)):(o=Et(t),o.c(),W(o,1),o.m(n.parentNode,n)):o&&(J(),Q(o,1,1,(()=>{o=null})),V())},i(t){e||(W(o),e=!0)},o(t){Q(o),e=!1},d(t){o&&o.d(t),t&&x(n)}}}function Rt(t,e,o){let r,c,{$$slots:i={},$$scope:u}=e,{path:l=""}=e,{component:a=null}=e;const{registerRoute:f,unregisterRoute:d,activeRoute:p}=T(mt);s(t,p,(t=>o(1,r=t)));const $=T($t);s(t,$,(t=>o(4,c=t)));const m={path:l,default:""===l};let g={},_={};var y;return f(m),"undefined"!=typeof window&&(y=()=>{d(m)},j().$$.on_destroy.push(y)),t.$$set=t=>{o(13,e=n(n({},e),h(t))),"path"in t&&o(8,l=t.path),"component"in t&&o(0,a=t.component),"$$scope"in t&&o(9,u=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===m&&o(2,g=r.params);{const{path:t,component:n,...r}=e;o(3,_=r)}},e=h(e),[a,r,g,_,c,p,$,m,l,u,i]}class At extends rt{constructor(t){super(),ot(this,t,Rt,St,i,{path:8,component:0})}}function Bt(t){!function(t,n,e){const o=function(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}(t);if(!o.getElementById(n)){const t=b("style");t.id=n,t.textContent=e,function(t,n){!function(t,n){t.appendChild(n)}(t.head||t,n)}(o,t)}}(t,"svelte-1cxhk4e","h1.svelte-1cxhk4e{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}")}function Ot(n){let e,o,r,c,i;return{c(){e=b("h1"),o=b("a"),r=v("Get Youtube Key!"),c=w(),i=b("link"),this.h()},l(t){e=R(t,"H1",{class:!0});var n=N(e);o=R(n,"A",{href:!0});var u=N(o);r=A(u,"Get Youtube Key!"),u.forEach(x),n.forEach(x),c=B(t),i=R(t,"LINK",{href:!0,rel:!0}),this.h()},h(){k(o,"href","https://localhost:3000/api/v1/youtube/login"),k(e,"class","svelte-1cxhk4e"),k(i,"href","https://fonts.googleapis.com/css?family=Overpass:100,400"),k(i,"rel","stylesheet")},m(t,n){y(t,e,n),_(e,o),_(o,r),y(t,c,n),y(t,i,n)},p:t,i:t,o:t,d(t){t&&x(e),t&&x(c),t&&x(i)}}}class jt extends rt{constructor(t){super(),ot(this,t,null,Ot,i,{},Bt)}}function Lt(n){let e,o,r,c,i,u,s,l,a,f,d,p,h;return{c(){e=b("h1"),o=v("Text"),r=w(),c=b("br"),i=w(),u=b("button"),s=v("Get my channel information"),l=w(),a=b("br"),f=w(),d=v(n[0])},l(t){e=R(t,"H1",{});var p=N(e);o=A(p,"Text"),p.forEach(x),r=B(t),c=R(t,"BR",{}),i=B(t),u=R(t,"BUTTON",{});var h=N(u);s=A(h,"Get my channel information"),h.forEach(x),l=B(t),a=R(t,"BR",{}),f=B(t),d=A(t,n[0])},m(t,$){var m,g,x,b;y(t,e,$),_(e,o),y(t,r,$),y(t,c,$),y(t,i,$),y(t,u,$),_(u,s),y(t,l,$),y(t,a,$),y(t,f,$),y(t,d,$),p||(m=u,g="click",x=n[1],m.addEventListener(g,x,b),h=()=>m.removeEventListener(g,x,b),p=!0)},p(t,[n]){var e,o;1&n&&(e=d,o=""+(o=t[0]),e.wholeText!==o&&(e.data=o))},i:t,o:t,d(t){t&&x(e),t&&x(r),t&&x(c),t&&x(i),t&&x(u),t&&x(l),t&&x(a),t&&x(f),t&&x(d),p=!1,h()}}}function Tt(t,n,e){const o=new URLSearchParams(window.location.search).get("token");let r="";return[r,async function(){const t=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&access_token=${o}`),n=await t.json();console.log(n),e(0,r=JSON.stringify(n.items[0]))}]}class Ct extends rt{constructor(t){super(),ot(this,t,Tt,Lt,i,{})}}function It(t){let n,e;return n=new jt({}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,o){nt(n,t,o),e=!0},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){et(n,t)}}}function Dt(t){let n,e,o,r,c;return e=new At({props:{path:"youtube",component:Ct}}),r=new At({props:{path:"/",$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){n=b("div"),Z(e.$$.fragment),o=w(),Z(r.$$.fragment)},l(t){n=R(t,"DIV",{});var c=N(n);tt(e.$$.fragment,c),o=B(c),tt(r.$$.fragment,c),c.forEach(x)},m(t,i){y(t,n,i),nt(e,n,null),_(n,o),nt(r,n,null),c=!0},p(t,n){const e={};2&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e)},i(t){c||(W(e.$$.fragment,t),W(r.$$.fragment,t),c=!0)},o(t){Q(e.$$.fragment,t),Q(r.$$.fragment,t),c=!1},d(t){t&&x(n),et(e),et(r)}}}function Pt(t){let n,e;return n=new bt({props:{url:t[0],$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,o){nt(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.url=t[0]),2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){et(n,t)}}}function Ut(t,n,e){let{url:o=""}=n;return t.$$set=t=>{"url"in t&&e(0,o=t.url)},[o]}return new class extends rt{constructor(t){super(),ot(this,t,Ut,Pt,i,{url:0})}}({target:document.querySelector("#__snel"),hydrate:!0,props:{}}),{}})();