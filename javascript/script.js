var stars = document.getElementById('stars');
var moon = document.getElementById('moon');
var mountainBhnd = document.getElementById('mountain_behind');
var mountainFrnt = document.getElementById('mountain_front');
var myName = document.getElementById('name');



window.addEventListener('scroll', () => {
    let value = window.scrollY;
    myName.style.marginRight = value + 'px';
    moon.style.top = (value * 1) * 0.45  + 'px';
})

var hero = gsap.timeline({
  scrollTrigger: {
    trigger: "#pageWrap",
    pin:true,
    start: "top top",
    end: "+=800",
  }
});

