let phoneIcon = document.getElementById('phone-icon');
let phoneInfo = document.getElementById('phone-info');
let phoneCard = document.getElementById('phone-card');

function showPhoneNum () {
    phoneIcon.style.display = 'none';
    phoneInfo.style.display = 'block';
}

phoneCard.addEventListener('click', showPhoneNum);

let emailIcon = document.getElementById('email-icon');
let emailInfo = document.getElementById('email-info');
let emailCard = document.getElementById('email-card');

function showemailNum () {
    emailIcon.style.display = 'none';
    emailInfo.style.display = 'block';
}

emailCard.addEventListener('click', showemailNum);