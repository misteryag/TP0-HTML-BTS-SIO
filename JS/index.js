const logo = document.getElementById("logo");
const menu = document.getElementById("menu");

const menuOpening = [
    { transform: "translateY(-100%)"},
    { transform: "translateY(0)"},
];

const menuClosing = [
    { transform: "translateY(0)"},
    { transform: "translateY(-100%)"},
];

const menuTiming = {
    duration: 150,
    iterations: 1,
};

/* knowing that the timeout can take make more time than the one indicated, i chose to make it shorter */
const closing = () => {
    menu.animate(menuClosing, menuTiming);

    setTimeout(() => {
        menu.style.display = 'none';
    },130);
};
    
logo.addEventListener("click", () => {
    if (window.screen.width < 470) {
        if (menu.style.display !== 'none'){
           closing();
        } else {
            menu.style.display = 'flex';
            menu.animate(menuOpening, menuTiming);
        }
    }
});

document.addEventListener("click", (event) => {
    if (!menu.style.display !== 'none' && !logo.contains(event.target)) {
        closing();
    }
});

addEventListener("resize", () =>{
    if (window.screen.width > 470) {
        menu.style.display = 'none';
    }
});