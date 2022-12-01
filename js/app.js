

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: "2000",
    delay: "400",
    reset: true,
})

sr.reveal(".hero-title")
sr.reveal(".hero-subtitle", {delay: 1000})
sr.reveal(".earth-img",  {delay: 1000, origin: 'bottom', interval: 100, distance:"40px"})
sr.reveal(".img-rocket", {delay: 2, origin: 'right', interval: 1, distance:"90px"})
sr.reveal(".top-info-title", {delay: 500, origin: 'bottom', interval: 100, distance:"90px"})
sr.reveal(".info-table", {delay: 500, origin: 'bottom', interval: 500, distance:"90px"})
sr.reveal(".bottom-info-text", {delay: 400, origin: 'left', interval: 500, distance:"90px"})


let BlackDoorEl = document.querySelector(".black-door")
let MobileMenuIconEl = document.querySelector(".fa-bars")
let MobileMenuEl = document.querySelector(".mobile-menu")

MobileMenuIconEl.addEventListener("click", function(){
    MobileMenuEl.style.display = "block"
    BlackDoorEl.style.display = "block"
})
BlackDoorEl.addEventListener("click",function(){
    MobileMenuEl.style.display = "none"
    BlackDoorEl.style.display = "none"
})