// set initial count 
let count = 0;

//select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn")

console.log(btns)

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList

        //Making buttons work
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        
        //Adding colors to the number on the page
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "#222";
        }

        //Display value on the page
        value.textContent = count;


    })
});