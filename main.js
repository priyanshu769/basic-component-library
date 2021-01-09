const fixNav = document.querySelector(".fixed-nav");
document.addEventListener("scroll", ()=> {
    const scrollHeight = window.pageYOffset;
    const navHeight = fixNav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        console.log("randi")
        fixNav.classList.add("fix");
    } else {
        fixNav.classList.remove("fix");
    }
})