// * I declare that this code was written by me. 
// * I do not copy or allow others to copy my code. 
// * I understand that copying code is considered as plagiarism.
// * 
// * Student Name: {Kenneth Pang Yi Jie}
// * Student ID: {22011242}
// * Class: {C369-3D-E63C-A}
// * Date/Time created: Friday 04-08-2023 21:36

var isLogin = false;
var fullName = "Kenneth Pang";
var dateOfBirth = "01/01/2004";
var nricNo = "S3691214A";
var drivingLicenceIssueDate = "01/01/2020";
var mobileNo = "91234567";
var emailAddress = "ilovec369@rp.edu.sg"
var passportNo = "K1234567Z"

function singpassLogin(){
    alert("You have logged in successfully!")
    window.location.href = "homepageafterlogin.html";
    isLogin = true;
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
}

function retrieveSingpassCar() {
        document.getElementById("fullNameInput").value = fullName;
        document.getElementById("dateOfBirthInput").value = dateOfBirth;
        document.getElementById("nricNoInput").value = nricNo;
        document.getElementById("drivingLicenceIssueDateInput").value = drivingLicenceIssueDate;
        document.getElementById("mobileNoInput").value = mobileNo;
        document.getElementById("emailAddressInput").value = emailAddress;
        alert("Your details have been retrieved successfully from Singpass!");
}

function retrieveSingpassTravel() {
    document.getElementById("fullNameInput").value = fullName;
    document.getElementById("dateOfBirthInput").value = dateOfBirth;
    document.getElementById("nricNoInput").value = nricNo;
    document.getElementById("passportNoInput").value = passportNo;
    document.getElementById("mobileNoInput").value = mobileNo;
    document.getElementById("emailAddressInput").value = emailAddress;
    alert("Your details have been retrieved successfully from Singpass!");
}