var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");
     sidenav.style.display = "none";
        menubtn.onclick = function () {
            if (sidenav.style.display != "block") {
                sidenav.style.display = "block";
            }
            else {
                sidenav.style.display = "none";


            }
        }