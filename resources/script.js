// Yes/No functionality
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let noahDesc = document.getElementById('noah-info')

let fSize = window.getComputedStyle(noahDesc, null).getPropertyValue('font-size');
// let fSize = parseFloat(fonty)

function saysNo () {
    // if (fSize === '16px') {
    //     noahDesc.style.fontSize = '3rem';
    // }

    switch(fSize) {
        case '16px':
        noahDesc.style.fontSize = '2rem';

        break;
        case '32px':
        noahDesc.style.fontSize = '1rem';

        break;   
    }
    fSize = window.getComputedStyle(noahDesc, null).getPropertyValue('font-size'); 
}



noButton.addEventListener('click',saysNo);
