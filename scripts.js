function generateNumber(){
    
    const min = Math.ceil(document.querySelector(".input2").value)
    const max = Math.floor(document.querySelector(".input1").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result)

}