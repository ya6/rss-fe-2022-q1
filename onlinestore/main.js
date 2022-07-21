(()=>{"use strict";var t={178:function(t,e,r){var a=this&&this.__awaiter||function(t,e,r,a){return new(r||(r=Promise))((function(o,l){function n(t){try{i(a.next(t))}catch(t){l(t)}}function s(t){try{i(a.throw(t))}catch(t){l(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,s)}i((a=a.apply(t,e||[])).next())}))},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=o(r(641)),n=o(r(81)),s=o(r(12)),i=o(r(126));e.default=class{static start(){return a(this,void 0,void 0,(function*(){document.body.addEventListener("click",n.default.dispatch);const t=yield l.default.getAll();s.default.saveToStorage("authenticData",t.default);const e=s.default.loadFromStorage("currentData")||t.default;if(s.default.saveToStorage("currentData",e),s.default.loadFromStorage("cart")||s.default.saveToStorage("cart",{}),!s.default.loadFromStorage("sort")){const t={titleSort:"",yearSort:""};s.default.saveToStorage("sort",t)}if(!s.default.loadFromStorage("filters")){const t={category:[],title:"",brand:"",size:"",color:[],quantity:10,price:125.95,year:2022};s.default.saveToStorage("filters",t)}i.default.drawControls(),i.default.restoreFilters(),i.default.drawCartQ(),i.default.drawCards(e,s.default.loadFromStorage("filters"),s.default.loadFromStorage("sort"))}))}}},659:function(t,e,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=a(r(12));e.default=class{static add(){}static showQ(){const t=o.default.loadFromStorage("cart");let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e+=Number(t[r].inCart));const r=document.querySelector(".cart-count");null!==r&&(r.textContent=String(e))}}},126:function(t,e,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=a(r(33)),l=a(r(892)),n=a(r(354)),s=a(r(12)),i=a(r(659)),c=a(r(271));class u{static drawCards(t,e,r){const a=document.querySelector(".content"),s=l.default.complexFilter(t,e,r);let i,c=null;0===s.length&&(i=document.createElement("h2"),i.className="centered",i.textContent="Извините, совпадений не обнаружено",c=[i]),s.length>0&&(c=n.default.generateCards(s)),null!==a&&null!==c&&(a.innerHTML="",o.default.appendElements(a,c))}static drawCartQ(){i.default.showQ()}static drawControls(){c.default.setControls(s.default.loadFromStorage("currentData"))}static clearAllData(){var t,e;const r=s.default.loadFromStorage("authenticData");s.default.saveToStorage("currentData",r),s.default.saveToStorage("cart",{}),s.default.saveToStorage("sort",{titleSort:"",yearSort:""});const a=null===(t=document.querySelector(".category"))||void 0===t?void 0:t.children;for(const t of a)t.classList.remove("active");const o=null===(e=document.querySelector(".color"))||void 0===e?void 0:e.children;for(const t of o)t.classList.remove("active-push");const l=document.querySelector(".price"),n=null==l?void 0:l.lastElementChild,i=null==l?void 0:l.firstElementChild;null!==l&&i&&(n.value="1000",i.textContent=n.value);const c=document.querySelector(".year"),d=null==c?void 0:c.lastElementChild,m=null==c?void 0:c.firstElementChild;null!==c&&m&&(d.value="2022",m.textContent=d.value);const f=document.querySelector(".quantity"),p=null==f?void 0:f.lastElementChild,g=null==f?void 0:f.firstElementChild;null!==f&&g&&(p.value="100",g.textContent=p.value);const v=document.querySelector(".select");v&&(v.value="");const y=document.querySelector(".sort-wrap");for(const t of y.children)t.classList.remove("active-push");u.clearFilters()}static clearFilters(){var t,e;const r=null===(t=document.querySelector(".category"))||void 0===t?void 0:t.children;for(const t of r)t.classList.remove("active");const a=null===(e=document.querySelector(".color"))||void 0===e?void 0:e.children;for(const t of a)t.classList.remove("active-push");const o=document.querySelector(".price"),l=null==o?void 0:o.lastElementChild,n=null==o?void 0:o.firstElementChild;null!==o&&n&&(l.value="1000",n.textContent=l.value);const i=document.querySelector(".year"),c=null==i?void 0:i.lastElementChild,u=null==i?void 0:i.firstElementChild;null!==i&&u&&(c.value="2022",u.textContent=c.value);const d=document.querySelector(".quantity"),m=null==d?void 0:d.lastElementChild,f=null==d?void 0:d.firstElementChild;null!==d&&f&&(m.value="100",f.textContent=m.value),s.default.saveToStorage("filters",{category:[],title:"",brand:"",size:"",color:[],quantity:10,price:125.95,year:2022})}static restoreFilters(){var t,e,r,a;const o=s.default.loadFromStorage("filters"),l=s.default.loadFromStorage("sort"),n=null===(t=document.querySelector(".category"))||void 0===t?void 0:t.children;for(const t of n)o.category.includes(null===(e=t.getAttribute("data-filter"))||void 0===e?void 0:e.split(" ")[1])&&t.classList.add("active");const i=null===(r=document.querySelector(".color"))||void 0===r?void 0:r.children;for(const t of i)o.color.includes(null===(a=t.getAttribute("data-filter"))||void 0===a?void 0:a.split(" ")[1])&&t.classList.add("active-push");const c=document.querySelector(".price"),u=null==c?void 0:c.firstElementChild,d=null==c?void 0:c.lastElementChild;u&&(u.textContent=o.price),d&&(d.value=o.price);const m=document.querySelector(".quantity"),f=null==m?void 0:m.firstElementChild,p=null==m?void 0:m.lastElementChild;f&&(f.textContent=o.quantity),p&&(p.value=o.quantity);const g=document.querySelector(".year"),v=null==g?void 0:g.firstElementChild,y=null==g?void 0:g.lastElementChild;v&&(v.textContent=o.year),y&&(y.value=o.year);const h=document.querySelector(".select");h&&(h.value=o.brand);const b=document.querySelector(".sort-wrap");for(const t of b.children)("up"===l.titleSort&&"sort upTitle"===t.getAttribute("data-filter")||"down"===l.titleSort&&"sort downTitle"===t.getAttribute("data-filter")||"down"===l.yearSort&&"sort downYear"===t.getAttribute("data-filter")||"up"===l.yearSort&&"sort upYear"===t.getAttribute("data-filter"))&&t.classList.add("active-push")}}e.default=u},271:function(t,e,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=a(r(33));e.default=class{static setControls(t){const e=document.querySelector(".category");let r=new Set(t.map((t=>t.category)));r=new Set(r);const a=[...r].map((t=>{const e=document.createElement("button");return e.className="controls-category",e.setAttribute("data-filter",`category ${t}`),e.textContent=String(t).charAt(0).toUpperCase()+String(t).slice(1),e})),l=document.createElement("button");l.className="controls-category",l.setAttribute("data-filter","category All"),l.textContent="All",null!==e&&(o.default.appendElements(e,[l]),o.default.appendElements(e,a));const n=document.querySelector(".color");let s=new Set(t.map((t=>t.color)));s=new Set(s);const i=[...s].map((t=>{const e=document.createElement("div");return e.className="controls-color",e.setAttribute("data-filter",`color ${t}`),e.textContent=String(t),e.style.background=String(t),e})),c=document.createElement("div");c.className="controls-color",c.style.background="white",c.setAttribute("data-filter","color All"),c.textContent="All",null!==n&&(o.default.appendElements(n,[c]),o.default.appendElements(n,i));const u=document.querySelector(".price");let d=t.map((t=>t.price));d=d.sort(((t,e)=>Number(t)-Number(e)));const m=d[d.length-1],f=document.createElement("p");f.textContent=String(m),f.className="short-paragraph";const p=document.createElement("input");p.setAttribute("data-filter","price"),p.setAttribute("type","range"),p.setAttribute("min","0"),p.setAttribute("max",String(m)),p.setAttribute("step","0.05"),p.setAttribute("value",String(m)),null!==u&&o.default.appendElements(u,[f,p]);const g=document.querySelector(".year");let v=t.map((t=>t.year));v=v.sort(((t,e)=>Number(t)-Number(e)));const y=v[v.length-1],h=document.createElement("p");h.textContent=String(y),h.className="short-paragraph";const b=document.createElement("input");b.setAttribute("data-filter","year"),b.setAttribute("type","range"),b.setAttribute("min",String(v[0])),b.setAttribute("max",String(y)),b.setAttribute("step","1"),b.setAttribute("value",String(y)),null!==g&&o.default.appendElements(g,[h,b]);const S=document.querySelector(".quantity");let C=t.map((t=>t.quantity));C=C.sort(((t,e)=>Number(t)-Number(e)));const _=C[C.length-1],q=document.createElement("p");q.textContent=String(_),q.className="short-paragraph";const A=document.createElement("input");A.setAttribute("data-filter","quantity"),A.setAttribute("type","range"),A.setAttribute("min","0"),A.setAttribute("max",String(_)),A.setAttribute("step","1"),A.setAttribute("value",String(_)),null!==S&&o.default.appendElements(S,[q,A]);const E=document.querySelector(".brand"),w=document.createElement("select"),x=document.createElement("option");w.className="select",x.textContent="All",x.setAttribute("data-filter","brand All");let L=new Set(t.map((t=>t.brand)));L=new Set(L);const M=[...L].map((t=>{const e=document.createElement("option");return e.setAttribute("data-filter",`brand ${t}`),e.textContent=String(t),e}));null!==E&&(o.default.appendElements(w,[x]),o.default.appendElements(w,M),o.default.appendElements(E,[w]));const N=document.querySelector(".sort-by"),j=document.createElement("div");j.className="sort-wrap",null!==N&&(j.insertAdjacentHTML("afterbegin",'\n    <p class = "short-paragraph">Year</p>\n    <button data-filter = "sort upYear">up</button>\n    <button data-filter = "sort downYear">down</button>\n    '),o.default.appendElements(N,[j]),j.insertAdjacentHTML("afterbegin",'\n    <p class = "short-paragraph">Title</p>\n    <button data-filter = "sort upTitle">up</button>\n    <button data-filter = "sort downTitle">down</button>\n    '),o.default.appendElements(N,[j]))}}},641:function(t,e,r){var a=this&&this.__createBinding||(Object.create?function(t,e,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,a,o)}:function(t,e,r,a){void 0===a&&(a=r),t[a]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),l=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&a(e,t,r);return o(e,t),e},n=this&&this.__awaiter||function(t,e,r,a){return new(r||(r=Promise))((function(o,l){function n(t){try{i(a.next(t))}catch(t){l(t)}}function s(t){try{i(a.throw(t))}catch(t){l(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,s)}i((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static getAll(){return n(this,void 0,void 0,(function*(){return yield Promise.resolve().then((()=>l(r(195))))}))}}},33:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static appendElements(t,e){const r=new DocumentFragment;Array.isArray(e)?r.append(...e):r.append(e),t.append(r)}}},81:function(t,e,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=a(r(12)),l=a(r(126)),n=a(r(659));e.default=class{static dispatch(t){var e,r,a,s,i,c,u;let d,m,f=null,p=null,g=!1,v=0;const y=o.default.loadFromStorage("filters"),h=o.default.loadFromStorage("sort"),b=o.default.loadFromStorage("currentData"),S=o.default.loadFromStorage("cart"),C=null===(e=document.querySelector(".category"))||void 0===e?void 0:e.children,_=null===(r=document.querySelector(".color"))||void 0===r?void 0:r.children;if(null!=t.target){f=t.target,"SELECT"===f.tagName&&(f=t.target,"All"===f.value?y.brand="":y.brand=f.value);const e=document.querySelector("#search");switch(f.classList.contains("button-clear")&&(e.value=""),d=(null===(a=f.getAttribute("data-filter"))||void 0===a?void 0:a.split(" "))||[],d[0]){case"search":y.title=f.value,e.value=f.value||"";break;case"category":if("All"===d[1]){for(const t of C)t.classList.remove("active");y.category=[]}else f.classList.contains("active")?(f.classList.remove("active"),y.category=y.category.filter((t=>t!==d[1]))):(y.category.push(d[1]),f.classList.add("active"));break;case"price":y.price=f.value,f.parentNode.firstElementChild.textContent=f.value;break;case"quantity":y.quantity=f.value,f.parentNode.firstElementChild.textContent=f.value;break;case"year":y.year=f.value,f.parentNode.firstElementChild.textContent=f.value;break;case"brand":"All"===d[1]?y.brand="":y.brand=d[1];break;case"color":if("All"===d[1]){for(const t of _)t.classList.remove("active-push");y.color=[]}else f.classList.contains("active-push")?(f.classList.remove("active-push"),y.color=y.color.filter((t=>t!==d[1]))):(y.color.push(d[1]),f.classList.add("active-push"));break;case"sort":"upTitle"===d[1]&&(h.titleSort="up",f.classList.add("active-push"),null===(s=f.nextElementSibling)||void 0===s||s.classList.remove("active-push")),"downTitle"===d[1]&&(h.titleSort="down",f.classList.add("active-push"),null===(i=f.previousElementSibling)||void 0===i||i.classList.remove("active-push")),"upYear"===d[1]&&(h.yearSort="up",f.classList.add("active-push"),null===(c=f.nextElementSibling)||void 0===c||c.classList.remove("active-push")),"downYear"===d[1]&&(h.yearSort="down",f.classList.add("active-push"),null===(u=f.previousElementSibling)||void 0===u||u.classList.remove("active-push"));break;case"id":for(const t in S)Object.prototype.hasOwnProperty.call(S,t)&&(v+=Number(S[t].inCart));20===v?alert("Извините, все слоты заполнены"):(m=b.findIndex((t=>t.id===Number(d[1]))),p=b[m],p.quantity>0&&(p.quantity-=1,p.inCart+=1),b[m]=p,o.default.saveToStorage("currentData",b),S[d[1]]=p,o.default.saveToStorage("cart",S));break;case"del":m=b.findIndex((t=>t.id===Number(d[1]))),p=b[m],p.inCart>0&&(p.quantity+=1,p.inCart-=1),b[m]=p,o.default.saveToStorage("currentData",b),S[d[1]]=p,o.default.saveToStorage("cart",S);break;case"clear-filters":g=!0,l.default.clearFilters();break;case"clear-all":g=!0,l.default.clearAllData()}g||(o.default.saveToStorage("filters",y),o.default.saveToStorage("sort",h)),l.default.drawCards(o.default.loadFromStorage("currentData"),o.default.loadFromStorage("filters"),o.default.loadFromStorage("sort")),n.default.showQ()}}}},892:function(t,e,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=a(r(12));e.default=class{static complexFilter(t,e,r){let a=o.default.loadFromStorage("currentData");const{category:l=[],title:n="",color:s=[],price:i=0,year:c=0,brand:u="",size:d="",quantity:m=0}=e,{titleSort:f="",yearSort:p=""}=r;return n&&(a=a.filter((t=>String(t.title).toLowerCase().includes(String(e.title).toLowerCase())))),Array.isArray(l)&&l.length&&(a=a.filter((t=>l.some((e=>t.category===e))))),Array.isArray(s)&&s.length&&(a=a.filter((t=>s.some((e=>t.color===e))))),a=a.filter((t=>Number(t.price)<=Number(i))),a=a.filter((t=>Number(t.quantity)<=Number(m))),a=a.filter((t=>Number(t.year)<=Number(c))),u&&(a=a.filter((t=>t.brand===u))),f&&(a="up"===f?a.sort(((t,e)=>String(t.title).charCodeAt(0)-String(e.title).charCodeAt(0))):a.sort(((t,e)=>String(e.title).charCodeAt(0)-String(t.title).charCodeAt(0)))),p&&(a="up"===p?a.sort(((t,e)=>Number(e.year)-Number(t.year))):a.sort(((t,e)=>Number(t.year)-Number(e.year)))),a}}},354:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static generateCards(t){return t.map((t=>this.createCard(t)))}static createCard(t){const e=document.createElement("div");e.className="product";let r=`\n    <div class="product-image" style="background-image: url(${t.img});"></div>\n    <h3 class="product-title">${t.title}</h3>\n    <div class="product-values">\n      <h2 class="product-brand">${t.brand}</h3>\n      <h2 class="product-price">$${t.price}</h3>\n    </div>\n    <div class="product-info">\n      <h2 class="product-year">${t.year}</h3>\n      <h2 class="product-quantity">${t.quantity} items</h3>\n      <h2 class="product-color" style="background: ${t.color}"></h3>\n    </div>\n    <button class="product-button" data-filter="id ${t.id}">Add to Cart</button>\n    `;return t.inCart>0&&(r+=`<button class="del-button" data-filter="del ${t.id}">Del from Cart</button>`),e.insertAdjacentHTML("afterbegin",r),e}}},12:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static saveToStorage(t,e){localStorage.setItem(t,JSON.stringify(e))}static loadFromStorage(t){const e=localStorage.getItem(t);return null===e?e:JSON.parse(e)}}},607:function(t,e,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),a(r(178)).default.start()},195:t=>{t.exports=JSON.parse('[{"id":1,"category":"dress","title":"Checked Short Dress","year":2020,"brand":"H&M","size":"S","color":"gray","quantity":5,"price":14.55,"img":"./assets/img/shop/dress/1.jpg","inCart":0},{"id":2,"category":"dress","title":"Light Blue Denim Dress","year":2021,"brand":"H&M","size":"S","color":"blue","quantity":10,"price":19.55,"img":"./assets/img/shop/dress/2.jpg","inCart":0},{"id":3,"category":"dress","title":"Pink Printed Dress","year":2022,"brand":"Zara","size":"M","color":"pink","quantity":10,"price":39.95,"img":"./assets/img/shop/dress/3.jpg","inCart":0},{"id":11,"category":"tshirts","title":"Black Polo Tshirt","year":2022,"brand":"Polo","size":"M","color":"black","quantity":10,"price":11.95,"img":"./assets/img/shop/tshirts/4.jpg","inCart":0},{"id":10,"category":"tshirts","title":"Blue Round-Neck","year":2021,"brand":"H&M","size":"L","color":"blue","quantity":10,"price":9.55,"img":"./assets/img/shop/tshirts/1.jpg","inCart":0},{"id":21,"category":"pants","title":"Slim Fit Chinos","year":2021,"brand":"H&M","size":"L","color":"beige","quantity":10,"price":39.55,"img":"./assets/img/shop/pants/1.jpg","inCart":0},{"id":22,"category":"pants","title":"Green Trousers","year":2020,"brand":"H&M","size":"L","color":"green","quantity":10,"price":21.95,"img":"./assets/img/shop/pants/5.jpg","inCart":0},{"id":31,"category":"shoes","title":"Dark Brown Boots","year":2022,"brand":"H&M","size":"M","color":"brown","quantity":10,"price":49.55,"img":"./assets/img/shop/shoes/1.jpg","inCart":0},{"id":32,"category":"shoes","title":"Men Grey Casual","year":2021,"brand":"H&M","size":"L","color":"gray","quantity":10,"price":39.95,"img":"./assets/img/shop/shoes/2.jpg","inCart":0},{"id":41,"category":"sunglasses","title":"Unisex Sunglasses","year":2020,"brand":"H&M","size":"L","color":"gray","quantity":10,"price":15.55,"img":"./assets/img/shop/sunglasses/1.jpg","inCart":0},{"id":42,"category":"sunglasses","title":"Men Aviator","year":2021,"brand":"H&M","size":"L","color":"brown","quantity":10,"price":17.95,"img":"./assets/img/shop/sunglasses/2.jpg","inCart":0},{"id":51,"category":"watches","title":"Silver Chrome Watch","year":2019,"brand":"Casio","size":"L","color":"gray","quantity":2,"price":125.95,"img":"./assets/img/shop/watches/1.jpg","inCart":0}]')}},e={};!function r(a){var o=e[a];if(void 0!==o)return o.exports;var l=e[a]={exports:{}};return t[a].call(l.exports,l,l.exports,r),l.exports}(607)})();