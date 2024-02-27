const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach(arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    console.log(Math.floor(window.innerWidth /300));
    let clickCounter = 0;
    const imageItem =movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function() {
        cliclCounter++;
        if(imageItem -(4-clickCounter)+(4-widthRatio)>= 0) {
            movieLists[i].computedStyleMap.transform = 'translateX(${
                movieLists[i].computerStyleMap().get("transform")[0].x.value -300
            }px)';
        }else{
            movieList[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});
