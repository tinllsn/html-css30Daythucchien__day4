var close__btn = document.querySelector(".close");
var right__btn = document.querySelector(".gallery__control-right");
var left__btn = document.querySelector(".gallery__control-left");

var imgs = document.querySelectorAll(".imag");
var gallery = document.querySelector(".gallery");
var img__in__gallery = document.querySelector(".gallery img");
var current__index = 0;

function show_gallery(index) {

    gallery.classList.add("show");
    //  dung de thay the hinh anh cua gallery 
    img__in__gallery.src = imgs[index].querySelector("img").src;
    if (index === 0) {
        left__btn.classList.add("hidden");
    } else {
        left__btn.classList.remove("hidden");

    }

    if (index === 7) {
        right__btn.classList.add("hidden");
    } else {
        right__btn.classList.remove("hidden");

    }

}
//  dung de lang nghe su kien 
imgs.forEach(function (element, index) {
    //  khi bi click se mo ra gallery 
    element.addEventListener("click", function () {
        current__index = index;
        show_gallery(current__index);
    })
});

//  ham dong gallery
function close() {
    gallery.classList.toggle("show");
}
//  tat khi bam vao nut tat
close__btn.onclick = function () {
    close();
}

//  ta khi bao vao phan overlay 

gallery.onclick = function (e) {
    if (e.currentTarget === e.target) {
        close();
    }

}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        gallery.classList.remove("show");
    }

    else if (e.keyCode === 38 || e.keyCode === 39) {
        if (current__index < 7) {
            current__index++;
            show_gallery(current__index);
        }
    } else if (e.keyCode === 37 || e.keyCode === 40) {
        if (current__index > 0) {
            current__index--;
            show_gallery(current__index);
        }



    }


})

right__btn.addEventListener("click", function () {
    if (current__index < 7) {
        current__index++;
        show_gallery(current__index);
    }
});

left__btn.addEventListener("click", function () {
    if (current__index > 0) {
        current__index--;
        show_gallery(current__index);
    }

    if (current__index === 0) {
        left__btn.classList.toggle("show");
    }
});