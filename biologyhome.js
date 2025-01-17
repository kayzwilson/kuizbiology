const down = document.querySelectorAll(".down");
const first = document.querySelectorAll(".first");
const parent = document.querySelectorAll(".container1-two-section");
const close = document.querySelector(".close");
const container3 = document.querySelector(".container3");
const next = document.getElementById("next");
const back = document.getElementById("back");
const current = document.querySelector(".current");
const hidden = document.querySelector(".hidden");
down.forEach((p) => {
   p.addEventListener("click", () => {
      parent.forEach(q => q.classList.remove("new"));
     const parentDiv = p.closest(".container1-two-section");
    parentDiv.classList.add("new");
    p.classList.toggle("arrowchange");
   
   })
});

first.forEach((m) => {
   m.addEventListener("click", () => {
     const parentDev = m.closest(".container1-two-section");
    parentDev.classList.toggle("bell");
   
   
   })
});

close.addEventListener("click", () => {
    container3.style.display = "none";
});

next.addEventListener("click", () =>{
   current.style.width = "0px";
   hidden.style.width = "1600px"
});

back.addEventListener("click", () =>{
   hidden.style.width = "0px";
   current.style.width = "1300px"
})
