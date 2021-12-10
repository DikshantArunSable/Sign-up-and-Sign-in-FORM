function oload(){
  document.getElementById('footer').innerHTML+='<h6>Made With ❤️ By :</h6>&nbsp;<h5>Dikshant Sable</h5>';
}


function popup1() {

  var x = document.getElementById("signin-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function popup2() {


  var x = document.getElementById("signup-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function signinbt(){
  var name=document.getElementById('username1').value;

  if (name!=0) {

  alert('Welcome:' +name);
  }else{
    alert('Please Fill Up Your Details First...')
  }
}

function signupbt(){

  var name=document.getElementById('username2').value;
  
  if (name!=0) {

  alert('Congratulations:' +name+'\nYou have Registered');
  }else{
    alert('Please Fill Up Your Details First...')
  }
}