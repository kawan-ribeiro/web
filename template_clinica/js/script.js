/* ---------------------------------------------------------- header ---------------------------------------------------- */
let menu = document.getElementById("menu")

menu.addEventListener ('click', function () {
    let nav_menu = document.getElementById ("nav-menu");
    let header = document.getElementById ("header")
    
    if (nav_menu.style.display == "none") {
        nav_menu.style.display = "block"
        header.style.paddingBottom = "0"
    }

    else {
        nav_menu.style.display = "none";
        header.style.paddingBottom = "10px"
        
    }
});

window.addEventListener ("resize", function () {
    let width = window.innerWidth;
    let nav_menu = document.getElementById ("nav-menu");
    let header = document.getElementById ("header")
 
    if (width > 865) {
        nav_menu.style.display = "none"
        header.style.paddingBottom = "20px"
    }
});

/* ---------------------------------------------------------- main ---------------------------------------------------- */