

function showImage(){
    var secretcode = "123";
    var input = document.getElementById("secretcode");
    var img = document.getElementById("starterpack");

    if (input === secretcode){
        img.style.visibility = 'visible';
    }else{
        alert("wrong motherfucker");
    }


}