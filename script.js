// * I declare that this code was written by me. 
// * I do not copy or allow others to copy my code. 
// * I understand that copying code is considered as plagiarism.
// * 
// * Student Name: {Kenneth Pang Yi Jie}
// * Student ID: {22011242}
// * Class: {C369-3D-E63C-A}
// * Date/Time created: Friday 04-08-2023 21:36

function initPayPalButton() {
    paypal
        .Buttons({
            style: {
                shape: "pill",
                color: "gold",
                layout: "horizontal",
                label: "pay",
                tagline: true
            },

            createOrder: function (data, actions) {
                const totalAmountElement = document.getElementById("amount");
                const totalAmountText = totalAmountElement.textContent;
                const totalAmount = parseFloat(totalAmountText.replace("Total: $", ""));
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "SGD",
                                value: totalAmount,
                            },
                        },
                    ],
                });
            },


            onApprove: function (data, actions) {
                return actions.order.capture().then(function (orderData) {
                    // Full available details
                    console.log(
                        "Capture result",
                        orderData,
                        JSON.stringify(orderData, null, 2)
                    );

                    // Show a success message within this page, for example:
                    const element = document.getElementById("paypal-button-container");
                    
                    // Or go to another URL:  actions.redirect('thank_you.html');
                    // window.location.href = "homepage.html";
                    checkPage();
                });
            },

            onError: function (err) {
                console.log(err);
            },
        })
        .render("#paypal-button-container");
}
initPayPalButton();

function checkPage(){
    if (document.URL.includes("travelPolicyPayment.html")){
        window.location.href = "congratsTravel.html";
    } else if (document.URL.includes("carPolicyPayment.html")){
        window.location.href = "congratsCar.html";
    }
}