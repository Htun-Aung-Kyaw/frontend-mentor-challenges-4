console.log("This is Sharebtn Handler");

const shareBtn = document.querySelector(".share-btn");
const hideBtn = document.querySelector(".hide");

const shareComponent = document.querySelector(".share-component");

shareBtn.addEventListener("click", (e)=>{
    if(window.innerWidth<=1200)
    {
        hideBtn.classList.add("show");
        hideBtn.style.margin = 0;

        hideBtn.addEventListener("click",()=>{
            hideBtn.classList.remove("show");
            shareComponent.classList.remove("visible");
        })
    }
    shareComponent.classList.toggle("visible");
})