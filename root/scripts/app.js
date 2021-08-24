window.onload = toggleOtherDonationAmount();

function toggleMenu(x) {
    x.classList.toggle('collapsible--open');
    document.querySelector('.nav-bar').classList.toggle('collapsible--open');
}

function toggleOtherDonationAmount() {
    let otherDonationAmountRadioButton = document.querySelector(".other-amount-input");
    let otherDonationAmountDiv = document.querySelector(".other-amount-div");
    let otherDonationAmountInput = document.querySelector(".other-donation-amount");
    if(otherDonationAmountRadioButton.checked) {
        otherDonationAmountDiv.style.display = "none";
        otherDonationAmountInput.classList.add("other-donation-amount-open");
        document.querySelector("input[id=other_donation_amount]").focus();

    } else {
        otherDonationAmountDiv.style.display = "block";
        otherDonationAmountInput.classList.remove("other-donation-amount-open");
    }

}

document.querySelectorAll("div.donation-amount").forEach(button => button.addEventListener("click", toggleOtherDonationAmount));
