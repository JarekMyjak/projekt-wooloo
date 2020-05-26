const menu = document.querySelector("#navbar");
const header = document.querySelector(".header");
const triangle = document.querySelector("#triangle");


console.log();
const styleSetup = () => {
    if (document.body.clientWidth <= 600) {
        menu.style.display = "none";
        menu.style.height = "0px";
    } else {
        menu.style.display = "flex";
        menu.style.height = "auto";
    }
    triangle.style.display = "inline"
    header.style.height = '5rem';
}
styleSetup();
window.onresize = styleSetup;



const menuClick = () => {
    if (document.body.clientWidth <= 600) {
        menu.style.display = menu.style.display === "none" ? "flex" : "none";
        menu.style.height = menu.style.height === "0px" ? "auto" : "0px";
        header.style.height = header.style.height === "5rem" ? "7rem" : "5rem";
        triangle.style.display = triangle.style.display === "none" ? "inline" : "none";
    }
}



const galleryViewer = document.querySelector('#galleryView');
const galleryViewerImage = document.querySelector('#galleryViewImg');
document.querySelectorAll(".viewable").forEach(element => {
    element.addEventListener('click', (element)=>{
        galleryViewerImage.src = element.target.src;
        galleryViewer.style.display = 'flex';
    })
});

galleryViewer.addEventListener('click' ,() => {
    galleryViewer.style.display = 'none';
});
