
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