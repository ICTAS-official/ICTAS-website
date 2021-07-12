var currentActive="filter-coordinators";
function changeMemberList(n)
{
    if(n==1)
    {

        document.getElementById(currentActive).className=String(document.getElementById(currentActive).className).replace("active","");
        currentActive="filter-coordinators";
        document.getElementById(currentActive).className=document.getElementById(currentActive).className+"active";
        document.getElementById("m-coordinator").hidden=false;
        document.getElementById("m-core").hidden=true;
        document.getElementById("m-web").hidden=true;
    }
    if(n==2)
    {
        document.getElementById(currentActive).className=  String(document.getElementById(currentActive).className).replace("active","");
        currentActive="filter-core";
        document.getElementById(currentActive).className=document.getElementById(currentActive).className+" active";
        document.getElementById("m-coordinator").hidden=true;
        document.getElementById("m-core").hidden=false;
        document.getElementById("m-web").hidden=true;
    }
    if(n==3)
    {
        document.getElementById(currentActive).className=  String(document.getElementById(currentActive).className).replace("active","");
        currentActive="filter-web";
        document.getElementById(currentActive).className=document.getElementById(currentActive).className+" active";
        document.getElementById("m-coordinator").hidden=true;
        document.getElementById("m-core").hidden=true;
        document.getElementById("m-web").hidden=false;
    }
}

//Get the button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  let mybutton = document.getElementById("btn-back-to-tops");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
   
    mybutton.style.display = "block";
  } else {
   
    mybutton.style.display = "none";
  }
  mybutton.addEventListener("click", backToTop);
};

// function scrollFunction() {
 
// }



function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}