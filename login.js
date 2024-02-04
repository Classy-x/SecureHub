
let pass = document.getElementById("npass");
let eye=document.getElementById("eye")
let mail=document.getElementById("mail")
eye.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        eye.className="fa-solid fa-eye";
        
    } else {
        pass.type = "password";
        eye.className="fa-solid fa-eye-slash";
    }
   
});

let but=document.getElementById("log")
let span=document.getElementById("span1")
let span1=document.getElementById("span2")
but.addEventListener("focus",()=>{
    if(mail.value ===""){
       span.textContent="*please enter the field"
       span.style.color="red"
    }
    if(pass.value===""){
       span1.textContent="*please enter the value"
       span1.style.color="red"
    }
    
})

