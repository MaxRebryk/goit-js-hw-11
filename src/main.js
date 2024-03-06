"use strict";

import * as  httpFunc from  "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", (event) =>{
    if(searchInput.value === ""){
        alert("Search input is empty!")
    }
})