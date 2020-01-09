$('#burger').on('click', function(){
  let display_menu = $("#menu-header").css('display');
    if (display_menu === 'none') {
        $("#menu-header").css('display', 'flex');
        
    }else{
        $("#menu-header").css('display', 'none');
    }
});

let sections = document.querySelectorAll(".section_responsive");
let item = document.querySelectorAll(".items");

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#accueil_responsive").style.display="none"
        for (let j = 0; j < sections.length; j++) {
        sections[j].style.display="none"    
        }
        sections[i].style.display="flex"
    }
    );
    
}