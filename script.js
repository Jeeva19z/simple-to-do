
document.querySelector(".add").addEventListener("click",function(){

  let InputValue = document.getElementById("text").value;
  let OutputValue = document.getElementById("output");


  var newLiTag=document.createElement("li");
  newLiTag.textContent=InputValue;
  OutputValue.appendChild(newLiTag)



})

// let OutputValueOuside = document.querySelectorAll("#output li");

let OutputValueOuside = document.querySelectorAll("#output li");

let selectelement = OutputValueOuside[1];

console.log(selectelement)
// alert("FDs