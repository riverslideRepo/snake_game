
let boolMenu=false;
function showMenu(){

    if(!boolMenu){
        document.querySelector("header").classList.add("open_menu");
    }else{
        document.querySelector("header").classList.remove("open_menu");
    }
    boolMenu=!boolMenu;    
    // alert(boolMenu);
}

