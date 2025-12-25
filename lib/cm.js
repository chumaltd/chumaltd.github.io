var wt=Object.defineProperty;var Ct=Object.getOwnPropertyDescriptor;var x=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ct(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&wt(t,e,r),r};var j=globalThis,z=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),ot=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(e,t))}return t}toString(){return this.cssText}},nt=i=>new P(typeof i=="string"?i:i+"",void 0,W),m=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new P(e,i,W)},at=(i,t)=>{if(z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=j.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},F=z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return nt(e)})(i):i;var{is:Pt,defineProperty:kt,getOwnPropertyDescriptor:Ut,getOwnPropertyNames:Ot,getOwnPropertySymbols:Mt,getPrototypeOf:Rt}=Object,I=globalThis,lt=I.trustedTypes,Nt=lt?lt.emptyScript:"",Tt=I.reactiveElementPolyfillSupport,k=(i,t)=>i,U={toAttribute(i,t){switch(t){case Boolean:i=i?Nt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},B=(i,t)=>!Pt(i,t),ht={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&kt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=Ut(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let l=r?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let t=Rt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let e=this.properties,s=[...Ot(e),...Mt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(F(r))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:U).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:U;this._$Em=r;let l=n.fromAttribute(e,o.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(t,e,s,r=!1,o){if(t!==void 0){let n=this.constructor;if(r===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??B)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,l=this[r];n!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[k("elementProperties")]=new Map,f[k("finalized")]=new Map,Tt?.({ReactiveElement:f}),(I.reactiveElementVersions??=[]).push("2.1.2");var Y=globalThis,ct=i=>i,D=Y.trustedTypes,dt=D?D.createPolicy("lit-html",{createHTML:i=>i}):void 0,$t="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,yt="?"+y,Ht=`<${yt}>`,S=document,M=()=>S.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",tt=Array.isArray,Lt=i=>tt(i)||typeof i?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ut=/>/g,v=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,ft=/"/g,_t=/^(?:script|style|textarea|title)$/i,et=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=et(1),Gt=et(2),Zt=et(3),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),gt=new WeakMap,b=S.createTreeWalker(S,129);function At(i,t){if(!tt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}var qt=(i,t)=>{let e=i.length-1,s=[],r,o=t===2?"<svg>":t===3?"<math>":"",n=O;for(let l=0;l<e;l++){let a=i[l],c,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===O?p[1]==="!--"?n=pt:p[1]!==void 0?n=ut:p[2]!==void 0?(_t.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=v):p[3]!==void 0&&(n=v):n===v?p[0]===">"?(n=r??O,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?v:p[3]==='"'?ft:mt):n===ft||n===mt?n=v:n===pt||n===ut?n=O:(n=v,r=void 0);let $=n===v&&i[l+1].startsWith("/>")?" ":"";o+=n===O?a+Ht:h>=0?(s.push(c),a.slice(0,h)+$t+a.slice(h)+y+$):a+y+(h===-2?l:$)}return[At(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[c,p]=qt(t,e);if(this.el=i.createElement(c,s),b.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=b.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith($t)){let u=p[n++],$=r.getAttribute(h).split(y),q=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:q[2],strings:$,ctor:q[1]==="."?X:q[1]==="?"?G:q[1]==="@"?Z:C}),r.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),r.removeAttribute(h));if(_t.test(r.tagName)){let h=r.textContent.split(y),u=h.length-1;if(u>0){r.textContent=D?D.emptyScript:"";for(let $=0;$<u;$++)r.append(h[$],M()),b.nextNode(),a.push({type:2,index:++o});r.append(h[u],M())}}}else if(r.nodeType===8)if(r.data===yt)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){let s=S.createElement("template");return s.innerHTML=t,s}};function w(i,t,e=i,s){if(t===E)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,o=R(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=w(i,r._$AS(i,t.values),r,s)),t}var J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??S).importNode(e,!0);b.currentNode=r;let o=b.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new T(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Q(o,this,t)),this._$AV.push(c),a=s[++l]}n!==a?.index&&(o=b.nextNode(),n++)}return b.currentNode=S,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},T=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),R(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(At(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let o=new J(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new N(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new i(this.O(M()),this.O(M()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=ct(t).nextSibling;ct(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,r){let o=this.strings,n=!1;if(o===void 0)t=w(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=w(this,l[s+a],e,a),c===E&&(c=this._$AH[a]),n||=!R(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},X=class extends C{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},G=class extends C{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},Z=class extends C{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===E)return;let s=this._$AH,r=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Q=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}};var jt=Y.litHtmlPolyfillSupport;jt?.(N,T),(Y.litHtmlVersions??=[]).push("3.3.2");var vt=(i,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let o=e?.renderBefore??null;s._$litPart$=r=new T(t.insertBefore(M(),o),o,void 0,e??{})}return r._$AI(i),r};var st=globalThis,g=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};g._$litElement$=!0,g.finalized=!0,st.litElementHydrateSupport?.({LitElement:g});var zt=st.litElementPolyfillSupport;zt?.({LitElement:g});(st.litElementVersions??=[]).push("4.2.2");var rt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var It={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:B},Bt=(i=It,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,i,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,i,l),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,i,!0,l)}}throw Error("Unsupported decorator location: "+s)};function H(i){return(t,e)=>typeof e=="object"?Bt(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}var bt=m`
svg {
    fill: var(--main-font-color, black);
    vertical-align: middle;
}

a {
    display: block;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    color: var(--link-font);
    padding: 0.5em 0.75em;
    word-break: break-all;
}

ul {
       	list-style: none;
       	margin: 0;
       	padding: 0;
}

.material-symbols-outlined { vertical-align: middle; font-size: 1rem }

#l-drawer {
    overflow: auto;
    contain: strict;
    position: fixed; top: 0; left: 0;
    z-index: 80;
    width: 320px; max-width: 50%;
    height: 100%;
    padding: 3rem 1.5rem;
    background: var(--float-ui-bg, #eee);
    transition: all 0.3s ease-in-out 0s;
    transform: translateX(-100%);
}
#drawer-trigger:checked ~ #l-drawer {
  transform: translateX(0);
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.16);
}
#l-drawer-close {
  display: none;
  position: fixed; top: 0; left: 0;
  z-index: 79;
  width: 100%; height: 100%;
  background: #000;
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}
#drawer-trigger:checked ~ #l-drawer-close {
  display: block;
  opacity: 0.3;
}

#drawer-trigger { display: none }

.has-m { margin: .75rem }
.has-mw { margin-left: .75rem; margin-right: .75rem }
.has-mv { margin-top: .75rem; margin-bottom: .75rem }

md-ripple:not(:defined) {
    display: none;
}
`;var St=m`
.section{padding:3rem 1.5rem}.section+desktop{padding:3rem 3rem}.section+desktop.is-medium{padding:9rem 4.5rem}.section+desktop.is-large{padding:18rem 6rem}
`;var it=m`
.menu{font-size:1rem}.menu ul{list-style:none;margin:0;padding:0}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:var(--fgColor-default, hsl(0, 0%, 29%));cursor:pointer;padding:.5em .75em;text-decoration:none;display:flex;align-items:center}.menu-list a:hover{background-color:false;color:var(--fgColor-default, hsl(0, 0%, 21%))}.menu-list a.is-active{background-color:false;color:var(--fgColor-onEmphasis, #fff)}.menu-list li{position:relative}.menu-list li ul{border-left:1px solid;margin:.75em;padding-left:.75em}.menu-label{color:var(--fgColor-muted, hsl(0, 0%, 48%));font-size:.75em;letter-spacing:.1em;margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}
`;var Et=(i,t={})=>_`
    <div class="menu-label">${i||"INDEX"}</div>
  `,Dt=(i,t,e={})=>{let s=e.icon?_`<i class="material-symbols-outlined">${e.icon}</i>`:"";return _`
    <li><a href="${t}">${s} ${i}</a><md-ripple></md-ripple></li>
  `},xt=i=>_`
    <ul class="menu-list">
      ${i.map(t=>Dt(...t))}
    </ul>
    `,Vt=(i,t)=>i[0][1]?[Et(t),xt(i)]:i.map(e=>{if(Array.isArray(e[0]))return xt(e);let s=e.length>2?e[2]:{};return Et(e[0],s)}),A=class extends g{constructor(){super(...arguments);this.theme=!1}connectedCallback(){this.items||=window.menu_item||'[["Top", "/", { "icon": "home" }]]',super.connectedCallback()}render(){let e=Array.isArray(this.items)?this.items:JSON.parse(this.items);return _`
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
  <span>
  <input id="drawer-trigger" type="checkbox" />
  <label for="drawer-trigger" style="cursor: pointer"><slot>
  <i class="material-symbols-outlined" style="font-size:24px; color: #eee">menu</i>
  </slot></label>
  <label id="l-drawer-close" for="drawer-trigger"></label>
  <aside id="l-drawer">
    <section class="section">
      <nav class="menu">
        ${Vt(e,this.title)}
      </nav>
      <slot name="south"></slot>
      ${this.theme?_`<theme-switch></theme-switch`:null}
    </section>
  </aside></span>
  `}};A.styles=[St,it,bt],x([H()],A.prototype,"title",2),x([H()],A.prototype,"items",2),x([H({type:Boolean})],A.prototype,"theme",2),A=x([rt("cm-drawer")],A);var L=class extends g{render(){let t=localStorage.getItem("theme");return _`
    <div class="menu-label">Theme</div>
    <ul class="menu-list"><li style="padding: .5em 0.75em">
    <md-checkbox id="auto"
      ?checked=${t=="1"}
      class=${t=="1"?"checked":""}
      @change=${e=>{let s=document.querySelector("html").dataset;e.target.checked?(e.target.classList.add("checked"),s.colorMode="auto",localStorage.setItem("theme",1)):(e.target.classList.remove("checked"),s.colorMode="light",localStorage.setItem("theme",0),e.target.parentNode.querySelector("md-radio#light").checked=!0)}}
    ></md-checkbox><label for="auto"> auto</label>
    <div id="manual"
      style="padding: .75em 0"
      @change=${e=>{let s=document.querySelector("html").dataset;e.target.value=="light"?(s.colorMode="light",localStorage.setItem("theme",0)):(s.colorMode="dark",localStorage.setItem("theme",2))}}
    >
    <label><md-radio id="light"
      ?checked=${!["2"].includes(t)}
      name="manual" value="light"></md-radio> light</label>
    <label style="padding: 0 .5em"><md-radio
      ?checked=${t=="2"}
      name="manual" value="dark"></md-radio> dark</label>
    </div>
    </li></ul>
  `}};L.styles=[it,m`
      md-checkbox.checked ~ #manual { display: none; }
      ul { list-style: none; padding: 0 }
    `],L=x([rt("theme-switch")],L);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=cm.js.map
