import{S as m,a as y,i as u}from"./assets/vendor-DwMeSIBD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="47477357-395d8a047c7c5012d361fddb9";async function g(t){return(await y.get("https://pixabay.com/api/",{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});document.querySelector(".gallery");document.querySelector(".loader");const n=document.querySelector(".gallery"),c=document.querySelector(".loader-wrap");let s=null;function h(t){const{webformatURL:a,largeImageURL:i,tags:l="",likes:e=0,views:r=0,comments:o=0,downloads:d=0}=t,f=String(l).slice(0,200);return`
<li class="gallery-item">
  <a class="gallery-item__link" href="${i}" title="${f}">
    <img
      class="gallery-item__img"
      src="${a}"
      alt="${f}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-item__info">
      <span class="gallery-item__info-item">❤️ ${e}</span>
      <span class="gallery-item__info-item">👁 ${r}</span>
      <span class="gallery-item__info-item">💬 ${o}</span>
      <span class="gallery-item__info-item">⬇ ${d}</span>
    </div>
  </a>
</li>`}function L(t){if(!n)return;if(!Array.isArray(t)||t.length===0){n.innerHTML="",s==null||s.refresh();return}const a=t.map(h).join("");n.innerHTML=a,s?s.refresh():s=new m(".gallery a",{captionsData:"title",captionDelay:250})}function _(){n&&(n.innerHTML="")}function w(){c&&c.classList.remove("is-hidden")}function q(){c&&c.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",t=>{t.preventDefault();const a=t.currentTarget.elements["search-text"].value.trim();if(a===""){u.warning({message:"Please enter a search query!"});return}_(),w(),g(a).then(i=>{if(i.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}).catch(i=>{console.error(i),u.error({message:"An error occurred. Please try again later."})}).finally(()=>{q(),t.target.reset()})});
//# sourceMappingURL=index.js.map
