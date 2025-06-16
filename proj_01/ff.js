var a = document.querySelector(".profile h1");
var accept = document.querySelector(".accept");
var reject = document.querySelector(".profile .cancel")
console.log(a)

var flag = 0;



accept.addEventListener("click", function () {

    if (flag == 0) {
        a.innerHTML = "Aevy";
        accept.innerHTML = "Unfollow"
        flag = 1;
    }
    else {
        a.innerHTML = "Unknown"
        accept.innerHTML = "Follow"
        flag = 0;
    }


})

var con = document.querySelector(".container");
var love = document.querySelector(".container i");
var icon = document.querySelector("#likes");


con.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = 1;
    setTimeout(function () {
        love.style.opacity = 0;
            
        },500)
})




