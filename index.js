import{a as f,S as m,i as n}from"./assets/vendor-DQiTczw4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(s){return f.get("https://pixabay.com/api/",{params:{key:"47477357-395d8a047c7c5012d361fddb9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data)}const y=new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function g(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b>${r}</p>
          <p><b>Views</b>${a}</p>
          <p><b>Comments</b>${u}</p>
          <p><b>Downloads</b>${d}</p>
        </div>
      </li>
    `).join("");c.innerHTML=t,y.refresh()}function h(){c.innerHTML=""}function b(){l.classList.add("is-visible")}function L(){l.classList.remove("is-visible")}const P=document.querySelector(".form");P.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(t===""){n.warning({message:"Please enter a search query!"});return}h(),b(),p(t).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}).catch(o=>{console.error(o),n.error({message:"An error occurred. Please try again later."})}).finally(()=>{L(),s.target.reset()})});
//# sourceMappingURL=index.js.map
