(()=>{"use strict";var t={178:function(t,e,a){var r=this&&this.__awaiter||function(t,e,a,r){return new(a||(a=Promise))((function(n,o){function s(t){try{i(r.next(t))}catch(t){o(t)}}function l(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(s,l)}i((r=r.apply(t,e||[])).next())}))},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(a(641)),s=n(a(81)),l=n(a(12)),i=n(a(126));e.default=class{static start(){return r(this,void 0,void 0,(function*(){document.body.addEventListener("click",s.default.dispatch);const t=yield o.default.getAll();l.default.saveToStorage("authenticData",t.default);const e=l.default.loadFromStorage("currentData")||t.default;l.default.saveToStorage("currentData",e),l.default.loadFromStorage("cart")||l.default.saveToStorage("cart",{});const a={category:[],title:"",brand:"",size:"",color:[],quantity:100,price:1e3,year:2023};l.default.saveToStorage("filters",a),i.default.drawControls(),i.default.drawCartQ(),i.default.drawCards(e,a)}))}}},659:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(a(12));e.default=class{static add(){}static showQ(){const t=n.default.loadFromStorage("cart");let e=0;for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e+=Number(t[a].inCart));const a=document.querySelector(".cart-count");null!==a&&(a.textContent=String(e))}}},126:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(a(33)),o=r(a(892)),s=r(a(354)),l=r(a(12)),i=r(a(659)),c=r(a(271));e.default=class{static drawCards(t,e){const a=document.querySelector(".content"),r=o.default.complexFilter(t,e);let l=null;null!==r&&(l=s.default.generateCards(r)),null!==a&&null!==l&&(a.innerHTML="",n.default.appendElements(a,l))}static drawCartQ(){i.default.showQ()}static drawControls(){c.default.setControls(l.default.loadFromStorage("currentData"))}static clearAllData(){const t=l.default.loadFromStorage("authenticData");localStorage.clear(),l.default.saveToStorage("authenticData",t),l.default.saveToStorage("currentData",t),l.default.saveToStorage("cart",{}),l.default.saveToStorage("filters",{category:[],title:"",brand:"",size:"",color:[],quantity:100,price:1e3,year:2023})}}},271:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(a(33));e.default=class{static setControls(t){const e=document.querySelector(".category");let a=new Set(t.map((t=>t.category)));a=new Set(a);const r=[...a].map((t=>{const e=document.createElement("button");return e.className="controls-category",e.setAttribute("data-filter",`category ${t}`),e.textContent=String(t).charAt(0).toUpperCase()+String(t).slice(1),e})),o=document.createElement("button");o.className="controls-category",o.setAttribute("data-filter","category All"),o.textContent="All",null!==e&&(n.default.appendElements(e,[o]),n.default.appendElements(e,r));const s=document.querySelector(".color");let l=new Set(t.map((t=>t.color)));l=new Set(l);const i=[...l].map((t=>{const e=document.createElement("div");return e.className="controls-color",e.setAttribute("data-filter",`color ${t}`),e.textContent=String(t),e.style.background=String(t),e})),c=document.createElement("div");c.className="controls-color",c.style.background="white",c.setAttribute("data-filter","color All"),c.textContent="All",null!==s&&(n.default.appendElements(s,[c]),n.default.appendElements(s,i));const u=document.querySelector(".price");let d=t.map((t=>t.price));d=d.sort(((t,e)=>Number(t)-Number(e)));const p=d[d.length-1],f=document.createElement("p");f.textContent=String(p),f.className="short-paragraph";const m=document.createElement("input");m.setAttribute("data-filter","price"),m.setAttribute("type","range"),m.setAttribute("min","0"),m.setAttribute("max",String(p)),m.setAttribute("step","0.05"),m.setAttribute("value",String(p)),null!==u&&n.default.appendElements(u,[f,m]);const g=document.querySelector(".year");let y=t.map((t=>t.year));y=y.sort(((t,e)=>Number(t)-Number(e)));const b=y[y.length-1],h=document.createElement("p");h.textContent=String(b),h.className="short-paragraph";const v=document.createElement("input");v.setAttribute("data-filter","year"),v.setAttribute("type","range"),v.setAttribute("min",String(y[0])),v.setAttribute("max",String(b)),v.setAttribute("step","1"),v.setAttribute("value",String(b)),null!==g&&n.default.appendElements(g,[h,v]);const S=document.querySelector(".quantity");let _=t.map((t=>t.quantity));_=_.sort(((t,e)=>Number(t)-Number(e)));const C=_[_.length-1],A=document.createElement("p");A.textContent=String(C),A.className="short-paragraph";const w=document.createElement("input");w.setAttribute("data-filter","quantity"),w.setAttribute("type","range"),w.setAttribute("min","0"),w.setAttribute("max",String(C)),w.setAttribute("step","1"),w.setAttribute("value",String(C)),null!==S&&n.default.appendElements(S,[A,w]);const M=document.querySelector(".brand"),q=document.createElement("select"),j=document.createElement("option");j.textContent="All";let E=new Set(t.map((t=>t.brand)));E=new Set(E);const x=[...E].map((t=>{const e=document.createElement("option");return e.className="456456",e.textContent=String(t),e}));null!==M&&(n.default.appendElements(q,[j]),n.default.appendElements(q,x),n.default.appendElements(M,[q]));const N=document.querySelector(".sort-by"),L=document.createElement("div");null!==N&&(L.insertAdjacentHTML("afterbegin",'\n    <p class = "short-paragraph">year</p>\n    <button>up</button>\n    <button>down</button>\n    '),n.default.appendElements(N,[L])),null!==N&&(L.insertAdjacentHTML("afterbegin",'\n    <p class = "short-paragraph">Title</p>\n    <button>up</button>\n    <button>down</button>\n    '),n.default.appendElements(N,[L]))}}},641:function(t,e,a){var r=this&&this.__createBinding||(Object.create?function(t,e,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(e,a);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,r,n)}:function(t,e,a,r){void 0===r&&(r=a),t[r]=e[a]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.prototype.hasOwnProperty.call(t,a)&&r(e,t,a);return n(e,t),e},s=this&&this.__awaiter||function(t,e,a,r){return new(a||(a=Promise))((function(n,o){function s(t){try{i(r.next(t))}catch(t){o(t)}}function l(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(s,l)}i((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static getAll(){return s(this,void 0,void 0,(function*(){return yield Promise.resolve().then((()=>o(a(195))))}))}}},33:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static appendElements(t,e){const a=new DocumentFragment;Array.isArray(e)?a.append(...e):a.append(e),t.append(a)}}},81:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(a(12)),o=r(a(126)),s=r(a(659));e.default=class{static dispatch(t){var e,a,r;let l,i,c=null,u=null;const d=n.default.loadFromStorage("filters"),p=n.default.loadFromStorage("currentData"),f=n.default.loadFromStorage("cart"),m=null===(e=document.querySelector(".category"))||void 0===e?void 0:e.children,g=null===(a=document.querySelector(".color"))||void 0===a?void 0:a.children;if(null!=t.target){switch(c=t.target,l=(null===(r=c.getAttribute("data-filter"))||void 0===r?void 0:r.split(" "))||[],l[0]){case"search":d.title=c.value;break;case"category":if("All"===l[1]){for(const t of m)t.classList.remove("active");d.category=[]}else c.classList.contains("active")?(c.classList.remove("active"),d.category=d.category.filter((t=>t!==l[1]))):(d.category.push(l[1]),c.classList.add("active"));break;case"price":d.price=c.value,c.parentNode.firstElementChild.textContent=c.value;break;case"quantity":d.quantity=c.value,c.parentNode.firstElementChild.textContent=c.value;break;case"year":d.year=c.value,c.parentNode.firstElementChild.textContent=c.value;break;case"color":if("All"===l[1]){for(const t of g)t.classList.remove("active-push");d.color=[]}else c.classList.contains("active-push")?(c.classList.remove("active-push"),d.color=d.color.filter((t=>t!==l[1]))):(d.color.push(l[1]),c.classList.add("active-push"));break;case"id":i=p.findIndex((t=>t.id===Number(l[1]))),u=p[i],u.quantity-=1,u.inCart+=1,p[i]=u,n.default.saveToStorage("currentData",p),f[l[1]]=u,n.default.saveToStorage("cart",f);break;case"clear-all":o.default.clearAllData()}n.default.saveToStorage("filters",d),o.default.drawCards(n.default.loadFromStorage("currentData"),d),s.default.showQ()}}}},892:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static complexFilter(t,e){let a=t;const{category:r=[],title:n="",color:o=[],price:s=0,year:l=0,brand:i="",size:c="",quantity:u=0}=e;return n&&(a=a.filter((t=>String(t.title).toLowerCase().includes(String(e.title).toLowerCase())))),Array.isArray(r)&&r.length&&(a=a.filter((t=>r.some((e=>t.category===e))))),Array.isArray(o)&&o.length&&(a=a.filter((t=>o.some((e=>t.color===e))))),a=a.filter((t=>Number(t.price)<=Number(s))),a=a.filter((t=>Number(t.quantity)<=Number(u))),a=a.filter((t=>Number(t.year)<=Number(l))),a}}},354:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static generateCards(t){return t.map((t=>this.createCard(t)))}static createCard(t){const e=document.createElement("div");e.className="product";const a=`\n    <div class="product-image" style="background-image: url(${t.img});"></div>\n    <h3 class="product-title">${t.title}</h3>\n    <div class="product-values">\n      <h2 class="product-brand">${t.brand}</h3>\n      <h2 class="product-price">$${t.price}</h3>\n    </div>\n    <div class="product-info">\n      <h2 class="product-year">${t.year}</h3>\n      <h2 class="product-quantity">${t.quantity} items</h3>\n    </div>\n    <button class="product-button" data-filter="id ${t.id}">Add to Cart</button>\n    `;return e.insertAdjacentHTML("afterbegin",a),e}}},12:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static saveToStorage(t,e){localStorage.setItem(t,JSON.stringify(e))}static loadFromStorage(t){const e=localStorage.getItem(t);return null===e?e:JSON.parse(e)}static clearAll(){null!==document.querySelector(".clear-all")&&localStorage.clear()}}},607:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),r(a(178)).default.start()},195:t=>{t.exports=JSON.parse('[{"id":1,"category":"dress","title":"Checked Short Dress","year":2020,"brand":"H&M","size":"L","color":"gray","quantity":5,"price":14.55,"img":"./assets/img/shop/dress/1.jpg","inCart":0},{"id":2,"category":"dress","title":"Light Blue Denim Dress","year":2021,"brand":"H&M","size":"L","color":"blue","quantity":10,"price":19.55,"img":"./assets/img/shop/dress/2.jpg","inCart":0},{"id":3,"category":"dress","title":"Pink Printed Dress","year":2022,"brand":"Zara","size":"L","color":"pink","quantity":10,"price":39.95,"img":"./assets/img/shop/dress/3.jpg","inCart":0},{"id":10,"category":"tshirts","title":"Blue Round-Neck","year":2020,"brand":"H&M","size":"L","color":"blue","quantity":10,"price":9.55,"img":"./assets/img/shop/tshirts/1.jpg","inCart":0},{"id":11,"category":"tshirts","title":"Black Polo Tshirt","year":2020,"brand":"H&M","size":"L","color":"black","quantity":10,"price":11.95,"img":"./assets/img/shop/tshirts/4.jpg","inCart":0},{"id":21,"category":"pants","title":"Slim Fit Chinos","year":2021,"brand":"H&M","size":"L","color":"beige","quantity":10,"price":39.55,"img":"./assets/img/shop/pants/1.jpg","inCart":0},{"id":22,"category":"pants","title":"Green Trousers","year":2020,"brand":"H&M","size":"L","color":"green","quantity":10,"price":21.95,"img":"./assets/img/shop/pants/5.jpg","inCart":0},{"id":31,"category":"shoes","title":"Dark Brown Boots","year":2022,"brand":"H&M","size":"L","color":"brown","quantity":10,"price":49.55,"img":"./assets/img/shop/shoes/1.jpg","inCart":0},{"id":32,"category":"shoes","title":"Men Grey Casual","year":2020,"brand":"H&M","size":"L","color":"gray","quantity":10,"price":39.95,"img":"./assets/img/shop/shoes/2.jpg","inCart":0},{"id":41,"category":"sunglasses","title":"Unisex Sunglasses","year":2020,"brand":"H&M","size":"L","color":"gray","quantity":10,"price":15.55,"img":"./assets/img/shop/sunglasses/1.jpg","inCart":0},{"id":42,"category":"sunglasses","title":"Men Aviator","year":2021,"brand":"H&M","size":"L","color":"brown","quantity":10,"price":17.95,"img":"./assets/img/shop/sunglasses/2.jpg","inCart":0},{"id":51,"category":"watches","title":"Silver Chrome Watch","year":2019,"brand":"H&M","size":"L","color":"brown","quantity":2,"price":125.95,"img":"./assets/img/shop/watches/1.jpg","inCart":0}]')}},e={};!function a(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,a),o.exports}(607)})();