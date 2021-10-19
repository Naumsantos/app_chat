const userName = "Naum";

document.getElementById("chat").addEventListener("submit", function(e){
  e.preventDefault();
  
  let messageDiv = document.getElementById("message");

  let messageBox = document.getElementById("messages");
  messageBox.insertAdjacentHTML("beforeend", sendMessage(userName, messageDiv.value));
  
  if(messageDiv.value == "!ola"){
    let response = "Tudo bem?";
    messageBox.insertAdjacentHTML("beforeend", sendMessage("Goku", response));
  };


  messageDiv.value = "";
});

function sendMessage(userName, message){
  return `<div>${userName}: ${message}</div>`;
}