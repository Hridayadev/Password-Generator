var genBtn = document.querySelector(".genBtn");
genBtn.addEventListener("click", ()=>{
    const pwLength = Math.floor(document.querySelector(".inputNum").value);
    if (pwLength === "" || pwLength == 0) {
        document.querySelector("h3").classList.add("errorXa");
        setTimeout(()=>{
            document.querySelector("h3").classList.remove("errorXa");
        },500)
    } else {
        generatePassword(pwLength);
    }
})
function generatePassword(pwLength){
    const possibleInput = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*(_)+=][;'./,']ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for(let position =0; position<pwLength; position++){
        const randomNum = Math.floor(Math.random() *possibleInput.length);
        password+= possibleInput.substring(randomNum,randomNum+1);
    }
    document.querySelector(".inputBox").value=password;
}

var copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", () => {
    var inputBox = document.querySelector(".inputBox");
    if(inputBox.value!=""){
        inputBox.select();
        document.execCommand("copy");
        document.querySelector("h2").classList.add("show");
    
        setTimeout(() => {
            document.querySelector("h2").classList.remove("show");
        }, 500);
    }
});
