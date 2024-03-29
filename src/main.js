"use strict";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import * as  httpFunc from  "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const loader = document.querySelector(".loader");
let gallerys = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250,});

function showLoader() {
    loader.style.display = "flex";
}

function hideLoader() {
    loader.style.display = "none";
}
searchButton.addEventListener("click", (event) =>{
    event.preventDefault();
    render.clearGalleryHtml();
    const searchWord =  searchInput.value;
    if(searchInput.value === ""){
        iziToast.show({
            title: 'Warning',
            message: 'search input is empty!',
            position: 'topLeft',
            backgroundColor: "yellow",
        });
        
    }
    else{
        showLoader();
        httpFunc.fetchImages(searchWord)
        .then((images) => {
            hideLoader();
            if (images.hits.length > 0) {
              render.renderPhoto(images);
              gallerys.refresh();
            } else {
              iziToast.show({
                title: 'Error',
                message: 'Image not found',
                position: 'topLeft',
                backgroundColor: "red",
              });
            }
          })
        .catch((error) => {
            hideLoader();
            console.log(error);
        });
        
        searchInput.value = "";
    }

})



