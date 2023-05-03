
async function getMenu(){
}
function endMenu(){
  console.log("You have reached the End of the Menu :)");
}
function textError(){
    console.log("Error loading the API data");
}
(async function displayMenu(){
try{
  await getMenu();
  endMenu();    
}
catch{
  textError();
  console.log(typeof(await getMenu()));
}
}());//self-invoke function  

const menuIcons=document.querySelectorAll(".menu__icon");
menuIcons.forEach(menuIcon=>{
menuIcon.addEventListener("click",()=>{
  window.location.href="../shop.html";
})
});