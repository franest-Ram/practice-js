let push= document.getElementById("push");
let container = document.getElementById("container-message");
let message=document.getElementById("message");

push.addEventListener('click',(e)=>{
container.innerHTML+=`<p> ${message.value} </p>`;
message.value="";
})