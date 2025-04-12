function handleRegister(event) {
    event.preventDefault(); 
    
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("password").value = "";


    window.open("https://www.codecademy.com/", "_blank");
  }

  function handleLogin(event) {
    event.preventDefault(); 

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    window.open("https://www.codecademy.com/", "_blank");
  }
  