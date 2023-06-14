function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email :document.getElementById("email").value,
        phone :document.getElementById("phone no").value,
        message :document.getElementById("message").value,
    };const serviceID = "service_p6o30sr";
    const templateID ="template_epmwjtc"
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("name").value= "";
            document.getElementById("email").value= "";
            document.getElementById("phone no").value= "";
            document.getElementById("message").value= "";
            console.log(res);
            alert("your message sent sucessfully");
        }
    )
    .catch(err=>console.log(err));
}
