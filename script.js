function increment() {
    
    let countE1 = document.getElementById("count");
    let currentCount = countE1.innerText;
    let updatedCount = parseInt(currentCount) + 1
    countE1.innerHTML = updatedCount;
}
    
function decrement(){
    
    let count1 = document.getElementById("count");
    let currentCount = count1.innerText;
    let updatedCount =parseInt( currentCount)-1
   count1.innerHTML = updatedCount;
}
function reset(){
   let count2 = document.getElementById("count")
   count2.innerHTML = 0;
}

