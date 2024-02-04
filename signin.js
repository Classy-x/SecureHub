let eye = document.getElementById("eye");
let pass = document.getElementById("pass");
let newpass = document.getElementById("npass");
let uname=document.getElementById("name")
let mail=document.getElementById("mail")
let message = document.getElementById("both")

eye.addEventListener("click", () => {
    if (newpass.type === "password") {
        newpass.type = "text";
        eye.className="fa-solid fa-eye"
        
    } else {
        newpass.type = "password";
        eye.className="fa-solid fa-eye-slash"
        
    }
   
});
eye.addEventListener("click",()=>{
    if(pass.value===""&&newpass.value===""){
        message.textContent=""
    }
   else if (pass.value === newpass.value) {    
        message.textContent = "*Both are Matching";
        message.style.color = "green";
        message.style.marginTop = "10px";
       
    }
    else{
        message.textContent = "*Both are Not matching";  
        message.style.color = "red";
        message.style.marginTop = "10px";
    }
})

let but=document.getElementById("log")
let span=document.getElementById("span1")
let span1=document.getElementById("span2")
let span2=document.getElementById("span3")
but.addEventListener("focus",()=>{
    if(uname.value ===""){
       span.textContent="*please enter the field"
       span.style.color="red"
    }
    if(mail.value===""){
       span1.textContent="*please enter the value"
       span1.style.color="red"
    }
    if(pass.value===""){
        span2.textContent="*please enter the field"
        span2.style.color="red"
    }
})




