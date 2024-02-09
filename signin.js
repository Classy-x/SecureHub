let eye = document.getElementById("eye");
let pass = document.getElementById("pass");
let newpass = document.getElementById("npass");
let uname=document.getElementById("name")
let mail=document.getElementById("mail")
let message = document.getElementById("both")
let but=document.getElementById("log")
but.addEventListener("click",(obj)=>{
    if(pass.value===""||newpass.value===""||uname.value===""||mail.value===""){
        obj.preventDefault()
        
    }   
    
})


but.addEventListener("click",(obj)=>{
    let string=false;
    let num=false;
    let char=false;

    let pass1 = document.getElementById("pass").value;
    let npass1 = document.getElementById("npass").value;
    if(pass1!==npass1){
        obj.preventDefault(); 
    }
   for(i=0;i<pass1.length;i++){
       if (isNaN(pass1[i])) {
           
           if (/[^a-zA-Z0-9]/.test(pass1[i])) {
               char = true;
           } else {
               string = true;
           }
       } else {
           num = true;
       }
       
   }
   if(string&&num&&char){
   }else{
      if(pass1!==""){
        obj.preventDefault()
        span2.textContent="*Enter the valid password"
        span2.style.color="red"
      }
   }
   
})

mail.addEventListener("focusin", () => {
    let u1 = document.getElementById("name").value;
    let sp = document.getElementById("span1");
    let alpha =false;
    
    for(i=0;i<u1.length;i++){
       if(!(u1[i]>='a')&&(u1[i]<='z')&&(u1[i]>='A')&&(u1[i]<='Z')){
         alpha=true;break;
       }
    }
    if(alpha){
        sp.textContent="Only alphabets are allowed"
    }
    

})
eye.addEventListener("click", () => {
    if (newpass.type === "password") {
        newpass.type = "text";
        eye.className="fa-solid fa-eye"
        
    } else {
        newpass.type = "password";
        eye.className="fa-solid fa-eye-slash"
        
    }
   
})
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


let span=document.getElementById("span1")
let span1=document.getElementById("span2")
let span2=document.getElementById("span3")
but.addEventListener("focus",()=>{
    if(uname.value ===""){
       span.textContent="*please enter the field"
       span.style.color="red"
    }
    
    if(mail.value===""){
       span1.textContent="*please enter the field"
       span1.style.color="red"
    }
    if(pass.value===""){
        span2.textContent="*please enter the field"
        span2.style.color="red"
    }
})




