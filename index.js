import{a as f,S as m,i as a}from"./assets/vendor-CocXUmuy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="47226916-cc5259a17256b069c75571d3a",y="https://pixabay.com/api/";async function g(s){const t={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:t})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new m(".gallery a");function b(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" />
          </a>
          <div>
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${i}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){a.error({title:"Error",message:"Search field cannot be empty!"});return}w(),L();try{const o=await g(t);if(o.hits.length===0){a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}catch(o){a.error({title:"Error",message:"Something went wrong. Try again later!"}),console.error(o)}finally{S()}});
//# sourceMappingURL=index.js.map
