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

function popUpLoginToggle(id,id2,id3,id4){
  const id_1 = document.getElementById(id);
  const id_2 = document.getElementById(id2);
  const id_3 = document.getElementById(id3);
  const id_4 = document.getElementById(id4);

  id_1.classList.add("active");
  id_3.classList.add("d-none");
  id_2.classList.remove("active");
  id_4.classList.remove("d-none");
}

$(document).ready(function(){
  $("#changeInfo").click(function(){
    $("#changeInfoInput").slideToggle();
  })
})