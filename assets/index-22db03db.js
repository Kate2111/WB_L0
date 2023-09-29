(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();const C=[{img_link:"/WB_L0/img/t-shirt.png",subtitle:"t-shirt",title:"Футболка UZcotton мужская",color:"белый",size:56,price:"261",old_price:"525",stoke_title:"OOO Вайлдберриз",count_order:2,balance_stoke:2},{img_link:"/WB_L0/img/iphone.png",subtitle:"iphone",title:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",color:"прозрачный",size:null,price:"21023",old_price:"23014",stoke_title:"OOO Мегапрофстиль",count_order:100,balance_stoke:1e3},{img_link:"/WB_L0/img/book.png",subtitle:"book",title:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber‑Castell',color:null,size:56,price:"247",old_price:"475",stoke_title:"OOO Вайлдберриз",count_order:1,balance_stoke:2}],w=()=>{document.querySelectorAll("[data-balance]").forEach(s=>{parseInt(s.getAttribute("data-balance"))>5&&s.classList.add("hide")})},S=()=>{document.querySelectorAll("[data-price]").forEach(s=>{s.getAttribute("data-price").length>6&&(s.classList.remove("title__20"),s.classList.add("title__16-bold"))})},f=()=>{document.querySelectorAll(".count__favorite").forEach(s=>{const t=s.querySelector("svg");s.addEventListener("click",()=>{t.classList.contains("active-like")?t.classList.remove("active-like"):(alert("Товар добавлен в избранное"),t.classList.add("active-like"))})})},g=()=>{document.querySelectorAll(".count__remove").forEach(s=>{s.addEventListener("click",()=>{s.closest(".basket__item").remove()})})},q=c=>{class s{constructor(i,e,l,n,o,a,r,d,u,p,h){this.imgLink=i,this.subtitle=e,this.title=l,this.color=n,this.sixe=o,this.price=a,this.old_price=r,this.stoke_title=d,this.balance_stoke=u,this.count=p,this.parent=document.querySelector(h)}getTotalPrice(i){return parseInt(i)*parseInt(this.count)}render(){const i=document.createElement("div");i.classList.add("basket__item"),i.innerHTML=`
                <div class="basket__item-inner inner-1">
                    <div class="box">
                        <div class="basket__item-btn">
                            <div class="basket__wrapperCheckbox">
                                <input class="basket__input" id="${this.subtitle}" type="checkbox" checked="checked">
                                <label class="basket__label" for="${this.subtitle}"></label>
                            </div>
                        </div>
                        
                        <a class="box__link" href="/">
                            <img class="box__image" src=${this.imgLink} alt=${this.subtitle}>
                        </a>
                    </div>
                    
                    <div class="info">
                        <div class="mob__total">
                            <p class="title__16-bold" data-price=${this.getTotalPrice(this.price)}>${this.getTotalPrice(this.price)} <span class="title__16-bold">сом</span></p>
                            <p class="total-old title__13">${this.getTotalPrice(this.old_price)} сом</p>
                        </div>
                        <p class="title info__title">${this.title}</p>
                        <div class="info__properties">
                            <p class="title__13">Цвет: ${this.color}</p>
                            <p class="title__13">Размер: ${this.size}</p>
                        </div>
                    <div class="info__stock">
                            <p class="color-grey title__13">Коледино WB</p>
                            <p class="color-grey title__13">
                                ${this.stoke_title}
                                <img src="./src/icons/item-cart/info.svg" alt="info">
                            </p>
                    </div>
                    </div>
                </div>
                
                <div class="basket__item-inner inner-2">
                    <div class="count">
                        <div class="count__item">
                            <button data-direction="minus">
                                <img src="/WB_L0/icons/item-cart/minus.svg" alt="minus">
                            </button>
                            <input data-limit=${this.balance_stoke} value="${this.count}">
                            <button data-direction="plus">
                                <img src="/WB_L0/icons/item-cart/plus.svg" alt="plus">
                            </button>
                        </div>
                        <p class="count-red title__13" data-balance=${this.balance_stoke}>Осталось ${this.balance_stoke} шт.</p>
                        <div class="count__butn-wrap">
                            <button class="count__favorite">
                                <svg class="count__favorite-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/>
                                </svg>  
                            </button>
                            <button class="count__remove">
                                <svg class="count__remove-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
                                </svg>  
                            </button>
                        </div>
                    </div>

                    <div class="total">
                        <p class="title__20" data-price=${this.price}>
                            <span class="total__item-new">${this.getTotalPrice(this.price)}</span>
                            <span class="title__16-bold">сом</span>
                        </p>
                        <p class="total-old title__13" data-sale=${this.old_price}>
                            <span  class="total__item-old">${this.getTotalPrice(this.old_price)}</span> сом
                        </p>
                    </div>
                </div>
            `,this.parent.append(i)}}c.forEach(t=>{new s(t.img_link,t.subtitle,t.title,t.color,t.size,t.price,t.old_price,t.stoke_title,t.balance_stoke,t.count_order,".basket .basket__list").render()}),w(),S(),f(),g()},x=c=>{class s{constructor(i,e,l,n,o,a){this.imgLink=i,this.subtitle=e,this.title=l,this.color=n,this.size=o,this.parent=document.querySelector(a)}render(){const i=document.createElement("div");i.classList.add("basket__item"),i.innerHTML=`
                    <div class="basket__item-inner inner-1">
                        <div class="box">
                            <a class="box__link" href="/">
                            <img class="box-absence" src=${this.imgLink} alt=${this.subtitle}>
                            </a>
                        </div>
                        
                        <div class="info">
                            <p class="color-grey title info__title">${this.title}</p>
                            <div class="info__properties">
                                <p class="color-grey title__13">Цвет: ${this.color}</p>
                                <p class="color-grey title__13">Размер: ${this.size}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="basket__item-inner inner-2">
                        <div class="count">
                            <div class="count__butn-wrap">
                            <button class="count__favorite">
                                <svg class="count__favorite-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/>
                                </svg>  
                            </button>
                            <button class="count__remove">
                                <svg class="count__remove-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
                                </svg>  
                            </button>
                            </div>
                        </div>

                        <div class="total">
                        </div>
                    </div>
            `,this.parent.append(i)}}c.forEach(t=>{new s(t.img_link,t.subtitle,t.title,t.color,t.size,".absence .basket__list").render()}),f(),g()},E=(c,s)=>{const t=document.querySelectorAll(c),i=document.querySelectorAll(s);t.forEach((e,l)=>{e.addEventListener("click",function(){i[l].classList.toggle("hide");const n=e.querySelector("img");i[l].classList.contains("hide")?n.src="./src/icons/open.svg":n.src="./src/icons/close.svg"})})},v=(c,s,t)=>{const i=document.querySelector(c),e=document.querySelectorAll(s);let l=0;e.forEach(n=>{const o=parseFloat(n.textContent);l+=o}),i.textContent=l},k=(c,s,t)=>{const i=document.querySelector(c),e=document.querySelector(s),l=document.querySelector(t);l.textContent=parseInt(i.textContent)-parseInt(e.textContent)},$=()=>{const c=document.querySelectorAll(".count__item"),s=document.querySelectorAll(".total-count"),t=document.querySelectorAll(".total [data-sale]"),i=document.querySelectorAll(".total [data-price]");c.forEach((o,a)=>{const r=o.querySelector("input"),d=parseInt(r.getAttribute("data-limit")),u=o.querySelector('button[data-direction="plus"]'),p=o.querySelector('button[data-direction="minus"]'),h=parseInt(i[a].getAttribute("data-price")),y=parseInt(t[a].getAttribute("data-sale"));let _=parseInt(r.value);u.addEventListener("click",()=>{m(1)}),p.addEventListener("click",()=>{m(-1)}),e(_,d,u,p),n();function m(L){const b=_+L;b>=1&&b<=d&&(_=b,r.value=_,l(a,h,y,_),n()),e(_,d,u,p),v("#total_price",".total [data-price]"),v("#old_price",".total [data-sale]"),k("#total_price","#old_price","#sale")}});function e(o,a,r,d){o===a?r.disabled=!0:r.disabled=!1,o===1?d.disabled=!0:d.disabled=!1}function l(o,a,r,d){const u=document.querySelectorAll(".total__item-new"),p=document.querySelectorAll(".total__item-old");u[o].textContent=a*d,p[o].textContent=r*d}function n(){const o=document.querySelectorAll(".count__item input");let a=0;o.forEach(r=>{a+=parseInt(r.value)}),s.forEach(r=>r.textContent=a)}};document.addEventListener("DOMContentLoaded",function(){q(C),x(C),E(".button__close",".basket__list"),$(),v("#total_price",".total [data-price]"),v("#old_price",".total [data-sale]"),k("#total_price","#old_price","#sale")});
