function sConsole(event){
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phoneno").value;
    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;
    console.log(name,email,phone,date,time);
}