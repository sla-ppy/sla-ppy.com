document.getElementById()



function main() {
}

if( //we check wether the DOMContentLoaded event has already fired, since app() won't execute if it has
    document.readyState === "complete" ||
    (document.readyState !== "loading" &&  !document.documentElement.doScroll)
){ //if it has fired, run the callback immediately
    main();
}else{ //if not, add as event listener an wait for content to load, then fire app
    document.addEventListener("DOMContentLoaded", main);
}