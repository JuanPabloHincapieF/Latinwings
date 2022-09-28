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
  $("#booking").load("Profile/booking.html");
}
route();

validateLogin();

function colocarOrder(){
  localStorage.setItem('booking', 'avianca')
  location.href = "profile.html";
}

function entrarcuenta() {
    localStorage.setItem("userName", "wildys");
    setTimeout(mensaje, 2800)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2800,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Inicio de sesion exitoso!'
    })
  }

  function mensaje(){
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
 