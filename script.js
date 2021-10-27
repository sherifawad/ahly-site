
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

