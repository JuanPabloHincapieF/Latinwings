route();

function route() {
  $("#personalinfo").load("Profile/personalinfo.html");
  $("#dataprivacy").load("Profile/dataprivacy.html");
  $("#seguridad").load("Profile/security.html");
  $("#paymenthistory").load("Profile/paymenthistory.html");
  $("#membershipsetup").load("Profile/membership.html");
  $("#userlogin").load("webcomponents/header.html");
}