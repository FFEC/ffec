window.onload = function() {
    updateDonateLinkOnRadioButtonClick();
    setDonateLink();
}


function toggleMenu(x) {
    x.classList.toggle('collapsible--open');
    document.querySelector('.nav-bar').classList.toggle('collapsible--open');
}

function setDonateLink() {
    let donateButtons = document.getElementByClassName("donate-button-link");
    donateButtons.href="google.com";
    // for(let button in donateButtons) {
        
    //     let link = "google.com";
    //     // let link = "https://www.paypal.com/donate?business=ffec17%40gmail.com&amount=" + getDonationAmount() + "&no_recurring=0&item_name=Building+strong+foundations+for+self-sufficient+families.&currency_code=USD"
    //     button.setAttribute("href", link);
    // }

}

function getDonationAmount() {
    let value;
    let radioButtons = document.querySelectorAll(input[type="radio"]);
    for(i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked) {
            value = radioButtons[i].value;
        }
    }
    return 20;
}

function updateDonateLinkOnRadioButtonClick() {
    let radioButtons = document.querySelectorAll(input[type="radio"]);
    for (radioButton in radioButtons) {
        radioButton.addEventListener("onclick", setDonateLink)
    }
}
