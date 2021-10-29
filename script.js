
document.querySelectorAll(".bottom-nav.has-list").forEach(item =>
    {
        
        item.addEventListener('click', e => {
        let ele = e.target;
        if(ele.getAttribute('type') === "button"){
            ele = e.target.parentElement;
        }
        document.querySelectorAll(".bottom-nav.has-list").forEach(el => {
            if(el != ele){
                el.classList.remove("open");
                el.querySelector(".bottom-nav__sublist-wrapper").classList.remove("open");
            }
        });
        ele.classList.toggle("open");
        ele.querySelector(".bottom-nav__sublist-wrapper").classList.toggle("open");
        // if(ele.classList.contains("open")){
        // }else{
        //     ele.classList.add("open");
        //     ele.querySelector(".bottom-nav__sublist-wrapper").classList.add("open");
        // }
    })}
);

// const slide_news_btns = document.querySelector(".slide-button");
// let news_btns_array = 
// Array.from(slide_news_btns.querySelector("button")).for

const news = document.querySelector("#slides-section");

let slides = news.getElementsByClassName('slide')


for (var i=0; i < slides.length; i++){


    slides[i].addEventListener('click', function(){
        // console.log(activeImages)
        let activeImages = news.querySelector('.active-image')

        // if (activeImages.length > 0){
        if (activeImages){
            activeImages.classList.remove('active-image')
            // activeImages[0].classList.remove('active-image')
        }
        
        let active_image = this.querySelector("img");
        let active_date = this.querySelector(".thumbnail-date");
        let active_link = this.querySelector(".thumbnail__link");
        let active_txt = active_link.querySelector(".thumnail__title");
        let feaured_slide = news.querySelector("#featrued-slide");
        let feaured_image = feaured_slide.querySelector(".featured-image");
        let feaured_date = feaured_slide.querySelector(".slide-date");
        let feaured_link = feaured_slide.querySelector(".slide-link");
        let feaured_txt = feaured_link.querySelector(".slide-text");
        active_image.classList.add('active-image');
        feaured_image.src = active_image.src;
        feaured_date.innerHTML = active_date.innerHTML;
        feaured_link.innerHTML.href = active_link.innerHTML.href;
        feaured_txt.innerHTML = active_txt.innerHTML;
    })
}


let buttonRight = news.querySelector('.slide-button__next');
let buttonLeft = news.querySelector('.slide-button__prev');

buttonLeft.addEventListener('click', function(){
    news.querySelector('.slider-wrapper__slides').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
    news.querySelector('.slider-wrapper__slides').scrollLeft += 180
})


const players_list = document.querySelector(".players-list");
const players = players_list.querySelectorAll(".player-item");
const player_size = players[0].clientWidth;
const unit = player_size / 14;
const constant = unit * 2;
let tx = (-constant);
// players_list.style.transform = "translateX(" + tx + ")px";
// players_list.style.transform = "translateX(" + (-player_size *  4) + ")px";
// players[4].style.transform = "translateX(" + ((players_list.clientWidth / 2) - (player_size / 2)) + ")px";

let sliderWrapper = document.querySelector(".slides-container");
let slider = document.querySelector(".players-list");
let cloneWidht;
let sliderWidth;
let clones = [];
let disableScroll = false;
let scrollPos;
let items = [...document.querySelectorAll(".player-item")];
let startfragment = document.createDocumentFragment();
let lastfragment = document.createDocumentFragment();
for (let index = 0; index < items.length; index++) {
    if(index === 0 || index === 1 || index === 2){
        let clone = items[index].cloneNode(true);
        clone.classList.remove("active-player");
        clone.classList.add("clone");
        lastfragment.appendChild(clone);
    }
    else if(index === items.length -1 || index === items.length - 2 || index === items.length - 3){
        let clone = items[index].cloneNode(true);
        clone.classList.remove("active-player");
        clone.classList.add("clone");
        startfragment.appendChild(clone);
    }
}
slider.appendChild(lastfragment);
slider.prepend(startfragment);


// items.forEach(item => {
//     let clone = item.cloneNode(true);
//     clone.classList.add("clone");
//     fragment.appendChild(clone);
//     clones.push(clone);
// });
// slider.appendChild(fragment);

// function getClonesWidth(){
//     let width =0;
//     clones.forEach(clone => {
//         width += clone.offsetWidth;
//     });
//     return width;
// }

let itemss = document.querySelectorAll(".player-item");
let item_sizee = items[0].clientWidth;

function scrollToActivePlayer(item_class){
    let items = [...document.querySelectorAll(item_class)];
    let activeItem = document.querySelector(".active-player");
    let index = items.indexOf(activeItem);
    let item_size = activeItem.clientWidth;
    let con = document.querySelector(".slides-container");
    // return [((index * item_size) - (con.clientWidth / 2) + (item_size / 2)), activeItem]
    return [((index * item_size) - (con.clientWidth / 2) + (item_size * .5)), activeItem]
};

document.querySelector(".slides-container").scrollTo({
    top: 0,
    left: scrollToActivePlayer(".player-item")[0],
    behavior: 'smooth'
});

const featuredPlayer = document.querySelector("#featured-player");

const translateTo = function (e, right, container_class, item_class){
    let container = document.querySelector(container_class);
    let items = [...document.querySelectorAll(item_class)];

    let output = scrollToActivePlayer(item_class);
    let activeItem = output[1];
    let item_size = activeItem.clientWidth;
    let index = items.indexOf(activeItem);

    e.preventDefault();
    if(right){
        if(index >= items.length -4){
            items[items.length -4].classList.remove("active-player");
            items[items.length -3].classList.remove("active-player");
            items[items.length -2].classList.remove("active-player");
            items[3].classList.add("active-player");
            container.scrollTo({
                top: 0,
                left: scrollToActivePlayer(item_class)[0],
                behavior: 'auto'
                
            });

        }else{
            container.scrollTo({
                top: 0,
                left: ((index * item_size) - (container.clientWidth / 2) + (item_size * 1.5 )),
                behavior: 'smooth'
                
            });
    
            activeItem.classList.remove("active-player");
            items[index + 1].classList.add("active-player");
            // activeItem.nextElementSibling.classList.add("active-player");
        }

    }
    else{

        if(index <= 3){
            items[4].classList.remove("active-player");
            items[3].classList.remove("active-player");
            items[2].classList.remove("active-player");
            items[items.length -4].classList.add("active-player");
            container.scrollTo({
                top: 0,
                left: scrollToActivePlayer(item_class)[0],
                behavior: 'auto'
                
            });

        }else{

            container.scrollTo({
                top: 0,
                left: (((index) * item_size) - (container.clientWidth / 2) - (item_size * .5 )),
                behavior: 'smooth'
                
            });

            activeItem.classList.remove("active-player");
            items[index - 1].classList.add("active-player");
        }
    }
    featuredPlayer.querySelector(".featured-player__link").src = container.querySelector(".active-player .player__link").src;
    featuredPlayer.querySelector(".featured-player__name").innerHTML = container.querySelector(".active-player .player__name").innerHTML;
    featuredPlayer.querySelector(".featured-player__position").innerHTML = container.querySelector(".active-player .player__position").innerHTML;
}

document.querySelector("#slide-players-next").addEventListener("click", e => translateTo(e, true, ".slides-container", ".player-item"));
document.querySelector("#slide-players-prev").addEventListener("click", e => translateTo(e, false, ".slides-container", ".player-item"));