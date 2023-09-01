const levy = document.querySelector(".boxy"),
firstImg = levy.querySelector("img")[0];
arrowIcons = document.querySelectorAll(".jam i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; //getting first img width and adding 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
       levy.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
       //if clicked icon left, reduce width value from the levy scroll left else add to it
    });
});

const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = levy.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    levy.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

levy.addEventListener("mousedown", dragStart);
levy.addEventListener("mousemove", dragging);
levy.addEventListener("mouseup", dragStop);