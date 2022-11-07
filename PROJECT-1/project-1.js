function home(){
    document.getElementById("Home").style.display="block";
    document.getElementById("About").style.display="none"; 
    document.getElementById("Skills").style.display="none";
    document.getElementById("Contact").style.display="none";
}
function about(){
    document.getElementById("About").style.display="block"; 
    document.getElementById("Home").style.display="none";
    document.getElementById("Skills").style.display="none";
    document.getElementById("Contact").style.display="none";
}
function skill(){
    document.getElementById("Skills").style.display="block";
    document.getElementById("About").style.display="none";
    document.getElementById("Home").style.display="none";
    document.getElementById("Contact").style.display="none";
}
function cont(){
    document.getElementById("Contact").style.display="block";
    document.getElementById("Home").style.display="none";
    document.getElementById("About").style.display="none"; 
    document.getElementById("Skills").style.display="none";
}