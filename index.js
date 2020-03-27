//-----FIRST ATTEMPT-----//
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


function showImage() {
    var secretcode = "wrong motherfucker";
    var input = document.getElementById("secretcode").value;
    var img = document.getElementById("starterpack");
    if (input === secretcode){
            img.style.display = 'block';
            img.style.visibility = 'visible';
        }else{
            alert("Secret Code is wrong motherfucker");
        } 
    }


    function showMessage() {
        var secretcode = "Joshua";
        var input = document.getElementById("firstname").value;
        var msg = document.getElementById("day3message");
        if (input === secretcode){
                msg.style.visibility = 'visible';
            }else{
                alert("Write your first name");
            } 
        }