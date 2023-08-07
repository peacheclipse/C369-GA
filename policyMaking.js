// * I declare that this code was written by me. 
// * I do not copy or allow others to copy my code. 
// * I understand that copying code is considered as plagiarism.
// * 
// * Student Name: {Kenneth Pang Yi Jie}
// * Student ID: {22011242}
// * Class: {C369-3D-E63C-A}
// * Date/Time created: Friday 04-08-2023 21:36
function carPolicySaveDetails() {
    var vehicleBrand = document.getElementById("vehicleBrandInput").value;
    var vehicleModel = document.getElementById("vehicleModelInput").value;
    var dateOfRegistration = document.getElementById("dateOfRegistrationInput").value;
    var carRegistrationNo = document.getElementById("carRegistrationNoInput").value;
    var startDate = document.getElementById("startDateInput").value;
    if (vehicleBrand.length == 0 || vehicleModel.length == 0 || dateOfRegistration.length == 0 || carRegistrationNo.length == 0 || startDate.length == 0) {
        alert("Please ensure all the fields are filled in!");
    } else {
        localStorage.setItem("vehicleBrand", vehicleBrand);
        localStorage.setItem("vehicleModel", vehicleModel);
        localStorage.setItem("dateOfRegistration", dateOfRegistration);
        localStorage.setItem("carRegistrationNo", carRegistrationNo);
        localStorage.setItem("startDate", startDate);
        window.location.href = "carPolicyKYC.html";
    }

}

function travelPolicySaveDetails() {
    var destination = document.getElementById("destinationInput").value;
    var startDate = document.getElementById("startDateInput").value;
    var endDate = document.getElementById("endDateInput").value;
    if (destination.length == 0 || startDate.length == 0 || endDate.length == 0) {
        alert("Please ensure all the fields are filled in!");
    } else {
        localStorage.setItem("destination", destination);
        localStorage.setItem("startDate", startDate);
        localStorage.setItem("endDate", endDate);
        var typeOfCover = document.querySelector('input[name="covertype"]:checked').value;
        localStorage.setItem("typeOfCover", typeOfCover);
        window.location.href = "travelPolicyKYC.html";
    }
}

function carPolicySaveKYCDetails() {
    var fullName = document.getElementById("fullNameInput").value;
    var dateOfBirth = document.getElementById("dateOfBirthInput").value;
    var nricNo = document.getElementById("nricNoInput").value;
    var drivingLicenceIssueDate = document.getElementById("drivingLicenceIssueDateInput").value;
    var mobileNo = document.getElementById("mobileNoInput").value;
    var emailAddress = document.getElementById("emailAddressInput").value;
    if (fullName.length == 0 || dateOfBirth.length == 0 || nricNo.length == 0 || drivingLicenceIssueDate.length == 0 || mobileNo.length == 0 || emailAddress.length == 0) {
        alert("Please ensure all the fields are filled in!");
    } else {
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("dateOfBirth", dateOfBirth);
        localStorage.setItem("nricNo", nricNo);
        localStorage.setItem("drivingLicenceIssueDate", drivingLicenceIssueDate);
        localStorage.setItem("mobileNo", mobileNo);
        localStorage.setItem("emailAddress", emailAddress);

        window.location.href = "carPolicyPayment.html";
    }
}

function travelPolicySaveKYCDetails() {
    var fullName = document.getElementById("fullNameInput").value;
    var dateOfBirth = document.getElementById("dateOfBirthInput").value;
    var nricNo = document.getElementById("nricNoInput").value;
    var passportNo = document.getElementById("passportNoInput").value;
    var mobileNo = document.getElementById("mobileNoInput").value;
    var emailAddress = document.getElementById("emailAddressInput").value;
    if (fullName.length == 0 || dateOfBirth.length == 0 || nricNo.length == 0 || passportNo.length == 0 || mobileNo.length == 0 || emailAddress.length == 0) {
        alert("Please ensure all the fields are filled in!");
    } else {
        localStorage.setItem("fullName", JSON.stringify(fullName));
        localStorage.setItem("dateOfBirth", JSON.stringify(dateOfBirth));
        localStorage.setItem("nricNo", JSON.stringify(nricNo));
        localStorage.setItem("passportNo", JSON.stringify(passportNo));
        localStorage.setItem("mobileNo", JSON.stringify(mobileNo));
        localStorage.setItem("emailAddress", JSON.stringify(emailAddress));

        window.location.href = "travelPolicyPayment.html";
    }
}

function loadTravelDetails() {
    document.getElementById("destination").innerHTML = "Destination: " + localStorage.getItem("destination");
    document.getElementById("startDate").innerHTML = "Start Date: " + localStorage.getItem("startDate");
    document.getElementById("endDate").innerHTML = "End Date: " + localStorage.getItem("endDate");
    document.getElementById("typeOfCover").innerHTML = "Type of Cover: " + localStorage.getItem("typeOfCover").toUpperCase() + " Trip";
}

function loadCarDetails() {
    document.getElementById("vehicleBrand").innerHTML = "Vehicle Brand: " + localStorage.getItem("vehicleBrand");
    document.getElementById("vehicleModel").innerHTML = "Vehicle Model: " + localStorage.getItem("vehicleModel");
    document.getElementById("dateOfRegistration").innerHTML = "Date of Registration: " + localStorage.getItem("dateOfRegistration");
    document.getElementById("carRegistrationNo").innerHTML = "Car Registration No: " + localStorage.getItem("carRegistrationNo");
    document.getElementById("startDate").innerHTML = "Start Date: " + localStorage.getItem("startDate");
}

function generatePolicyNo() {
    var result = '';
    var length = 8;
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("policyNo").innerHTML = "Policy No: EC" + result;
}

function printPage() {
    alert("Pretend that this is an actual printer page.");
}