function readMore() {
  toggle("readMore",false);
}

function leftMenuToggle(){
  const id = document.getElementById("left_menu_toggle");
  id.classList.toggle("left_menu_toggle");
  const id2 = document.getElementById("main_container");
  id2.classList.toggle("main_container_toggle");
}

function toggle(id,more,id2){
  const elementId = document.getElementById(id);
  elementId.classList.toggle("active");

  if(more === true){
    const id = document.getElementById(id2);
    id.classList.toggle("active");
  }
}