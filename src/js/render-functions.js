"use strict";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function renderPhoto(photo) {
  const gallery = document.querySelector(".gallery");
  let markup = "";
  for (let key in photo.hits){
    markup += `<ul class="gallery-ul">
        <li class="gallery-item">
        <img class="photo-img" src="${photo.hits[key].largeImageURL}">
        <h3 class="photo-header">Likes</h3>
        <p class="photo-value">${photo.hits[key].likes}</p>
        <h3 class="photo-header">Views</h3>
        <p class="photo-value">${photo.hits[key].views}</p>
        <h3 class="photo-header">Comments</h3>
        <p class="photo-value">${photo.hits[key].comments}</p>
        <h3 class="photo-header">Downloads</h3>
        <p class="photo-value">${photo.hits[key].downloads}</p>
        <li>
      </ul>`;
  }
  gallery.insertAdjacentHTML("afterbegin", markup);
}