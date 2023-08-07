// * I declare that this code was written by me. 
// * I do not copy or allow others to copy my code. 
// * I understand that copying code is considered as plagiarism.
// * 
// * Student Name: {Kenneth Pang Yi Jie}
// * Student ID: {22011242}
// * Class: {C369-3D-E63C-A}
// * Date/Time created: Friday 04-08-2023 21:36
var isLogin = true;

function logout() {
    alert("You have logged out successfully!");
    window.location.href = "index.html";
    isLogin = false;
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
}