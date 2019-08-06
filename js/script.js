var styles = document.documentElement.style,
    img = document.querySelectorAll(".cont img"),
    cont = document.querySelectorAll(".cont");

function update(){
    styles.setProperty("--ty1", `${-(img[0].height) + (cont[0].clientHeight)}px`);
    styles.setProperty("--ty2", `${-(img[1].height) + (cont[1].clientHeight)}px`);
}

for(i = 0; i < 2; i++){
    cont[i].addEventListener("mouseover", update);
}

// for(i = 0; i< 2; i++){
//     img[i].addEventListener(o)
// }
