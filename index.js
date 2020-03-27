

// function showImage(){
//     var secretcode = "123";
//     var input = document.getElementById("secretcode").value;
//     var img = document.getElementById("starterpack");
//     if (input === secretcode){
//         //img.style.visibility = 'visible';                                 // this quickly open the image and refreshes and the image is gone
//         //document.body.innerHTML = '<img src = "kuyatestarterpack.png">';  //this makes the site replace everything with the picture
//         //img.style.display = "block";
//     }else{
//         alert("wrong motherfucker");
//     }
// }


function showHide() {
    var secretcode = "123";
    var input = document.getElementById("secretcode").value;
    var img = document.getElementById("starterpack");
    if (input === secretcode){
        if (img.style.display == 'none') {
            img.style.display = 'block';
          }
          else {
            img.style.display = 'none';
          }
        }else{
            alert("that is wrong motherfucker");
        } 
    }