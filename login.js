
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
but.addEventListener("focus",(onj)=>{
    if(mail.value ===""){
       span.textContent="*please enter the field"
       span.style.color="red"
    }
    if(pass.value===""){
       span1.textContent="*please enter the field"
       span1.style.color="red"

    }
    
})
but.addEventListener("click",(obj)=>{
    let pass1 = document.getElementById("npass").value;
    let mail1=document.getElementById("mail").value;

     if(mail.value==="" || pass.value===""){
        obj.preventDefault();
    }
     let string=false;
     let num=false;
     let char=false;

    
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
            span1.textContent="*Enter the valid password"
            span1.style.color="red"
        }
    }

})



