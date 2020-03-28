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
        var secretcode = "Synergy";
        var input = document.getElementById("firstname").value;
        var msg = document.getElementById("day3message");
        if (input === secretcode){
                msg.style.visibility = 'visible';
                msg.style.display = 'block';
            }else{
                alert("Wrong hoe");
            } 
        }


    function giveHint() {
        var hint = document.getElementById("hint");
        if (hint.style.display === "none") {
        hint.style.display = "block";
            }else{
                hint.style.display = "none";
            }
        }

        function giveHint2() {
            var hint = document.getElementById("hint2");
            if (hint.style.display === "none") {
            hint.style.display = "block";
                }else{
                    hint.style.display = "none";
                }
            }

        function showIntro() {
            var secretcode = "Ilovemyading";
            var input = document.getElementById("secretcode2").value;
            var text = document.getElementById("intro");
            if (input === secretcode){
                    text.style.display = 'block';
                    text.style.visibility = 'visible';
                    document.body.style.backgroundColor = "black";

                }else{
                    alert("I believe in you! You can figure this one out.");
                } 
            }

        
            function openList() {
                var hint = document.getElementById("list");
                if (hint.style.display === "none") {
                hint.style.display = "block";
                    }else{
                        hint.style.display = "none";
                    }
                }