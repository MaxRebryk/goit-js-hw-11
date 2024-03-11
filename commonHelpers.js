import{S as f,i as n}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="42731864-a3c3d068e2b72bbf390461e5a";function p(o){const s={method:"GET"},t=new URL("https://pixabay.com/api/"),i=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return t.search=i.toString(),fetch(t.toString(),s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{throw new Error(e.message)})}const u=document.querySelector(".gallery-ul");function m(o){let s="";for(let t in o.hits)s+=`
        <li class="gallery-item">
        <a href="${o.hits[t].largeImageURL}"><img class="photo-img" src="${o.hits[t].largeImageURL}"></a>
        <ul class="gallery-info">
        <li class="info-item"><h3 class="photo-header">Likes</h3>
        <p class="photo-value">${o.hits[t].likes}</p></li>
        <li class="info-item"><h3 class="photo-header">Views</h3>
       <p class="photo-value">${o.hits[t].views}</p></li>
        <li class="info-item"><h3 class="photo-header">Comments</h3>
        <p class="photo-value">${o.hits[t].comments}</p></li>
        <li class="info-item"><h3 class="photo-header">Downloads</h3>
        <p class="photo-value">${o.hits[t].downloads}</p></li>
        </ul>
        <li>`;u.insertAdjacentHTML("afterbegin",s)}function g(){u.innerHTML=""}const a=document.querySelector(".search-input"),y=document.querySelector(".search-btn"),h=document.querySelector(".loader");let L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function w(){h.style.display="flex"}function c(){h.style.display="none"}y.addEventListener("click",o=>{o.preventDefault(),g(),w();const s=a.value;a.value===""?n.show({title:"Warning",message:"search input is empty!",position:"topLeft",backgroundColor:"yellow"}):(p(s).then(t=>{c(),t.hits.length>0?(m(t),L.refresh()):n.show({title:"Error",message:"Image not found",position:"topLeft",backgroundColor:"red"})}).catch(t=>{c(),console.log(t)}),a.value="")});
//# sourceMappingURL=commonHelpers.js.map
