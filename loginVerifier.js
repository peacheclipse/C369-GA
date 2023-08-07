// * I declare that this code was written by me. 
// * I do not copy or allow others to copy my code. 
// * I understand that copying code is considered as plagiarism.
// * 
// * Student Name: {Kenneth Pang Yi Jie}
// * Student ID: {22011242}
// * Class: {C369-3D-E63C-A}
// * Date/Time created: Friday 04-08-2023 21:36
var defaultEmail = "ilovec369@rp.edu.sg";
var defaultPassword = "ilovec369";
var signUpEmail = "";
var signUpPassword = "";
var isLogin = false;

function loginVerifier() {
    var email = document.getElementById("emailinput").value;
    var password = document.getElementById("passwordinput").value;
    var localSignUpEmail = localStorage.getItem("signUpEmail");
    var localSignUpPassword = localStorage.getItem("signUpPassword");

    if (email == defaultEmail && password == defaultPassword) {
        alert("Login Successful!");
        window.location.href = "homepageafterlogin.html";
        isLogin = true;
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
    } else if (email == localSignUpEmail && password == localSignUpPassword) {
        alert("Login Successful!");
        window.location.href = "homepageafterlogin.html";
        isLogin = true;
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
    } else if (email.length == 0 || password.length == 0) {
        alert("Please ensure all the fields are filled in!");
    } else {
        alert("Login Failed! Please check if your email and password is correct.");
        isLogin = false;
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
    }
}

function emailSignUp() {
    signUpEmail = document.getElementById("emailinput").value;
    signUpPassword = document.getElementById("passwordinput").value;
    if (signUpEmail.length == 0 || signUpPassword.length == 0) {
        alert("Please ensure all the fields are filled in!");
    } else {
        localStorage.setItem("signUpEmail", signUpEmail);
        localStorage.setItem("signUpPassword", signUpPassword);
        loginVerifier();
    }
}

function checkLoginCar() {
    var localIsLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (localIsLogin == true) {
        window.location.href = "CarInsuranceLoggedIn.html";
    } else {
        window.location.href = "CarInsurance.html";
    }
}

function checkLoginTravel() {
    var localIsLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (localIsLogin == true) {
        window.location.href = "TravelInsuranceLoggedIn.html";
    } else {
        window.location.href = "TravelInsurance.html";
    }
}

function checkLoginContact() {
    var localIsLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (localIsLogin == true) {
        window.location.href = "contactusLoggedIn.html";
    } else {
        window.location.href = "contactus.html";
    }
}

function checkLoginCarPurchase() {
    var localIsLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (localIsLogin == true) {
        window.location.href = "CarInsurancePurchaseLoggedIn.html";
    } else {
        window.location.href = "login.html";
    }
}

function checkLoginTravelPurchase() {
    var localIsLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (localIsLogin == true) {
        window.location.href = "TravelInsurancePurchaseLoggedIn.html";
    } else {
        window.location.href = "login.html";
    }
}