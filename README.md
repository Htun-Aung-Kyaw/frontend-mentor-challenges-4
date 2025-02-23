# Frontend Practise (*HTML5, CSS3, JS*)

## Layout with Flex and Playing with Position Properties

This is written in desktop first approach.

### The fun parts are:

1.
```
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
```

2.
```
.share-component{
    background-color: #49556B;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    bottom: 100px;
    right: -65px;
    width: 250px;
    color: #9DABC1;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 3px;
    font-size: .8rem;
    visibility: hidden;
}

.share-component::after{
    content: '';
    position: absolute;
    bottom: -15px;
    width: 1px;
    border-top: 15px solid #49556B;
    border-left: 10px solid white;
    border-right: 10px solid white;
}
```

Here is the project demo: [Click here](https://frontend-mentor-challenges-4-self.vercel.app/)

### Desktop View
![Project Demo](design/desktop-design.jpg)
![Project Demo](design/desktop-active-state.jpg)

### Mobile View
![Project Demo](design/mobile-design.jpg)
![Project Demo](design/mobile-active-state.jpg)
