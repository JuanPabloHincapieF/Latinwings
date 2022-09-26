// Creating js folder
function route() {
  $("#busqueda").load("busqueda.html");
  $("#personalinfo").load("Profile/personalinfo.html");
  $("#dataprivacy").load("Profile/dataprivacy.html");
  $("#seguridad").load("Profile/security.html");
  $("#paymenthistory").load("Profile/paymenthistory.html");
  $("#membershipsetup").load("Profile/membership.html");
  $("#useravatar").load("webcomponents/useravatar.html");
  $("#signin").load("webcomponents/signin.html");
}
route();

validateLogin();

function entrarcuenta() {
    localStorage.setItem("userName", "wildys");
    location.reload()
  }

function validateLogin(){
    if(localStorage.getItem("userName") == "wildys"){
        document.getElementById("signin").style.display = 'none';
    } else {
        document.getElementById("useravatar").style.display = 'none';
    }
}

function signOut() {
    localStorage.removeItem("userName");
    location.href = "index.html";
  }
 