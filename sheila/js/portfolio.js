function open_navbar2() {
    document.getElementById("navbar2").style.display = "block";
};

function close_navbar2() {
    document.getElementById("navbar2").style.display = "none";
};

document.getElementById("form").addEventListener("submit", function(event){
    const names = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;


    if (names != "" && mail != "" && message != "") {
        alert("Form submited successfully");
    } else {
        event.preventDefault();
        if (names === "") {
            event.preventDefault();
            document.getElementById("name").classList.add("error-border");
        } else {
            event.preventDefault();
            document.getElementById("name").classList.remove("error-border");
        }
    
        if (mail === "") {
            event.preventDefault();
            document.getElementById("mail").classList.add("error-border");
        } else {
            event.preventDefault();
            document.getElementById("mail").classList.remove("error-border");
        }
        
        if (message === "") {
            event.preventDefault();
            document.getElementById("message").classList.add("error-border");
        } else {
            event.preventDefault();
            document.getElementById("message").classList.remove("error-border");
        }
    }
});