const headerTop = document.getElementById("homePage-header");

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    if(window.pageYOffset > screen.height){
        // if scroll down -> show; else -> hide
        if(window.pageYOffset > prevScrollpos){ 
            headerTop.style.top = `0px`;
            headerTop.style.position = 'fixed'
        }else {
            headerTop.style.position = 'static';
            headerTop.style.top = `0px`;
        }
    }
    prevScrollpos = window.pageYOffset; // update prev scroll position 
}

function setUp () {
}

setUp();