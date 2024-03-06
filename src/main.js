"use strict";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import * as  httpFunc from  "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");


searchButton.addEventListener("click", (event) =>{
    event.preventDefault();
    const searchWord =  searchInput.value;
    if(searchInput.value === ""){
        alert("Search input is empty!")
    }
    else{
        httpFunc.fetchImages(searchWord)
        .then((images) => render.renderPhoto(images))
        .catch((error) => console.log(error));
    }

})

