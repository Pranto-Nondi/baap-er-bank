document.getElementById("sumbit-btn").addEventListener("click", function () {
    const userEmailValue = document.getElementById("user-email").value;
    const userPasswordValue = document.getElementById("user-password").value;

    if (userEmailValue === "pranto.cse@gmail.com" && userPasswordValue === "pranto25") {
        window.location.href = "bank.html"
    }
    else {
        document.getElementById("user-email").value = "";
        document.getElementById("user-password").value = "";
        alert("Please proved Correct user name or password");

    }


})