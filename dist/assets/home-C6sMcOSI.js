(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();function l(){const e=document.createElement("article");return e.setAttribute("class","restaurant"),e.innerHTML=`
        <a href="/restaurant.html?id=${this.id}">
            <div>
                <img src="${this.pictureUrl}">
                ${this.isNew?'<span class="tag-new">Nouveau</span>':""}
            </div>
            <div class="title">
                <h1>${this.name}</h1>
                <p>${this.location}</p>
            </div>
        </a>
        <div class="favorite">
            <input type="checkbox" id="favorite-${this.id}" />
            <label for="favorite-${this.id}">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-heart"></i>
            </label>
        </div>
    `,e}function u(){const e=document.createElement("form");e.setAttribute("class","menu-form"),e.setAttribute("method","GET"),e.setAttribute("action","#");for(const[i,s]of Object.entries(this.menu)){const t=document.createElement("div");t.setAttribute("class","menu-section");const n=document.createElement("h2");n.innerText=i,t.append(n);const a=s.length;for(let c=0;c<a;c++){const o=s[c],d=document.createElement("div");d.setAttribute("class","box"),d.innerHTML=`
                <input type="checkbox" id="${i+c}" name="${i}" value="${i+c}" />
                <label for="${i+c}">
                    <div class="label-title">
                        <div>
                            <h3>${o.label}</h3>
                        </div>
                        <div>${o.description}</div>
                    </div>
                    <div class="label-price">
                        <div>
                            <h3>${o.price}</h3>
                        </div>
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </label>
            `,t.append(d)}e.append(t)}const r=document.createElement("div");return r.setAttribute("class","form-submit"),r.innerHTML='<input class="button" type="submit" value="Commander">',e.append(r),e}const m=e=>{const{id:r,location:i,name:s,pictureUrl:t,menu:n}=e,a=e.new;return{id:r,location:i,name:s,pictureUrl:t,isNew:a,menu:n,createCard:l,createMenuForm:u}},f="https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/01f153c8c1099605476721b5326df0d533b283c7/restaurants.json",p=new Event("Restaurants fetched and displayed");function h(){return fetch(f).then(e=>e.json()).then(e=>e).catch(e=>e)}h().then(e=>{const r=document.getElementById("restaurants"),i=e.length;for(let s=0;s<i;s++){const t=m(e[s]);r.append(t.createCard())}document.dispatchEvent(p)});document.addEventListener("Restaurants fetched and displayed",()=>{document.getElementById("restaurants-loader").remove()});export{m as c,h as g};
