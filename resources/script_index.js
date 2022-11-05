// Yes/No functionality
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let noahDesc = document.getElementById('noah-info');
let noahTitle = document.getElementById('noah-title');
let nBackGround = document.getElementById('personal-info');
let yesButt = document.getElementById('yes');
let noButt = document.getElementById('no');
let noahImage = document.getElementById('noah-image');
;

let fSize = window.getComputedStyle(noahDesc, null).getPropertyValue('font-size');
// let fSize = parseFloat(fonty)

function saysNo () {
    // if (fSize === '16px') {
    //     noahDesc.style.fontSize = '3rem';
    // }
    noahTitle.style.display = 'none';

    switch(fSize) {
        case '16px':
            noahDesc.style.fontSize = '1.25rem';
            break;
        case '20px':
            noahDesc.style.fontSize = '1.5rem';
            break;
        case '24px':
            noahDesc.style.fontSize = '2rem';
            break;
        case '32px':
            noahDesc.style.fontSize = '2.5rem';
            break;   
        case '40px':
            noahDesc.style.fontSize = '3.25rem';
            break;
        case '52px':
            noahDesc.innerHTML = ':(';
            nBackGround.style.backgroundColor = 'black'
            noahDesc.style.color = 'white'
            noButt.style.display = 'none'
            break;
    }
    fSize = window.getComputedStyle(noahDesc, null).getPropertyValue('font-size'); 
}

function saysYes () {
    noahTitle.style.display = 'none';
    noahDesc.style.fontSize = '2rem';
    noahDesc.innerHTML = ':)<br>ty';
    nBackGround.style.backgroundColor = 'white'
    noahDesc.style.color = 'black'
    noButt.style.display = 'none'
    yesButt.style.display = 'none'
}

function imageChange () {
    noahImage.src = "./resources/images/noah-2.jpg";
}

function imageChange2 () {
    noahImage.src = "./resources/images/noah-1.jpg";
}




noButton.addEventListener('click', saysNo);
yesButton.addEventListener('click', saysYes);
noahImage.addEventListener('mouseover', imageChange);
noahImage.addEventListener('mouseout', imageChange2);
