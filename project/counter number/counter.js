// set initial
let count=0;


//select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function(x){
        const style = x.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        
         if (count<0){
            value.style.color = "red";
        }
        else if (count>0){
            value.style.color = "green";
        }
        else{
            value.style.color = "pink";
        }

        value.textContent = count;
    });
    
});